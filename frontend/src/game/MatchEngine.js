/**
 * MatchEngine.js
 * Owns the authoritative game state: score, time, phase, set-piece logic.
 *
 * Emits events via a simple EventEmitter pattern so UIHandler and App.js
 * can react without tight coupling.
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PITCH_W, PITCH_D, GOAL_W, GOAL_H } from './SceneManager.js';

// ── Game phases ───────────────────────────────────────────────────────────────
export const PHASE = {
  KICKOFF:    'kickoff',
  IN_PLAY:    'in_play',
  GOAL:       'goal',
  HALF_TIME:  'half_time',
  FULL_TIME:  'full_time',
  THROW_IN:   'throw_in',
  GOAL_KICK:  'goal_kick',
  CORNER:     'corner',
  FREE_KICK:  'free_kick',
};

// ── How long each phase lasts before auto-advancing ──────────────────────────
const PHASE_DURATIONS = {
  [PHASE.GOAL]:      3.5,
  [PHASE.HALF_TIME]: 4.0,
  [PHASE.THROW_IN]:  2.0,
  [PHASE.GOAL_KICK]: 2.5,
  [PHASE.CORNER]:    2.5,
  [PHASE.FREE_KICK]: 2.5,
};

// Match length in real seconds (90 in-game minutes ÷ speedup factor)
const HALF_LENGTH_SECS = 180;   // 3 real minutes per half

export class MatchEngine {
  /**
   * @param {object} opts
   * @param {CANNON.Body} opts.ballBody
   * @param {Player[]} opts.homePlayers
   * @param {Player[]} opts.awayPlayers
   * @param {object}   opts.homeTeam     – team JSON data { name, primaryColor … }
   * @param {object}   opts.awayTeam
   */
  constructor({ ballBody, homePlayers, awayPlayers, homeTeam, awayTeam }) {
    this.ballBody    = ballBody;
    this.homePlayers = homePlayers;
    this.awayPlayers = awayPlayers;
    this.homeTeam    = homeTeam;
    this.awayTeam    = awayTeam;

    this.score      = { home: 0, away: 0 };
    this.phase      = PHASE.KICKOFF;
    this.phaseTimer = 0;
    this.half       = 1;
    this.matchTime  = 0;   // real seconds elapsed this half
    this.paused     = false;

    this._lastTouchHome = false;  // who last touched the ball
    this._handlers  = {};         // event → [fn, ...]

    this._setupPhysicsCallbacks();
  }

  // ─── Event emitter ─────────────────────────────────────────────────────────
  on(event, fn)   { (this._handlers[event] ??= []).push(fn); }
  off(event, fn)  { this._handlers[event] = (this._handlers[event] ?? []).filter(f => f !== fn); }
  _emit(event, data) { (this._handlers[event] ?? []).forEach(fn => fn(data)); }

  // ─── Update ────────────────────────────────────────────────────────────────
  update(dt) {
    if (this.paused) return;

    if (this.phase === PHASE.IN_PLAY || this.phase === PHASE.KICKOFF) {
      this.matchTime += dt;
      if (this.matchTime >= HALF_LENGTH_SECS) {
        this._endHalf();
        return;
      }
    }

    if (PHASE_DURATIONS[this.phase]) {
      this.phaseTimer += dt;
      if (this.phaseTimer >= PHASE_DURATIONS[this.phase]) {
        this._advancePhase();
      }
      return;
    }

    // Continuous checks during live play
    if (this.phase === PHASE.IN_PLAY) {
      this._checkBallOut();
      this._checkGoal();
      this._checkLastTouch();
    }
  }

  // ─── Physics callbacks ─────────────────────────────────────────────────────
  _setupPhysicsCallbacks() {
    // Track last team to touch ball (crude proximity check in update)
  }

  _checkLastTouch() {
    const ballPos = this.ballBody.position;
    let homeDist  = Infinity;
    let awayDist  = Infinity;

    this.homePlayers.forEach(p => {
      const d = p.body.position.distanceTo(ballPos);
      if (d < homeDist) homeDist = d;
    });
    this.awayPlayers.forEach(p => {
      const d = p.body.position.distanceTo(ballPos);
      if (d < awayDist) awayDist = d;
    });

    if (homeDist < 1.5 && homeDist < awayDist) this._lastTouchHome = true;
    if (awayDist < 1.5 && awayDist < homeDist) this._lastTouchHome = false;
  }

  _checkGoal() {
    const b = this.ballBody.position;
    const hw = PITCH_W / 2;

    // Goal on home side (x < -hw): away team scores
    if (b.x < -hw && Math.abs(b.z) <= GOAL_W / 2 && b.y <= GOAL_H) {
      this.score.away++;
      this._triggerGoal('away');
      return;
    }
    // Goal on away side (x > hw): home team scores
    if (b.x > hw && Math.abs(b.z) <= GOAL_W / 2 && b.y <= GOAL_H) {
      this.score.home++;
      this._triggerGoal('home');
    }
  }

  _checkBallOut() {
    const b  = this.ballBody.position;
    const hw = PITCH_W / 2;
    const hd = PITCH_D / 2;

    if (Math.abs(b.x) > hw + 0.5) {
      // Past goal line but no goal → goal kick or corner
      const isHomeSide = b.x < 0;
      const corner     = this._lastTouchHome === isHomeSide;
      this._setPhase(corner ? PHASE.CORNER : PHASE.GOAL_KICK, { side: isHomeSide ? 'home' : 'away', z: b.z });
    } else if (Math.abs(b.z) > hd + 0.5) {
      this._setPhase(PHASE.THROW_IN, { side: b.z > 0 ? 'right' : 'left', x: b.x });
    }
  }

  // ─── Goal event ────────────────────────────────────────────────────────────
  _triggerGoal(scoringTeam) {
    const teamName = scoringTeam === 'home' ? this.homeTeam.name : this.awayTeam.name;
    this._setPhase(PHASE.GOAL, { scoringTeam, teamName, score: { ...this.score } });

    // Celebrate relevant players
    const celebrators = scoringTeam === 'home' ? this.homePlayers : this.awayPlayers;
    celebrators.forEach(p => p.celebrate?.());
  }

  // ─── Phase management ──────────────────────────────────────────────────────
  _setPhase(phase, data = {}) {
    this.phase      = phase;
    this.phaseTimer = 0;
    this._emit(phase, { phase, ...data, score: { ...this.score }, half: this.half });

    // Place ball for set pieces
    this._placeBallForPhase(phase, data);
  }

  _advancePhase() {
    this.phaseTimer = 0;
    if (this.phase === PHASE.HALF_TIME) {
      this.half       = 2;
      this.matchTime  = 0;
    }
    const next = this.phase === PHASE.GOAL ? PHASE.KICKOFF : PHASE.IN_PLAY;
    this.phase = next;
    this._emit('phase_change', { phase: next });
    this._resetBall();
  }

  _endHalf() {
    if (this.half === 1) {
      this._setPhase(PHASE.HALF_TIME);
    } else {
      this.phase = PHASE.FULL_TIME;
      this._emit(PHASE.FULL_TIME, { score: { ...this.score }, winner: this._winner() });
    }
  }

  _winner() {
    if (this.score.home > this.score.away) return this.homeTeam.name;
    if (this.score.away > this.score.home) return this.awayTeam.name;
    return null; // draw
  }

  // ─── Ball placement ────────────────────────────────────────────────────────
  _resetBall() {
    this.ballBody.position.set(0, 1, 0);
    this.ballBody.velocity.set(0, 0, 0);
    this.ballBody.angularVelocity.set(0, 0, 0);
  }

  _placeBallForPhase(phase, data) {
    const hw = PITCH_W / 2;
    const hd = PITCH_D / 2;

    switch (phase) {
      case PHASE.GOAL:
      case PHASE.KICKOFF:
        this._resetBall();
        break;
      case PHASE.THROW_IN:
        this.ballBody.position.set(
          THREE.MathUtils.clamp(data.x ?? 0, -hw, hw),
          0.3,
          (data.side === 'right' ? hd : -hd),
        );
        this.ballBody.velocity.set(0, 0, 0);
        break;
      case PHASE.GOAL_KICK:
        this.ballBody.position.set(
          data.side === 'home' ? -hw + 5 : hw - 5,
          0.3,
          0,
        );
        this.ballBody.velocity.set(0, 0, 0);
        break;
      case PHASE.CORNER:
        this.ballBody.position.set(
          data.side === 'home' ? -hw : hw,
          0.3,
          data.z > 0 ? hd : -hd,
        );
        this.ballBody.velocity.set(0, 0, 0);
        break;
      default:
        break;
    }
  }

  // ─── Accessors ─────────────────────────────────────────────────────────────
  /** Returns elapsed game minutes (0–90). */
  get gameMinute() {
    const halfOffset = (this.half - 1) * 45;
    return Math.min(halfOffset + Math.floor((this.matchTime / HALF_LENGTH_SECS) * 45), 90);
  }

  get isLive() {
    return this.phase === PHASE.IN_PLAY || this.phase === PHASE.KICKOFF;
  }

  kickoff() {
    this.phase = PHASE.IN_PLAY;
    this._emit('phase_change', { phase: PHASE.IN_PLAY });
  }
}
