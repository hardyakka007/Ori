/**
 * useThreeScene.js
 * Three.js 3D stadium + match renderer.
 * Manages scene, camera, lighting, pitch geometry, player meshes and ball.
 * Call init(canvas) once, then updateState(state) every game tick.
 */

import * as THREE from 'three'

// ── Pitch dimensions (Three.js units, maps from game coords PW=200 PH=80)
const PW = 200, PH = 80
const SW = 100, SH = 40   // scene half-extents: game / 2
const PITCH_W = SW, PITCH_H = SH

export function useThreeScene() {
  let renderer, scene, camera, animId

  // Mesh pools
  let pitchMesh, ballMesh
  const playerMeshes = { home: [], away: [] }

  // ── Public: initialise scene on a canvas element ─────────────────────────
  function init(canvas) {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a1a)
    scene.fog = new THREE.Fog(0x0a0a1a, 120, 220)

    _buildCamera(canvas)
    _buildLighting()
    _buildPitch()
    _buildStadium()
    _buildBall()

    window.addEventListener('resize', () => _onResize(canvas))
  }

  // ── Public: update 3D world from game state each frame ───────────────────
  function updateState({ homePlayers, awayPlayers, ball, homeColor, awayColor }) {
    _syncTeam('home', homePlayers, homeColor || '#e74c3c')
    _syncTeam('away', awayPlayers, awayColor || '#3498db')
    _syncBall(ball)
  }

  // ── Public: render one frame ──────────────────────────────────────────────
  function render() {
    if (renderer && scene && camera) renderer.render(scene, camera)
  }

  // ── Public: dispose resources ─────────────────────────────────────────────
  function dispose() {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', _onResize)
    renderer?.dispose()
  }

  // ── Camera ────────────────────────────────────────────────────────────────
  function _buildCamera(canvas) {
    const aspect = canvas.clientWidth / canvas.clientHeight
    camera = new THREE.PerspectiveCamera(55, aspect, 0.1, 400)
    // Classic FIFA-style: elevated angle slightly behind centre
    camera.position.set(0, 42, 52)
    camera.lookAt(0, 0, 0)
  }

  // ── Lighting ──────────────────────────────────────────────────────────────
  function _buildLighting() {
    // Ambient base light
    const ambient = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambient)

    // Four floodlight points at stadium corners
    const floodPositions = [
      [-48, 28, -18], [48, 28, -18],
      [-48, 28,  18], [48, 28,  18],
    ]
    floodPositions.forEach(([x, y, z]) => {
      const flood = new THREE.PointLight(0xfff5e0, 0.9, 160)
      flood.position.set(x, y, z)
      flood.castShadow = true
      flood.shadow.mapSize.set(512, 512)
      scene.add(flood)

      // Visible floodlight bulb
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xfff5e0 })
      )
      bulb.position.set(x, y, z)
      scene.add(bulb)
    })

    // Directional overhead fill
    const dir = new THREE.DirectionalLight(0xffffff, 0.4)
    dir.position.set(0, 60, 20)
    scene.add(dir)
  }

  // ── Pitch surface + markings ──────────────────────────────────────────────
  function _buildPitch() {
    // Grass stripes using ShaderMaterial
    const grassMat = new THREE.MeshLambertMaterial({
      color: 0x2d7a27,
      side: THREE.FrontSide,
    })

    // Alternating stripe pattern via vertex colors (simple approach: two-tone)
    const pitchGeo = new THREE.PlaneGeometry(PITCH_W, PITCH_H, 20, 10)
    pitchMesh = new THREE.Mesh(pitchGeo, grassMat)
    pitchMesh.rotation.x = -Math.PI / 2
    pitchMesh.receiveShadow = true
    scene.add(pitchMesh)

    // Darker stripe overlay
    _addGrassStripes()

    // White pitch lines
    _addPitchLines()

    // Goal nets
    _addGoals()
  }

  function _addGrassStripes() {
    const stripeCount = 10
    const stripeW = PITCH_W / stripeCount
    for (let i = 0; i < stripeCount; i += 2) {
      const geo = new THREE.PlaneGeometry(stripeW, PITCH_H)
      const mat = new THREE.MeshLambertMaterial({
        color: 0x267020,
        transparent: true,
        opacity: 0.6,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.rotation.x = -Math.PI / 2
      mesh.position.set(-PITCH_W / 2 + stripeW * i + stripeW / 2, 0.01, 0)
      scene.add(mesh)
    }
  }

  function _addPitchLines() {
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const H = 0.05  // height above pitch

    const line = (x1, z1, x2, z2, w = 0.18) => {
      const dx = x2 - x1, dz = z2 - z1
      const len = Math.sqrt(dx * dx + dz * dz)
      const angle = Math.atan2(dx, dz)
      const geo = new THREE.PlaneGeometry(w, len)
      const m = new THREE.Mesh(geo, mat)
      m.rotation.x = -Math.PI / 2
      m.rotation.z = angle
      m.position.set((x1 + x2) / 2, H, (z1 + z2) / 2)
      scene.add(m)
    }

    const HW = PITCH_W / 2, HH = PITCH_H / 2

    // Touchlines
    line(-HW, -HH, -HW, HH)
    line( HW, -HH,  HW, HH)
    line(-HW, -HH,  HW, -HH)
    line(-HW,  HH,  HW,  HH)

    // Halfway line
    line(0, -HH, 0, HH)

    // Centre circle — approximated with 36 segments
    _addCircle(0, 0, 9.15, H, mat)

    // Centre spot
    _addDisc(0, 0, 0.35, H, mat)

    // Home penalty area  (-HW side)
    const pa = 16.5, pb = 40.32 / 2, ps = 5.5, pbs = 18.32 / 2
    line(-HW, -pb, -HW + pa, -pb)
    line(-HW, pb,  -HW + pa,  pb)
    line(-HW + pa, -pb, -HW + pa, pb)

    // Home goal area
    line(-HW, -pbs, -HW + ps, -pbs)
    line(-HW, pbs,  -HW + ps,  pbs)
    line(-HW + ps, -pbs, -HW + ps, pbs)

    // Away penalty area (HW side)
    line(HW, -pb, HW - pa, -pb)
    line(HW,  pb, HW - pa,  pb)
    line(HW - pa, -pb, HW - pa, pb)

    // Away goal area
    line(HW, -pbs, HW - ps, -pbs)
    line(HW,  pbs, HW - ps,  pbs)
    line(HW - ps, -pbs, HW - ps, pbs)

    // Penalty spots
    _addDisc(-HW + 11, 0, 0.35, H, mat)
    _addDisc( HW - 11, 0, 0.35, H, mat)

    // Corner arcs
    const cr = 1.0
    _addArc(-HW, -HH, cr, 0,          Math.PI / 2, H, mat)
    _addArc(-HW,  HH, cr, -Math.PI / 2, 0,          H, mat)
    _addArc( HW, -HH, cr, Math.PI / 2, Math.PI,      H, mat)
    _addArc( HW,  HH, cr, Math.PI,    3 * Math.PI / 2, H, mat)
  }

  function _addCircle(cx, cz, r, y, mat, segs = 48) {
    const points = []
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2
      points.push(new THREE.Vector3(cx + Math.cos(a) * r, y, cz + Math.sin(a) * r))
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    const loop = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }))
    scene.add(loop)
  }

  function _addArc(cx, cz, r, startA, endA, y, mat, segs = 12) {
    const points = []
    for (let i = 0; i <= segs; i++) {
      const a = startA + (endA - startA) * (i / segs)
      points.push(new THREE.Vector3(cx + Math.cos(a) * r, y, cz + Math.sin(a) * r))
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    scene.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })))
  }

  function _addDisc(cx, cz, r, y, mat) {
    const geo = new THREE.CylinderGeometry(r, r, 0.02, 12)
    const m = new THREE.Mesh(geo, mat)
    m.position.set(cx, y, cz)
    scene.add(m)
  }

  function _addGoals() {
    const goalW = 7.32, goalH = 2.44, postR = 0.1
    const netDepth = 2.5
    const postMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.3 })
    const netMat  = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, side: THREE.DoubleSide, wireframe: true })

    const addGoal = (side) => {
      const sx = side * (PITCH_W / 2)
      const dir = -side  // net goes inward

      // Posts
      const postGeo = new THREE.CylinderGeometry(postR, postR, goalH, 8)
      const p1 = new THREE.Mesh(postGeo, postMat)
      p1.position.set(sx, goalH / 2, -goalW / 2)
      scene.add(p1)
      const p2 = p1.clone()
      p2.position.set(sx, goalH / 2, goalW / 2)
      scene.add(p2)

      // Crossbar
      const barGeo = new THREE.CylinderGeometry(postR, postR, goalW, 8)
      const bar = new THREE.Mesh(barGeo, postMat)
      bar.rotation.x = Math.PI / 2
      bar.position.set(sx, goalH, 0)
      scene.add(bar)

      // Back post
      const backGeo = new THREE.CylinderGeometry(postR, postR, goalH, 8)
      const bp1 = new THREE.Mesh(backGeo, postMat)
      bp1.position.set(sx + dir * netDepth, goalH / 2, -goalW / 2)
      scene.add(bp1)
      const bp2 = bp1.clone()
      bp2.position.set(sx + dir * netDepth, goalH / 2, goalW / 2)
      scene.add(bp2)

      // Net (back)
      const netBackGeo = new THREE.PlaneGeometry(goalW, goalH, 8, 4)
      const netBack = new THREE.Mesh(netBackGeo, netMat)
      netBack.rotation.y = Math.PI / 2
      netBack.position.set(sx + dir * netDepth, goalH / 2, 0)
      scene.add(netBack)

      // Net (sides)
      const netSideGeo = new THREE.PlaneGeometry(netDepth, goalH, 4, 4)
      ;[-1, 1].forEach(z => {
        const ns = new THREE.Mesh(netSideGeo, netMat)
        ns.position.set(sx + dir * netDepth / 2, goalH / 2, z * goalW / 2)
        scene.add(ns)
      })

      // Net (top)
      const netTopGeo = new THREE.PlaneGeometry(goalW, netDepth, 8, 4)
      const netTop = new THREE.Mesh(netTopGeo, netMat)
      netTop.rotation.x = -Math.PI / 2
      netTop.position.set(sx + dir * netDepth / 2, goalH, 0)
      scene.add(netTop)
    }

    addGoal(-1)
    addGoal(1)
  }

  // ── Stadium stands ────────────────────────────────────────────────────────
  function _buildStadium() {
    const standMat = new THREE.MeshLambertMaterial({ color: 0x1a1a2e })
    const crowdMat = new THREE.MeshLambertMaterial({ color: 0x2c2c54 })

    // Four stand walls
    const stands = [
      { pos: [0,  4, -(PITCH_H / 2 + 8)], size: [PITCH_W + 30, 8, 4] },  // near
      { pos: [0,  4,  (PITCH_H / 2 + 8)], size: [PITCH_W + 30, 8, 4] },  // far
      { pos: [-(PITCH_W / 2 + 8), 4, 0],  size: [4, 8, PITCH_H + 16] },  // left
      { pos: [ (PITCH_W / 2 + 8), 4, 0],  size: [4, 8, PITCH_H + 16] },  // right
    ]
    stands.forEach(({ pos, size }) => {
      const geo = new THREE.BoxGeometry(...size)
      const mesh = new THREE.Mesh(geo, standMat)
      mesh.position.set(...pos)
      mesh.castShadow = true
      scene.add(mesh)

      // Crowd rows (lighter strip on top of stand)
      const rowGeo = new THREE.BoxGeometry(size[0], 1, size[2])
      const row = new THREE.Mesh(rowGeo, crowdMat)
      row.position.set(pos[0], pos[1] + size[1] / 2 + 0.5, pos[2])
      scene.add(row)
    })

    // Floodlight towers (4 corners)
    const towerMat = new THREE.MeshLambertMaterial({ color: 0x888888 })
    const towerPositions = [
      [-(PITCH_W / 2 + 10),  0, -(PITCH_H / 2 + 10)],
      [ (PITCH_W / 2 + 10),  0, -(PITCH_H / 2 + 10)],
      [-(PITCH_W / 2 + 10),  0,  (PITCH_H / 2 + 10)],
      [ (PITCH_W / 2 + 10),  0,  (PITCH_H / 2 + 10)],
    ]
    towerPositions.forEach(([x, y, z]) => {
      const geo = new THREE.CylinderGeometry(0.4, 0.6, 28, 8)
      const mesh = new THREE.Mesh(geo, towerMat)
      mesh.position.set(x, 14, z)
      scene.add(mesh)
    })

    // Ground plane outside pitch
    const groundGeo = new THREE.PlaneGeometry(300, 200)
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x0d1117 })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.02
    scene.add(ground)
  }

  // ── Ball ──────────────────────────────────────────────────────────────────
  function _buildBall() {
    const geo = new THREE.SphereGeometry(0.8, 16, 16)
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.6,
      metalness: 0.0,
    })
    ballMesh = new THREE.Mesh(geo, mat)
    ballMesh.castShadow = true
    scene.add(ballMesh)

    // Black pentagon patches
    for (let i = 0; i < 12; i++) {
      const patchGeo = new THREE.CircleGeometry(0.22, 5)
      const patchMat = new THREE.MeshBasicMaterial({ color: 0x111111 })
      const patch = new THREE.Mesh(patchGeo, patchMat)
      const theta = Math.acos(1 - 2 * (i + 0.5) / 12)
      const phi = Math.PI * (1 + Math.sqrt(5)) * i
      patch.position.set(
        0.82 * Math.sin(theta) * Math.cos(phi),
        0.82 * Math.cos(theta),
        0.82 * Math.sin(theta) * Math.sin(phi)
      )
      patch.lookAt(0, 0, 0)
      patch.position.multiplyScalar(-1)
      ballMesh.add(patch)
    }
  }

  // ── Player mesh management ────────────────────────────────────────────────
  function _getOrCreatePlayerMesh(team, idx, color) {
    if (!playerMeshes[team][idx]) {
      const group = new THREE.Group()

      // Body (cylinder)
      const bodyGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.6, 8)
      const bodyMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(color) })
      const body = new THREE.Mesh(bodyGeo, bodyMat)
      body.position.y = 0.8
      body.castShadow = true
      group.add(body)

      // Head (sphere)
      const headGeo = new THREE.SphereGeometry(0.45, 12, 12)
      const headMat = new THREE.MeshLambertMaterial({ color: 0xf5cba7 })
      const head = new THREE.Mesh(headGeo, headMat)
      head.position.y = 1.9
      head.castShadow = true
      group.add(head)

      // Number on back (thin plane with text — simplified as jersey stripe)
      const stripeGeo = new THREE.PlaneGeometry(0.5, 0.4)
      const stripeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.FrontSide })
      const stripe = new THREE.Mesh(stripeGeo, stripeMat)
      stripe.position.set(0, 1.0, 0.56)
      group.add(stripe)

      // Shadow disc
      const shadowGeo = new THREE.CircleGeometry(0.6, 12)
      const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 })
      const shadow = new THREE.Mesh(shadowGeo, shadowMat)
      shadow.rotation.x = -Math.PI / 2
      shadow.position.y = 0.02
      group.add(shadow)

      scene.add(group)
      playerMeshes[team][idx] = { group, bodyMat }
    }
    return playerMeshes[team][idx]
  }

  function _syncTeam(team, players, hexColor) {
    if (!players) return
    players.forEach((p, idx) => {
      const { group, bodyMat } = _getOrCreatePlayerMesh(team, idx, hexColor)
      bodyMat.color.set(hexColor)
      // Game coords → Three.js: x→x/2-50, y→z/2-20
      group.position.set(
        p.x / 2 - PITCH_W / 2,
        0,
        p.y / 2 - PITCH_H / 2
      )
      // Rotate to face movement direction
      if (p.vx !== undefined && (Math.abs(p.vx) > 0.05 || Math.abs(p.vy) > 0.05)) {
        group.rotation.y = Math.atan2(p.vx, p.vy)
      }
    })
    // Hide unused slots
    for (let i = players.length; i < playerMeshes[team].length; i++) {
      if (playerMeshes[team][i]) {
        playerMeshes[team][i].group.visible = false
      }
    }
  }

  function _syncBall(ball) {
    if (!ball || !ballMesh) return
    const bx = ball.x / 2 - PITCH_W / 2
    const bz = ball.y / 2 - PITCH_H / 2
    ballMesh.position.set(bx, 0.8, bz)
    // Spin the ball based on velocity
    if (ball.vx !== undefined) {
      ballMesh.rotation.z -= ball.vx * 0.08
      ballMesh.rotation.x += ball.vy * 0.08
    }

    // Smoothly track camera toward ball
    const targetX = bx * 0.15
    camera.position.x += (targetX - camera.position.x) * 0.04
  }

  // ── Resize handler ────────────────────────────────────────────────────────
  function _onResize(canvas) {
    if (!renderer || !camera) return
    const w = canvas.clientWidth, h = canvas.clientHeight
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }

  return { init, updateState, render, dispose }
}
