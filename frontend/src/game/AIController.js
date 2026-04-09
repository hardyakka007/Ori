/**
 * AIController.js
 * Controls the AI-managed team.  Each AI player runs a simple state machine:
 *   IDLE → CHASE → DRIBBLE → SHOOT / PASS → DEFEND → RETURN
 *
 * Decisions are recalculated on a timer controlled by DifficultyManager.
 */

import * as THREE from 'three';
import { PITCH_W, PITCH_D } from './SceneManager.js';
import { ANIM } from './Player.js';

// State labels
const STATE = {
  IDLE:    'idle',
  CHASE:   'chase',
  DEFEND:  'defend',
  RETURN:  'return',
  DRIBBLE: 'dribble',
  SHOOT:   'shoot',
  PASS:    'pass',
};

export class AIController {
  /**
   * @param {object} opts
   * @param {Player[]} opts.aiPlayers       – the AI team's Player instances
   * @param {Player[]} opts.humanPlayers    – the human team's Player instances
   * @param {CANNON.Body} opts.ballBody     – ball physics body
   * @param {DifficultyManager} opts.difficulty
   * @param {number} opts.attackDir         – +1 or -1 (x direction of attack)
   * @param {object} opts.formation         – { positions: [[x,z], ...] }
   */
  constructor({ aiPlayers, humanPlayers, ballBody, difficulty, attackDir, formation }) {
    this.aiPlayers    = aiPlayers;
    this.humanPlayers = humanPlayers;
    this.ballBody     = ballBody;
    this.difficulty   = difficulty;
    this.attackDir    = attackDir;
    this.formation    = formation;

    this._states       = aiPlayers.map(() => STATE.IDLE);
    this._decisionTimer = 0;
    this._decisionFreq  = difficulty.get('aiDecisionFrequency');
    this._reactionTimer = 0;
    this._pendingDir    = aiPlayers.map(() => null);
  }

  /** Called once per frame from MatchEngine. */
  update(dt) {
    this._decisionTimer += dt;
    this._reactionTimer += dt;

    const reactionTime = this.difficulty.get('aiReactionTime');
    const isReacting   = this._reactionTimer >= reactionTime;

    if (this._decisionTimer >= this._decisionFreq) {
      this._decisionTimer = 0;
      if (isReacting) {
        this._reactionTimer = 0;
        this._makeDecisions();
      }
    }

    this._executeDecisions(dt);
  }

  // ─── Decision making ───────────────────────────────────────────────────────
  _makeDecisions() {
    const ball = new THREE.Vector3(
      this.ballBody.position.x,
      this.ballBody.position.y,
      this.ballBody.position.z,
    );
    const goalX = this.attackDir * (PITCH_W / 2);   // the goal we're attacking

    // Find closest AI player to ball
    let closestIdx  = 0;
    let closestDist = Infinity;
    this.aiPlayers.forEach((p, i) => {
      const d = this._playerPos(p).distanceTo(ball);
      if (d < closestDist) { closestDist = d; closestIdx = i; }
    });

    this.aiPlayers.forEach((player, i) => {
      const pos        = this._playerPos(player);
      const distToBall = pos.distanceTo(ball);
      const formPos    = this._formationTarget(i);

      if (i === closestIdx) {
        // Ball carrier logic
        const distToGoal = Math.abs(pos.x - goalX);
        const shootRange  = this.difficulty.get('aiShootAccuracy') > 0.7 ? 28 : 20;

        if (distToGoal < shootRange) {
          this._states[i] = STATE.SHOOT;
        } else {
          this._states[i] = STATE.DRIBBLE;
        }
      } else {
        // Support / defend logic
        const pressing = this.difficulty.get('aiPressingIntensity');
        if (distToBall < 15 && Math.random() < pressing) {
          this._states[i] = STATE.CHASE;
        } else if (this._isDefendingHalf(pos)) {
          this._states[i] = STATE.DEFEND;
        } else {
          this._states[i] = STATE.RETURN;
        }
      }

      // Compute movement direction for this frame
      this._pendingDir[i] = this._computeDir(player, i, ball, goalX, formPos);
    });
  }

  _executeDecisions(dt) {
    const speedMult = this.difficulty.get('aiSpeedMultiplier');

    this.aiPlayers.forEach((player, i) => {
      const dir = this._pendingDir[i];
      if (!dir) return;

      // Apply the movement direction to the player
      const speed = player.maxSpeed * speedMult;
      player.body.velocity.x = dir.x * speed;
      player.body.velocity.z = dir.z * speed;
      player.body.velocity.y = Math.min(player.body.velocity.y, 0);
      player.body.position.y = Math.max(player.body.position.y, 0.38);

      // Rotate mesh
      if (dir.length() > 0.1) {
        player.meshGroup.rotation.y = Math.atan2(dir.x, dir.z);
        player._setAnim(ANIM.RUN);
      } else {
        player._setAnim(ANIM.IDLE);
      }
      player._animateMesh();
      player._syncMesh();

      // Try to shoot or pass when in range
      const ball = new THREE.Vector3(
        this.ballBody.position.x, this.ballBody.position.y, this.ballBody.position.z,
      );
      const pos = this._playerPos(player);
      const distToBall = pos.distanceTo(ball);

      if (distToBall < 1.2) {
        if (this._states[i] === STATE.SHOOT) {
          this._doShoot(player, ball);
        } else if (this._states[i] === STATE.DRIBBLE) {
          // Gentle nudge forward
          const nudge = new THREE.Vector3(this.attackDir, 0, 0).normalize();
          player.kick(this.ballBody, nudge, 0.3);
        }
      }
    });
  }

  _doShoot(player, ballPos) {
    const accuracy = this.difficulty.rollAccuracy('aiShootAccuracy');
    const goalX    = this.attackDir * (PITCH_W / 2);
    const spreadZ  = (1 - accuracy) * 5;   // wider spread = less accurate
    const targetZ  = (Math.random() - 0.5) * spreadZ;
    const target   = new THREE.Vector3(goalX, 0, targetZ);
    const dir      = target.sub(ballPos).normalize();
    player.kick(this.ballBody, dir, 0.7 + accuracy * 0.3);
  }

  // ─── Helpers ───────────────────────────────────────────────────────────────
  _computeDir(player, idx, ball, goalX, formPos) {
    const pos   = this._playerPos(player);
    const state = this._states[idx];
    let target;

    switch (state) {
      case STATE.SHOOT:
      case STATE.DRIBBLE:
      case STATE.CHASE:
        target = ball.clone();
        break;
      case STATE.DEFEND:
        // Move between ball and own goal
        target = ball.clone().lerp(new THREE.Vector3(-goalX, 0, 0), 0.6);
        break;
      case STATE.RETURN:
      default:
        target = formPos;
        break;
    }

    const dir = new THREE.Vector3().subVectors(target, pos);
    if (dir.length() < 0.5) return new THREE.Vector3(0, 0, 0);
    return dir.normalize();
  }

  _playerPos(player) {
    return new THREE.Vector3(
      player.body.position.x,
      player.body.position.y,
      player.body.position.z,
    );
  }

  _formationTarget(idx) {
    if (this.formation && this.formation.positions && this.formation.positions[idx]) {
      const [x, z] = this.formation.positions[idx];
      return new THREE.Vector3(x * this.attackDir, 0, z);
    }
    // Fallback: spread players across the pitch
    const col = idx % 4;
    const row = Math.floor(idx / 4);
    return new THREE.Vector3(
      this.attackDir * (col * 10 + 10),
      0,
      (row - 1) * 18,
    );
  }

  _isDefendingHalf(pos) {
    return pos.x * this.attackDir < 0;
  }

  /** Notify AI of lineup changes (e.g. after a substitution). */
  setPlayers(aiPlayers) {
    this.aiPlayers  = aiPlayers;
    this._states    = aiPlayers.map(() => STATE.IDLE);
    this._pendingDir = aiPlayers.map(() => null);
  }
}
