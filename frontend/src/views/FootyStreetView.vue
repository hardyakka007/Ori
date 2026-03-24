<template>
  <div class="street-view">

    <!-- ── SELECT ── -->
    <div v-if="phase === 'select'" class="screen">
      <header class="screen-header">
        <button class="back-btn" @click="goHome">← Back</button>
        <h1>Footy Street</h1>
        <p>5v5 • First to 3 goals • Walls in play</p>
      </header>

      <div class="mode-tabs">
        <button class="mode-tab" :class="{ active: selectTab === 'quick' }" @click="selectTab = 'quick'">Quick Match</button>
        <button class="mode-tab" :class="{ active: selectTab === 'story' }" @click="selectTab = 'story'">Story Mode</button>
      </div>

      <!-- Quick Match -->
      <div v-if="selectTab === 'quick'" class="team-pickers">
        <div class="picker-col">
          <h2 class="picker-title">Your Team</h2>
          <div class="club-grid">
            <button v-for="c in clubs" :key="c.name" class="club-btn"
              :class="{ selected: myTeam === c.name, blocked: oppTeam === c.name }"
              :disabled="oppTeam === c.name" @click="myTeam = c.name">
              <span class="club-name">{{ c.name }}</span>
            </button>
          </div>
        </div>
        <div class="vs-col">
          <div class="vs-badge">VS</div>
          <button class="kickoff-btn" :disabled="!myTeam || !oppTeam" @click="startStreetMatch">Kick Off</button>
        </div>
        <div class="picker-col">
          <h2 class="picker-title">Opponent</h2>
          <div class="club-grid">
            <button v-for="c in clubs" :key="c.name" class="club-btn"
              :class="{ selected: oppTeam === c.name, blocked: myTeam === c.name }"
              :disabled="myTeam === c.name" @click="oppTeam = c.name">
              <span class="club-name">{{ c.name }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Story Mode -->
      <div v-else class="story-hub">
        <div v-if="!storySetup && !storyName" class="story-intro">
          <h2>Your Story</h2>
          <p>Enter your name to begin the 7-chapter street football journey.</p>
          <input v-model="nameInput" class="name-input" placeholder="Your name..." maxlength="20" />
          <div class="rival-choice">
            <p>Choose your rival:</p>
            <button class="rival-btn" :class="{ selected: rivalChoice === 'crew' }" @click="rivalChoice = 'crew'">
              The Crew — a whole team that humiliated you
            </button>
            <button class="rival-btn" :class="{ selected: rivalChoice === 'rival' }" @click="rivalChoice = 'player'">
              The Rival — one player always ahead of you
            </button>
          </div>
          <button class="kickoff-btn" :disabled="!nameInput || !rivalChoice" @click="beginStory">Begin</button>
        </div>
        <div v-else class="story-chapters">
          <div class="story-header">
            <span class="story-name">{{ storyName }}</span>
            <div class="story-progress">Chapter {{ storyChapter }} / 7</div>
            <div class="story-bar"><div class="story-fill" :style="{ width: (storyChapter / 7 * 100) + '%' }"></div></div>
          </div>
          <div class="chapters-list">
            <div v-for="ch in storyChapters" :key="ch.number" class="chapter-card"
              :class="{ done: completedChapters.includes(ch.number), current: ch.number === storyChapter, locked: ch.number > storyChapter }">
              <div class="ch-num">{{ ch.number }}</div>
              <div class="ch-info">
                <div class="ch-city">{{ ch.city }}, {{ ch.country }}</div>
                <div class="ch-title">{{ ch.title }}</div>
              </div>
              <div class="ch-status">{{ completedChapters.includes(ch.number) ? '✓' : ch.number === storyChapter ? '▶' : '🔒' }}</div>
            </div>
          </div>
          <div class="story-actions">
            <button class="kickoff-btn" @click="playCurrentChapter">Play Chapter {{ storyChapter }}</button>
            <button class="reset-btn" @click="resetStory">Reset Story</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 3D STREET MATCH ── -->
    <div v-else-if="phase === 'match'" class="match-wrapper">
      <div class="scorebar">
        <span class="sb-team">{{ myTeam }}</span>
        <div class="sb-center">
          <span class="sb-score">{{ homeScore }} – {{ awayScore }}</span>
          <span class="sb-time">{{ gameMinDisplay }}'</span>
          <span class="sb-target">First to 3</span>
        </div>
        <span class="sb-team away">{{ oppTeam }}</span>
      </div>

      <div class="canvas-wrap" ref="canvasWrap">
        <canvas ref="threeCanvas" class="three-canvas"></canvas>
        <div class="cam-label">📷 Street Mode</div>

        <Transition name="overlay-fade">
          <div v-if="overlay" class="overlay" :class="overlay.cls">
            <div class="overlay-content">
              <div class="overlay-title">{{ overlay.title }}</div>
              <div v-if="overlay.sub" class="overlay-sub">{{ overlay.sub }}</div>
              <button v-if="overlay.btn" class="overlay-btn" @click="overlay.action">{{ overlay.btn }}</button>
            </div>
          </div>
        </Transition>
      </div>

      <div class="controls-bar">
        <span><kbd>↑↓←→</kbd> Move</span>
        <span><kbd>Space</kbd> Pass</span>
        <span><kbd>Z</kbd> Shoot</span>
        <span><kbd>X</kbd> Sprint</span>
        <span><kbd>S</kbd> Tackle</span>
      </div>
    </div>

    <!-- ── POST MATCH ── -->
    <div v-else-if="phase === 'post'" class="screen">
      <div class="post-card">
        <div class="post-badge">{{ isStoryMode ? '📖 Chapter ' + storyChapter : '🏙️ Street' }}</div>
        <h2>{{ homeScore >= 3 ? 'You Win!' : 'You Lose!' }}</h2>
        <div class="post-score">
          <span>{{ myTeam }}</span>
          <span class="score-big">{{ homeScore }} – {{ awayScore }}</span>
          <span>{{ oppTeam }}</span>
        </div>
        <div v-if="isStoryMode && currentChapterData" class="story-result-text">
          {{ homeScore >= awayScore ? currentChapterData.post_win : currentChapterData.post_loss }}
        </div>
        <div class="post-actions">
          <button class="btn btn-primary" @click="playAgain">Play Again</button>
          <button class="btn btn-secondary" @click="goHome">Main Menu</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import * as THREE from 'three'
import { createScene, resizeRenderer } from '../three/scene.js'
import { PITCH_W, PITCH_L } from '../three/pitch.js'
import { createPlayerModel, animatePlayer, KIT_MAP } from '../three/playerModel.js'
import { createBall, stepBallPhysics, kickBall, resetBall } from '../three/ball.js'
import { createCamera } from '../three/cameraRig.js'

const router = useRouter()

// UI state
const phase      = ref('select')
const selectTab  = ref('quick')
const clubs      = ref([])
const myTeam     = ref('')
const oppTeam    = ref('')

// Story state
const nameInput        = ref('')
const storyName        = ref('')
const rivalChoice      = ref('')
const storySetup       = ref(false)
const storyChapter     = ref(1)
const storyChapters    = ref([])
const completedChapters = ref([])
const isStoryMode      = ref(false)
const currentChapterData = ref(null)

// Match state
const homeScore   = ref(0)
const awayScore   = ref(0)
const gameSec     = ref(0)
const MATCH_SECS  = 120  // 2 real minutes
const overlay     = ref(null)

const gameMinDisplay = computed(() => Math.floor((gameSec.value / MATCH_SECS) * 60))

// Three.js
const threeCanvas = ref(null)
const canvasWrap  = ref(null)
let renderer, scene, camera, ball
let animId = null
let clock  = new THREE.Clock()
let playerObjects = []
let controlledIdx = 0
const keys = {}

// Street pitch dimensions (compact)
const SPW = 32   // street pitch width
const SPL = 50   // street pitch length

async function loadClubs() {
  try {
    const res = await fetch('/api/clubs')
    clubs.value = await res.json()
  } catch { /* ignore */ }
}

async function loadStoryChapters() {
  try {
    const res = await fetch('/api/street-story/chapters')
    storyChapters.value = await res.json()
  } catch { /* ignore */ }
}

function loadStoryProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem('tbg_street_story') || '{}')
    if (saved.name) {
      storyName.value      = saved.name
      rivalChoice.value    = saved.rival || ''
      storyChapter.value   = saved.chapter || 1
      completedChapters.value = saved.completed || []
      storySetup.value     = true
    }
  } catch { /* ignore */ }
}

function saveStoryProgress() {
  localStorage.setItem('tbg_street_story', JSON.stringify({
    name: storyName.value,
    rival: rivalChoice.value,
    chapter: storyChapter.value,
    completed: completedChapters.value,
  }))
}

function beginStory() {
  storyName.value  = nameInput.value.trim()
  storySetup.value = true
  saveStoryProgress()
}

function resetStory() {
  storyName.value      = ''
  rivalChoice.value    = ''
  storyChapter.value   = 1
  completedChapters.value = []
  storySetup.value     = false
  nameInput.value      = ''
  localStorage.removeItem('tbg_street_story')
}

async function playCurrentChapter() {
  try {
    const res = await fetch(`/api/street-story/chapter/${storyChapter.value}?rival=${rivalChoice.value}`)
    currentChapterData.value = await res.json()
    myTeam.value  = 'Tottenham Hotspur'
    oppTeam.value = currentChapterData.value.opponent_club || 'Manchester City'
    isStoryMode.value = true
    startStreetMatch()
  } catch {
    myTeam.value  = 'Tottenham Hotspur'
    oppTeam.value = 'Manchester City'
    isStoryMode.value = true
    startStreetMatch()
  }
}

async function startStreetMatch() {
  phase.value = 'match'
  homeScore.value = 0
  awayScore.value = 0
  gameSec.value   = 0
  await new Promise(r => setTimeout(r, 50))
  initStreetThree()
}

function initStreetThree() {
  const canvas = threeCanvas.value
  const s      = createScene(canvas)
  renderer = s.renderer
  scene    = s.scene
  renderer.setClearColor(0x0a0a0a)

  // Street camera — lower angle, tighter
  camera = new THREE.PerspectiveCamera(65, canvas.clientWidth / canvas.clientHeight, 0.1, 300)
  camera.position.set(0, 20, 42)
  camera.lookAt(0, 0, 0)

  buildStreetPitch()
  ball = createBall(scene, 0xff6600)  // orange ball
  spawnStreetPlayers()

  window.addEventListener('resize', resizeHandler)
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup',   onKeyUp)

  showOverlay({ title: 'STREET FOOTBALL', sub: myTeam.value + ' vs ' + oppTeam.value,
                cls: 'overlay-kickoff', btn: 'Play', action: dismissOverlay })

  clock.start()
  tick()
}

function buildStreetPitch() {
  // Asphalt floor
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(SPW, SPL),
    new THREE.MeshLambertMaterial({ color: 0x2a2a2a })
  )
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  scene.add(floor)

  // Line markings
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
  function addLine(w, l, x, z) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), lineMat)
    m.rotation.x = -Math.PI / 2
    m.position.set(x, 0.02, z)
    scene.add(m)
  }
  const LW = 0.1
  addLine(SPW, LW, 0, -SPL / 2)
  addLine(SPW, LW, 0,  SPL / 2)
  addLine(LW, SPL, -SPW / 2, 0)
  addLine(LW, SPL,  SPW / 2, 0)
  addLine(SPW, LW, 0, 0)  // halfway

  // Cage walls
  const wallMat = new THREE.MeshLambertMaterial({ color: 0x444444, transparent: true, opacity: 0.6, wireframe: true })
  const wallH = 4
  function addWall(w, l, x, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, wallH, l), wallMat)
    m.position.set(x, wallH / 2, z)
    scene.add(m)
  }
  addWall(SPW + 1, 0.3, 0, -SPL / 2 - 0.15)
  addWall(SPW + 1, 0.3, 0,  SPL / 2 + 0.15)
  addWall(0.3, SPL + 1, -SPW / 2 - 0.15, 0)
  addWall(0.3, SPL + 1,  SPW / 2 + 0.15, 0)

  // Goals (smaller)
  const postMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
  for (const sign of [-1, 1]) {
    const gz = sign * SPL / 2
    function post(w, h, d, px, py, pz) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), postMat)
      m.position.set(px, py, gz + pz)
      scene.add(m)
    }
    const GW = 4, GH = 1.8
    post(0.08, GH, 0.08, -GW / 2, GH / 2, 0)
    post(0.08, GH, 0.08,  GW / 2, GH / 2, 0)
    post(GW, 0.08, 0.08, 0, GH, 0)
  }

  // Sodium overhead lights
  const lightMat = new THREE.MeshBasicMaterial({ color: 0xffcc66 })
  for (let i = -1; i <= 1; i += 2) {
    for (let j = -1; j <= 1; j += 2) {
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(1, 0.2, 1), lightMat)
      lamp.position.set(i * SPW * 0.4, 12, j * SPL * 0.4)
      scene.add(lamp)

      const pt = new THREE.PointLight(0xffaa44, 60, 40)
      pt.position.set(i * SPW * 0.4, 11, j * SPL * 0.4)
      pt.castShadow = true
      scene.add(pt)
    }
  }
}

function spawnStreetPlayers() {
  playerObjects = []
  const homePos = [[0, -18], [-6, -10], [0, -12], [6, -10], [0, -6]]
  const awayPos = homePos.map(([x, z]) => [-x, -z])

  homePos.forEach(([x, z], i) => {
    const m = createPlayerModel(myTeam.value, i === 0, i % 8)
    m.position.set(x, 0, z)
    scene.add(m)
    playerObjects.push({ group: m, team: 'home', isGK: i === 0, state: 'idle', idx: i })
  })
  awayPos.forEach(([x, z], i) => {
    const m = createPlayerModel(oppTeam.value, i === 0, (i + 4) % 8)
    m.position.set(x, 0, z)
    scene.add(m)
    playerObjects.push({ group: m, team: 'away', isGK: i === 0, state: 'idle', idx: i })
  })
  controlledIdx = 0
}

function tick() {
  animId = requestAnimationFrame(tick)
  const dt = Math.min(clock.getDelta(), 0.05)
  if (!overlay.value) {
    gameSec.value += dt
    updateStreetMatch(dt)
  }
  resizeRenderer(renderer, camera, threeCanvas.value)
  renderer.render(scene, camera)
}

function updateStreetMatch(dt) {
  autoSwitch()
  const cp = playerObjects[controlledIdx]
  if (cp) movePlayer(cp, dt)
  playerObjects.forEach((p, i) => {
    if (p.team === 'home' && i === controlledIdx) return
    streetAI(p, dt)
  })
  stepBallPhysics(ball, dt, { wallBounce: true, wallX: SPW / 2 - 0.3, wallZ: SPL / 2 - 0.3 })

  // Goal check (smaller goals)
  const bx = ball.position.x, bz = ball.position.z, by = ball.position.y
  if (Math.abs(bx) < 2 && by < 1.8) {
    if (bz < -SPL / 2) { awayScore.value++; onGoal('home') }
    if (bz >  SPL / 2) { homeScore.value++; onGoal('away') }
  }

  if (homeScore.value >= 3 || awayScore.value >= 3 || gameSec.value >= MATCH_SECS) {
    onFullTime()
  }
}

function autoSwitch() {
  let best = controlledIdx, bestDist = Infinity
  playerObjects.forEach((p, i) => {
    if (p.team !== 'home') return
    const d = p.group.position.distanceTo(ball.position)
    if (d < bestDist) { bestDist = d; best = i }
  })
  controlledIdx = best
}

function movePlayer(p, dt) {
  const spd = keys['x'] ? 9 : 5.5
  let dx = 0, dz = 0
  if (keys['ArrowUp'])    dz = -1
  if (keys['ArrowDown'])  dz = 1
  if (keys['ArrowLeft'])  dx = -1
  if (keys['ArrowRight']) dx = 1
  if (dx || dz) {
    const l = Math.sqrt(dx*dx + dz*dz)
    p.group.position.x += (dx/l) * spd * dt
    p.group.position.z += (dz/l) * spd * dt
    p.group.rotation.y = Math.atan2(dx, dz)
    p.state = keys['x'] ? 'sprint' : 'run'
  } else { p.state = 'idle' }
  p.group.position.x = THREE.MathUtils.clamp(p.group.position.x, -SPW/2+1, SPW/2-1)
  p.group.position.z = THREE.MathUtils.clamp(p.group.position.z, -SPL/2+1, SPL/2-1)
  if (keys[' '] && !keys._passDone) {
    keys._passDone = true
    const d = new THREE.Vector3(ball.position.x - p.group.position.x, 0, ball.position.z - p.group.position.z).normalize()
    kickBall(ball, d, 0.6, 0.1)
    p.state = 'kick'
  }
  if (keys['z'] && !keys._shootDone) {
    keys._shootDone = true
    const gz = -SPL / 2
    const d = new THREE.Vector3((Math.random()-0.5)*2 - p.group.position.x, 0, gz - p.group.position.z).normalize()
    kickBall(ball, d, 0.95, 0.25)
    p.state = 'kick'
  }
  animatePlayer(p.group, p.state, dt)
}

function streetAI(p, dt) {
  const bp = ball.position, pp = p.group.position
  const dist = pp.distanceTo(bp)
  if (p.team === 'away') {
    const dir = new THREE.Vector3(bp.x - pp.x, 0, bp.z - pp.z).normalize()
    if (dist > 1.5) {
      p.group.position.x += dir.x * 5 * dt
      p.group.position.z += dir.z * 5 * dt
      p.state = 'run'
    } else {
      const gz = SPL / 2
      const d = new THREE.Vector3((Math.random()-0.5)*2, 0, gz - pp.z).normalize()
      kickBall(ball, d, 0.85, 0.2)
      p.state = 'kick'
    }
  } else {
    const tz = new THREE.Vector3(bp.x * 0.3, 0, THREE.MathUtils.clamp(bp.z * 0.4 - p.idx * 4, -SPL/2, SPL/2))
    const d2 = pp.distanceTo(tz)
    if (d2 > 2) {
      const dir2 = tz.clone().sub(pp).normalize()
      p.group.position.x += dir2.x * 4 * dt
      p.group.position.z += dir2.z * 4 * dt
      p.state = 'run'
    } else { p.state = 'idle' }
  }
  p.group.position.x = THREE.MathUtils.clamp(p.group.position.x, -SPW/2+1, SPW/2-1)
  p.group.position.z = THREE.MathUtils.clamp(p.group.position.z, -SPL/2+1, SPL/2-1)
  animatePlayer(p.group, p.state, dt)
}

function onGoal(side) {
  showOverlay({ title: side === 'away' ? `⚽ GOAL! ${myTeam.value}!` : `⚽ GOAL! ${oppTeam.value}!`,
                sub: `${homeScore.value} – ${awayScore.value}`, cls: 'overlay-goal' })
  setTimeout(() => { dismissOverlay(); resetBall(ball) }, 1800)
}

function onFullTime() {
  if (isStoryMode.value && homeScore.value >= 3) {
    if (!completedChapters.value.includes(storyChapter.value)) {
      completedChapters.value.push(storyChapter.value)
    }
    if (storyChapter.value < 7) storyChapter.value++
    saveStoryProgress()
  }
  showOverlay({ title: homeScore.value >= awayScore.value ? 'You Win!' : 'Final Whistle',
                sub: `${homeScore.value} – ${awayScore.value}`, cls: 'overlay-fulltime',
                btn: 'See Result', action: () => { cleanup(); phase.value = 'post' } })
}

function showOverlay(o) { overlay.value = o }
function dismissOverlay() { overlay.value = null }

function onKeyDown(e) {
  keys[e.key] = true
  if (e.key === ' ') e.preventDefault()
}
function onKeyUp(e) {
  keys[e.key] = false
  if (e.key === ' ') keys._passDone  = false
  if (e.key === 'z') keys._shootDone = false
}

function resizeHandler() {
  if (!canvasWrap.value || !threeCanvas.value) return
  const w = canvasWrap.value.clientWidth
  const h = canvasWrap.value.clientHeight
  threeCanvas.value.style.width  = w + 'px'
  threeCanvas.value.style.height = h + 'px'
}

function cleanup() {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resizeHandler)
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
  if (renderer) { renderer.dispose(); renderer = null }
}

function goHome()     { cleanup(); router.push('/') }
function playAgain()  { cleanup(); startStreetMatch() }

onMounted(() => { loadClubs(); loadStoryChapters(); loadStoryProgress() })
onBeforeUnmount(() => { cleanup() })
</script>

<style scoped>
.street-view { min-height: 100vh; background: #0a0a0a; display: flex; flex-direction: column; }
.screen { min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 24px; }
.screen-header { text-align: center; margin-bottom: 20px; }
.screen-header h1 { font-size: 26px; color: #ff6600; margin: 0 0 6px; }
.screen-header p  { color: #555; font-size: 11px; letter-spacing: 2px; }
.back-btn { background: none; border: 1px solid #333; color: #777; padding: 6px 14px; border-radius: 4px; cursor: pointer; margin-bottom: 10px; }
.back-btn:hover { color: #fff; }

.mode-tabs { display: flex; gap: 8px; margin-bottom: 20px; }
.mode-tab { padding: 8px 24px; border-radius: 6px; border: 1px solid #333; background: #111; color: #666; cursor: pointer; font-size: 13px; font-weight: 700; }
.mode-tab.active { background: #ff6600; border-color: #ff6600; color: #fff; }

.team-pickers { display: flex; gap: 20px; width: 100%; max-width: 800px; }
.picker-col { flex: 1; }
.picker-title { font-size: 12px; color: #ff6600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; text-align: center; }
.vs-col { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; padding-top: 40px; }
.vs-badge { font-size: 28px; font-weight: 900; color: #333; }

.club-grid { display: flex; flex-direction: column; gap: 5px; }
.club-btn { background: #111820; border: 1px solid #1e2535; color: #aaa; padding: 8px 12px; border-radius: 5px; cursor: pointer; text-align: left; font-size: 12px; }
.club-btn.selected { background: #2a1a00; border-color: #ff6600; color: #fff; }
.club-btn.blocked { opacity: 0.3; cursor: not-allowed; }
.club-name { font-size: 12px; font-weight: 600; }
.kickoff-btn { background: linear-gradient(135deg, #ff6600, #c0392b); color: #fff; border: none; padding: 12px 24px; border-radius: 8px; font-size: 15px; font-weight: 700; cursor: pointer; }
.kickoff-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* Story */
.story-hub { width: 100%; max-width: 700px; }
.story-intro { background: #111820; border: 1px solid #1e2535; border-radius: 12px; padding: 32px; text-align: center; }
.story-intro h2 { color: #ff6600; margin-bottom: 10px; }
.story-intro p  { color: #667; margin-bottom: 20px; font-size: 13px; }
.name-input { background: #0a0a0a; border: 1px solid #333; color: #fff; padding: 10px 16px; border-radius: 6px; font-size: 15px; width: 100%; margin-bottom: 16px; }
.rival-choice { margin-bottom: 20px; text-align: left; }
.rival-choice p { color: #888; font-size: 12px; margin-bottom: 8px; }
.rival-btn { display: block; width: 100%; padding: 10px 14px; margin-bottom: 6px; background: #0a0a0a; border: 1px solid #333; color: #888; border-radius: 6px; text-align: left; cursor: pointer; font-size: 12px; }
.rival-btn.selected { border-color: #ff6600; color: #ff6600; background: #1a0a00; }

.story-header { margin-bottom: 16px; text-align: center; }
.story-name { font-size: 18px; font-weight: 900; color: #fff; }
.story-progress { font-size: 11px; color: #888; margin-top: 4px; }
.story-bar { width: 100%; height: 4px; background: #1a1a1a; border-radius: 2px; margin-top: 6px; }
.story-fill { height: 100%; background: #ff6600; border-radius: 2px; transition: width 0.4s; }

.chapters-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.chapter-card { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; border: 1px solid #1e2535; background: #111820; }
.chapter-card.done    { border-color: #2a4a2a; background: #0a1a0a; }
.chapter-card.current { border-color: #ff6600; background: #1a0a00; }
.chapter-card.locked  { opacity: 0.4; }
.ch-num { width: 28px; height: 28px; border-radius: 50%; background: #333; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 12px; color: #fff; flex-shrink: 0; }
.ch-info { flex: 1; }
.ch-city  { font-size: 10px; color: #667; letter-spacing: 1px; text-transform: uppercase; }
.ch-title { font-size: 13px; color: #ccc; font-weight: 600; }
.ch-status { font-size: 16px; }
.story-actions { display: flex; gap: 10px; justify-content: center; }
.reset-btn { background: none; border: 1px solid #333; color: #666; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 13px; }

/* Match */
.match-wrapper { flex: 1; display: flex; flex-direction: column; background: #000; }
.scorebar { display: flex; align-items: center; justify-content: space-between; padding: 8px 20px; background: rgba(0,0,0,.9); border-bottom: 1px solid #1a1a1a; }
.sb-team { font-size: 12px; color: #aaa; font-weight: 600; }
.sb-team.away { text-align: right; }
.sb-center { display: flex; flex-direction: column; align-items: center; }
.sb-score { font-size: 22px; font-weight: 900; color: #fff; letter-spacing: 4px; }
.sb-time  { font-size: 10px; color: #ffd700; }
.sb-target { font-size: 9px; color: #ff6600; letter-spacing: 1px; }
.canvas-wrap { flex: 1; position: relative; min-height: 380px; overflow: hidden; }
.three-canvas { width: 100%; height: 100%; display: block; }
.cam-label { position: absolute; top: 8px; left: 12px; font-size: 10px; color: rgba(255,255,255,.4); letter-spacing: 1px; pointer-events: none; }
.controls-bar { display: flex; gap: 14px; padding: 7px 14px; background: #050505; border-top: 1px solid #111; font-size: 10px; color: #445; flex-wrap: wrap; }
kbd { background: #1a1a2a; border: 1px solid #333; border-radius: 3px; padding: 1px 5px; font-size: 9px; color: #888; }
.overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.7); z-index: 20; }
.overlay-goal     { background: rgba(0,40,0,.8); }
.overlay-fulltime { background: rgba(30,10,0,.85); }
.overlay-kickoff  { background: rgba(0,0,0,.85); }
.overlay-content { text-align: center; padding: 28px 44px; }
.overlay-title { font-size: 38px; font-weight: 900; color: #fff; }
.overlay-sub   { font-size: 20px; color: #aaa; margin-top: 8px; }
.overlay-btn   { margin-top: 18px; padding: 11px 32px; background: #ff6600; border: none; color: #fff; font-size: 14px; font-weight: 700; border-radius: 6px; cursor: pointer; }

/* Post match */
.post-card { background: #111820; border: 1px solid #1e2535; border-radius: 12px; padding: 36px; text-align: center; max-width: 500px; }
.post-badge { font-size: 12px; color: #ff6600; letter-spacing: 2px; margin-bottom: 8px; }
.post-card h2 { color: #fff; font-size: 28px; margin-bottom: 20px; }
.post-score { display: flex; align-items: center; gap: 20px; margin-bottom: 16px; color: #aaa; font-size: 13px; justify-content: center; }
.score-big { font-size: 42px; font-weight: 900; color: #ff6600; }
.story-result-text { font-size: 12px; color: #667; line-height: 1.6; margin-bottom: 20px; max-width: 380px; white-space: pre-wrap; }
.post-actions { display: flex; gap: 10px; justify-content: center; }
.btn { padding: 11px 26px; border-radius: 6px; border: none; font-size: 14px; font-weight: 700; cursor: pointer; }
.btn-primary   { background: #ff6600; color: #fff; }
.btn-secondary { background: #1a2535; color: #aaa; border: 1px solid #2e4060; }
.overlay-fade-enter-active, .overlay-fade-leave-active { transition: opacity .3s; }
.overlay-fade-enter-from, .overlay-fade-leave-to { opacity: 0; }
</style>
