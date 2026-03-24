<template>
  <div class="play-view">

    <!-- ── TEAM SELECTION ── -->
    <div v-if="phase === 'select'" class="screen select-screen">
      <header class="screen-header">
        <button class="back-btn" @click="goHome">← Back</button>
        <h1>Play the Game</h1>
        <p>Choose your team and opponent — 3D match</p>
      </header>

      <div class="team-pickers">
        <div class="picker-col">
          <h2 class="picker-title">🎮 Your Team</h2>
          <div class="club-grid">
            <button
              v-for="club in clubs" :key="club.name"
              class="club-btn" :class="{ selected: myTeam === club.name, blocked: oppTeam === club.name }"
              :disabled="oppTeam === club.name"
              @click="myTeam = club.name"
            >
              <span class="club-badge" :style="{ background: clubColor(club.name) }"></span>
              <span class="club-name">{{ club.name }}</span>
              <span class="club-league">{{ club.league }}</span>
            </button>
          </div>
        </div>

        <div class="vs-col">
          <div class="vs-badge">VS</div>
          <button class="kickoff-btn" :disabled="!myTeam || !oppTeam" @click="startMatch">
            Kick Off ⚽
          </button>
        </div>

        <div class="picker-col">
          <h2 class="picker-title">🤖 Opponent</h2>
          <div class="club-grid">
            <button
              v-for="club in clubs" :key="club.name"
              class="club-btn" :class="{ selected: oppTeam === club.name, blocked: myTeam === club.name }"
              :disabled="myTeam === club.name"
              @click="oppTeam = club.name"
            >
              <span class="club-badge" :style="{ background: clubColor(club.name) }"></span>
              <span class="club-name">{{ club.name }}</span>
              <span class="club-league">{{ club.league }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 3D MATCH ── -->
    <div v-else-if="phase === 'match'" class="match-wrapper">
      <!-- Scorebar -->
      <div class="scorebar">
        <span class="sb-team">{{ myTeam }}</span>
        <div class="sb-center">
          <span class="sb-score">{{ homeScore }} – {{ awayScore }}</span>
          <span class="sb-time">{{ gameMinDisplay }}'</span>
        </div>
        <span class="sb-team away">{{ oppTeam }}</span>
      </div>

      <!-- Three.js canvas -->
      <div class="canvas-wrap" ref="canvasWrap">
        <canvas ref="threeCanvas" class="three-canvas"></canvas>

        <!-- Camera mode indicator -->
        <div class="cam-label">📷 {{ camLabels[camMode] }}</div>

        <!-- Overlays -->
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

      <!-- Controls bar -->
      <div class="controls-bar">
        <span><kbd>↑↓←→</kbd> Move</span>
        <span><kbd>Space</kbd> Pass</span>
        <span><kbd>Z</kbd> Shoot</span>
        <span><kbd>X</kbd> Sprint</span>
        <span><kbd>S</kbd> Tackle</span>
        <span><kbd>C</kbd> Camera</span>
        <span><kbd>Esc</kbd> Pause</span>
      </div>

      <!-- Mobile touch controls -->
      <div class="touch-controls" v-if="isMobile">
        <div class="dpad">
          <button class="dpad-btn dpad-up"    @touchstart.prevent="pressKey('ArrowUp')"    @touchend.prevent="releaseKey('ArrowUp')">↑</button>
          <button class="dpad-btn dpad-left"  @touchstart.prevent="pressKey('ArrowLeft')"  @touchend.prevent="releaseKey('ArrowLeft')">←</button>
          <button class="dpad-btn dpad-right" @touchstart.prevent="pressKey('ArrowRight')" @touchend.prevent="releaseKey('ArrowRight')">→</button>
          <button class="dpad-btn dpad-down"  @touchstart.prevent="pressKey('ArrowDown')"  @touchend.prevent="releaseKey('ArrowDown')">↓</button>
        </div>
        <div class="action-btns">
          <button class="act-btn act-pass"    @touchstart.prevent="pressKey(' ')"    @touchend.prevent="releaseKey(' ')">PASS</button>
          <button class="act-btn act-shoot"   @touchstart.prevent="pressKey('z')"    @touchend.prevent="releaseKey('z')">SHOOT</button>
          <button class="act-btn act-sprint"  @touchstart.prevent="pressKey('x')"    @touchend.prevent="releaseKey('x')">SPRINT</button>
          <button class="act-btn act-tackle"  @touchstart.prevent="pressKey('s')"    @touchend.prevent="releaseKey('s')">TACKLE</button>
          <button class="act-btn act-cam"     @touchstart.prevent="switchCamera">CAM</button>
        </div>
      </div>
    </div>

    <!-- ── POST MATCH ── -->
    <div v-else-if="phase === 'post'" class="screen post-screen">
      <div class="post-card">
        <h2>Full Time</h2>
        <div class="post-score">
          <span>{{ myTeam }}</span>
          <span class="score-big">{{ homeScore }} – {{ awayScore }}</span>
          <span>{{ oppTeam }}</span>
        </div>
        <div class="post-actions">
          <button class="btn btn-primary" @click="restartMatch">Rematch</button>
          <button class="btn btn-secondary" @click="goHome">Main Menu</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
import * as THREE from 'three'
import { createScene, resizeRenderer } from '../three/scene.js'
import { buildPitch, buildGoals, PITCH_W, PITCH_L } from '../three/pitch.js'
import { buildStadium, buildFloodlights } from '../three/stadium.js'
import { createPlayerModel, animatePlayer, KIT_MAP } from '../three/playerModel.js'
import { createBall, stepBallPhysics, kickBall, checkGoal, resetBall } from '../three/ball.js'
import { createCamera, setMode, updateFollowCamera, cycleCamera } from '../three/cameraRig.js'

const router   = useRouter()
const phase    = ref('select')
const clubs    = ref([])
const myTeam   = ref('')
const oppTeam  = ref('')

// Match state
const homeScore     = ref(0)
const awayScore     = ref(0)
const gameSec       = ref(0)
const MATCH_SECS    = 180   // 3 real minutes = 90 game minutes
const paused        = ref(false)
const overlay       = ref(null)
const camMode       = ref(0)
const camLabels     = ['TV Broadcast', 'Behind Goal', 'Wide', 'Follow']
const isMobile      = ref(window.innerWidth < 900)

const gameMinDisplay = computed(() => Math.floor((gameSec.value / MATCH_SECS) * 90))

// Three.js refs
const threeCanvas = ref(null)
const canvasWrap  = ref(null)
let renderer, scene, camera, ball
let animId = null
let clock  = new THREE.Clock()

// Player groups [{ group, vel, team, isGK, state, stateClock }]
let playerObjects = []
let controlledIdx = 0  // index in playerObjects (home team)
const keys = {}

function clubColor(name) {
  const k = KIT_MAP[name]
  return k ? '#' + k.primary.toString(16).padStart(6, '0') : '#888'
}

// ── Load clubs from API ───────────────────────────────────────────────────────
async function loadClubs() {
  try {
    const res = await fetch('/api/clubs')
    const data = await res.json()
    clubs.value = data
  } catch { /* ignore */ }
}

// ── Start Match ───────────────────────────────────────────────────────────────
async function startMatch() {
  phase.value = 'match'
  await new Promise(r => setTimeout(r, 50))  // allow DOM render
  initThreeJS()
}

function initThreeJS() {
  const canvas = threeCanvas.value
  const wrap   = canvasWrap.value

  // Renderer + scene
  const s = createScene(canvas)
  renderer = s.renderer
  scene    = s.scene

  // Camera
  camera = createCamera(canvas)

  // Pitch + goals + stadium
  buildPitch(scene)
  buildGoals(scene)
  buildStadium(scene)
  buildFloodlights(scene)

  // Ball
  ball = createBall(scene)

  // Players
  spawnPlayers()

  // Resize
  resizeHandler()
  window.addEventListener('resize', resizeHandler)
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup',   onKeyUp)

  // Kickoff overlay
  showOverlay({ title: 'Kick Off!', sub: myTeam.value + ' vs ' + oppTeam.value,
                cls: 'overlay-kickoff', btn: 'Play', action: dismissOverlay })

  // Start loop
  clock.start()
  tick()
}

function spawnPlayers() {
  playerObjects = []

  // 4-3-3 formation positions (x, z) — normalised to pitch
  const homePos = [
    [0, -46],               // GK
    [-20, -32], [-7, -36], [7, -36], [20, -32],  // defenders
    [-12, -18], [0, -20], [12, -18],               // midfielders
    [-18, -6], [0, -4], [18, -6],                  // forwards
  ]
  const awayPos = homePos.map(([x, z]) => [-x, -z])

  const homeKit = KIT_MAP[myTeam.value]  || { primary: 0x1a6fc4 }
  const awayKit = KIT_MAP[oppTeam.value] || { primary: 0xc4241a }

  homePos.forEach(([x, z], i) => {
    const model = createPlayerModel(myTeam.value, i === 0, i % 8)
    model.position.set(x, 0, z)
    scene.add(model)
    playerObjects.push({ group: model, vel: new THREE.Vector2(0, 0),
                         team: 'home', isGK: i === 0, state: 'idle', stateClock: 0, idx: i })
  })

  awayPos.forEach(([x, z], i) => {
    const model = createPlayerModel(oppTeam.value, i === 0, (i + 4) % 8)
    model.position.set(x, 0, z)
    scene.add(model)
    playerObjects.push({ group: model, vel: new THREE.Vector2(0, 0),
                         team: 'away', isGK: i === 0, state: 'idle', stateClock: 0, idx: i })
  })

  controlledIdx = 0
  highlightControlled()
}

function highlightControlled() {
  playerObjects.forEach((p, i) => {
    // Pulse scale on controlled player
    if (p.team === 'home') {
      p.group.scale.setScalar(i === controlledIdx ? 1.08 : 1.0)
    }
  })
}

// ── Game Loop ─────────────────────────────────────────────────────────────────
function tick() {
  animId = requestAnimationFrame(tick)
  const dt = Math.min(clock.getDelta(), 0.05)

  if (!paused.value && phase.value === 'match' && !overlay.value) {
    gameSec.value += dt
    updateMatch(dt)
  }

  // Camera
  if (camMode.value === 3) {
    const cp = playerObjects[controlledIdx]
    if (cp) updateFollowCamera(camera, cp.group)
  }

  resizeRenderer(renderer, camera, threeCanvas.value)
  renderer.render(scene, camera)
}

function updateMatch(dt) {
  // Switch controlled player to nearest home player to ball
  autoSwitchPlayer()

  // Player input
  const cp = playerObjects[controlledIdx]
  if (cp) moveControlledPlayer(cp, dt)

  // AI for all other players
  playerObjects.forEach((p, i) => {
    if (p.team === 'home' && i === controlledIdx) return
    runAI(p, dt)
  })

  // Ball physics
  stepBallPhysics(ball, dt)

  // Goal check
  const goal = checkGoal(ball)
  if (goal) {
    if (goal === 'away') homeScore.value++
    else                  awayScore.value++
    onGoal(goal)
    return
  }

  // Half time at 50%
  if (gameSec.value >= MATCH_SECS / 2 && gameSec.value - dt < MATCH_SECS / 2) {
    onHalfTime()
  }

  // Full time
  if (gameSec.value >= MATCH_SECS) {
    onFullTime()
  }
}

function autoSwitchPlayer() {
  let best = controlledIdx, bestDist = Infinity
  const bp = ball.position
  playerObjects.forEach((p, i) => {
    if (p.team !== 'home') return
    const d = p.group.position.distanceTo(bp)
    if (d < bestDist) { bestDist = d; best = i }
  })
  if (best !== controlledIdx) {
    controlledIdx = best
    highlightControlled()
  }
}

function moveControlledPlayer(p, dt) {
  const spd = keys['x'] ? 10 : 6
  let dx = 0, dz = 0
  if (keys['ArrowUp']    || keys['w']) dz = -1
  if (keys['ArrowDown']  || keys['s'] && !keys['s_tackle']) dz = 1
  if (keys['ArrowLeft']  || keys['a']) dx = -1
  if (keys['ArrowRight'] || keys['d']) dx = 1

  if (dx !== 0 || dz !== 0) {
    const len = Math.sqrt(dx * dx + dz * dz)
    p.group.position.x += (dx / len) * spd * dt
    p.group.position.z += (dz / len) * spd * dt
    p.group.rotation.y = Math.atan2(dx, dz)
    p.state = keys['x'] ? 'sprint' : 'run'
  } else {
    p.state = 'idle'
  }

  // Clamp to pitch
  p.group.position.x = THREE.MathUtils.clamp(p.group.position.x, -PITCH_W / 2 + 1, PITCH_W / 2 - 1)
  p.group.position.z = THREE.MathUtils.clamp(p.group.position.z, -PITCH_L / 2 + 1, PITCH_L / 2 - 1)

  // Pass
  if (keys[' '] && !keys._passDone) {
    keys._passDone = true
    const dir = getBallDirection(p)
    kickBall(ball, dir, 0.55, 0.15)
    p.state = 'kick'
  }

  // Shoot
  if (keys['z'] && !keys._shootDone) {
    keys._shootDone = true
    const dir = getGoalDirection(p, 'away')
    kickBall(ball, dir, 1.0, 0.35)
    p.state = 'kick'
  }

  // Tackle
  if (keys['s'] && keys['s_tackle'] && !keys._tackleDone) {
    keys._tackleDone = true
    p.state = 'tackle'
    const d = p.group.position.distanceTo(ball.position)
    if (d < 3) {
      ball.userData.vel.multiplyScalar(-0.5)
    }
  }

  animatePlayer(p.group, p.state, dt)
}

function runAI(p, dt) {
  const bpos = ball.position
  const ppos = p.group.position
  const dist = ppos.distanceTo(bpos)

  if (p.team === 'away') {
    // Away AI: move toward ball, shoot when close
    const dir = new THREE.Vector3(bpos.x - ppos.x, 0, bpos.z - ppos.z).normalize()
    const spd = p.isGK ? 4 : 5.5
    if (dist > 2) {
      p.group.position.x += dir.x * spd * dt
      p.group.position.z += dir.z * spd * dt
      p.group.rotation.y = Math.atan2(dir.x, dir.z)
      p.state = 'run'
    } else {
      // Shoot toward home goal (z = -PITCH_L/2)
      const goalDir = new THREE.Vector3(
        (Math.random() - 0.5) * 4, 0,
        -PITCH_L / 2 - ppos.z
      ).normalize()
      kickBall(ball, goalDir, 0.9, 0.3)
      p.state = 'kick'
    }
  } else {
    // Home AI (non-controlled): support positions
    const baseZ = -30 + p.idx * 6
    const target = new THREE.Vector3(
      bpos.x * 0.4 + (Math.random() - 0.5) * 8,
      0,
      THREE.MathUtils.clamp(bpos.z * 0.5 + baseZ, -PITCH_L / 2, PITCH_L / 2)
    )
    const d2 = ppos.distanceTo(target)
    if (d2 > 3) {
      const dir2 = target.clone().sub(ppos).normalize()
      p.group.position.x += dir2.x * 4 * dt
      p.group.position.z += dir2.z * 4 * dt
      p.state = 'run'
    } else {
      p.state = 'idle'
    }
  }

  p.group.position.x = THREE.MathUtils.clamp(p.group.position.x, -PITCH_W / 2 + 1, PITCH_W / 2 - 1)
  p.group.position.z = THREE.MathUtils.clamp(p.group.position.z, -PITCH_L / 2 + 1, PITCH_L / 2 - 1)
  animatePlayer(p.group, p.state, dt)
}

function getBallDirection(p) {
  const b = ball.position
  const pp = p.group.position
  return new THREE.Vector3(b.x - pp.x, 0, b.z - pp.z).normalize()
}

function getGoalDirection(p, target) {
  const gz = target === 'away' ? -PITCH_L / 2 : PITCH_L / 2
  const pp = p.group.position
  const spread = (Math.random() - 0.5) * GOAL_W * 0.8
  return new THREE.Vector3(spread - pp.x, 0, gz - pp.z).normalize()
}

const GOAL_W = 7.32

// ── Events ────────────────────────────────────────────────────────────────────
function onGoal(side) {
  const scorer = side === 'away' ? myTeam.value : oppTeam.value
  const title  = side === 'away' ? `⚽ GOAL! ${myTeam.value}!` : `⚽ GOAL! ${oppTeam.value}!`
  // Celebrate all home players
  playerObjects.forEach(p => { if (p.team === 'home') p.state = 'celebrate' })
  showOverlay({ title, sub: `${homeScore.value} – ${awayScore.value}`, cls: 'overlay-goal' })
  setTimeout(() => {
    dismissOverlay()
    resetBall(ball)
    resetPositions()
  }, 2200)
}

function onHalfTime() {
  showOverlay({ title: 'Half Time', sub: `${homeScore.value} – ${awayScore.value}`,
                cls: 'overlay-halftime', btn: 'Continue', action: () => {
    dismissOverlay()
    swapEnds()
  }})
}

function onFullTime() {
  gameSec.value = MATCH_SECS
  showOverlay({ title: 'Full Time', sub: `${homeScore.value} – ${awayScore.value}`,
                cls: 'overlay-fulltime', btn: 'See Result', action: () => {
    cleanup()
    phase.value = 'post'
  }})
}

function swapEnds() {
  playerObjects.forEach(p => {
    p.group.position.x *= -1
    p.group.position.z *= -1
    p.group.rotation.y += Math.PI
  })
}

function resetPositions() {
  const homeBase = [
    [0, -46], [-20, -32], [-7, -36], [7, -36], [20, -32],
    [-12, -18], [0, -20], [12, -18], [-18, -6], [0, -4], [18, -6],
  ]
  const isSecondHalf = gameSec.value > MATCH_SECS / 2

  playerObjects.forEach((p, i) => {
    const baseIdx = i % 11
    let [x, z] = homeBase[baseIdx] || [0, 0]
    if (p.team === 'away') { x = -x; z = -z }
    if (isSecondHalf) { x = -x; z = -z }
    p.group.position.set(x, 0, z)
    p.state = 'idle'
  })
}

// ── Overlay helpers ───────────────────────────────────────────────────────────
function showOverlay(o) { overlay.value = o }
function dismissOverlay() { overlay.value = null }

// ── Key handlers ─────────────────────────────────────────────────────────────
function onKeyDown(e) {
  const k = e.key
  keys[k] = true
  if (k === 's') keys['s_tackle'] = true

  if (k === 'c' || k === 'C') switchCamera()
  if (k === 'Escape') paused.value = !paused.value
  if (k === ' ') e.preventDefault()
}

function onKeyUp(e) {
  const k = e.key
  keys[k] = false
  if (k === 's') keys['s_tackle'] = false
  if (k === ' ') keys._passDone  = false
  if (k === 'z') keys._shootDone = false
  if (k === 's') keys._tackleDone = false
}

function pressKey(k)   { keys[k] = true  }
function releaseKey(k) { keys[k] = false }

function switchCamera() {
  camMode.value = cycleCamera(camMode.value)
  if (camMode.value < 3) setMode(camera, camMode.value, null)
}

// ── Resize ────────────────────────────────────────────────────────────────────
function resizeHandler() {
  if (!canvasWrap.value || !threeCanvas.value) return
  const w = canvasWrap.value.clientWidth
  const h = canvasWrap.value.clientHeight
  threeCanvas.value.style.width  = w + 'px'
  threeCanvas.value.style.height = h + 'px'
  isMobile.value = w < 900
}

// ── Cleanup ───────────────────────────────────────────────────────────────────
function cleanup() {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize',   resizeHandler)
  window.removeEventListener('keydown',  onKeyDown)
  window.removeEventListener('keyup',    onKeyUp)
  if (renderer) { renderer.dispose(); renderer = null }
}

function goHome()       { cleanup(); router.push('/') }
function restartMatch() { cleanup(); homeScore.value = 0; awayScore.value = 0; gameSec.value = 0; startMatch() }

onMounted(() => { loadClubs() })
onBeforeUnmount(() => { cleanup() })
</script>

<style scoped>
.play-view { min-height: 100vh; background: #0a0a0a; display: flex; flex-direction: column; }

/* Select screen */
.screen { min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 24px; }
.screen-header { text-align: center; margin-bottom: 24px; }
.screen-header h1 { font-size: 28px; color: #fff; margin: 0 0 6px; }
.screen-header p  { color: #667; font-size: 12px; letter-spacing: 2px; margin: 0; }
.back-btn { background: none; border: 1px solid #333; color: #888; padding: 6px 14px; border-radius: 4px; cursor: pointer; margin-bottom: 12px; }
.back-btn:hover { color: #fff; border-color: #666; }

.team-pickers { display: flex; gap: 24px; width: 100%; max-width: 1000px; align-items: flex-start; }
.picker-col { flex: 1; }
.picker-title { font-size: 13px; color: #ffd700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; text-align: center; }
.vs-col { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; padding-top: 48px; }
.vs-badge { font-size: 32px; font-weight: 900; color: #333; }

.club-grid { display: flex; flex-direction: column; gap: 6px; }
.club-btn {
  display: flex; align-items: center; gap: 8px;
  background: #111820; border: 1px solid #1e2535; color: #aaa;
  padding: 8px 12px; border-radius: 6px; cursor: pointer; text-align: left;
  transition: all .12s;
}
.club-btn:hover  { background: #1a2535; color: #fff; border-color: #2e4060; }
.club-btn.selected { background: #1a3a1a; border-color: #27ae60; color: #fff; }
.club-btn.blocked  { opacity: 0.3; cursor: not-allowed; }
.club-badge { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.club-name  { font-size: 13px; font-weight: 600; flex: 1; }
.club-league { font-size: 10px; color: #556; letter-spacing: 1px; }

.kickoff-btn {
  background: linear-gradient(135deg, #27ae60, #1a7a40);
  color: #fff; border: none; padding: 14px 28px;
  border-radius: 8px; font-size: 16px; font-weight: 700; cursor: pointer;
}
.kickoff-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.kickoff-btn:not(:disabled):hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(39,174,96,.4); }

/* Match wrapper */
.match-wrapper { flex: 1; display: flex; flex-direction: column; background: #000; }

.scorebar {
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(0,0,0,.85); padding: 8px 20px;
  border-bottom: 1px solid #1a2a1a; z-index: 10;
}
.sb-team  { font-size: 13px; color: #aaa; font-weight: 600; }
.sb-team.away { text-align: right; }
.sb-center { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.sb-score { font-size: 22px; font-weight: 900; color: #fff; letter-spacing: 4px; }
.sb-time  { font-size: 11px; color: #ffd700; }

.canvas-wrap { flex: 1; position: relative; min-height: 400px; overflow: hidden; }
.three-canvas { width: 100%; height: 100%; display: block; }

.cam-label {
  position: absolute; top: 8px; left: 12px;
  font-size: 10px; color: rgba(255,255,255,.5); letter-spacing: 1px;
  text-transform: uppercase; pointer-events: none;
}

/* Overlays */
.overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,.65); z-index: 20;
}
.overlay-goal     { background: rgba(0,50,0,.75); }
.overlay-halftime { background: rgba(0,0,50,.75); }
.overlay-fulltime { background: rgba(30,0,0,.8); }
.overlay-kickoff  { background: rgba(0,0,0,.8); }
.overlay-content { text-align: center; padding: 32px 48px; }
.overlay-title { font-size: 42px; font-weight: 900; color: #fff; text-shadow: 0 2px 20px rgba(255,200,0,.5); }
.overlay-sub   { font-size: 22px; color: #aaa; margin-top: 8px; }
.overlay-btn   {
  margin-top: 20px; padding: 12px 36px; background: #27ae60;
  border: none; color: #fff; font-size: 15px; font-weight: 700;
  border-radius: 6px; cursor: pointer;
}
.overlay-btn:hover { background: #2ecc71; }

/* Controls bar */
.controls-bar {
  display: flex; gap: 16px; padding: 8px 16px; background: #080808;
  border-top: 1px solid #111; font-size: 11px; color: #445; flex-wrap: wrap;
}
.controls-bar span { display: flex; align-items: center; gap: 4px; }
kbd {
  background: #1a1a2a; border: 1px solid #333; border-radius: 3px;
  padding: 1px 5px; font-size: 10px; color: #888;
}

/* Touch controls */
.touch-controls {
  display: flex; justify-content: space-between; padding: 12px 16px;
  background: #050505; border-top: 1px solid #111;
}
.dpad { position: relative; width: 110px; height: 110px; }
.dpad-btn {
  position: absolute; width: 36px; height: 36px; background: #1a1a2a;
  border: 1px solid #333; border-radius: 6px; color: #888; font-size: 16px;
  display: flex; align-items: center; justify-content: center; cursor: pointer; user-select: none;
}
.dpad-up    { top: 0;    left: 37px; }
.dpad-down  { bottom: 0; left: 37px; }
.dpad-left  { left: 0;   top: 37px; }
.dpad-right { right: 0;  top: 37px; }

.action-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.act-btn {
  padding: 10px 14px; background: #1a1a2a; border: 1px solid #333;
  border-radius: 6px; color: #888; font-size: 11px; font-weight: 700;
  cursor: pointer; user-select: none; letter-spacing: 1px;
}
.act-pass   { background: #0d2a0d; border-color: #27ae60; color: #27ae60; }
.act-shoot  { background: #2a0d0d; border-color: #e74c3c; color: #e74c3c; }
.act-sprint { background: #1a1a0d; border-color: #f39c12; color: #f39c12; }

/* Post match */
.post-screen { justify-content: center; }
.post-card { background: #111820; border: 1px solid #1e2535; border-radius: 12px; padding: 40px; text-align: center; }
.post-card h2 { color: #ffd700; font-size: 16px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 20px; }
.post-score { display: flex; align-items: center; gap: 24px; margin-bottom: 32px; color: #aaa; font-size: 14px; }
.score-big  { font-size: 48px; font-weight: 900; color: #fff; }
.post-actions { display: flex; gap: 12px; justify-content: center; }
.btn { padding: 12px 28px; border-radius: 6px; border: none; font-size: 14px; font-weight: 700; cursor: pointer; }
.btn-primary   { background: #27ae60; color: #fff; }
.btn-secondary { background: #1a2535; color: #aaa; border: 1px solid #2e4060; }

/* Transitions */
.overlay-fade-enter-active, .overlay-fade-leave-active { transition: opacity .3s; }
.overlay-fade-enter-from, .overlay-fade-leave-to { opacity: 0; }

@media (max-width: 720px) {
  .team-pickers { flex-direction: column; }
  .vs-col { flex-direction: row; padding-top: 0; }
}
</style>
