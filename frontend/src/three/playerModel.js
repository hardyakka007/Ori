/**
 * playerModel.js — Low-poly humanoid player model built from Three.js primitives
 * The Beautiful Game 2026
 *
 * Each player is a THREE.Group containing:
 *   head, torso, leftArm, rightArm, leftLeg, rightLeg, leftBoot, rightBoot
 *
 * Kit colours from PRD §16.2
 */
import * as THREE from 'three'

// Skin tone palette (8 options — index 0-7)
const SKIN_TONES = [
  0xfad7b0, 0xf5c18a, 0xe8a96a, 0xc8834a,
  0xa0622a, 0x7a4420, 0x5c2e0e, 0x3d1a06,
]

// GK always gets yellow/green gloves and a different shirt
const GK_COLOUR = 0xffd700

export const KIT_MAP = {
  'Manchester United':   { primary: 0xda291c, secondary: 0xffffff },
  'Manchester City':     { primary: 0x6cabdd, secondary: 0xffffff },
  'Liverpool':           { primary: 0xc8102e, secondary: 0xc8102e },
  'Arsenal':             { primary: 0xef0107, secondary: 0xffffff },
  'Chelsea':             { primary: 0x034694, secondary: 0x034694 },
  'Tottenham Hotspur':   { primary: 0xffffff, secondary: 0x132257 },
  'Real Madrid':         { primary: 0xffffff, secondary: 0xffffff },
  'FC Barcelona':        { primary: 0x004d98, secondary: 0x004d98 },
  'Atletico Madrid':     { primary: 0xcb3524, secondary: 0x003366 },
  'Bayern Munich':       { primary: 0xdc052d, secondary: 0xdc052d },
  'Borussia Dortmund':   { primary: 0xfde100, secondary: 0x000000 },
  'Juventus':            { primary: 0x1a1a1a, secondary: 0x1a1a1a },
  'Paris Saint-Germain': { primary: 0x004170, secondary: 0x004170 },
  'Inter Milan':         { primary: 0x010e80, secondary: 0x000000 },
  'AC Milan':            { primary: 0xfb090b, secondary: 0xffffff },
}

function mat(color, flat = false) {
  return flat
    ? new THREE.MeshBasicMaterial({ color })
    : new THREE.MeshLambertMaterial({ color })
}

export function createPlayerModel(clubName, isGK = false, skinIndex = 0) {
  const kit    = KIT_MAP[clubName] || { primary: 0x888888, secondary: 0xffffff }
  const skin   = SKIN_TONES[skinIndex % SKIN_TONES.length]
  const kitCol = isGK ? GK_COLOUR : kit.primary
  const shoCol = kit.secondary

  const group = new THREE.Group()

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), mat(skin))
  head.position.y = 1.75
  head.castShadow = true
  group.add(head)

  // Neck
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 8), mat(skin))
  neck.position.y = 1.51
  group.add(neck)

  // Torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.55, 0.28), mat(kitCol))
  torso.position.y = 1.15
  torso.castShadow = true
  group.add(torso)

  // Arms
  const armGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.52, 8)
  const armMat = mat(kitCol)

  const lArm = new THREE.Mesh(armGeo, armMat)
  lArm.position.set(-0.33, 1.15, 0)
  lArm.rotation.z = 0.15
  lArm.castShadow = true
  group.add(lArm)

  const rArm = new THREE.Mesh(armGeo, armMat)
  rArm.position.set(0.33, 1.15, 0)
  rArm.rotation.z = -0.15
  rArm.castShadow = true
  group.add(rArm)

  // Hands
  const handGeo = new THREE.SphereGeometry(0.09, 8, 6)
  const handMat = mat(isGK ? 0xffffff : skin)
  const lHand = new THREE.Mesh(handGeo, handMat)
  lHand.position.set(-0.37, 0.87, 0)
  group.add(lHand)
  const rHand = new THREE.Mesh(handGeo, handMat)
  rHand.position.set(0.37, 0.87, 0)
  group.add(rHand)

  // Shorts (lower torso block)
  const shorts = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.28, 0.26), mat(shoCol))
  shorts.position.y = 0.78
  group.add(shorts)

  // Legs
  const legGeo = new THREE.CylinderGeometry(0.1, 0.09, 0.5, 8)
  const legMat = mat(skin)

  const lLeg = new THREE.Mesh(legGeo, legMat)
  lLeg.position.set(-0.14, 0.5, 0)
  lLeg.castShadow = true
  group.add(lLeg)

  const rLeg = new THREE.Mesh(legGeo, legMat)
  rLeg.position.set(0.14, 0.5, 0)
  rLeg.castShadow = true
  group.add(rLeg)

  // Boots
  const bootGeo = new THREE.BoxGeometry(0.14, 0.1, 0.28)
  const bootMat = mat(0x111111)

  const lBoot = new THREE.Mesh(bootGeo, bootMat)
  lBoot.position.set(-0.14, 0.22, 0.05)
  group.add(lBoot)

  const rBoot = new THREE.Mesh(bootGeo, bootMat)
  rBoot.position.set(0.14, 0.22, 0.05)
  group.add(rBoot)

  // Shadow (ground ellipse)
  const shadowGeo = new THREE.CircleGeometry(0.35, 16)
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 })
  const shadow = new THREE.Mesh(shadowGeo, shadowMat)
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = 0.01
  group.add(shadow)

  // Store references for animation
  group.userData = { lArm, rArm, lLeg, rLeg, head, torso, lBoot, rBoot, phase: 0 }

  return group
}

/**
 * Animate a player model based on state.
 * @param {THREE.Group} model
 * @param {string} state — 'idle' | 'run' | 'sprint' | 'kick' | 'tackle' | 'celebrate'
 * @param {number} delta — seconds since last frame
 */
export function animatePlayer(model, state, delta) {
  const u = model.userData
  if (!u.lArm) return

  u.phase = (u.phase || 0) + delta

  const t = u.phase
  const idle  = Math.sin(t * 1.2) * 0.04
  const run   = Math.sin(t * 8)   * 0.5
  const sprint = Math.sin(t * 12) * 0.65

  if (state === 'idle') {
    u.lArm.rotation.x = idle
    u.rArm.rotation.x = -idle
    u.lLeg.rotation.x = idle * 0.5
    u.rLeg.rotation.x = -idle * 0.5
    u.head.rotation.x = Math.sin(t * 0.8) * 0.02

  } else if (state === 'run') {
    u.lArm.rotation.x = run * 0.5
    u.rArm.rotation.x = -run * 0.5
    u.lLeg.rotation.x = run
    u.rLeg.rotation.x = -run
    u.torso.rotation.x = -0.05

  } else if (state === 'sprint') {
    u.lArm.rotation.x = sprint * 0.65
    u.rArm.rotation.x = -sprint * 0.65
    u.lLeg.rotation.x = sprint
    u.rLeg.rotation.x = -sprint
    u.torso.rotation.x = -0.12

  } else if (state === 'kick') {
    const k = Math.min(u.phase * 4, 1)
    u.rLeg.rotation.x = -k * 1.2 + Math.max(0, k - 0.5) * 2.0
    u.torso.rotation.x = k * 0.2

  } else if (state === 'tackle') {
    u.lLeg.rotation.x = 0.8
    u.rLeg.rotation.x = -0.3
    u.torso.rotation.x = 0.3
    u.lArm.rotation.x = -0.4
    u.rArm.rotation.x = 0.4

  } else if (state === 'celebrate') {
    const c = Math.sin(t * 6)
    u.lArm.rotation.x = -1.4 + c * 0.3
    u.rArm.rotation.x = -1.4 - c * 0.3
    u.lArm.rotation.z =  0.4
    u.rArm.rotation.z = -0.4
    u.lLeg.rotation.x = Math.sin(t * 6) * 0.3
    u.rLeg.rotation.x = -Math.sin(t * 6) * 0.3
    model.position.y = Math.max(0, Math.sin(t * 6) * 0.3)
  }
}
