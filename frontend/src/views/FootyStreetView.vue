<template>
  <div class="street-view">

    <!-- ── TEAM SELECTION ── -->
    <div v-if="phase === 'select'" class="screen select-screen">
      <header class="screen-header">
        <button class="back-btn" @click="goHome">← Back</button>
        <h1>Footy Street</h1>
        <p>5v5 street football • First to 3 goals wins</p>
      </header>

      <div class="mode-tabs">
        <button class="mode-tab" :class="{ active: selectTab === 'quick' }" @click="selectTab = 'quick'">Quick Match</button>
        <button class="mode-tab" :class="{ active: selectTab === 'story' }" @click="enterStoryMode">Story Mode</button>
      </div>

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

      <!-- Story chapter badge (shown during story match) -->
      <div v-if="storyMatchActive && currentStoryChapter" class="story-match-badge">
        Ch.{{ currentStoryChapter.number }} · {{ currentStoryChapter.city }} · vs {{ currentStoryChapter.opponent_label }}
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

    <!-- ── STORY MODE ENTRY (inside select screen) ── -->

    <!-- ── CHARACTER CREATION ── -->
    <div v-else-if="phase === 'story-create'" class="screen story-create-screen">
      <div class="create-card">
        <button class="back-btn" @click="phase = 'select'">← Back</button>
        <div class="create-icon">⚽</div>
        <h2 class="create-title">Name Your Player</h2>
        <p class="create-sub">You're stepping onto a synthetic pitch in Modi'in, Israel.<br>Who are you?</p>
        <input
          v-model="playerName"
          class="name-input"
          type="text"
          placeholder="Enter your name"
          maxlength="22"
          @keydown.enter="startStory"
        />
        <div class="create-rival-label">Who do you face at the final?</div>
        <div class="create-rival-choices">
          <button
            class="create-rival-btn"
            :class="{ active: pendingRival === 'crew' }"
            @click="pendingRival = 'crew'"
          >
            <span class="crb-icon">👥</span>
            <span class="crb-title">The Crew</span>
            <span class="crb-desc">A whole team that humiliated you. Final = group rematch.</span>
          </button>
          <button
            class="create-rival-btn"
            :class="{ active: pendingRival === 'rival' }"
            @click="pendingRival = 'rival'"
          >
            <span class="crb-icon">⚡</span>
            <span class="crb-title">The Rival</span>
            <span class="crb-desc">One player always better than you. Final = 5v5 showdown.</span>
          </button>
        </div>
        <button
          class="kickoff-btn"
          :disabled="!playerName.trim() || !pendingRival"
          @click="startStory"
          style="margin-top:24px"
        >
          Begin Story →
        </button>
      </div>
    </div>

    <!-- ── STORY HUB ── -->
    <div v-else-if="phase === 'story-hub'" class="screen story-hub-screen">
      <header class="screen-header">
        <button class="back-btn" @click="phase = 'select'">← Back</button>
        <h1>The Road to Street Crowns</h1>
        <p v-if="playerName">{{ playerName }} · 7 cities · 7 matches</p>
        <p v-else>7 cities · 7 matches · one story</p>
      </header>
      <div class="story-hub-body">
        <div class="chapter-map">
          <div
            v-for="ch in storyChapters" :key="ch.number"
            class="story-ch-row"
            :class="{
              'ch-completed': storyProgress.completed.includes(ch.number),
              'ch-current':   ch.number === storyProgress.currentChapter && !storyProgress.completed.includes(ch.number),
              'ch-locked':    ch.number > storyProgress.currentChapter,
            }"
            @click="ch.number <= storyProgress.currentChapter && openStoryChapter(ch.number)"
          >
            <div class="ch-num-badge">{{ ch.number }}</div>
            <div class="ch-body">
              <div class="ch-city-line">{{ ch.city }}<span v-if="ch.country" class="ch-country"> · {{ ch.country }}</span></div>
              <div class="ch-title-line">{{ ch.title }}</div>
              <div class="ch-loc-line">{{ ch.location_detail }}</div>
            </div>
            <div class="ch-status-icon">
              <span v-if="storyProgress.completed.includes(ch.number)">✅</span>
              <span v-else-if="ch.number === storyProgress.currentChapter">▶</span>
              <span v-else>🔒</span>
            </div>
          </div>
        </div>
        <div class="story-hub-footer">
          <div class="story-progress-bar">
            <div class="spb-fill" :style="{ width: (storyProgress.completed.length / 7 * 100) + '%' }"></div>
          </div>
          <div class="story-progress-label">{{ storyProgress.completed.length }} / 7 chapters complete</div>
          <button v-if="storyProgress.completed.length > 0" class="reset-btn" @click="resetStory">Reset Story</button>
        </div>
      </div>
    </div>

    <!-- ── STORY CHAPTER INTRO ── -->
    <div v-else-if="phase === 'story-intro' && currentStoryChapter" class="screen story-intro-screen">
      <div class="story-intro-card">
        <div class="si-header">
          <button class="back-btn" @click="phase = 'story-hub'">← Map</button>
          <div class="si-chapter-label">Chapter {{ currentStoryChapter.number }} · {{ currentStoryChapter.city }}</div>
        </div>
        <h2 class="si-title">{{ currentStoryChapter.title }}</h2>
        <div class="si-location">📍 {{ currentStoryChapter.location_detail }}</div>
        <div class="si-narrative" v-html="storyIntroFormatted"></div>
        <div class="si-objective">
          <span class="obj-icon">🎯</span>
          <span class="obj-text">{{ currentStoryChapter.objective }}</span>
        </div>
        <div class="si-versus">
          <span class="si-vs-you">{{ playerName || 'Your Crew' }}</span>
          <span class="si-vs-badge">VS</span>
          <span class="si-vs-them">{{ currentStoryChapter.opponent_label }}</span>
        </div>
        <div class="si-actions">
          <button class="kickoff-btn" @click="playStoryMatch">Play Match ⚽</button>
          <button class="sim-btn" @click="simulateStoryChapter">Simulate</button>
        </div>
      </div>
    </div>

    <!-- ── STORY POST-MATCH ── -->
    <div v-else-if="phase === 'story-post' && currentStoryChapter" class="screen story-post-screen">
      <div class="story-post-card">
        <div class="spc-result" :class="storyMatchWon ? 'spc-win' : 'spc-loss'">
          {{ storyMatchWon ? 'Victory' : 'Defeat' }}
        </div>
        <div class="spc-score">{{ homeScore }} – {{ awayScore }}</div>
        <div class="spc-city">{{ currentStoryChapter.city }}</div>
        <div class="spc-narrative" v-html="storyPostNarrative"></div>
        <div class="spc-actions">
          <button
            v-if="storyMatchWon && !currentStoryChapter.is_last"
            class="kickoff-btn"
            @click="continueStory"
          >Next Chapter →</button>
          <button
            v-if="storyMatchWon && currentStoryChapter.is_last"
            class="kickoff-btn"
            @click="phase = 'story-end'"
          >Final Screen →</button>
          <button v-if="!storyMatchWon" class="kickoff-btn" @click="retryStory">
            Retry Match
          </button>
          <button v-if="!storyMatchWon" class="sim-btn" @click="continueStory">
            Continue Anyway
          </button>
          <button class="back-btn" @click="phase = 'story-hub'" style="margin-top:12px">← Back to Map</button>
        </div>
      </div>
    </div>

    <!-- ── STORY COMPLETE ── -->
    <div v-else-if="phase === 'story-end'" class="screen story-end-screen">
      <div class="story-end-card">
        <div class="sec-trophy">🏆</div>
        <h2 class="sec-title">Street Crown</h2>
        <p class="sec-sub">Modi'in to the World Final.<br>Seven cities. One story.</p>
        <div class="sec-name">{{ playerName || 'Street Legend' }}. Street Crown Champion.</div>
        <div class="sec-actions">
          <button class="kickoff-btn" @click="resetStory">Play Again</button>
          <button class="back-btn" style="margin-top:12px" @click="goHome">Back to Menu</button>
        </div>
      </div>
    </div>

    <!-- ── FULL TIME ── -->
    <div v-else-if="phase === 'fulltime'" class="screen ft-screen">
      <div class="ft-card">
        <h2>{{ result }}</h2>
        <div class="ft-score">{{ homeScore }} – {{ awayScore }}</div>
        <div class="ft-teams">{{ homeName }} vs {{ awayName }}</div>
        <div v-if="scorers.length" class="ft-scorers">
          <div v-for="s in scorers" :key="s.player+s.minute" class="ft-scorer">
            ⚽ {{ s.player }} <span class="ft-min">{{ s.minute }}'</span>
          </div>
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
const CANVAS_W = 700
const CANVAS_H = 300
const PW = 60           // pitch width in game units
const PH = 40           // pitch height in game units
const SCALE = CANVAS_H / PH   // 7.5 px / unit
const GOAL_Y1 = 16      // goal top edge
const GOAL_Y2 = 24      // goal bottom edge
const GOAL_CY = 20      // goal centre y
const PLAYER_R = 2      // player circle radius (smaller for 5v5)
const BALL_R   = 1.5    // ball radius

// Timing: 2 real min = 60 game min → 60 ticks per game minute at 30fps
const FPS = 30
const GAME_DUR_TICKS = 3600   // 2 min × 30 fps = 3600
const TICKS_PER_GMIN = 60
const WIN_GOALS = 3    // first to 3 goals wins

// Speeds
const SPD_NORMAL  = 2.0
const SPD_SPRINT  = 3.4
const FRICTION    = 0.88
const PASS_PWR    = 13
const SHOOT_PWR   = 22
const CTRL_RAD    = 4
const TACKLE_RAD  = 4

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
const result = ref('')

// Internal game objects
let ctx = null
let rafId = null
let loopInterval = null
let tick = 0
let gamePaused = false
let goldenGoal = false

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

// ── Story Mode State ───────────────────────────────────────────────────────────
const selectTab = ref('quick')
const storyChapters = ref([])
const currentStoryChapter = ref(null)
const storyMatchActive = ref(false)
const storyMatchWon = ref(false)
const storyPostNarrative = ref('')

// Load saved progress immediately
const _savedProgress = (() => {
  try {
    const raw = localStorage.getItem('tbg_street_story')
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return { completed: [], currentChapter: 1, rivalType: '', playerName: '' }
})()

const storyProgress  = ref(_savedProgress)
const storyRivalType = ref(_savedProgress.rivalType || '')
const playerName     = ref(_savedProgress.playerName || '')
const pendingRival   = ref('')

function _saveStoryProgress() {
  localStorage.setItem('tbg_street_story', JSON.stringify({
    completed:      storyProgress.value.completed,
    currentChapter: storyProgress.value.currentChapter,
    rivalType:      storyRivalType.value,
    playerName:     playerName.value,
  }))
}

const storyIntroFormatted = computed(() => {
  if (!currentStoryChapter.value) return ''
  return currentStoryChapter.value.intro
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('')
})

// ── Story Mode Functions ───────────────────────────────────────────────────────

async function enterStoryMode() {
  // If no player name yet, go to character creation
  if (!playerName.value || !storyRivalType.value) {
    pendingRival.value = storyRivalType.value || ''
    phase.value = 'story-create'
    return
  }
  await _loadStoryChapters()
  phase.value = 'story-hub'
}

async function startStory() {
  if (!playerName.value.trim() || !pendingRival.value) return
  storyRivalType.value = pendingRival.value
  storyProgress.value.rivalType = pendingRival.value
  storyProgress.value.playerName = playerName.value.trim()
  _saveStoryProgress()
  await _loadStoryChapters()
  phase.value = 'story-hub'
}

async function _loadStoryChapters() {
  try {
    const res = await fetch(`/api/street-story/chapters?rival=${storyRivalType.value}`)
    storyChapters.value = await res.json()
  } catch { /* show hub anyway with empty list */ }
}

async function openStoryChapter(n) {
  try {
    const res = await fetch(`/api/street-story/chapter/${n}?rival=${storyRivalType.value}`)
    currentStoryChapter.value = await res.json()
  } catch { return }
  phase.value = 'story-intro'
}

function setRivalType(type) {
  storyRivalType.value = type
  storyProgress.value.rivalType = type
  _saveStoryProgress()
  openStoryChapter(4)
}

async function playStoryMatch() {
  if (!currentStoryChapter.value) return
  storyMatchActive.value = true
  const ch = currentStoryChapter.value
  try {
    const [homeRes, awayRes] = await Promise.all([
      fetch('/api/teams/Hotspur%20FC'),
      fetch(`/api/teams/${encodeURIComponent(ch.opponent_club)}`),
    ])
    const homeData = await homeRes.json()
    const awayData = await awayRes.json()
    homeName.value = playerName.value || 'Your Crew'
    awayName.value = ch.opponent_label
    const homeTop = homeData.players.slice(0, 5)
    const awayTop = awayData.players.slice(0, 5)
    initGame(homeTop, awayTop)
  } catch {
    alert('Could not load team data — is the backend running?')
    storyMatchActive.value = false
  }
}

async function simulateStoryChapter() {
  if (!currentStoryChapter.value) return
  try {
    const res = await fetch('/api/street-story/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chapter: currentStoryChapter.value.number,
        rival: storyRivalType.value,
      }),
    })
    const data = await res.json()
    homeScore.value = data.match?.score?.home ?? (data.won ? 3 : 1)
    awayScore.value = data.match?.score?.away ?? (data.won ? 1 : 3)
    storyMatchWon.value = data.won
    storyPostNarrative.value = _formatNarrative(data.narrative)
    if (data.won) _markChapterComplete(currentStoryChapter.value.number)
    phase.value = 'story-post'
  } catch {
    alert('Simulation failed — is the backend running?')
  }
}

function showStoryPost(won) {
  const ch = currentStoryChapter.value
  storyMatchWon.value = won
  const rawNarrative = won ? ch.post_win : ch.post_loss
  storyPostNarrative.value = _formatNarrative(rawNarrative)
  if (won) _markChapterComplete(ch.number)
  phase.value = 'story-post'
}

function _formatNarrative(text) {
  return text
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('')
}

function _markChapterComplete(n) {
  if (!storyProgress.value.completed.includes(n)) {
    storyProgress.value.completed.push(n)
  }
  if (storyProgress.value.currentChapter <= n) {
    storyProgress.value.currentChapter = n + 1
  }
  _saveStoryProgress()
}

function continueStory() {
  const next = currentStoryChapter.value.number + 1
  if (next > 7) {
    phase.value = 'story-end'
  } else {
    openStoryChapter(next)
  }
}

function retryStory() {
  phase.value = 'story-intro'
}

async function resetStory() {
  storyProgress.value = { completed: [], currentChapter: 1, rivalType: '', playerName: '' }
  storyRivalType.value = ''
  playerName.value = ''
  pendingRival.value = ''
  _saveStoryProgress()
  pendingRival.value = ''
  phase.value = 'story-create'
}

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
    // Take top 5 players by OVR
    const homeTop = homeData.players.slice(0, 5)
    const awayTop = awayData.players.slice(0, 5)
    initGame(homeTop, awayTop)
  } catch {
    alert('Could not load team data — is the backend running?')
  }
}

// ── Game Init ─────────────────────────────────────────────────────────────────
function initGame(homeSquad, awaySquad) {
  homeScore.value = 0
  awayScore.value = 0
  tick = 0
  goldenGoal = false
  scorers.value = []
  result.value = ''

  // 5v5 formations on compact 60×40 pitch
  const homeFormPos = [
    [3, 20],      // GK
    [13, 12],     // DEF/MID
    [13, 28],     // DEF/MID
    [28, 10],     // MID
    [28, 30],     // MID/ATT
  ]
  const awayFormPos = [
    [57, 20],     // GK
    [47, 28],     // DEF/MID
    [47, 12],     // DEF/MID
    [32, 30],     // MID
    [32, 10],     // MID/ATT
  ]
  const positionList = ['GK','DEF','DEF','MID','ATT']

  homePlayers = homeSquad.slice(0, 5).map((p, i) => ({
    idx: i, name: p.name, pos: positionList[i] || 'MID',
    x: homeFormPos[i][0], y: homeFormPos[i][1],
    baseX: homeFormPos[i][0], baseY: homeFormPos[i][1],
    pace: p.pace || 75, shooting: p.shooting || 70,
    passing: p.passing || 70, defending: p.defending || 65,
    team: 'home', hasBall: false, sprintTimer: 0,
    vx: 0, vy: 0,
  }))

  awayPlayers = awaySquad.slice(0, 5).map((p, i) => ({
    idx: i, name: p.name, pos: positionList[i] || 'MID',
    x: awayFormPos[i][0], y: awayFormPos[i][1],
    baseX: awayFormPos[i][0], baseY: awayFormPos[i][1],
    pace: p.pace || 75, shooting: p.shooting || 70,
    passing: p.passing || 70, defending: p.defending || 65,
    team: 'away', hasBall: false, sprintTimer: 0,
    vx: 0, vy: 0,
  }))

  ball = { x: 30, y: 20, vx: 0, vy: 0 }
  controlledId = nearestHomeToPoint(30, 20)
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

  // ── Check for win conditions ──
  if (homeScore.value >= WIN_GOALS && homeScore.value > awayScore.value) {
    endMatch(true)
    return
  }
  if (awayScore.value >= WIN_GOALS && awayScore.value > homeScore.value) {
    endMatch(false)
    return
  }

  // ── Golden goal (after full time) ──
  if (tick >= GAME_DUR_TICKS) {
    if (homeScore.value === awayScore.value) {
      goldenGoal = true
      tick = GAME_DUR_TICKS
      return
    } else {
      endMatch(homeScore.value > awayScore.value)
      return
    }
  }

  gameMinDisplay.value = Math.min(60, Math.floor(tick / TICKS_PER_GMIN))
  if (goldenGoal) gameMinDisplay.value = 60

  // ── Input → controlled player ──
  const cp = homePlayers[controlledId]
  if (cp) {
    let spd = SPD_NORMAL
    if (keys.x && sprintCooldown === 0) {
      spd = SPD_SPRINT
      cp.sprintTimer = (cp.sprintTimer || 0) + 1
      if (cp.sprintTimer > 45) { sprintCooldown = 60; cp.sprintTimer = 0 }
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
      ball.x = cp.x + 1.5
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
    aiPlayer(p, homePlayers, awayPlayers, 0, PW, false)
  })

  // ── AI away players ──
  awayPlayers.forEach(p => {
    aiPlayer(p, awayPlayers, homePlayers, PW, 0, true)
  })

  // ── Ball physics ──
  ball.vx *= FRICTION
  ball.vy *= FRICTION
  ball.x += ball.vx
  ball.y += ball.vy

  // ── Wall bounces ──
  if (ball.x < BALL_R) { ball.x = BALL_R; ball.vx *= -0.7 }
  if (ball.x > PW - BALL_R) { ball.x = PW - BALL_R; ball.vx *= -0.7 }
  if (ball.y < BALL_R) { ball.y = BALL_R; ball.vy *= -0.7 }
  if (ball.y > PH - BALL_R) { ball.y = PH - BALL_R; ball.vy *= -0.7 }

  // ── Goal detection ──
  if (ball.x < 1 && ball.y > GOAL_Y1 && ball.y < GOAL_Y2) {
    awayScore.value++
    scorers.value.push({ player: nearestTo(awayPlayers, ball).name, minute: gameMinDisplay.value })
    resetAfterGoal()
    return
  }
  if (ball.x > PW - 1 && ball.y > GOAL_Y1 && ball.y < GOAL_Y2) {
    homeScore.value++
    scorers.value.push({ player: nearestTo(homePlayers, ball).name, minute: gameMinDisplay.value })
    resetAfterGoal()
    return
  }

  // ── Ball possession ──
  homePlayers.forEach(p => {
    if (dist(p, ball) < CTRL_RAD) {
      p.hasBall = true
      awayPlayers.forEach(pp => pp.hasBall = false)
    } else {
      p.hasBall = false
    }
  })
  awayPlayers.forEach(p => {
    if (dist(p, ball) < CTRL_RAD) {
      p.hasBall = true
      homePlayers.forEach(pp => pp.hasBall = false)
    } else {
      p.hasBall = false
    }
  })

  // Switch controlled player to nearest home to ball if lost
  if (!homePlayers[controlledId] || !homePlayers[controlledId].hasBall) {
    let nearest = 0
    let minD = Infinity
    homePlayers.forEach((p, i) => {
      const d = dist2(p, ball)
      if (d < minD) { minD = d; nearest = i }
    })
    controlledId = nearest
  }
}

function resetAfterGoal() {
  goalFlash = 120
  homePlayers.forEach(p => { p.hasBall = false; p.x = p.baseX; p.y = p.baseY; p.vx = 0; p.vy = 0 })
  awayPlayers.forEach(p => { p.hasBall = false; p.x = p.baseX; p.y = p.baseY; p.vx = 0; p.vy = 0 })
  ball = { x: 30, y: 20, vx: 0, vy: 0 }
  controlledId = nearestHomeToPoint(30, 20)
}

function endMatch(homeWon) {
  stopGame()
  if (storyMatchActive.value) {
    storyMatchActive.value = false
    showStoryPost(homeWon)
  } else {
    phase.value = 'fulltime'
    result.value = homeWon ? 'Home Win!' : 'Away Win!'
  }
}

function doPass(player) {
  const targets = player.team === 'home' ? homePlayers : awayPlayers
  let best = null
  let bestD = Infinity
  targets.forEach(t => {
    if (t.idx === player.idx) return
    const d = dist(player, t)
    if (d < bestD) { bestD = d; best = t }
  })
  if (!best) return

  const dx = best.x - player.x
  const dy = best.y - player.y
  const len = Math.sqrt(dx*dx + dy*dy)
  if (len < 0.1) return

  ball.vx = (dx / len) * PASS_PWR
  ball.vy = (dy / len) * PASS_PWR
  player.hasBall = false
}

function doShoot(player) {
  const targetX = player.team === 'home' ? PW - 2 : 2
  const dx = targetX - player.x
  const dy = (player.team === 'home' ? GOAL_CY : GOAL_CY) - player.y
  const len = Math.sqrt(dx*dx + dy*dy)
  if (len < 0.1) return

  ball.vx = (dx / len) * SHOOT_PWR * (1 + player.shooting / 200)
  ball.vy = (dy / len) * SHOOT_PWR * (1 + player.shooting / 200)
  player.hasBall = false
}

function doTackle(player) {
  const enemies = player.team === 'home' ? awayPlayers : homePlayers
  enemies.forEach(e => {
    if (dist(player, e) < TACKLE_RAD) {
      e.vx *= 0.5
      e.vy *= 0.5
      e.hasBall = false
    }
  })
}

function aiPlayer(player, team, enemies, boundL, boundR, isAway) {
  const targetX = isAway ? 5 : PW - 5

  if (player.hasBall) {
    // Dribble toward goal or pass
    if (Math.random() < 0.3) {
      doPass(player)
    } else {
      const dx = targetX - player.x
      const dy = rnd(-5, 5) - player.y
      const len = Math.sqrt(dx*dx + dy*dy)
      if (len > 0.5) {
        player.vx = (dx / len) * SPD_NORMAL
        player.vy = (dy / len) * SPD_NORMAL
      }
    }
  } else {
    // Move to intercept ball
    const dx = ball.x - player.x
    const dy = ball.y - player.y
    const d = Math.sqrt(dx*dx + dy*dy)

    if (d < 15) {
      const spd = SPD_NORMAL * (1 + player.pace / 200)
      player.vx = (dx / d) * spd
      player.vy = (dy / d) * spd
    } else {
      // Patrol
      player.vx *= 0.95
      player.vy *= 0.95
    }
  }

  // Apply movement
  player.x += player.vx
  player.y += player.vy

  // Pitch bounds
  player.x = clamp(player.x, 1, PW - 1)
  player.y = clamp(player.y, 1, PH - 1)
}

function nearestHomeToPoint(x, y) {
  let nearest = 0
  let minD = Infinity
  homePlayers.forEach((p, i) => {
    const d = (p.x - x) ** 2 + (p.y - y) ** 2
    if (d < minD) { minD = d; nearest = i }
  })
  return nearest
}

function nearestTo(players, point) {
  let best = players[0]
  let minD = Infinity
  players.forEach(p => {
    const d = dist2(p, point)
    if (d < minD) { minD = d; best = p }
  })
  return best
}

// ── Render Loop ───────────────────────────────────────────────────────────────
function startRenderLoop() {
  function render() {
    if (!ctx) return
    ctx.fillStyle = '#3a3a3a'
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

    // Pitch markings (minimal for street style)
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.lineWidth = 1
    ctx.strokeRect(BALL_R * SCALE, BALL_R * SCALE, (PW - 2 * BALL_R) * SCALE, (PH - 2 * BALL_R) * SCALE)

    // Centre line
    ctx.beginPath()
    ctx.moveTo((PW / 2) * SCALE, 0)
    ctx.lineTo((PW / 2) * SCALE, CANVAS_H)
    ctx.stroke()

    // Goals (as boxes)
    ctx.fillStyle = 'rgba(255, 200, 0, 0.15)'
    ctx.fillRect(0, GOAL_Y1 * SCALE, 2 * SCALE, (GOAL_Y2 - GOAL_Y1) * SCALE)
    ctx.fillRect((PW - 2) * SCALE, GOAL_Y1 * SCALE, 2 * SCALE, (GOAL_Y2 - GOAL_Y1) * SCALE)

    // Players
    const drawPlayer = (p, teamColor) => {
      ctx.fillStyle = teamColor
      ctx.beginPath()
      ctx.arc(p.x * SCALE, p.y * SCALE, PLAYER_R * SCALE, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#000'
      ctx.font = 'bold 8px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(p.idx + 1, p.x * SCALE, p.y * SCALE)
    }
    homePlayers.forEach(p => drawPlayer(p, '#ef4444'))
    awayPlayers.forEach(p => drawPlayer(p, '#3b82f6'))

    // Ball
    ctx.fillStyle = '#fbbf24'
    ctx.beginPath()
    ctx.arc(ball.x * SCALE, ball.y * SCALE, BALL_R * SCALE, 0, Math.PI * 2)
    ctx.fill()

    // Goal flash
    if (goalFlash > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${0.4 * (goalFlash / 120)})`
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)
    }

    rafId = requestAnimationFrame(render)
  }
  rafId = requestAnimationFrame(render)
}
</script>

<style scoped>
.street-view {
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
}

/* ── SCREENS ── */
.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.select-screen {
  background: linear-gradient(180deg, #0d1117 0%, #111820 100%);
}

.ft-screen {
  background: linear-gradient(180deg, #0d1117 0%, #111820 100%);
}

.screen-header {
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
}

.screen-header h1 {
  font-size: 28px;
  color: #fff;
  margin: 10px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.screen-header p {
  color: #888;
  font-size: 12px;
  margin: 0;
  letter-spacing: 1px;
}

.back-btn {
  background: #333;
  color: #ccc;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 20px;
}

.back-btn:hover {
  background: #444;
  color: #fff;
}

/* ── TEAM PICKERS ── */
.team-pickers {
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  align-items: flex-start;
  justify-content: center;
}

.picker-col {
  flex: 1;
  min-width: 200px;
}

.picker-title {
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.club-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  max-height: 400px;
  overflow-y: auto;
}

.club-btn {
  background: #1a2535;
  border: 2px solid #2a3a50;
  color: #ccc;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
  font-size: 12px;
}

.club-btn:hover:not(:disabled) {
  background: #2a3a50;
  border-color: #3a5a80;
  color: #fff;
  transform: translateX(4px);
}

.club-btn.selected {
  background: #2980b9;
  border-color: #3498db;
  color: #fff;
  font-weight: bold;
}

.club-btn.blocked {
  opacity: 0.4;
  cursor: not-allowed;
}

.club-btn:disabled {
  cursor: not-allowed;
}

.club-name {
  display: block;
  font-weight: bold;
  margin-bottom: 2px;
}

.club-league {
  display: block;
  font-size: 10px;
  opacity: 0.7;
}

.vs-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.vs-badge {
  font-size: 18px;
  font-weight: bold;
  color: #e67e22;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.kickoff-btn {
  background: linear-gradient(135deg, #e67e22, #c0392b);
  color: #fff;
  border: none;
  padding: 16px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(230, 126, 34, 0.4);
  transition: all 0.2s ease;
}

.kickoff-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(230, 126, 34, 0.6);
}

.kickoff-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── MATCH WRAPPER ── */
.match-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0a0a0a;
  gap: 12px;
  padding: 12px;
  min-height: 100vh;
}

.scorebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  background: #111;
  border-radius: 4px;
  padding: 12px;
  gap: 20px;
}

.sb-team {
  flex: 1;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
}

.sb-team.away {
  text-align: right;
}

.sb-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.sb-score {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  font-family: 'Courier New', monospace;
}

.sb-time {
  font-size: 12px;
  color: #888;
}

/* ── CANVAS ── */
.canvas-wrap {
  position: relative;
  max-width: 700px;
  width: 100%;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
  background: #1a1a1a;
  border-radius: 4px;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  z-index: 100;
}

.overlay-content {
  background: #111;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
}

.overlay-title {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.overlay-sub {
  font-size: 13px;
  color: #aaa;
  margin-bottom: 20px;
}

.overlay-btn {
  background: #2980b9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.overlay-btn:hover {
  background: #3498db;
}

/* ── CONTROLS BAR ── */
.controls-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 700px;
  background: #111;
  padding: 12px;
  border-radius: 4px;
  flex-wrap: wrap;
  font-size: 11px;
  color: #888;
}

kbd {
  background: #222;
  border: 1px solid #444;
  padding: 2px 6px;
  border-radius: 2px;
  font-family: 'Courier New', monospace;
  color: #fff;
}

.touch-toggle-btn {
  background: #333;
  color: #ccc;
  border: 1px solid #444;
  padding: 6px 12px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 11px;
  margin-left: auto;
}

.touch-toggle-btn:hover {
  background: #444;
  color: #fff;
}

/* ── TOUCH CONTROLS ── */
.touch-controls {
  width: 100%;
  max-width: 700px;
  background: #111;
  border-radius: 4px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.touch-dpad {
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-self: center;
  width: fit-content;
}

.dpad-row {
  display: flex;
  gap: 2px;
}

.touch-actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.action-row {
  display: flex;
  gap: 4px;
}

.touch-btn {
  background: #2a2a2a;
  color: #fff;
  border: 1px solid #444;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  min-width: 48px;
  transition: all 0.1s ease;
}

.touch-btn:active {
  background: #3a5a80;
  border-color: #4a7aaa;
  transform: scale(0.95);
}

.touch-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.dpad-center {
  cursor: default !important;
}

.action-pass { flex: 1; }
.action-shoot { flex: 1; }
.action-sprint { flex: 1; }
.action-tackle { flex: 1; }
.action-pause { flex: 1; }

/* ── FULL TIME CARD ── */
.ft-card {
  background: #111;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 40px;
  max-width: 400px;
  text-align: center;
}

.ft-card h2 {
  font-size: 28px;
  color: #fff;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.ft-score {
  font-size: 48px;
  font-weight: bold;
  color: #ffd700;
  font-family: 'Courier New', monospace;
  margin-bottom: 12px;
}

.ft-teams {
  font-size: 13px;
  color: #888;
  margin-bottom: 20px;
}

.ft-scorers {
  background: #1a1a1a;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 20px;
  max-height: 150px;
  overflow-y: auto;
}

.ft-scorer {
  font-size: 12px;
  color: #aaa;
  padding: 4px 0;
  border-bottom: 1px solid #222;
}

.ft-scorer:last-child {
  border-bottom: none;
}

.ft-min {
  float: right;
  color: #666;
}

/* ── MODE TABS ── */
.mode-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  border-bottom: 2px solid #222;
  padding-bottom: 12px;
}

.mode-tab {
  background: transparent;
  border: 1px solid #333;
  color: #888;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.15s;
}

.mode-tab:hover {
  color: #fff;
  border-color: #555;
}

.mode-tab.active {
  background: #e67e22;
  border-color: #e67e22;
  color: #fff;
}

/* ── STORY MATCH BADGE ── */
.story-match-badge {
  background: #1a2535;
  border: 1px solid #2a3a50;
  color: #8ab0d0;
  font-size: 11px;
  padding: 6px 14px;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  max-width: 700px;
  letter-spacing: 0.5px;
}

/* ── CHARACTER CREATION ── */
.story-create-screen {
  background: linear-gradient(180deg, #0a0f14 0%, #0d1520 100%);
}

.create-card {
  background: #0f1520;
  border: 1px solid #1e2d40;
  border-radius: 10px;
  padding: 40px 32px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.create-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.create-title {
  font-size: 22px;
  color: #fff;
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.create-sub {
  color: #778899;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.name-input {
  width: 100%;
  background: #1a2535;
  border: 2px solid #2a3a50;
  color: #fff;
  padding: 14px 16px;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  font-family: inherit;
  letter-spacing: 1px;
  box-sizing: border-box;
  margin-bottom: 24px;
  transition: border-color 0.2s;
}

.name-input:focus {
  outline: none;
  border-color: #e67e22;
}

.name-input::placeholder {
  color: #445566;
}

.create-rival-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #778899;
  margin-bottom: 12px;
}

.create-rival-choices {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.create-rival-btn {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #1a2535;
  border: 2px solid #2a3a50;
  color: #ccc;
  padding: 14px 16px;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s;
}

.create-rival-btn:hover {
  border-color: #3a5a80;
  color: #fff;
}

.create-rival-btn.active {
  border-color: #e67e22;
  background: #1e2d1a;
}

.crb-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.crb-title {
  display: block;
  font-weight: bold;
  color: #fff;
  font-size: 13px;
  margin-bottom: 4px;
}

.crb-desc {
  display: block;
  font-size: 11px;
  color: #778899;
  line-height: 1.4;
}

/* ── STORY HUB ── */
.story-hub-screen {
  background: linear-gradient(180deg, #0a0f14 0%, #0d1520 100%);
  align-items: stretch;
}

.story-hub-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px 40px;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
}

.chapter-map {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.story-ch-row {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #0f1a28;
  border: 1px solid #1e2d40;
  border-radius: 6px;
  padding: 14px 16px;
  cursor: pointer;
  transition: all 0.15s;
  position: relative;
}

.story-ch-row.ch-current {
  border-color: #e67e22;
  background: #1a1a0a;
}

.story-ch-row.ch-completed {
  border-color: #2d5a2d;
  background: #0d1a0d;
}

.story-ch-row.ch-locked {
  opacity: 0.4;
  cursor: default;
}

.story-ch-row:not(.ch-locked):hover {
  border-color: #3a5a80;
  transform: translateX(4px);
}

.ch-num-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2a3a50;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  flex-shrink: 0;
}

.ch-completed .ch-num-badge { background: #2d5a2d; color: #6fdf6f; }
.ch-current   .ch-num-badge { background: #5a3a0a; color: #e67e22; }

.ch-body { flex: 1; min-width: 0; }

.ch-city-line {
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2px;
}

.ch-country { color: #778899; font-weight: normal; }

.ch-title-line {
  font-size: 11px;
  color: #e67e22;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3px;
}

.ch-loc-line {
  font-size: 10px;
  color: #556677;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ch-status-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.story-hub-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.story-progress-bar {
  width: 100%;
  height: 4px;
  background: #1e2d40;
  border-radius: 2px;
  overflow: hidden;
}

.spb-fill {
  height: 100%;
  background: linear-gradient(90deg, #e67e22, #f39c12);
  border-radius: 2px;
  transition: width 0.5s ease;
}

.story-progress-label {
  font-size: 11px;
  color: #778899;
  letter-spacing: 1px;
}

.reset-btn {
  background: transparent;
  border: 1px solid #5a2020;
  color: #c0392b;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.15s;
}

.reset-btn:hover { background: #5a2020; color: #fff; }

/* ── STORY INTRO ── */
.story-intro-screen {
  background: linear-gradient(180deg, #0a0f14 0%, #0d1520 100%);
}

.story-intro-card {
  background: #0f1520;
  border: 1px solid #1e2d40;
  border-radius: 10px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
}

.si-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.si-chapter-label {
  font-size: 11px;
  color: #778899;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.si-title {
  font-size: 20px;
  color: #fff;
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.si-location {
  font-size: 11px;
  color: #556677;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.si-narrative {
  color: #b0c4d8;
  font-size: 13px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.si-narrative p {
  margin: 0 0 12px;
}

.si-narrative p:last-child {
  margin-bottom: 0;
  font-style: italic;
  color: #d0d8e0;
}

.si-objective {
  background: #0a1520;
  border-left: 3px solid #e67e22;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.obj-icon { font-size: 14px; }

.obj-text {
  font-size: 12px;
  color: #d0a060;
  line-height: 1.5;
}

.si-versus {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
  padding: 12px;
  background: #0a1520;
  border-radius: 4px;
}

.si-vs-you  { font-size: 14px; font-weight: bold; color: #ef4444; }
.si-vs-badge { font-size: 11px; color: #556677; text-transform: uppercase; letter-spacing: 2px; }
.si-vs-them { font-size: 14px; font-weight: bold; color: #3b82f6; }

.si-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.sim-btn {
  background: #1a2535;
  border: 1px solid #2a3a50;
  color: #8ab0d0;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.15s;
}

.sim-btn:hover {
  background: #2a3a50;
  color: #fff;
}

/* ── STORY POST-MATCH ── */
.story-post-screen {
  background: linear-gradient(180deg, #0a0f14 0%, #0d1520 100%);
}

.story-post-card {
  background: #0f1520;
  border: 1px solid #1e2d40;
  border-radius: 10px;
  padding: 36px 32px;
  max-width: 560px;
  width: 100%;
  text-align: center;
}

.spc-result {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.spc-win  { color: #6fdf6f; }
.spc-loss { color: #c0392b; }

.spc-score {
  font-size: 48px;
  font-weight: bold;
  color: #ffd700;
  font-family: 'Courier New', monospace;
  margin-bottom: 8px;
}

.spc-city {
  font-size: 11px;
  color: #556677;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.spc-narrative {
  color: #b0c4d8;
  font-size: 13px;
  line-height: 1.8;
  text-align: left;
  margin-bottom: 28px;
  background: #0a1520;
  padding: 16px;
  border-radius: 6px;
  max-height: 240px;
  overflow-y: auto;
}

.spc-narrative p {
  margin: 0 0 12px;
}

.spc-narrative p:last-child {
  margin-bottom: 0;
  font-style: italic;
  color: #d0d8e0;
}

.spc-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

/* ── STORY COMPLETE ── */
.story-end-screen {
  background: radial-gradient(ellipse at center, #1a1a0a 0%, #0a0a0a 70%);
}

.story-end-card {
  text-align: center;
  padding: 40px 20px;
  max-width: 480px;
}

.sec-trophy {
  font-size: 72px;
  margin-bottom: 20px;
  animation: trophy-pulse 2s ease-in-out infinite;
}

@keyframes trophy-pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.08); }
}

.sec-title {
  font-size: 36px;
  color: #ffd700;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0 0 12px;
}

.sec-sub {
  color: #aaa;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.sec-name {
  font-size: 15px;
  color: #e67e22;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.sec-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .team-pickers {
    flex-direction: column;
    gap: 20px;
  }

  .screen-header h1 {
    font-size: 20px;
  }

  .match-wrapper {
    padding: 8px;
  }

  .touch-controls {
    grid-template-columns: 1fr;
  }
}
</style>
