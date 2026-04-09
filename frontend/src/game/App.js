/**
 * App.js — 3D Soccer Simulation Main Entry Point
 * ================================================
 * Orchestrates:
 *  • Cannon-es physics world
 *  • SceneManager  (Three.js scene, stadium, pitch)
 *  • Player / AIController
 *  • MatchEngine   (game state, scoring, phases)
 *  • UIHandler     (HUD, overlays)
 *  • DifficultyManager
 *
 * Usage:
 *   import { SoccerGame } from './game/App.js'
 *   const game = new SoccerGame(canvasEl, containerEl, options)
 *   game.start()
 *   // later:
 *   game.dispose()
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';

import { SceneManager, PITCH_W, PITCH_D, CAM_MODES } from './SceneManager.js';
import { Player }            from './Player.js';
import { AIController }      from './AIController.js';
import { MatchEngine, PHASE } from './MatchEngine.js';
import { UIHandler }          from './UIHandler.js';
import { DifficultyManager }  from './DifficultyManager.js';

// ── Formation templates [x offset from centre, z offset] ─────────────────────
//    x is relative to attack direction (+ve = forward)
const FORMATION_433 = {
  positions: [
    // GK
    [-46, 0],
    // DEF
    [-30, -12], [-30, -4], [-30, 4], [-30, 12],
    // MID
    [-10, -10], [-10, 0], [-10, 10],
    // FWD
    [14, -16], [18, 0], [14, 16],
  ],
};

// ── Ball radius ───────────────────────────────────────────────────────────────
const BALL_R = 0.22;

export class SoccerGame {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {HTMLElement}       uiContainer – overlay container (same size as canvas)
   * @param {object}            options
   * @param {object}            options.homeTeam  – team data from players.json
   * @param {object}            options.awayTeam
   * @param {string}            options.difficulty – 'easy'|'medium'|'hard'
   * @param {Function}          options.onQuit     – called when user quits to menu
   */
  constructor(canvas, uiContainer, { homeTeam, awayTeam, difficulty = 'medium', onQuit }) {
    this.canvas       = canvas;
    this.uiContainer  = uiContainer;
    this.homeTeam     = homeTeam;
    this.awayTeam     = awayTeam;
    this.onQuit       = onQuit;

    this._rafId      = null;
    this._lastTime   = null;
    this._keys       = {};
    this._camMode    = CAM_MODES.TV;
    this._camCooldown = 0;

    // Managers
    this.difficulty = new DifficultyManager(difficulty);

    // Physics
    this.world = this._initPhysics();

    // Scene
    this.scene = new SceneManager(canvas);

    // Ball
    this.ballBody = this._createBall();
    this.ballMesh = this._createBallMesh();

    // Players
    this.homePlayers = this._spawnTeam(homeTeam, +1);
    this.awayPlayers = this._spawnTeam(awayTeam, -1);

    // Human controls the first home player
    this.controlledPlayer = this.homePlayers[9]; // striker by default (index 9 = ST in 4-3-3)

    // Away AI
    this.ai = new AIController({
      aiPlayers:    this.awayPlayers,
      humanPlayers: this.homePlayers,
      ballBody:     this.ballBody,
      difficulty:   this.difficulty,
      attackDir:    -1,
      formation:    FORMATION_433,
    });

    // Home AI — runs the same logic for teammates not controlled by the human.
    // GK (index 0) is always AI-run and never handed to the human.
    this.homeAi = new AIController({
      aiPlayers:    this._nonControlledHomePlayers(),
      humanPlayers: this.awayPlayers,
      ballBody:     this.ballBody,
      difficulty:   this.difficulty,
      attackDir:    +1,
      formation:    FORMATION_433,
    });

    // Match
    this.match = new MatchEngine({
      ballBody:    this.ballBody,
      homePlayers: this.homePlayers,
      awayPlayers: this.awayPlayers,
      homeTeam,
      awayTeam,
    });

    // UI
    this.ui = new UIHandler(uiContainer, this.match);
    this.ui.setTeamNames(homeTeam.name, awayTeam.name);
    this.ui.setDifficulty(this.difficulty.config.label);

    // Input
    this._bindInput();

    // Resize
    window.addEventListener('resize', this._onResize);
  }

  // ─── Physics ───────────────────────────────────────────────────────────────
  _initPhysics() {
    const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
    world.broadphase       = new CANNON.NaiveBroadphase();
    world.solver.iterations = 10;

    // Ground plane
    const groundBody = new CANNON.Body({ mass: 0 });
    groundBody.addShape(new CANNON.Plane());
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    return world;
  }

  _createBall() {
    const mat  = new CANNON.Material('ball');
    const body = new CANNON.Body({ mass: 0.45, linearDamping: 0.35, angularDamping: 0.4 });
    body.addShape(new CANNON.Sphere(BALL_R));
    body.position.set(0, BALL_R, 0);
    body.material = mat;

    // Ball–ground contact: bouncy
    const groundMat    = new CANNON.Material('ground');
    const contactMat   = new CANNON.ContactMaterial(mat, groundMat, { restitution: 0.7, friction: 0.4 });
    this.world.addContactMaterial(contactMat);
    this.world.addBody(body);
    return body;
  }

  _createBallMesh() {
    const geo = new THREE.SphereGeometry(BALL_R, 16, 12);
    // Black pentagon patches on white ball via shader
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */`
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vNormal = normal;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          // Simple hexagonal pattern approximation
          vec2 uv = vUv * 6.0;
          float pattern = step(0.85, fract(sin(dot(floor(uv), vec2(127.1,311.7))) * 43758.5));
          vec3 col = mix(vec3(1.0), vec3(0.05), pattern);
          // Lighting
          float light = dot(normalize(vNormal), normalize(vec3(1.0,2.0,1.0))) * 0.5 + 0.5;
          gl_FragColor = vec4(col * light, 1.0);
        }
      `,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow    = true;
    mesh.receiveShadow = false;
    mesh.name = 'ball';
    this.scene.scene.add(mesh);
    return mesh;
  }

  // ─── Team spawning ─────────────────────────────────────────────────────────
  _spawnTeam(teamData, attackDir) {
    const players = [];
    const positions = FORMATION_433.positions;

    teamData.players.forEach((pData, i) => {
      const [fx, fz] = positions[i] ?? [0, 0];
      const startX   = fx * attackDir;
      const startZ   = fz;

      const player = new Player({
        data:       pData,
        teamColor:  teamData.primaryColor,
        isHuman:    attackDir === +1 && i === 9,   // home team ST = human
        world:      this.world,
        scene:      this.scene.scene,
        startPos:   [startX, 0.38, startZ],
        facingDir:  attackDir,
      });
      players.push(player);
    });

    return players;
  }

  // ─── Input ─────────────────────────────────────────────────────────────────
  _bindInput() {
    this._keydown = e => {
      this._keys[e.code] = true;

      if (e.code === 'Escape') this._togglePause();
      if (e.code === 'KeyC')   this._cycleCamera();
      if (e.code === 'KeyQ')   this._manualSwitchPlayer();
    };
    this._keyup = e => { this._keys[e.code] = false; };
    window.addEventListener('keydown', this._keydown);
    window.addEventListener('keyup',   this._keyup);
  }

  _getInputDir() {
    let x = 0, z = 0;
    if (this._keys['ArrowLeft']  || this._keys['KeyA']) x -= 1;
    if (this._keys['ArrowRight'] || this._keys['KeyD']) x += 1;
    if (this._keys['ArrowUp']    || this._keys['KeyW']) z -= 1;
    if (this._keys['ArrowDown']  || this._keys['KeyS']) z += 1;

    const sprint = this._keys['ShiftLeft'] || this._keys['Tab'];
    const len    = Math.sqrt(x * x + z * z) || 1;
    const speed  = sprint ? 1.35 : 1.0;
    return { x: (x / len) * speed, z: (z / len) * speed };
  }

  _getKickInput() {
    return this._keys['Space'] || this._keys['KeyX'];
  }

  _getTackleInput() {
    return this._keys['KeyZ'];
  }

  // ─── Player switching ──────────────────────────────────────────────────────
  /** Returns home players that should be AI-controlled (non-GK, non-human). */
  _nonControlledHomePlayers() {
    return this.homePlayers.filter((p, i) => i !== 0 && p !== this.controlledPlayer);
  }

  /** Q — cycle through eligible outfield home players in squad order. */
  _manualSwitchPlayer() {
    const eligible = this.homePlayers.filter((_, i) => i !== 0); // exclude GK
    const cur  = eligible.indexOf(this.controlledPlayer);
    this.controlledPlayer = eligible[(cur + 1) % eligible.length];
    this.homeAi.setPlayers(this._nonControlledHomePlayers());
  }

  // ─── Camera ────────────────────────────────────────────────────────────────
  _cycleCamera() {
    const modes = Object.values(CAM_MODES);
    const idx   = modes.indexOf(this._camMode);
    this._camMode = modes[(idx + 1) % modes.length];
    this.scene.setCameraMode(this._camMode, this.controlledPlayer?.meshGroup.position);
    this.ui.setCameraMode(this._camMode.toUpperCase());
  }

  // ─── Pause ─────────────────────────────────────────────────────────────────
  _togglePause() {
    if (this.match.paused) {
      this.match.paused = false;
      this.ui.hidePause();
      this._lastTime = performance.now();
      this._tick();
    } else {
      this.match.paused = true;
      cancelAnimationFrame(this._rafId);
      this.ui.showPause(
        () => { this.match.paused = false; this._lastTime = performance.now(); this._tick(); },
        () => this.onQuit?.(),
        (d) => { this.difficulty.set(d); this.ui.setDifficulty(this.difficulty.config.label); },
      );
    }
  }

  // ─── Resize ────────────────────────────────────────────────────────────────
  _onResize = () => {
    this.scene.onResize();
  };

  // ─── Main loop ─────────────────────────────────────────────────────────────
  start() {
    this.match.kickoff();
    this._lastTime = performance.now();
    this._tick();
  }

  _tick = () => {
    this._rafId = requestAnimationFrame(this._tick);
    const now = performance.now();
    const dt  = Math.min((now - this._lastTime) / 1000, 0.05); // cap at 50ms
    this._lastTime = now;

    this._update(dt);
    this.scene.render();
  };

  _update(dt) {
    if (this.match.paused) return;

    // 1. Physics step
    this.world.step(1 / 60, dt, 3);

    // 2. Ball shader time
    if (this.ballMesh.material.uniforms?.uTime) {
      this.ballMesh.material.uniforms.uTime.value += dt;
    }

    // 3. Sync ball mesh with physics body
    this.ballMesh.position.copy(this.ballBody.position);
    this.ballMesh.quaternion.copy(this.ballBody.quaternion);

    // 4. Human player input
    if (this.match.isLive) {
      const dir    = this._getInputDir();
      const ballP  = this.ballBody.position;
      this.controlledPlayer?.update(dt, dir, ballP);

      // Kick
      if (this._getKickInput()) {
        const ballPos3 = new THREE.Vector3(ballP.x, ballP.y, ballP.z);
        const playerPos = this.controlledPlayer?.meshGroup.position ?? new THREE.Vector3();
        const toGoal   = new THREE.Vector3(PITCH_W / 2, 0, 0).sub(playerPos).normalize();
        this.controlledPlayer?.kick(this.ballBody, toGoal, 0.85);
      }

      // Tackle
      if (this._getTackleInput()) {
        const nearby = [...this.awayPlayers].find(p => {
          const dist = p.body.position.distanceTo(this.controlledPlayer.body.position);
          return dist < 1.5;
        });
        if (nearby) this.controlledPlayer?.tackle(nearby);
      }
    }

    // 5. AI updates
    // Away team AI
    this.ai.update(dt);
    // Home team AI — keeps non-controlled outfield players active with same logic
    this.homeAi.setPlayers(this._nonControlledHomePlayers());
    this.homeAi.update(dt);
    // GK always AI-driven (idle/positional — handled by homeAi since index 0 is excluded
    // from _nonControlledHomePlayers, so run it manually as a stationary keeper)
    this.homePlayers[0].update(dt, null, null);

    // 6. Match engine
    this.match.update(dt);

    // 7. Camera tracking
    this.scene.trackBall(this.ballMesh.position, dt);
    if (this._camMode === CAM_MODES.BEHIND) {
      this.scene.setCameraMode(CAM_MODES.BEHIND, this.controlledPlayer?.meshGroup.position);
    }

    // 8. HUD
    this.ui.updateHUD(this.match.score, this.match.gameMinute);

    // 9. Minimap
    const ballPos2d = { x: this.ballBody.position.x, z: this.ballBody.position.z };
    const playerDots = [
      ...this.homePlayers.map(p => ({ x: p.body.position.x, z: p.body.position.z, color: this.homeTeam.primaryColor })),
      ...this.awayPlayers.map(p => ({ x: p.body.position.x, z: p.body.position.z, color: this.awayTeam.primaryColor })),
    ];
    this.ui.updateMinimap(ballPos2d, playerDots);

    // 10. Player-switch: auto-select closest home player to ball
    this._autoSwitchPlayer();
  }

  _autoSwitchPlayer() {
    // Auto-switch only when a teammate is significantly closer to the ball
    // than the currently controlled player (avoids yanking control mid-dribble).
    const ballPos    = this.ballBody.position;
    const curDist    = this.controlledPlayer?.body.position.distanceTo(ballPos) ?? Infinity;
    let nearest = null, nearDist = Infinity;
    this.homePlayers.forEach((p, i) => {
      if (i === 0) return;                      // GK stays AI
      if (p === this.controlledPlayer) return;
      const d = p.body.position.distanceTo(ballPos);
      if (d < nearDist) { nearDist = d; nearest = p; }
    });
    // Switch only if another player is at least 4m closer to the ball
    if (nearest && nearDist < curDist - 4) {
      this.controlledPlayer = nearest;
      this.homeAi.setPlayers(this._nonControlledHomePlayers());
    }
  }

  // ─── Teardown ──────────────────────────────────────────────────────────────
  dispose() {
    cancelAnimationFrame(this._rafId);
    window.removeEventListener('keydown', this._keydown);
    window.removeEventListener('keyup',   this._keyup);
    window.removeEventListener('resize',  this._onResize);
    this.ui.dispose();
    this.scene.dispose();
    [...this.homePlayers, ...this.awayPlayers].forEach(p => p.dispose());
  }
}
