/**
 * stadium.js — Stadium stands, floodlights, sky
 * The Beautiful Game 2026
 */
import * as THREE from 'three'
import { PITCH_W, PITCH_L } from './pitch.js'

const STAND_H  = 14
const STAND_IN = 4    // gap between pitch edge and stand
const STAND_D  = 12   // depth (thickness) of stands

export function buildStadium(scene) {
  const group = new THREE.Group()

  // ── Stands (4 sides) ────────────────────────────────────────────────────────
  const concreteMat = new THREE.MeshLambertMaterial({ color: 0x555566 })
  const seatsColors = [0xc8102e, 0x1a6fc4, 0xffffff, 0xffd700]

  function addStand(w, d, h, rx, x, z) {
    // Concrete base
    const geo  = new THREE.BoxGeometry(w, h, d)
    const mesh = new THREE.Mesh(geo, concreteMat)
    mesh.rotation.x = rx
    mesh.position.set(x, h / 2, z)
    mesh.castShadow = true
    mesh.receiveShadow = true
    group.add(mesh)

    // Seat rows (coloured blocks on the face)
    const rows = 6
    const rowH = (h * 0.7) / rows
    for (let r = 0; r < rows; r++) {
      const col = seatsColors[r % seatsColors.length]
      const sgeo = new THREE.BoxGeometry(w * 0.98, rowH * 0.7, 0.3)
      const smat = new THREE.MeshLambertMaterial({ color: col })
      const sm   = new THREE.Mesh(sgeo, smat)
      const yOff = -h / 2 + rowH * r + rowH * 0.5 + h * 0.15
      // Place on inner face
      const faceZ = d / 2 * (z > 0 ? -1 : z < 0 ? 1 : 0)
      const faceX = d / 2 * (x > 0 ? -1 : x < 0 ? 1 : 0)
      sm.position.set(faceX, yOff, faceZ)
      if (rx !== 0) sm.rotation.x = rx
      mesh.add(sm)
    }
  }

  const halfW = PITCH_W / 2 + STAND_IN
  const halfL = PITCH_L / 2 + STAND_IN
  const sw    = PITCH_W + STAND_IN * 2 + STAND_D * 2

  // Side stands (long sides)
  addStand(PITCH_L + STAND_IN * 2, STAND_D, STAND_H, 0,  halfW + STAND_D / 2, 0)
  addStand(PITCH_L + STAND_IN * 2, STAND_D, STAND_H, 0, -halfW - STAND_D / 2, 0)

  // End stands (short sides)
  addStand(sw, STAND_D, STAND_H * 0.8, 0, 0,  halfL + STAND_D / 2)
  addStand(sw, STAND_D, STAND_H * 0.8, 0, 0, -halfL - STAND_D / 2)

  scene.add(group)
  return group
}

export function buildFloodlights(scene) {
  const lights = []
  const poleH  = 30
  const poleMat = new THREE.MeshLambertMaterial({ color: 0xcccccc })
  const headMat = new THREE.MeshLambertMaterial({ color: 0xffffaa })

  const corners = [
    [ PITCH_W / 2 + 8,  PITCH_L / 2 + 8],
    [-PITCH_W / 2 - 8,  PITCH_L / 2 + 8],
    [ PITCH_W / 2 + 8, -PITCH_L / 2 - 8],
    [-PITCH_W / 2 - 8, -PITCH_L / 2 - 8],
  ]

  corners.forEach(([cx, cz]) => {
    // Pole
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.5, poleH, 8),
      poleMat
    )
    pole.position.set(cx, poleH / 2, cz)
    pole.castShadow = true
    scene.add(pole)

    // Head (light housing)
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(3, 0.6, 1.5),
      headMat
    )
    head.position.set(cx, poleH + 0.3, cz)
    scene.add(head)

    // SpotLight
    const spot = new THREE.SpotLight(0xfffaee, 180, 200, Math.PI / 5, 0.4, 1.5)
    spot.position.set(cx, poleH, cz)
    spot.target.position.set(0, 0, 0)
    spot.castShadow = true
    spot.shadow.mapSize.width  = 512
    spot.shadow.mapSize.height = 512
    spot.shadow.camera.near = 1
    spot.shadow.camera.far  = 200
    scene.add(spot)
    scene.add(spot.target)
    lights.push(spot)
  })

  return lights
}
