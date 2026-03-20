<template>
  <div class="play-view">

    <!-- ── TEAM SELECTION ── -->
    <div v-if="phase === 'select'" class="screen select-screen">
      <header class="screen-header">
        <button class="back-btn" @click="goHome">← Back</button>
        <h1>Play the Game</h1>
        <p>Choose your team and opponent</p>
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
              <span class="club-name">{{ club.name }}</span>
              <span class="club-league">{{ club.league }}</span>
            </button>
          </div>
        </div>

        <div class="vs-col">
          <div class="vs-badge">VS</div>
          <button class="kickoff-btn" :disabled="!myTeam || !oppTeam" @click="loadTeams">
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
              <span class="club-name">{{ club.name }}</span>
              <span class="club-league">{{ club.league }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ── MATCH ── -->
    <div v-else-if="phase === 'match'" class="match-wrapper" @keydown.prevent>
      <!-- Scorebar -->
      <div class="scorebar">
        <span class="sb-team">{{ homeName }}</span>
        <div class="sb-center">
          <span class="sb-score">{{ homeScore }} – {{ awayScore }}</span>
          <span class="sb-time">{{ gameMinDisplay }}'</span>
        </div>
        <span class="sb-team away">{{ awayName }}</span>
      </div>

      <!-- Canvas -->
      <div class="canvas-wrap" ref="canvasWrapRef">
        <canvas ref="canvasRef" :width="CANVAS_W" :height="CANVAS_H"></canvas>

        <!-- Overlays -->
        <div v-if="overlay" class="overlay" :class="overlayClass">
          <div class="overlay-content">
            <div class="overlay-title">{{ overlay.title }}</div>
            <div v-if="overlay.subtitle" class="overlay-sub">{{ overlay.subtitle }}</div>
            <button v-if="overlay.btn" class="overlay-btn" @click="overlay.action">{{ overlay.btn }}</button>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="controls-bar">
        <span><kbd>↑↓←→</kbd> Move</span>
        <span><kbd>SPC</kbd> Pass</span>
        <span><kbd>Z</kbd> Shoot</span>
        <span><kbd>X</kbd> Sprint</span>
        <span><kbd>S</kbd> Tackle</span>
        <span><kbd>Esc</kbd> Pause</span>
        <button class="touch-toggle-btn" @click="showTouchControls = !showTouchControls">
          {{ showTouchControls ? 'Hide' : 'Touch' }} Controls
        </button>
      </div>

      <!-- Touch Controls -->
      <div v-if="showTouchControls || isMobile" class="touch-controls">
        <!-- D-pad -->
        <div class="touch-dpad">
          <div class="dpad-row">
            <button
              class="touch-btn dpad-up"
              @touchstart.prevent="touchStart('up')" @touchend.prevent="touchEnd('up')"
              @click="touchStart('up')"
            >↑</button>
          </div>
          <div class="dpad-row">
            <button
              class="touch-btn dpad-left"
              @touchstart.prevent="touchStart('left')" @touchend.prevent="touchEnd('left')"
              @click="touchStart('left')"
            >←</button>
            <button class="touch-btn dpad-center" disabled>·</button>
            <button
              class="touch-btn dpad-right"
              @touchstart.prevent="touchStart('right')" @touchend.prevent="touchEnd('right')"
              @click="touchStart('right')"
            >→</button>
          </div>
          <div class="dpad-row">
            <button
              class="touch-btn dpad-down"
              @touchstart.prevent="touchStart('down')" @touchend.prevent="touchEnd('down')"
              @click="touchStart('down')"
            >↓</button>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="touch-actions">
          <div class="action-row">
            <button
              class="touch-btn action-pass"
              @touchstart.prevent="touchStart('space')" @touchend.prevent="touchEnd('space')"
              @click="touchStart('space')"
            >PASS</button>
            <button
              class="touch-btn action-shoot"
              @touchstart.prevent="touchStart('z')" @touchend.prevent="touchEnd('z')"
              @click="touchStart('z')"
            >SHOOT</button>
          </div>
          <div class="action-row">
            <button
              class="touch-btn action-sprint"
              @touchstart.prevent="touchStart('x')" @touchend.prevent="touchEnd('x')"
              @click="touchStart('x')"
            >SPRINT</button>
            <button
              class="touch-btn action-tackle"
              @touchstart.prevent="touchStart('s')" @touchend.prevent="touchEnd('s')"
              @click="touchStart('s')"
            >TACKLE</button>
          </div>
          <div class="action-row">
            <button
              class="touch-btn action-pause"
              @touchstart.prevent="touchStart('escape')" @touchend.prevent="touchEnd('escape')"
              @click="touchStart('escape')"
            >PAUSE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ── FULL TIME ── -->
    <div v-else-if="phase === 'fulltime'" class="screen ft-screen">
      <div class="ft-card">
        <h2>Full Time</h2>
        <div class="ft-score">{{ homeScore }} – {{ awayScore }}</div>
        <div class="ft-teams">{{ homeName }} vs {{ awayName }}</div>
        <div v-if="scorers.length" class="ft-scorers">
          <div v-for="s in scorers" :key="s.player+s.minute" class="ft-scorer">
            ⚽ {{ s.player }} <span class="ft-min">{{ s.minute }}'</span>
          </div>
        </div>
        <div class="ft-motm" v-if="motmPlayer">
          🏅 Man of the Match: <strong>{{ motmPlayer }}</strong>
        </div>
        <button class="back-btn" @click="goHome">Back to Menu</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ── Constants ────────────────────────────────────────────────────────────────
const CANVAS_W = 900
const CANVAS_H = 400
const PW = 200          // pitch width in game units
const PH = 80           // pitch height in game units
const SCALE = CANVAS_H / PH   // 5 px / unit
const CAM_VIEW = CANVAS_W / SCALE  // 180 units visible
const GOAL_Y1 = 30      // goal top edge
const GOAL_Y2 = 50      // goal bottom edge
const GOAL_CY = 40      // goal centre y
const PLAYER_R = 3      // player circle radius
const BALL_R   = 2.5    // ball radius

// Timing: 3 real min = 90 game min → 60 ticks per game minute at 30fps
const FPS = 30
const GAME_DUR_TICKS = 5400   // 3 min × 30 fps = 5400
const TICKS_PER_GMIN = 60
const HALFTIME_TICK  = 2700

// Speeds
const SPD_NORMAL  = 2.6
const SPD_SPRINT  = 4.2
const FRICTION    = 0.90
const PASS_PWR    = 17
const SHOOT_PWR   = 28
const CTRL_RAD    = 5
const TACKLE_RAD  = 5.5

// ── State ─────────────────────────────────────────────────────────────────────
const clubs    = ref([])
const myTeam   = ref('')
const oppTeam  = ref('')
const phase    = ref('select')

const canvasRef     = ref(null)
const canvasWrapRef = ref(null)

// Game state
const homeScore = ref(0)
const awayScore = ref(0)
const homeName  = ref('')
const awayName  = ref('')
const gameMinDisplay = ref(0)
const overlay   = ref(null)
const overlayClass = ref('')
const scorers   = ref([])
const motmPlayer = ref('')

// Internal game objects
let ctx = null
let rafId = null
let loopInterval = null
let tick = 0
let gamePaused = false
let halfSwapped = false

let ball = null
let homePlayers = []
let awayPlayers = []
let controlledId = 0  // index in homePlayers
let sprintCooldown = 0
let goalFlash = 0

const keys = { up: false, down: false, left: false, right: false, space: false, z: false, x: false, s: false }
const keyLatch = { space: false, z: false, s: false }

const showTouchControls = ref(false)
const isMobile = computed(() => window.innerWidth <= 900)

// ── Helpers ───────────────────────────────────────────────────────────────────
function dist2(a, b) { return (a.x-b.x)**2 + (a.y-b.y)**2 }
function dist(a, b)  { return Math.sqrt(dist2(a, b)) }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)) }
function rnd(lo, hi) { return lo + Math.random() * (hi - lo) }

// ── Club & Team Loading ───────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const res = await fetch('/api/clubs')
    clubs.value = await res.json()
  } catch { /* ignore */ }
})

function goHome() {
  stopGame()
  router.push('/')
}

async function loadTeams() {
  if (!myTeam.value || !oppTeam.value) return
  try {
    const [homeRes, awayRes] = await Promise.all([
      fetch(`/api/teams/${encodeURIComponent(myTeam.value)}`),
      fetch(`/api/teams/${encodeURIComponent(oppTeam.value)}`),
    ])
    const homeData = await homeRes.json()
    const awayData = await awayRes.json()
    homeName.value = homeData.club.name
    awayName.value = awayData.club.name
    initGame(homeData.players, awayData.players)
  } catch {
    alert('Could not load team data — is the backend running?')
  }
}

// ── Game Init ─────────────────────────────────────────────────────────────────
function initGame(homeSquad, awaySquad) {
  homeScore.value = 0
  awayScore.value = 0
  tick = 0
  halfSwapped = false
  scorers.value = []
  motmPlayer.value = ''

  const homeFormPos = [
    [4,40],[22,10],[22,30],[22,50],[22,70],
    [60,20],[60,40],[60,60],
    [85,15],[90,40],[85,65],
  ]
  const awayFormPos = [
    [196,40],[178,70],[178,50],[178,30],[178,10],
    [140,60],[140,40],[140,20],
    [115,65],[110,40],[115,15],
  ]
  const positionList = ['GK','RB','CB','CB','LB','CM','CM','CM','RW','ST','LW']

  homePlayers = homeSquad.slice(0, 11).map((p, i) => ({
    idx: i, name: p.name, pos: positionList[i] || 'CM',
    x: homeFormPos[i][0], y: homeFormPos[i][1],
    baseX: homeFormPos[i][0], baseY: homeFormPos[i][1],
    pace: p.pace || 75, shooting: p.shooting || 70,
    passing: p.passing || 70, defending: p.defending || 65,
    team: 'home', hasBall: false, sprintTimer: 0,
    vx: 0, vy: 0,
  }))

  awayPlayers = awaySquad.slice(0, 11).map((p, i) => ({
    idx: i, name: p.name, pos: positionList[i] || 'CM',
    x: awayFormPos[i][0], y: awayFormPos[i][1],
    baseX: awayFormPos[i][0], baseY: awayFormPos[i][1],
    pace: p.pace || 75, shooting: p.shooting || 70,
    passing: p.passing || 70, defending: p.defending || 65,
    team: 'away', hasBall: false, sprintTimer: 0,
    vx: 0, vy: 0,
  }))

  ball = { x: 100, y: 40, vx: 0, vy: 0 }
  controlledId = nearestHomeToPoint(100, 40)
  sprintCooldown = 0
  goalFlash = 0
  gamePaused = false
  overlay.value = null

  phase.value = 'match'
  nextTick(() => {
    ctx = canvasRef.value.getContext('2d')
    startLoop()
    startRenderLoop()
  })
}

// ── Keyboard ──────────────────────────────────────────────────────────────────
function onKeyDown(e) {
  switch (e.code) {
    case 'ArrowUp':    keys.up    = true; e.preventDefault(); break
    case 'ArrowDown':  keys.down  = true; e.preventDefault(); break
    case 'ArrowLeft':  keys.left  = true; e.preventDefault(); break
    case 'ArrowRight': keys.right = true; e.preventDefault(); break
    case 'Space':      if (!keyLatch.space) { keys.space = true; keyLatch.space = true } e.preventDefault(); break
    case 'KeyZ':       if (!keyLatch.z) { keys.z = true; keyLatch.z = true } e.preventDefault(); break
    case 'KeyX':       keys.x = true; e.preventDefault(); break
    case 'KeyS':       if (!keyLatch.s) { keys.s = true; keyLatch.s = true } e.preventDefault(); break
    case 'Escape':     togglePause(); e.preventDefault(); break
    case 'Enter':      if (overlay.value?.action) overlay.value.action(); e.preventDefault(); break
  }
}
function onKeyUp(e) {
  switch (e.code) {
    case 'ArrowUp':    keys.up    = false; break
    case 'ArrowDown':  keys.down  = false; break
    case 'ArrowLeft':  keys.left  = false; break
    case 'ArrowRight': keys.right = false; break
    case 'Space':      keys.space = false; keyLatch.space = false; break
    case 'KeyZ':       keys.z = false; keyLatch.z = false; break
    case 'KeyX':       keys.x = false; break
    case 'KeyS':       keys.s = false; keyLatch.s = false; break
  }
}

// ── Touch Controls ────────────────────────────────────────────────────────────
function touchStart(key) {
  keys[key] = true
  if (key === 'space' && !keyLatch.space) { keyLatch.space = true }
  if (key === 'z' && !keyLatch.z) { keyLatch.z = true }
  if (key === 's' && !keyLatch.s) { keyLatch.s = true }
  if (key === 'escape') { togglePause() }
}
function touchEnd(key) {
  if (key === 'escape') return
  keys[key] = false
  if (key === 'space') { keyLatch.space = false }
  if (key === 'z') { keyLatch.z = false }
  if (key === 's') { keyLatch.s = false }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
  stopGame()
})

// ── Game Loop ─────────────────────────────────────────────────────────────────
function startLoop() {
  loopInterval = setInterval(gameTick, 1000 / FPS)
}
function stopGame() {
  if (loopInterval) { clearInterval(loopInterval); loopInterval = null }
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
}

function togglePause() {
  gamePaused = !gamePaused
  if (gamePaused) {
    overlay.value = { title: 'PAUSED', subtitle: 'Press Esc to continue', btn: 'Resume', action: togglePause }
    overlayClass.value = 'overlay-pause'
  } else {
    overlay.value = null
  }
}

// ── Per-Tick Logic ────────────────────────────────────────────────────────────
function gameTick() {
  if (gamePaused) return
  if (goalFlash > 0) { goalFlash--; return }

  tick++

  // ── Halftime ──
  if (tick === HALFTIME_TICK && !halfSwapped) {
    gamePaused = true
    overlay.value = {
      title: 'HALF TIME',
      subtitle: `${homeName.value} ${homeScore.value} – ${awayScore.value} ${awayName.value}`,
      btn: 'Kick Off',
      action: resumeSecondHalf,
    }
    overlayClass.value = 'overlay-halftime'
    return
  }

  // ── Full Time ──
  if (tick >= GAME_DUR_TICKS) {
    endMatch()
    return
  }

  gameMinDisplay.value = Math.min(90, Math.floor(tick / TICKS_PER_GMIN))

  // ── Input → controlled player ──
  const cp = homePlayers[controlledId]
  if (cp) {
    let spd = SPD_NORMAL
    if (keys.x && sprintCooldown === 0) {
      spd = SPD_SPRINT
      cp.sprintTimer = (cp.sprintTimer || 0) + 1
      if (cp.sprintTimer > 60) { sprintCooldown = 90; cp.sprintTimer = 0 }
    } else {
      if (sprintCooldown > 0) sprintCooldown--
    }

    const scale = spd * (1 + cp.pace / 200)
    if (keys.up)    cp.y = clamp(cp.y - scale, 1, PH - 1)
    if (keys.down)  cp.y = clamp(cp.y + scale, 1, PH - 1)
    if (keys.left)  cp.x = clamp(cp.x - scale, 1, PW - 1)
    if (keys.right) cp.x = clamp(cp.x + scale, 1, PW - 1)

    // Ball follows controlled player if they have ball
    if (cp.hasBall) {
      ball.x = cp.x + (halfSwapped ? -2.5 : 2.5)
      ball.y = cp.y
      ball.vx = 0; ball.vy = 0
    }

    // Pass
    if (keys.space && cp.hasBall) {
      keys.space = false; keyLatch.space = false
      doPass(cp)
    }

    // Shoot
    if (keys.z && cp.hasBall) {
      keys.z = false; keyLatch.z = false
      doShoot(cp)
    }

    // Tackle
    if (keys.s) {
      keys.s = false; keyLatch.s = false
      doTackle(cp)
    }
  }

  // ── AI non-controlled home players ──
  homePlayers.forEach((p, i) => {
    if (i === controlledId) return
    aiPlayer(p, homePlayers, awayPlayers, 0, PW, halfSwapped ? PW : 0)
  })

  // ── AI all away players ──
  awayPlayers.forEach(p => {
    aiPlayer(p, awayPlayers, homePlayers, PW, 0, halfSwapped ? 0 : PW)
  })

  // ── Ball physics ──
  if (!getBallCarrier()) {
    ball.x += ball.vx
    ball.y += ball.vy
    ball.vx *= FRICTION
    ball.vy *= FRICTION

    // Touchline bounce
    if (ball.y < 1)       { ball.y = 1;       ball.vy = Math.abs(ball.vy) * 0.7 }
    if (ball.y > PH - 1)  { ball.y = PH - 1;  ball.vy = -Math.abs(ball.vy) * 0.7 }

    // Out-of-bounds x bounce back (no throw-ins in MVP)
    if (ball.x < 1)       { ball.x = 1;       ball.vx = Math.abs(ball.vx) * 0.6 }
    if (ball.x > PW - 1)  { ball.x = PW - 1;  ball.vx = -Math.abs(ball.vx) * 0.6 }

    // Stop slow ball
    const spd2 = ball.vx**2 + ball.vy**2
    if (spd2 < 0.09) { ball.vx = 0; ball.vy = 0 }

    // Ball pickup by nearby player
    tryPickup()
  }

  // ── Goal detection ──
  checkGoal()

  // ── Auto-switch controlled player ──
  if (!homePlayers[controlledId]?.hasBall) {
    controlledId = nearestHomeToPoint(ball.x, ball.y)
  }
}

// ── Ball possession ───────────────────────────────────────────────────────────
function getBallCarrier() {
  for (const p of [...homePlayers, ...awayPlayers]) {
    if (p.hasBall) return p
  }
  return null
}

function tryPickup() {
  let closest = null, minD = CTRL_RAD
  const allPlayers = [...homePlayers, ...awayPlayers]
  for (const p of allPlayers) {
    const d = dist(p, ball)
    if (d < minD) { minD = d; closest = p }
  }
  if (closest) {
    clearHasBall()
    closest.hasBall = true
  }
}

function clearHasBall() {
  ;[...homePlayers, ...awayPlayers].forEach(p => { p.hasBall = false })
}

function nearestHomeToPoint(x, y) {
  let best = 0, bestD = Infinity
  homePlayers.forEach((p, i) => {
    const d = (p.x - x)**2 + (p.y - y)**2
    if (d < bestD) { bestD = d; best = i }
  })
  return best
}

// ── Actions ───────────────────────────────────────────────────────────────────
function doPass(from) {
  const attackDir = halfSwapped ? -1 : 1
  const teamMates = homePlayers.filter(p => p.idx !== from.idx)

  // Prefer teammate roughly ahead
  let best = null, bestScore = -Infinity
  for (const t of teamMates) {
    const ahead = (t.x - from.x) * attackDir
    const d = dist(from, t)
    if (d < 3) continue
    const score = ahead / (d + 1)
    if (score > bestScore) { bestScore = score; best = t }
  }
  if (!best) best = teamMates.reduce((a, b) => dist(from,a) < dist(from,b) ? a : b)

  const dx = best.x - from.x, dy = best.y - from.y
  const d = Math.sqrt(dx*dx + dy*dy) || 1
  const pwr = PASS_PWR * (1 + from.passing / 300)
  clearHasBall()
  ball.vx = (dx/d) * pwr * rnd(0.9, 1.1)
  ball.vy = (dy/d) * pwr * rnd(0.9, 1.1)
}

function doShoot(from) {
  const goalX = halfSwapped ? 0 : PW
  const jitter = (1 - from.shooting / 100) * 12
  const targetY = GOAL_CY + rnd(-jitter, jitter)
  const dx = goalX - from.x, dy = targetY - from.y
  const d = Math.sqrt(dx*dx + dy*dy) || 1
  const pwr = SHOOT_PWR * (0.85 + from.shooting / 600)
  clearHasBall()
  ball.vx = (dx/d) * pwr
  ball.vy = (dy/d) * pwr
}

function doTackle(from) {
  const all = [...awayPlayers]
  for (const opp of all) {
    if (opp.hasBall && dist(from, opp) < TACKLE_RAD) {
      opp.hasBall = false
      ball.vx = rnd(-3, 3)
      ball.vy = rnd(-3, 3)
      break
    }
  }
}

// ── AI ─────────────────────────────────────────────────────────────────────
function aiPlayer(player, ownTeam, oppTeam, ownGoalX, oppGoalX, ownGoalXNum) {
  const carrier = getBallCarrier()
  const teamHasBall = carrier?.team === player.team

  const baseX = player.baseX
  const baseY = player.baseY
  const spd = SPD_NORMAL * (0.92 + player.pace / 500)

  let tx = baseX, ty = baseY

  if (carrier === player) {
    // This AI player has ball → dribble toward opp goal
    if (player.team === 'home') {
      tx = halfSwapped ? 10 : 190
    } else {
      tx = halfSwapped ? 190 : 10
    }
    ty = GOAL_CY + (player.y - GOAL_CY) * 0.5

    // Shoot if close
    const shootX = player.team === 'home'
      ? (halfSwapped ? player.x < 50 : player.x > 150)
      : (halfSwapped ? player.x > 150 : player.x < 50)
    if (shootX && player.y > GOAL_Y1 - 12 && player.y < GOAL_Y2 + 12) {
      aiShoot(player)
      return
    }

    // Ball follows player
    ball.x = player.x + (tx > player.x ? 2.5 : -2.5)
    ball.y = player.y
    ball.vx = 0; ball.vy = 0
  } else if (teamHasBall) {
    // Support
    if (['ST','LW','RW','CAM'].includes(player.pos)) {
      const adv = player.team === 'home' ? (halfSwapped ? -8 : 8) : (halfSwapped ? 8 : -8)
      tx = clamp(player.baseX + adv, 5, PW - 5)
      ty = baseY + Math.sin(tick / 40 + player.idx) * 5
    } else if (['CM','CDM'].includes(player.pos)) {
      tx = carrier ? (carrier.x + baseX) / 2 : baseX
      ty = baseY
    } else {
      // Defenders hold
      tx = baseX; ty = baseY
    }
  } else {
    // Defending
    if (player.pos === 'GK') {
      tx = ownGoalXNum
      ty = clamp(ball.y, GOAL_Y1, GOAL_Y2)
    } else if (['CB','LB','RB'].includes(player.pos)) {
      const bx = ball.x, by = ball.y
      const gx = ownGoalXNum
      tx = clamp(gx + (bx - gx) * 0.35, Math.min(gx + 5, gx + 50), Math.max(gx - 5, gx - 50))
      ty = clamp(by, 5, PH - 5)
    } else if (['CM','CDM'].includes(player.pos)) {
      tx = ball.x; ty = ball.y
    } else {
      // Attackers fall back mid-field
      tx = baseX * 0.7 + 100 * 0.3; ty = baseY
    }
  }

  movePlayerAI(player, tx, ty, spd)
}

function aiShoot(from) {
  const goalX = from.team === 'home'
    ? (halfSwapped ? 0 : PW)
    : (halfSwapped ? PW : 0)
  const jitter = (1 - from.shooting / 100) * 10
  const targetY = GOAL_CY + rnd(-jitter, jitter)
  const dx = goalX - from.x, dy = targetY - from.y
  const d = Math.sqrt(dx*dx + dy*dy) || 1
  clearHasBall()
  ball.vx = (dx/d) * SHOOT_PWR * 0.88
  ball.vy = (dy/d) * SHOOT_PWR * 0.88
}

function movePlayerAI(p, tx, ty, spd) {
  const dx = tx - p.x, dy = ty - p.y
  const d = Math.sqrt(dx*dx + dy*dy)
  if (d < 0.4) return
  const step = Math.min(spd, d)
  p.x = clamp(p.x + (dx/d) * step, 1, PW - 1)
  p.y = clamp(p.y + (dy/d) * step, 1, PH - 1)
}

// ── Goals ─────────────────────────────────────────────────────────────────────
function checkGoal() {
  const inGoalMouth = ball.y >= GOAL_Y1 && ball.y <= GOAL_Y2

  // Home goal (x ≤ 0) — away scores
  if (ball.x <= 0 && inGoalMouth) {
    awayScore.value++
    scorers.value.push({ team: 'away', player: lastToucher('away'), minute: gameMinDisplay.value })
    triggerGoal('away')
    return
  }
  // Away goal (x ≥ PW) — home scores
  if (ball.x >= PW && inGoalMouth) {
    homeScore.value++
    scorers.value.push({ team: 'home', player: lastToucher('home'), minute: gameMinDisplay.value })
    triggerGoal('home')
  }
}

let _lastToucher = { home: 'Unknown', away: 'Unknown' }
function lastToucher(team) { return _lastToucher[team] }

function triggerGoal(scoringTeam) {
  gamePaused = true
  goalFlash = FPS * 2  // 2-second flash
  overlayClass.value = 'overlay-goal'
  overlay.value = {
    title: '⚽ GOAL!',
    subtitle: `${scoringTeam === 'home' ? homeName.value : awayName.value} score!`,
    btn: null,
    action: null,
  }

  setTimeout(() => {
    overlay.value = null
    gamePaused = false
    resetKickoff(scoringTeam)
  }, 2000)
}

function resetKickoff(lastScorer) {
  // Place all players back in formation, ball to centre
  const homeFormPos = [
    [4,40],[22,10],[22,30],[22,50],[22,70],
    [60,20],[60,40],[60,60],[85,15],[90,40],[85,65],
  ]
  const awayFormPos = [
    [196,40],[178,70],[178,50],[178,30],[178,10],
    [140,60],[140,40],[140,20],[115,65],[110,40],[115,15],
  ]
  homePlayers.forEach((p, i) => {
    p.x = halfSwapped ? PW - homeFormPos[i][0] : homeFormPos[i][0]
    p.y = homeFormPos[i][1]
    p.hasBall = false
  })
  awayPlayers.forEach((p, i) => {
    p.x = halfSwapped ? PW - awayFormPos[i][0] : awayFormPos[i][0]
    p.y = awayFormPos[i][1]
    p.hasBall = false
  })
  ball.x = 100; ball.y = 40; ball.vx = 0; ball.vy = 0
  controlledId = nearestHomeToPoint(100, 40)
}

function resumeSecondHalf() {
  halfSwapped = true
  overlay.value = null
  gamePaused = false
  // Swap base positions
  homePlayers.forEach(p => { p.baseX = PW - p.baseX })
  awayPlayers.forEach(p => { p.baseX = PW - p.baseX })
  resetKickoff('home')
}

function endMatch() {
  stopGame()
  // Pick MoTM = whoever scored most goals
  const goalCount = {}
  scorers.value.forEach(s => { goalCount[s.player] = (goalCount[s.player] || 0) + 1 })
  motmPlayer.value = Object.keys(goalCount).sort((a,b) => goalCount[b]-goalCount[a])[0]
    || [...homePlayers, ...awayPlayers].reduce((best, p) => best.name || p.name)[0]?.name
    || homePlayers[0]?.name || ''
  phase.value = 'fulltime'
}

// ── Rendering ─────────────────────────────────────────────────────────────────
function startRenderLoop() {
  function render() {
    drawFrame()
    rafId = requestAnimationFrame(render)
  }
  rafId = requestAnimationFrame(render)
}

function cameraX() {
  const cx = ball.x - CAM_VIEW / 2
  return clamp(cx, 0, PW - CAM_VIEW)
}

function w2c(worldX, worldY) {
  const camX = cameraX()
  return {
    x: (worldX - camX) * SCALE,
    y: worldY * SCALE,
  }
}

function drawFrame() {
  if (!ctx) return
  const camX = cameraX()

  // ── Pitch ──
  ctx.fillStyle = '#2d7a2d'
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

  // Pitch stripes
  const stripeW = 20 * SCALE
  for (let sx = 0; sx < PW; sx += 20) {
    const px = (sx - camX) * SCALE
    if (px + stripeW < 0 || px > CANVAS_W) continue
    ctx.fillStyle = sx % 40 === 0 ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,.02)'
    ctx.fillRect(px, 0, stripeW, CANVAS_H)
  }

  // Pitch markings
  ctx.strokeStyle = 'rgba(255,255,255,.55)'
  ctx.lineWidth = 1.5

  // Touchlines
  const tl = w2c(0, 0), tr = w2c(PW, 0), bl = w2c(0, PH)
  ctx.strokeRect(tl.x, tl.y + 2, tr.x - tl.x, bl.y - tl.y - 4)

  // Halfway line
  const hwTop = w2c(100, 0), hwBot = w2c(100, PH)
  drawLine(ctx, hwTop.x, hwTop.y + 2, hwBot.x, hwBot.y - 2)

  // Centre circle
  const cc = w2c(100, 40)
  drawCircleOutline(ctx, cc.x, cc.y, 16 * SCALE)

  // Penalty areas
  const paW = 22 * SCALE, paH = (GOAL_Y2 - GOAL_Y1 + 16) * SCALE
  const paY = w2c(0, GOAL_Y1 - 8).y
  // Home PA
  const hpaX = w2c(0, 0).x
  ctx.strokeRect(hpaX, paY, paW, paH)
  // Away PA
  const apaX = w2c(PW - 22, 0).x
  ctx.strokeRect(apaX, paY, paW, paH)

  // Goals
  ctx.strokeStyle = 'rgba(255,255,255,.7)'
  const goalH = (GOAL_Y2 - GOAL_Y1) * SCALE
  const goalY = w2c(0, GOAL_Y1).y
  // Home goal
  const hgx = w2c(0, 0).x - 12
  ctx.fillStyle = 'rgba(255,255,255,.06)'
  ctx.fillRect(hgx, goalY, 12, goalH)
  ctx.strokeRect(hgx, goalY, 12, goalH)
  // Away goal
  const agx = w2c(PW, 0).x
  ctx.fillStyle = 'rgba(255,255,255,.06)'
  ctx.fillRect(agx, goalY, 12, goalH)
  ctx.strokeRect(agx, goalY, 12, goalH)

  // ── Players ──
  const allPlayers = [...homePlayers, ...awayPlayers]
  allPlayers.forEach(p => {
    const { x, y } = w2c(p.x, p.y)
    const r = PLAYER_R * SCALE

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,.3)'
    ctx.beginPath()
    ctx.ellipse(x, y + r * 0.8, r * 0.9, r * 0.4, 0, 0, Math.PI * 2)
    ctx.fill()

    // Body circle
    ctx.fillStyle = p.team === 'home' ? '#1a6fc4' : '#c4241a'
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()

    // Controlled player ring
    if (p.team === 'home' && p.idx === controlledId) {
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 2
      ctx.beginPath(); ctx.arc(x, y, r + 2.5, 0, Math.PI * 2); ctx.stroke()
    }

    // Ball indicator
    if (p.hasBall) {
      ctx.fillStyle = '#ffd700'
      ctx.beginPath(); ctx.arc(x + r * 0.8, y - r * 0.8, 2.5, 0, Math.PI * 2); ctx.fill()
    }

    // Number/name label
    ctx.fillStyle = '#fff'
    ctx.font = `bold ${r * 0.85}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(p.idx + 1, x, y)
  })

  // ── Ball ──
  const { x: bx, y: by } = w2c(ball.x, ball.y)
  const br = BALL_R * SCALE
  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,.35)'
  ctx.beginPath(); ctx.ellipse(bx, by + br, br, br * 0.35, 0, 0, Math.PI * 2); ctx.fill()
  // Ball
  ctx.fillStyle = '#fff'
  ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = '#333'
  ctx.lineWidth = 0.8
  ctx.stroke()
}

function drawLine(c, x1, y1, x2, y2) {
  c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke()
}
function drawCircleOutline(c, cx, cy, r) {
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.stroke()
}
</script>

<style scoped>
.play-view { min-height: 100vh; background: #0d1117; color: #fff; }

/* ── TEAM SELECT (reuse watch styles) ── */
.screen { min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
.screen-header { width: 100%; padding: 24px 40px 12px; text-align: center; position: relative; }
.screen-header h1 { font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; }
.screen-header p  { font-size: 12px; color: #556; letter-spacing: 2px; margin-top: 4px; }
.back-btn {
  position: absolute; left: 40px; top: 28px;
  background: none; border: 1px solid #333; color: #888;
  padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 13px;
  transition: border-color .15s;
}
.back-btn:hover { border-color: #555; color: #aaa; }

.team-pickers { display: flex; width: 100%; max-width: 1100px; padding: 0 20px 40px; flex: 1; align-items: flex-start; }
.picker-col   { flex: 1; padding: 0 20px; }
.picker-title { font-size: 14px; font-weight: 700; letter-spacing: 2px; margin-bottom: 14px; color: #aaa; text-transform: uppercase; }
.club-grid    { display: flex; flex-direction: column; gap: 6px; }
.club-btn {
  display: flex; flex-direction: column;
  padding: 10px 16px; background: #111820; border: 1px solid #1e2535;
  border-radius: 6px; cursor: pointer; color: #ccc; text-align: left; transition: all .12s;
}
.club-btn:hover:not(:disabled) { background: #1a2535; border-color: #2e4060; }
.club-btn.selected { background: #1a3a5c; border-color: #2980b9; color: #fff; }
.club-btn.blocked  { opacity: .3; cursor: not-allowed; }
.club-name   { font-size: 13px; font-weight: 700; }
.club-league { font-size: 10px; color: #556; margin-top: 2px; }
.vs-col { width: 120px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 24px; padding-top: 36px; }
.vs-badge { font-size: 28px; font-weight: 900; color: #ffd700; }
.kickoff-btn {
  padding: 14px 20px; background: linear-gradient(135deg,#27ae60,#1a7a40);
  color: #fff; border: none; border-radius: 8px; font-size: 14px; font-weight: 700;
  cursor: pointer; text-transform: uppercase; letter-spacing: 1px;
  box-shadow: 0 4px 18px rgba(39,174,96,.35); transition: all .12s;
}
.kickoff-btn:hover:not(:disabled) { transform: translateY(-2px); }
.kickoff-btn:disabled { opacity: .4; cursor: not-allowed; }

/* ── MATCH ── */
.match-wrapper { display: flex; flex-direction: column; align-items: center; width: 100%; padding-bottom: 20px; }

.scorebar {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; max-width: 900px; padding: 14px 24px;
  background: #111820; border-bottom: 1px solid #1e2535;
}
.sb-team      { font-size: 15px; font-weight: 700; flex: 1; }
.sb-team.away { text-align: right; }
.sb-center    { display: flex; flex-direction: column; align-items: center; flex: 0 0 120px; }
.sb-score     { font-size: 28px; font-weight: 900; color: #ffd700; font-family: 'Courier New', monospace; }
.sb-time      { font-size: 11px; color: #556; letter-spacing: 2px; }

.canvas-wrap {
  position: relative;
  width: 900px; max-width: 100%;
  border: 2px solid #1e2535;
  overflow: hidden;
}
canvas { display: block; }

/* Overlays */
.overlay {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  animation: fadeIn .2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.overlay-goal     { background: rgba(39,174,96,.35); }
.overlay-halftime { background: rgba(0,0,0,.7); }
.overlay-pause    { background: rgba(0,0,0,.6); }

.overlay-content { text-align: center; }
.overlay-title   { font-size: 52px; font-weight: 900; text-shadow: 0 2px 20px rgba(0,0,0,.8); }
.overlay-sub     { font-size: 16px; margin-top: 8px; color: rgba(255,255,255,.8); }
.overlay-btn {
  margin-top: 20px; padding: 12px 36px;
  background: linear-gradient(135deg,#27ae60,#1a7a40); color: #fff;
  border: none; border-radius: 8px; font-size: 16px; font-weight: 700;
  cursor: pointer; text-transform: uppercase; letter-spacing: 1px;
}

/* Controls bar */
.controls-bar {
  display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;
  padding: 10px 24px;
  font-size: 12px; color: #556;
  width: 900px; max-width: 100%;
}
kbd {
  background: #1e2535; border: 1px solid #2a3545;
  border-radius: 3px; padding: 2px 5px; font-size: 11px; color: #aaa;
}

/* ── FULL TIME ── */
.ft-screen { justify-content: center; }
.ft-card {
  background: #111820; border: 1px solid #1e2535; border-radius: 12px;
  padding: 48px 60px; text-align: center; display: flex; flex-direction: column;
  align-items: center; gap: 16px; max-width: 500px;
}
.ft-card h2 { font-size: 14px; letter-spacing: 4px; color: #556; text-transform: uppercase; }
.ft-score   { font-size: 64px; font-weight: 900; color: #ffd700; font-family: 'Courier New', monospace; }
.ft-teams   { font-size: 15px; color: #889; }
.ft-scorers { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }
.ft-scorer  { font-size: 14px; }
.ft-min     { color: #556; margin-left: 6px; }
.ft-motm    { font-size: 14px; color: #aaa; margin-top: 4px; }
.ft-screen .back-btn {
  position: static; margin-top: 16px;
  padding: 12px 36px; background: #1a2535; border: 1px solid #2e4060;
  color: #aaa; border-radius: 8px; cursor: pointer;
  font-size: 14px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
}
</style>
