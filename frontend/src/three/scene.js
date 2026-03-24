/**
 * scene.js — Three.js scene, renderer, and lighting setup
 * The Beautiful Game 2026
 */
import * as THREE from 'three'

export function createScene(canvas) {
  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setClearColor(0x1a2a4a)

  // Scene
  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x1a2a4a, 80, 200)

  // Ambient light — soft fill
  const ambient = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambient)

  // Hemisphere light — sky/ground colour
  const hemi = new THREE.HemisphereLight(0x87ceeb, 0x2d7a2d, 0.3)
  scene.add(hemi)

  return { renderer, scene }
}

export function resizeRenderer(renderer, camera, canvas) {
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (renderer.domElement.width !== w || renderer.domElement.height !== h) {
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
}
