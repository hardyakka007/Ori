/**
 * Player.js
 * Creates and manages a single player's 3D mesh, physics body, and state machine.
 *
 * [REAL-FACE] model loading is live: drop a .glb file at
 *   /assets/players/<player-id>.glb
 * and it will be loaded automatically. The capsule mesh is kept as fallback.
 *
 * Face textures (head UV map):
 *   /assets/faces/<player-id>.webp
 */

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PITCH_W, PITCH_D } from './SceneManager.js';

// ── GLTFLoader (dynamic import so it doesn't bloat the initial bundle) ─────────
async function loadGLTF(url) {
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
  return new Promise((resolve, reject) => {
    new GLTFLoader().load(url, resolve, undefined, reject);
  });
}

// ── Animation states ──────────────────────────────────────────────────────────
export const ANIM = {
  IDLE:    'idle',
  RUN:     'run',
  KICK:    'kick',
  TACKLE:  'tackle',
  FALL:    'fall',
  CELEBRATE: 'celebrate',
};

// ── Shared geometry / materials (created once, reused) ────────────────────────
const _bodyGeo   = new THREE.CapsuleGeometry(0.35, 1.1, 4, 8);
const _headGeo   = new THREE.SphereGeometry(0.28, 12, 8);
const _shadowGeo = new THREE.CircleGeometry(0.4, 12);

let _shadowMat; // lazy-created

export class Player {
  /**
   * @param {object} opts
   * @param {object} opts.data        – player JSON data row
   * @param {string} opts.teamColor   – hex string e.g. '#cc0000'
   * @param {boolean} opts.isHuman    – true = keyboard-controlled
   * @param {CANNON.World} opts.world – physics world
   * @param {THREE.Scene} opts.scene  – three.js scene
   * @param {number[]} opts.startPos  – [x, y, z] starting position
   * @param {number} opts.facingDir   – +1 or -1 (direction of attack)
   */
  constructor({ data, teamColor, isHuman, world, scene, startPos, facingDir }) {
    this.data       = data;
    this.teamColor  = teamColor;
    this.isHuman    = isHuman;
    this.world      = world;
    this.scene      = scene;
    this.facingDir  = facingDir;   // +1 = attacking right, -1 = attacking left
    this.hasBall    = false;
    this.isStunned  = false;
    this.stunTimer  = 0;
    this.animState  = ANIM.IDLE;
    this.animTimer  = 0;
    this.kickCooldown = 0;

    // Derived speed from rating attributes
    const pace = (data.pace ?? 70) / 100;
    this.maxSpeed = 6 + pace * 6;   // 6–12 m/s range

    this._buildMesh(teamColor);
    this._buildPhysicsBody(startPos);
    this._buildShadow();
  }

  // ─── Mesh ──────────────────────────────────────────────────────────────────
  _buildMesh(teamColor) {
    const matBody = new THREE.MeshToonMaterial({ color: new THREE.Color(teamColor) });
    const matSkin = new THREE.MeshToonMaterial({ color: 0xf4c88a });

    this.meshGroup = new THREE.Group();

    // Body (torso + legs approximated by capsule)
    this.bodyMesh = new THREE.Mesh(_bodyGeo, matBody);
    this.bodyMesh.castShadow = true;

    // Head
    this.headMesh = new THREE.Mesh(_headGeo, matSkin);
    this.headMesh.position.y = 0.9;

    // [REAL-FACE] — async model + face texture swap ───────────────────────────
    this._tryLoadModel(data.id);

    // Number label (canvas texture)
    const labelTex = this._makeNumberTexture(this.data.rating ?? '?');
    const labelMat = new THREE.MeshBasicMaterial({ map: labelTex, transparent: true });
    const labelGeo = new THREE.PlaneGeometry(0.5, 0.28);
    this.labelMesh = new THREE.Mesh(labelGeo, labelMat);
    this.labelMesh.position.set(0, 0.1, 0.36);

    this.meshGroup.add(this.bodyMesh, this.headMesh, this.labelMesh);
    this.scene.add(this.meshGroup);
  }

  _makeNumberTexture(text) {
    const canvas  = document.createElement('canvas');
    canvas.width  = 64;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 64, 32);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(text), 32, 16);
    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }

  _buildShadow() {
    if (!_shadowMat) {
      _shadowMat = new THREE.MeshBasicMaterial({
        color: 0x000000, transparent: true, opacity: 0.25, depthWrite: false,
      });
    }
    this.shadowMesh = new THREE.Mesh(_shadowGeo, _shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.01;
    this.scene.add(this.shadowMesh);
  }

  // ─── [REAL-FACE] async model loader ────────────────────────────────────────
  async _tryLoadModel(id) {
    // 1. Try to load a full body .glb model
    try {
      const gltf  = await loadGLTF(`/assets/players/${id}.glb`);
      const model = gltf.scene;

      // Scale to match capsule height (~1.8m)
      const box = new THREE.Box3().setFromObject(model);
      const h   = box.max.y - box.min.y;
      const s   = 1.8 / (h || 1);
      model.scale.setScalar(s);
      model.position.y = -box.min.y * s;

      model.traverse(c => { if (c.isMesh) c.castShadow = true; });

      // Swap out procedural meshes
      this.meshGroup.remove(this.bodyMesh, this.headMesh);
      this.meshGroup.add(model);
      this._gltfModel = model;
    } catch {
      // No model found — capsule mesh stays, try face texture only
    }

    // 2. Try to apply real-face texture to head mesh (or GLTF head node)
    try {
      const tex = await new THREE.TextureLoader().loadAsync(
        `/assets/faces/${id}.webp`
      );
      tex.colorSpace = THREE.SRGBColorSpace;
      const faceMat  = new THREE.MeshToonMaterial({ map: tex });

      if (this._gltfModel) {
        // Apply to any mesh named 'Head' or 'Face' inside the GLTF
        this._gltfModel.traverse(c => {
          if (c.isMesh && /head|face/i.test(c.name)) {
            c.material = faceMat;
          }
        });
      } else {
        // Fallback: apply to the procedural head sphere
        this.headMesh.material = faceMat;
      }
    } catch {
      // No face texture — default skin colour stays
    }
  }

  // ─── Physics body ──────────────────────────────────────────────────────────
  _buildPhysicsBody([x, y, z]) {
    const shape  = new CANNON.Sphere(0.38);
    this.body    = new CANNON.Body({ mass: 75, linearDamping: 0.8, angularDamping: 1 });
    this.body.addShape(shape);
    this.body.position.set(x, y, z);
    this.body.collisionFilterGroup = 2;
    this.body.collisionFilterMask  = 1 | 2;
    this.world.addBody(this.body);
  }

  // ─── Update loop ───────────────────────────────────────────────────────────
  update(dt, inputDir, ballPos) {
    this.kickCooldown  = Math.max(0, this.kickCooldown - dt);
    this.animTimer    += dt;

    if (this.isStunned) {
      this.stunTimer -= dt;
      if (this.stunTimer <= 0) this.isStunned = false;
      this._syncMesh();
      return;
    }

    // Movement
    if (inputDir && (inputDir.x !== 0 || inputDir.z !== 0)) {
      const speed = this.maxSpeed;
      const vel   = new CANNON.Vec3(inputDir.x * speed, 0, inputDir.z * speed);
      this.body.velocity.x = vel.x;
      this.body.velocity.z = vel.z;

      // Rotate mesh to face movement direction
      const angle = Math.atan2(inputDir.x, inputDir.z);
      this.meshGroup.rotation.y = angle;
      this._setAnim(ANIM.RUN);
    } else {
      this.body.velocity.x *= 0.85;
      this.body.velocity.z *= 0.85;
      this._setAnim(ANIM.IDLE);
    }

    // Keep grounded
    this.body.velocity.y = Math.min(this.body.velocity.y, 0);
    this.body.position.y = Math.max(this.body.position.y, 0.38);

    // Clamp to pitch + small margin
    const mx = PITCH_W / 2 + 1;
    const mz = PITCH_D / 2 + 1;
    this.body.position.x = THREE.MathUtils.clamp(this.body.position.x, -mx, mx);
    this.body.position.z = THREE.MathUtils.clamp(this.body.position.z, -mz, mz);

    this._syncMesh();
    this._animateMesh();
  }

  _syncMesh() {
    const p = this.body.position;
    this.meshGroup.position.set(p.x, p.y, p.z);
    this.shadowMesh.position.set(p.x, 0.01, p.z);
  }

  _setAnim(state) {
    if (this.animState !== state) {
      this.animState = state;
      this.animTimer = 0;
    }
  }

  _animateMesh() {
    // Simple procedural animation: leg swing via body bob
    const t = this.animTimer;
    if (this.animState === ANIM.RUN) {
      this.bodyMesh.position.y = Math.sin(t * 12) * 0.06;
      this.headMesh.position.y = 0.9 + Math.sin(t * 12) * 0.04;
    } else if (this.animState === ANIM.KICK) {
      this.bodyMesh.rotation.x = Math.sin(t * 18) * 0.4;
    } else if (this.animState === ANIM.CELEBRATE) {
      this.bodyMesh.position.y = Math.abs(Math.sin(t * 8)) * 0.5;
    } else {
      this.bodyMesh.position.y = 0;
      this.bodyMesh.rotation.x = 0;
    }
  }

  // ─── Actions ───────────────────────────────────────────────────────────────
  /**
   * Attempt to kick the ball.
   * @param {CANNON.Body} ballBody
   * @param {THREE.Vector3} targetDir  – normalised world-space direction
   * @param {number} power             – 0-1
   * @returns {boolean} true if kick landed
   */
  kick(ballBody, targetDir, power = 0.8) {
    if (this.kickCooldown > 0) return false;
    const dist = this.body.position.distanceTo(ballBody.position);
    if (dist > 1.2) return false;

    const force = 18 + power * 22;   // 18–40 N·s
    ballBody.velocity.set(
      targetDir.x * force,
      2.5 + power * 4,
      targetDir.z * force,
    );
    this.kickCooldown = 0.45;
    this._setAnim(ANIM.KICK);
    return true;
  }

  /** Push another player (tackle). Returns true if successful. */
  tackle(other) {
    if (this.kickCooldown > 0) return false;
    const dist = this.body.position.distanceTo(other.body.position);
    if (dist > 1.0) return false;

    const dir = new CANNON.Vec3(
      other.body.position.x - this.body.position.x,
      0.2,
      other.body.position.z - this.body.position.z,
    );
    dir.normalize();
    other.body.applyImpulse(new CANNON.Vec3(dir.x * 6, dir.y * 6, dir.z * 6));
    other.isStunned = true;
    other.stunTimer = 0.8;
    other.hasBall = false;
    this.kickCooldown = 0.6;
    this._setAnim(ANIM.TACKLE);
    return true;
  }

  celebrate() {
    this._setAnim(ANIM.CELEBRATE);
  }

  // ─── Teardown ──────────────────────────────────────────────────────────────
  dispose() {
    this.scene.remove(this.meshGroup);
    this.scene.remove(this.shadowMesh);
    this.world.removeBody(this.body);
  }
}
