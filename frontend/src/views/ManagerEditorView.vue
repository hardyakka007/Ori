<template>
  <div class="manager-editor">
    <header class="editor-header">
      <button class="back-btn" @click="goHome">← Back</button>
      <h1>Manager Editor</h1>
      <p>Build your 3D manager</p>
    </header>

    <div class="editor-layout">

      <!-- 3D Preview -->
      <div class="preview-panel">
        <canvas ref="previewCanvas" class="preview-canvas"></canvas>
        <div class="preview-label">{{ managerName || 'Your Manager' }}</div>
        <input v-model="managerName" class="name-input" placeholder="Manager name..." maxlength="24" />
      </div>

      <!-- Customisation Controls -->
      <div class="controls-panel">

        <div class="section">
          <h3>Head Shape</h3>
          <div class="option-row">
            <button v-for="(h, i) in headShapes" :key="i"
              class="opt-btn" :class="{ active: headShape === i }" @click="setHead(i)">
              {{ h.label }}
            </button>
          </div>
        </div>

        <div class="section">
          <h3>Skin Tone</h3>
          <div class="swatch-row">
            <button v-for="(tone, i) in skinTones" :key="i"
              class="swatch" :class="{ active: skinTone === i }"
              :style="{ background: tone }" @click="setSkin(i)">
            </button>
          </div>
        </div>

        <div class="section">
          <h3>Hair Style</h3>
          <div class="option-row">
            <button v-for="(h, i) in hairStyles" :key="i"
              class="opt-btn sm" :class="{ active: hairStyle === i }" @click="setHair(i)">
              {{ h.label }}
            </button>
          </div>
          <div class="colour-row">
            <label>Hair Colour</label>
            <input type="color" v-model="hairColor" @input="rebuildModel" />
          </div>
        </div>

        <div class="section">
          <h3>Facial Hair</h3>
          <div class="option-row">
            <button v-for="(f, i) in facialHairs" :key="i"
              class="opt-btn sm" :class="{ active: facialHair === i }" @click="setFacial(i)">
              {{ f.label }}
            </button>
          </div>
        </div>

        <div class="section">
          <h3>Outfit</h3>
          <div class="option-row">
            <button v-for="(o, i) in outfits" :key="i"
              class="opt-btn" :class="{ active: outfit === i }" @click="setOutfit(i)">
              {{ o.label }}
            </button>
          </div>
        </div>

        <div class="section">
          <h3>Club</h3>
          <select v-model="selectedClub" class="club-select" @change="rebuildModel">
            <option v-for="c in clubs" :key="c.name" :value="c.name">{{ c.name }}</option>
          </select>
        </div>

        <button class="save-btn" @click="saveManager">Save Manager ✓</button>
        <div v-if="saved" class="saved-msg">Saved!</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import * as THREE from 'three'
import { createScene } from '../three/scene.js'
import { KIT_MAP } from '../three/playerModel.js'

const router = useRouter()

// Controls
const managerName = ref('')
const headShape   = ref(0)
const skinTone    = ref(2)
const hairStyle   = ref(0)
const hairColor   = ref('#2c1810')
const facialHair  = ref(0)
const outfit      = ref(0)
const selectedClub = ref('Manchester United')
const clubs       = ref([])
const saved       = ref(false)

const skinTones = [
  '#fad7b0','#f5c18a','#e8a96a','#c8834a',
  '#a0622a','#7a4420','#5c2e0e','#3d1a06',
]

const headShapes = [
  { label: 'Round',   rx: 1.0, ry: 1.0, rz: 1.0 },
  { label: 'Angular', rx: 0.9, ry: 1.1, rz: 0.9 },
  { label: 'Oval',    rx: 0.85, ry: 1.15, rz: 0.9 },
  { label: 'Square',  rx: 1.1, ry: 0.95, rz: 1.1 },
]

const hairStyles = [
  { label: 'Short',  height: 0.06 },
  { label: 'Long',   height: 0.18 },
  { label: 'Bald',   height: 0 },
  { label: 'Afro',   height: 0.28 },
  { label: 'Fade',   height: 0.05 },
  { label: 'Curly',  height: 0.22 },
  { label: 'Ponytail', height: 0.15 },
  { label: 'Mohawk', height: 0.25 },
]

const facialHairs = [
  { label: 'None' },
  { label: 'Stubble' },
  { label: 'Beard' },
  { label: 'Moustache' },
]

const outfits = [
  { label: 'Tracksuit', color: null },   // uses club colour
  { label: 'Dark Suit', color: '#1a1a2a' },
  { label: 'Light Suit', color: '#d4c9a8' },
  { label: 'Navy Suit', color: '#1a2a4a' },
  { label: 'Casual',   color: '#4a4a4a' },
]

// Three.js
const previewCanvas = ref(null)
let renderer, scene, camera, managerModel, animId
let clock = new THREE.Clock()

function initPreview() {
  const canvas = previewCanvas.value
  const s = createScene(canvas)
  renderer = s.renderer
  scene    = s.scene
  renderer.setClearColor(0x0d1117)
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 50)
  camera.position.set(0, 2, 4.5)
  camera.lookAt(0, 1, 0)

  // Platform
  const platform = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 0.08, 32),
    new THREE.MeshLambertMaterial({ color: 0x1a2a1a })
  )
  platform.position.y = -0.04
  scene.add(platform)

  buildManagerModel()
  animateLoop()
}

function buildManagerModel() {
  if (managerModel) {
    scene.remove(managerModel)
    managerModel.traverse(o => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose() } })
  }

  const group = new THREE.Group()
  const skin  = skinTones[skinTone.value]
  const skinHex = parseInt(skin.replace('#', ''), 16)

  const hs = headShapes[headShape.value]

  function mat(color) { return new THREE.MeshLambertMaterial({ color }) }
  function hex(str)   { return parseInt(str.replace('#', ''), 16) }

  // Outfit colour
  const kit    = KIT_MAP[selectedClub.value] || { primary: 0x555555 }
  const outfitDef = outfits[outfit.value]
  const outfitCol = outfitDef.color ? hex(outfitDef.color) : kit.primary

  // Head
  const headGeo = new THREE.SphereGeometry(0.3, 16, 12)
  const headMesh = new THREE.Mesh(headGeo, mat(skinHex))
  headMesh.scale.set(hs.rx, hs.ry, hs.rz)
  headMesh.position.y = 1.8
  group.add(headMesh)

  // Hair
  const hh = hairStyles[hairStyle.value].height
  if (hh > 0) {
    const hGeo = new THREE.SphereGeometry(0.31, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
    const hMesh = new THREE.Mesh(hGeo, mat(hex(hairColor.value)))
    hMesh.scale.set(hs.rx * 1.02, hh * 4 + 0.3, hs.rz * 1.02)
    hMesh.position.y = 1.85
    group.add(hMesh)
  }

  // Eyes (simple)
  for (const sx of [-0.1, 0.1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), mat(0x111111))
    eye.position.set(sx * hs.rx, 1.85, 0.26 * hs.rz)
    group.add(eye)
  }

  // Facial hair
  if (facialHair.value === 1) {  // stubble
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8, 0, Math.PI * 2, Math.PI * 0.55, Math.PI * 0.25), mat(0x553322))
    s.position.y = 1.63
    group.add(s)
  } else if (facialHair.value === 2) {  // beard
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.35), mat(0x442211))
    b.position.y = 1.6
    group.add(b)
  } else if (facialHair.value === 3) {  // moustache
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.07), mat(0x442211))
    m.position.set(0, 1.7, 0.27)
    group.add(m)
  }

  // Torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.6, 0.3), mat(outfitCol))
  torso.position.y = 1.15
  group.add(torso)

  // Club badge (small box on chest)
  const badge = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.04), mat(0xffd700))
  badge.position.set(-0.14, 1.2, 0.17)
  group.add(badge)

  // Arms
  const armGeo = new THREE.CylinderGeometry(0.085, 0.075, 0.55, 8)
  for (const [sx, rz] of [[-1, 0.18], [1, -0.18]]) {
    const arm = new THREE.Mesh(armGeo, mat(outfitCol))
    arm.position.set(sx * 0.35, 1.15, 0)
    arm.rotation.z = rz
    group.add(arm)
  }

  // Hands
  for (const sx of [-1, 1]) {
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), mat(skinHex))
    hand.position.set(sx * 0.39, 0.88, 0)
    group.add(hand)
  }

  // Trousers
  const trousers = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.28), mat(outfit.value === 0 ? outfitCol : 0x111111))
  trousers.position.y = 0.72
  group.add(trousers)

  // Legs
  const legGeo = new THREE.CylinderGeometry(0.1, 0.09, 0.52, 8)
  for (const sx of [-0.14, 0.14]) {
    const leg = new THREE.Mesh(legGeo, mat(outfit.value === 0 ? outfitCol : 0x111111))
    leg.position.set(sx, 0.46, 0)
    group.add(leg)
  }

  // Shoes
  for (const sx of [-0.14, 0.14]) {
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.3), mat(0x1a1a1a))
    shoe.position.set(sx, 0.18, 0.05)
    group.add(shoe)
  }

  scene.add(group)
  managerModel = group
}

function rebuildModel() { buildManagerModel() }

function setHead(i)    { headShape.value   = i; rebuildModel() }
function setSkin(i)    { skinTone.value    = i; rebuildModel() }
function setHair(i)    { hairStyle.value   = i; rebuildModel() }
function setFacial(i)  { facialHair.value  = i; rebuildModel() }
function setOutfit(i)  { outfit.value      = i; rebuildModel() }

function animateLoop() {
  animId = requestAnimationFrame(animateLoop)
  const dt = clock.getDelta()
  if (managerModel) {
    managerModel.rotation.y += dt * 0.4
  }
  renderer.render(scene, camera)
}

function saveManager() {
  const data = {
    name: managerName.value,
    headShape: headShape.value,
    skinTone: skinTone.value,
    hairStyle: hairStyle.value,
    hairColor: hairColor.value,
    facialHair: facialHair.value,
    outfit: outfit.value,
    club: selectedClub.value,
  }
  localStorage.setItem('tbg_manager', JSON.stringify(data))
  saved.value = true
  setTimeout(() => { saved.value = false }, 2000)
}

function loadManager() {
  try {
    const d = JSON.parse(localStorage.getItem('tbg_manager') || '{}')
    if (d.name)       managerName.value  = d.name
    if (d.headShape !== undefined) headShape.value  = d.headShape
    if (d.skinTone  !== undefined) skinTone.value   = d.skinTone
    if (d.hairStyle !== undefined) hairStyle.value  = d.hairStyle
    if (d.hairColor)  hairColor.value   = d.hairColor
    if (d.facialHair !== undefined) facialHair.value = d.facialHair
    if (d.outfit    !== undefined) outfit.value     = d.outfit
    if (d.club)       selectedClub.value = d.club
  } catch { /* ignore */ }
}

async function loadClubs() {
  try {
    const res = await fetch('/api/clubs')
    clubs.value = await res.json()
  } catch { /* ignore */ }
}

function goHome() {
  if (animId) cancelAnimationFrame(animId)
  if (renderer) renderer.dispose()
  router.push('/')
}

onMounted(async () => {
  await loadClubs()
  loadManager()
  initPreview()
})

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId)
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
.manager-editor { min-height: 100vh; background: #0d1117; display: flex; flex-direction: column; }
.editor-header { text-align: center; padding: 20px; border-bottom: 1px solid #1e2535; }
.editor-header h1 { font-size: 24px; color: #ffd700; margin: 0 0 4px; }
.editor-header p  { font-size: 11px; color: #556; letter-spacing: 2px; margin: 0; }
.back-btn { background: none; border: 1px solid #333; color: #777; padding: 6px 14px; border-radius: 4px; cursor: pointer; margin-bottom: 10px; }
.back-btn:hover { color: #fff; }

.editor-layout { display: flex; gap: 24px; padding: 24px; flex: 1; max-width: 1100px; margin: 0 auto; width: 100%; }

/* Preview */
.preview-panel { width: 300px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.preview-canvas { width: 300px; height: 400px; border-radius: 12px; border: 1px solid #1e2535; display: block; }
.preview-label { font-size: 15px; font-weight: 700; color: #fff; }
.name-input { background: #0a0a0a; border: 1px solid #333; color: #fff; padding: 8px 14px; border-radius: 6px; font-size: 14px; width: 100%; text-align: center; }

/* Controls */
.controls-panel { flex: 1; display: flex; flex-direction: column; gap: 16px; overflow-y: auto; }
.section { background: #111820; border: 1px solid #1e2535; border-radius: 8px; padding: 14px 16px; }
.section h3 { font-size: 11px; color: #ffd700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 10px; }

.option-row { display: flex; flex-wrap: wrap; gap: 6px; }
.opt-btn { padding: 7px 14px; border-radius: 5px; border: 1px solid #2e3545; background: #0d1117; color: #778; cursor: pointer; font-size: 12px; font-weight: 600; transition: all .1s; }
.opt-btn.active { background: #1a3a1a; border-color: #27ae60; color: #fff; }
.opt-btn:hover  { border-color: #3e5060; color: #aaa; }
.opt-btn.sm { padding: 5px 10px; font-size: 11px; }

.swatch-row { display: flex; gap: 8px; flex-wrap: wrap; }
.swatch { width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent; cursor: pointer; transition: border-color .1s; }
.swatch.active { border-color: #ffd700; transform: scale(1.15); }

.colour-row { display: flex; align-items: center; gap: 10px; margin-top: 10px; }
.colour-row label { font-size: 12px; color: #778; }
.colour-row input { width: 40px; height: 28px; border: none; border-radius: 4px; cursor: pointer; }

.club-select { background: #0a0a0a; border: 1px solid #333; color: #aaa; padding: 8px 12px; border-radius: 6px; width: 100%; font-size: 13px; }

.save-btn { background: linear-gradient(135deg, #ffd700, #e6a800); color: #000; border: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 900; cursor: pointer; letter-spacing: 1px; margin-top: 8px; }
.save-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(255,215,0,.3); }
.saved-msg { text-align: center; color: #27ae60; font-size: 13px; font-weight: 600; }

@media (max-width: 720px) {
  .editor-layout { flex-direction: column; }
  .preview-panel { width: 100%; }
  .preview-canvas { width: 100%; height: 300px; }
}
</style>
