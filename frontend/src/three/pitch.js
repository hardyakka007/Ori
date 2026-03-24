/**
 * pitch.js — 3D football pitch: grass surface, line markings, goals
 * The Beautiful Game 2026
 *
 * Coordinate system:
 *   X = width (−PW/2 to +PW/2, left to right from TV camera)
 *   Y = height (0 = pitch surface)
 *   Z = length (−PL/2 to +PL/2, home goal at −PL/2, away at +PL/2)
 */
import * as THREE from 'three'

export const PITCH_W  = 64    // width  (metres, scaled)
export const PITCH_L  = 100   // length
export const GOAL_W   = 7.32
export const GOAL_H   = 2.44
export const GOAL_D   = 2.0   // depth of net

export function buildPitch(scene) {
  const group = new THREE.Group()

  // ── Grass surface ─────────────────────────────────────────────────────────
  const grassGeo  = new THREE.PlaneGeometry(PITCH_W, PITCH_L, 16, 24)
  const grassMat  = new THREE.MeshLambertMaterial({ color: 0x2d8a2d })
  const grass = new THREE.Mesh(grassGeo, grassMat)
  grass.rotation.x = -Math.PI / 2
  grass.receiveShadow = true
  group.add(grass)

  // Alternating stripe pattern (darker/lighter strips)
  const stripeCount = 12
  const stripeW = PITCH_L / stripeCount
  for (let i = 0; i < stripeCount; i++) {
    if (i % 2 === 0) continue
    const sgeo = new THREE.PlaneGeometry(PITCH_W, stripeW)
    const smat = new THREE.MeshLambertMaterial({ color: 0x267a26, transparent: true, opacity: 0.5 })
    const sm = new THREE.Mesh(sgeo, smat)
    sm.rotation.x = -Math.PI / 2
    sm.position.set(0, 0.01, -PITCH_L / 2 + stripeW * i + stripeW / 2)
    sm.receiveShadow = true
    group.add(sm)
  }

  // ── Line markings ──────────────────────────────────────────────────────────
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const lineH   = 0.02   // slightly above pitch

  function addLine(w, l, x, z) {
    const geo  = new THREE.PlaneGeometry(w, l)
    const mesh = new THREE.Mesh(geo, lineMat)
    mesh.rotation.x = -Math.PI / 2
    mesh.position.set(x, lineH, z)
    group.add(mesh)
  }

  const LW = 0.12  // line width

  // Outer boundary
  addLine(PITCH_W,  LW, 0,            -PITCH_L / 2)   // top line
  addLine(PITCH_W,  LW, 0,             PITCH_L / 2)   // bottom line
  addLine(LW, PITCH_L,  -PITCH_W / 2,  0)             // left line
  addLine(LW, PITCH_L,   PITCH_W / 2,  0)             // right line

  // Halfway line
  addLine(PITCH_W, LW,  0, 0)

  // Centre circle (via ring segments)
  const circleR = 9.15
  const circleSeg = 64
  const circlePoints = []
  for (let i = 0; i <= circleSeg; i++) {
    const a = (i / circleSeg) * Math.PI * 2
    circlePoints.push(new THREE.Vector3(Math.cos(a) * circleR, 0, Math.sin(a) * circleR))
  }
  const circleCurve = new THREE.CatmullRomCurve3(circlePoints)
  const circleGeo = new THREE.TubeGeometry(circleCurve, circleSeg, 0.1, 8, false)
  const circleMesh = new THREE.Mesh(circleGeo, lineMat)
  circleMesh.position.y = lineH
  group.add(circleMesh)

  // Centre spot
  const spotGeo  = new THREE.CircleGeometry(0.25, 16)
  const spotMesh = new THREE.Mesh(spotGeo, lineMat)
  spotMesh.rotation.x = -Math.PI / 2
  spotMesh.position.set(0, lineH + 0.01, 0)
  group.add(spotMesh)

  // Penalty areas (both ends)
  const PA_W = 40.32
  const PA_D = 16.5
  for (const sign of [-1, 1]) {
    const pz = sign * (PITCH_L / 2 - PA_D / 2)
    addLine(PA_W, LW, 0,             pz - sign * PA_D / 2)  // front line
    addLine(LW, PA_D, -PA_W / 2,     pz)                    // left side
    addLine(LW, PA_D,  PA_W / 2,     pz)                    // right side

    // Goal area (6-yard box)
    const GA_W = 18.32
    const GA_D = 5.5
    const gz = sign * (PITCH_L / 2 - GA_D / 2)
    addLine(GA_W, LW, 0,             gz - sign * GA_D / 2)
    addLine(LW, GA_D, -GA_W / 2,     gz)
    addLine(LW, GA_D,  GA_W / 2,     gz)

    // Penalty spot
    const penZ = sign * (PITCH_L / 2 - 11)
    const psGeo = new THREE.CircleGeometry(0.2, 12)
    const psMesh = new THREE.Mesh(psGeo, lineMat)
    psMesh.rotation.x = -Math.PI / 2
    psMesh.position.set(0, lineH + 0.01, penZ)
    group.add(psMesh)
  }

  scene.add(group)
  return group
}

export function buildGoals(scene) {
  const goals = []
  const postMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
  const netMat  = new THREE.MeshBasicMaterial({ color: 0xdddddd, transparent: true,
                                                opacity: 0.3, side: THREE.DoubleSide, wireframe: true })

  for (const sign of [-1, 1]) {
    const gz = sign * (PITCH_L / 2)
    const group = new THREE.Group()

    // Posts & crossbar (box geometry)
    const R = 0.06
    function post(w, h, d, px, py, pz) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), postMat)
      m.position.set(px, py, pz)
      m.castShadow = true
      group.add(m)
    }

    post(R, GOAL_H, R, -GOAL_W / 2, GOAL_H / 2, 0)  // left post
    post(R, GOAL_H, R,  GOAL_W / 2, GOAL_H / 2, 0)  // right post
    post(GOAL_W + R, R, R, 0, GOAL_H, 0)              // crossbar

    // Back net sides
    post(R, GOAL_H, GOAL_D, -GOAL_W / 2, GOAL_H / 2, sign * GOAL_D / 2)
    post(R, GOAL_H, GOAL_D,  GOAL_W / 2, GOAL_H / 2, sign * GOAL_D / 2)
    post(GOAL_W + R, R, GOAL_D, 0, GOAL_H, sign * GOAL_D / 2)

    // Net
    const netGeo = new THREE.BoxGeometry(GOAL_W, GOAL_H, GOAL_D)
    const net = new THREE.Mesh(netGeo, netMat)
    net.position.set(0, GOAL_H / 2, sign * GOAL_D / 2)
    group.add(net)

    group.position.set(0, 0, gz)
    scene.add(group)
    goals.push(group)
  }
  return goals
}
