/**
 * SceneManager.js
 * Owns the Three.js scene, camera, renderer, lighting, and all static geometry
 * (pitch, goals, stadium stands, floodlights).  Dynamic objects (players, ball)
 * are added by their own modules and simply attached to this.scene.
 */

import * as THREE from 'three';

// ─── Constants ────────────────────────────────────────────────────────────────
export const PITCH_W   = 105;   // metres (FIFA standard)
export const PITCH_D   = 68;
export const GOAL_W    = 7.32;
export const GOAL_H    = 2.44;
export const GOAL_D    = 2.0;

// Camera presets
export const CAM_MODES = { TV: 'tv', BEHIND: 'behind', BIRD: 'bird' };

export class SceneManager {
  constructor(canvas) {
    this.canvas   = canvas;
    this.scene    = new THREE.Scene();
    this.camera   = null;
    this.renderer = null;
    this.camMode  = CAM_MODES.TV;
    this._camTarget = new THREE.Vector3(0, 0, 0);

    this._initRenderer();
    this._initCamera();
    this._initLighting();
    this._buildPitch();
    this._buildGoals();
    this._buildStadium();
    this._buildSkybox();
  }

  // ─── Renderer ──────────────────────────────────────────────────────────────
  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.shadowMap.enabled  = true;
    this.renderer.shadowMap.type     = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping        = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.outputColorSpace   = THREE.SRGBColorSpace;
    this.scene.background = new THREE.Color(0x0d1b2a);
    this.scene.fog        = new THREE.Fog(0x0d1b2a, 100, 260);
  }

  // ─── Camera ────────────────────────────────────────────────────────────────
  _initCamera() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    this.camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 500);
    this._applyTVCamera();
  }

  _applyTVCamera() {
    // Classic broadcast angle: sideline, elevated
    this.camera.position.set(0, 35, 68);
    this.camera.lookAt(0, 0, 0);
  }

  _applyBehindCamera(playerPos) {
    this.camera.position.set(playerPos.x, playerPos.y + 4, playerPos.z + 10);
    this.camera.lookAt(playerPos.x, playerPos.y, playerPos.z - 15);
  }

  _applyBirdCamera() {
    this.camera.position.set(0, 90, 0);
    this.camera.lookAt(0, 0, 0);
  }

  setCameraMode(mode, playerPos = null) {
    this.camMode = mode;
    if (mode === CAM_MODES.TV)     this._applyTVCamera();
    if (mode === CAM_MODES.BIRD)   this._applyBirdCamera();
    if (mode === CAM_MODES.BEHIND && playerPos) this._applyBehindCamera(playerPos);
  }

  /** Smoothly pan the TV camera to track the ball X position */
  trackBall(ballWorldPos, dt) {
    if (this.camMode !== CAM_MODES.TV) return;
    const targetX = THREE.MathUtils.clamp(ballWorldPos.x, -30, 30);
    this.camera.position.x += (targetX - this.camera.position.x) * dt * 2.5;
    this.camera.lookAt(this.camera.position.x * 0.3, 0, 0);
  }

  // ─── Lighting ──────────────────────────────────────────────────────────────
  _initLighting() {
    // Ambient fill
    const ambient = new THREE.AmbientLight(0x223344, 0.8);
    this.scene.add(ambient);

    // Hemisphere sky/ground
    const hemi = new THREE.HemisphereLight(0x446688, 0x1a3a0a, 0.6);
    this.scene.add(hemi);

    // Four stadium floodlights (corner towers)
    const floodPositions = [
      [-60, 50, -45],
      [ 60, 50, -45],
      [-60, 50,  45],
      [ 60, 50,  45],
    ];
    floodPositions.forEach(([x, y, z]) => {
      const light = new THREE.SpotLight(0xfff8e7, 3.5, 200, Math.PI / 5, 0.3, 1.5);
      light.position.set(x, y, z);
      light.target.position.set(0, 0, 0);
      light.castShadow = true;
      light.shadow.mapSize.set(1024, 1024);
      light.shadow.camera.near = 1;
      light.shadow.camera.far  = 200;
      this.scene.add(light);
      this.scene.add(light.target);
    });
  }

  // ─── Pitch ─────────────────────────────────────────────────────────────────
  _buildPitch() {
    // ── Grass surface with shader stripes ──────────────────────────────────
    const grassMat = new THREE.ShaderMaterial({
      uniforms: {
        uStripeWidth: { value: 6.0 },    // metres per stripe
        uDarkGreen:   { value: new THREE.Color(0x1a6e1a) },
        uLightGreen:  { value: new THREE.Color(0x228b22) },
        uLinePaint:   { value: new THREE.Color(0xffffff) },
        uPitchW:      { value: PITCH_W },
        uPitchD:      { value: PITCH_D },
      },
      vertexShader: /* glsl */`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */`
        uniform float uStripeWidth;
        uniform vec3  uDarkGreen;
        uniform vec3  uLightGreen;
        uniform vec3  uLinePaint;
        uniform float uPitchW;
        uniform float uPitchD;
        varying vec3  vWorldPos;

        float lineAA(float d, float thickness) {
          return 1.0 - smoothstep(0.0, thickness * 0.5, abs(d));
        }

        void main() {
          float x = vWorldPos.x;
          float z = vWorldPos.z;

          // Alternating stripes along Z
          float stripe = mod(floor(z / uStripeWidth), 2.0);
          vec3 grass = mix(uDarkGreen, uLightGreen, stripe);

          // ── Pitch markings ──────────────────────────────────────────────
          float hw = uPitchW * 0.5;
          float hd = uPitchD * 0.5;
          float lw = 0.12;  // line width half-size in metres

          // Boundary
          float onBoundary = max(
            lineAA(abs(x) - hw, lw * 2.0),
            lineAA(abs(z) - hd, lw * 2.0)
          );

          // Halfway line
          float onHalf = lineAA(x, lw);

          // Centre circle (r=9.15m)
          float cr = length(vec2(x, z));
          float onCentre = lineAA(cr - 9.15, lw);
          float onCentreDot = step(cr, 0.3) ? 1.0 : 0.0;

          // Penalty areas (16.5m deep, 40.3m wide)
          float penD = 16.5; float penW = 20.15;
          float inPenL = step(-hw, x) * step(x, -hw + penD) * step(-penW, z) * step(z, penW);
          float inPenR = step( hw - penD, x) * step(x, hw) * step(-penW, z) * step(z, penW);
          float onPenL = max(
            lineAA(x - (-hw + penD), lw) * inPenL,
            max(lineAA(z - penW, lw) * step(-hw, x) * step(x, -hw + penD),
                lineAA(z + penW, lw) * step(-hw, x) * step(x, -hw + penD))
          );
          float onPenR = max(
            lineAA(x - (hw - penD), lw) * inPenR,
            max(lineAA(z - penW, lw) * step(hw - penD, x) * step(x, hw),
                lineAA(z + penW, lw) * step(hw - penD, x) * step(x, hw))
          );

          // Penalty spots
          float pSpotL = step(length(vec2(x + hw - 11.0, z)), 0.25);
          float pSpotR = step(length(vec2(x - hw + 11.0, z)), 0.25);

          float lineBlend = clamp(
            onBoundary + onHalf + onCentre + onCentreDot +
            onPenL + onPenR + pSpotL + pSpotR,
            0.0, 1.0
          );

          vec3 col = mix(grass, uLinePaint, lineBlend);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.FrontSide,
    });

    const pitchGeo  = new THREE.PlaneGeometry(PITCH_W, PITCH_D, 128, 64);
    const pitchMesh = new THREE.Mesh(pitchGeo, grassMat);
    pitchMesh.rotation.x = -Math.PI / 2;
    pitchMesh.receiveShadow = true;
    pitchMesh.name = 'pitch';
    this.scene.add(pitchMesh);

    // Thin border grass margin
    const borderGeo  = new THREE.PlaneGeometry(PITCH_W + 20, PITCH_D + 20);
    const borderMat  = new THREE.MeshLambertMaterial({ color: 0x156015 });
    const borderMesh = new THREE.Mesh(borderGeo, borderMat);
    borderMesh.rotation.x = -Math.PI / 2;
    borderMesh.position.y = -0.01;
    this.scene.add(borderMesh);
  }

  // ─── Goals ─────────────────────────────────────────────────────────────────
  _buildGoals() {
    [-1, 1].forEach(side => {
      const group = new THREE.Group();
      const mat   = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.4 });
      const r     = 0.06; // post radius

      const mkPipe = (sx, sy, sz, rx = 0, ry = 0, rz = 0) => {
        const geo  = new THREE.CylinderGeometry(r, r, sx || sy || sz, 8);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.set(rx, ry, rz);
        return mesh;
      };

      // Left post
      const lp = mkPipe(0, GOAL_H, 0);
      lp.position.set(-GOAL_W / 2, GOAL_H / 2, 0);

      // Right post
      const rp = mkPipe(0, GOAL_H, 0);
      rp.position.set(GOAL_W / 2, GOAL_H / 2, 0);

      // Crossbar
      const cb = mkPipe(GOAL_W, 0, 0, 0, 0, Math.PI / 2);
      cb.position.set(0, GOAL_H, 0);

      // Back top bar
      const bt = mkPipe(0, 0, GOAL_D, Math.PI / 2, 0, 0);
      bt.position.set(0, GOAL_H, side * (GOAL_D / 2));

      // Back left/right verticals
      const bl = mkPipe(0, GOAL_H, 0);
      bl.position.set(-GOAL_W / 2, GOAL_H / 2, side * GOAL_D);
      const br = mkPipe(0, GOAL_H, 0);
      br.position.set(GOAL_W / 2, GOAL_H / 2, side * GOAL_D);

      // Bottom back bar
      const bb = mkPipe(GOAL_W, 0, 0, 0, 0, Math.PI / 2);
      bb.position.set(0, 0, side * GOAL_D);

      // Net (semi-transparent plane)
      const netGeo = new THREE.PlaneGeometry(GOAL_W, GOAL_H);
      const netMat = new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
      const netBack = new THREE.Mesh(netGeo, netMat);
      netBack.position.set(0, GOAL_H / 2, side * GOAL_D);

      const netTop = new THREE.Mesh(new THREE.PlaneGeometry(GOAL_W, GOAL_D), netMat.clone());
      netTop.rotation.x = Math.PI / 2;
      netTop.position.set(0, GOAL_H, side * GOAL_D / 2);

      group.add(lp, rp, cb, bt, bl, br, bb, netBack, netTop);
      group.position.set(side * (PITCH_W / 2), 0, 0);
      group.rotation.y = side === -1 ? 0 : Math.PI;
      group.name = `goal_${side === -1 ? 'left' : 'right'}`;

      // Slight cast shadow from posts
      group.traverse(c => { if (c.isMesh) { c.castShadow = true; } });
      this.scene.add(group);
    });
  }

  // ─── Stadium ───────────────────────────────────────────────────────────────
  _buildStadium() {
    this._buildStands();
    this._buildFloodlightTowers();
    this._buildRunningTrack();
  }

  _buildStands() {
    // Simple extruded box stands on all four sides
    const standMat = new THREE.MeshLambertMaterial({ color: 0x1a1a2e });
    const crowdMat = new THREE.MeshLambertMaterial({ color: 0x3a3a6a, vertexColors: true });

    const configs = [
      // [width, depth, height, pos x, pos y, pos z, rot Y]
      [PITCH_W + 20, 22, 18,  0, 9,  -(PITCH_D / 2 + 13), 0         ],
      [PITCH_W + 20, 22, 18,  0, 9,   (PITCH_D / 2 + 13), Math.PI   ],
      [24, PITCH_D + 44, 18, -(PITCH_W / 2 + 14), 9, 0, -Math.PI / 2],
      [24, PITCH_D + 44, 18,  (PITCH_W / 2 + 14), 9, 0,  Math.PI / 2],
    ];

    configs.forEach(([w, d, h, px, py, pz, ry]) => {
      // Stand concrete
      const geo  = new THREE.BoxGeometry(w, h, d);
      const mesh = new THREE.Mesh(geo, standMat);
      mesh.position.set(px, py, pz);
      mesh.rotation.y = ry;
      this.scene.add(mesh);

      // Crowd seats (vertex-coloured grid of coloured cubes approximation via plane)
      this._addCrowdToStand(px, py + h / 2 + 0.5, pz, w, d, ry);
    });
  }

  _addCrowdToStand(px, py, pz, w, d, ry) {
    // Use a single instanced mesh for the crowd seats
    const rows    = 8;
    const cols    = Math.floor(w / 1.2);
    const total   = rows * cols;
    const geo     = new THREE.BoxGeometry(0.9, 0.9, 0.4);
    const mat     = new THREE.MeshLambertMaterial({ vertexColors: false, color: 0xffffff });
    const iMesh   = new THREE.InstancedMesh(geo, mat, total);

    const colours = [
      new THREE.Color(0xcc0000), new THREE.Color(0xdd1111),
      new THREE.Color(0x1155cc), new THREE.Color(0x0044aa),
      new THREE.Color(0x333333), new THREE.Color(0xeeeeee),
    ];

    const dummy  = new THREE.Object3D();
    const colour = new THREE.Color();
    let idx = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dummy.position.set(
          (c - cols / 2) * 1.1,
          r * 1.0,
          0
        );
        dummy.rotation.y = ry;
        dummy.updateMatrix();
        iMesh.setMatrixAt(idx, dummy.matrix);
        colour.copy(colours[Math.floor(Math.random() * colours.length)]);
        iMesh.setColorAt(idx, colour);
        idx++;
      }
    }
    iMesh.instanceMatrix.needsUpdate = true;
    if (iMesh.instanceColor) iMesh.instanceColor.needsUpdate = true;
    iMesh.position.set(px, py, pz);
    iMesh.rotation.y = ry;
    this.scene.add(iMesh);
  }

  _buildFloodlightTowers() {
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x888899, metalness: 0.8, roughness: 0.3 });
    const corners  = [
      [-PITCH_W / 2 - 16, 0, -PITCH_D / 2 - 16],
      [ PITCH_W / 2 + 16, 0, -PITCH_D / 2 - 16],
      [-PITCH_W / 2 - 16, 0,  PITCH_D / 2 + 16],
      [ PITCH_W / 2 + 16, 0,  PITCH_D / 2 + 16],
    ];

    corners.forEach(([x, , z]) => {
      // Mast
      const mastGeo  = new THREE.CylinderGeometry(0.3, 0.5, 38, 8);
      const mast     = new THREE.Mesh(mastGeo, steelMat);
      mast.position.set(x, 19, z);
      mast.castShadow = true;
      this.scene.add(mast);

      // Lamp head
      const headGeo  = new THREE.BoxGeometry(5, 0.8, 1.4);
      const headMat  = new THREE.MeshStandardMaterial({ color: 0xffffcc, emissive: 0xffffaa, emissiveIntensity: 2 });
      const head     = new THREE.Mesh(headGeo, headMat);
      head.position.set(x, 39, z);
      this.scene.add(head);
    });
  }

  _buildRunningTrack() {
    // Thin orange athletics track around the pitch
    const trackGeo = new THREE.RingGeometry(
      Math.sqrt((PITCH_W / 2 + 4) ** 2 + (PITCH_D / 2 + 4) ** 2) - 1,
      Math.sqrt((PITCH_W / 2 + 4) ** 2 + (PITCH_D / 2 + 4) ** 2) + 3,
      64
    );
    const trackMat  = new THREE.MeshLambertMaterial({ color: 0xa0522d });
    const track     = new THREE.Mesh(trackGeo, trackMat);
    track.rotation.x = -Math.PI / 2;
    track.position.y  = -0.005;
    // Use a simple rectangle approximation instead of ring for a rectangular pitch
    this.scene.remove(track); // skip ring; use boxes below
    [
      [PITCH_W + 10, 5,  0,  (PITCH_D / 2 + 4.5), 0],
      [PITCH_W + 10, 5,  0, -(PITCH_D / 2 + 4.5), 0],
      [5, PITCH_D + 10,  -(PITCH_W / 2 + 4.5), 0,  Math.PI / 2],
      [5, PITCH_D + 10,   (PITCH_W / 2 + 4.5), 0,  Math.PI / 2],
    ].forEach(([w, d, px, pz, ry]) => {
      const g = new THREE.PlaneGeometry(w, d);
      const m = new THREE.MeshLambertMaterial({ color: 0xb86a3a });
      const mesh = new THREE.Mesh(g, m);
      mesh.rotation.x = -Math.PI / 2;
      mesh.rotation.z = ry;
      mesh.position.set(px, -0.004, pz);
      this.scene.add(mesh);
    });
  }

  // ─── Skybox ────────────────────────────────────────────────────────────────
  _buildSkybox() {
    // Procedural night sky gradient via a large sphere
    const skyGeo = new THREE.SphereGeometry(490, 32, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        uTopColor:    { value: new THREE.Color(0x050d18) },
        uBottomColor: { value: new THREE.Color(0x0d1b2a) },
      },
      vertexShader: /* glsl */`
        varying float vY;
        void main() {
          vY = position.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        varying float vY;
        void main() {
          float t = clamp(vY / 490.0, 0.0, 1.0);
          gl_FragColor = vec4(mix(uBottomColor, uTopColor, t), 1.0);
        }
      `,
    });
    this.scene.add(new THREE.Mesh(skyGeo, skyMat));
  }

  // ─── Public API ────────────────────────────────────────────────────────────
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  dispose() {
    this.renderer.dispose();
  }
}
