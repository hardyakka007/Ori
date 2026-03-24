/**
 * cameraRig.js — 4 camera angles for the 3D match
 * The Beautiful Game 2026
 *
 * Modes:
 *  0 = TV Broadcast (default)  — side-on, elevated, wide
 *  1 = Behind the Goal         — low angle behind attacking goal
 *  2 = Wide (top-down)         — bird's eye, full pitch
 *  3 = Player Follow           — third-person behind controlled player
 */
import * as THREE from 'three'

export function createCamera(canvas) {
  const cam = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 500)
  setMode(cam, 0, null)
  return cam
}

const MODES = [
  // 0 — TV Broadcast
  { pos: new THREE.Vector3(0, 28, 70), target: new THREE.Vector3(0, 0, 0) },
  // 1 — Behind the Goal (home attacking away goal = +Z)
  { pos: new THREE.Vector3(0, 6, -62), target: new THREE.Vector3(0, 2, 50) },
  // 2 — Wide / top-down
  { pos: new THREE.Vector3(0, 80, 0.1), target: new THREE.Vector3(0, 0, 0) },
  // 3 — Player Follow (updated per frame)
  { pos: null, target: null },
]

export function setMode(camera, mode, playerPos) {
  if (mode < 3) {
    const m = MODES[mode]
    camera.position.copy(m.pos)
    camera.lookAt(m.target)
  }
  // mode 3 is updated every frame via updateFollowCamera
}

export function updateFollowCamera(camera, playerGroup) {
  if (!playerGroup) return
  const pos = playerGroup.position.clone()
  const behind = playerGroup.getWorldDirection(new THREE.Vector3()).multiplyScalar(-6)
  camera.position.set(pos.x + behind.x, pos.y + 4, pos.z + behind.z + 6)
  camera.lookAt(pos.x, pos.y + 1, pos.z)
}

export function cycleCamera(current) {
  return (current + 1) % 4
}
