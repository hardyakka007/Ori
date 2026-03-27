/**
 * useGameLoop.js
 * Core match physics: ball movement, player controls, collision,
 * goal detection, half-time, full-time. Returns reactive state and
 * control functions used by PlayView.vue.
 */

import { ref, reactive } from 'vue'
import { useGameAI } from './useGameAI.js'

// ── Pitch constants ────────────────────────────────────────────────────────
export const PW = 200, PH = 80
export const GOAL_Y1 = 30, GOAL_Y2 = 50, GOAL_CY = 40
const PLAYER_R   = 3
const BALL_R     = 2.5
const CTRL_RAD   = 5
const TACKLE_RAD = 5.5
const SPD_NORMAL = 2.6
const SPD_SPRINT = 4.2
const FRICTION   = 0.90
const PASS_PWR   = 17
const SHOOT_PWR  = 28

export const FPS              = 30
export const GAME_DUR_TICKS   = 5400   // 3 real-min × 30fps = 90 game-min
export const TICKS_PER_GMIN   = 60
export const HALFTIME_TICK    = 2700

export function useGameLoop() {
  const { tickAI, checkTackle } = useGameAI()

  // ── Reactive state exposed to template / Three.js ────────────────────────
  const homeScore   = ref(0)
  const awayScore   = ref(0)
  const gameTick    = ref(0)
  const gameMinDisplay = ref(0)
  const overlay     = ref(null)
  const overlayClass= ref('')
  const scorers     = ref([])
  const motmPlayer  = ref('')
  const phase       = ref('select')

  // ── Internal mutable state ────────────────────────────────────────────────
  let ball         = null
  let homePlayers  = []
  let awayPlayers  = []
  let controlledId = 0
  let sprintCooldown = 0
  let goalFlash    = 0
  let gamePaused   = false
  let halfSwapped  = false
  let loopInterval = null

  const keys = reactive({
    up: false, down: false, left: false, right: false,
    space: false, z: false, x: false, s: false,
  })
  const keyLatch = { space: false, z: false, s: false }

  // ── Helpers ───────────────────────────────────────────────────────────────
  const dist  = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))
  const rnd   = (lo, hi) => lo + Math.random() * (hi - lo)

  // ── Initialise a new match ────────────────────────────────────────────────
  function initMatch(homeSquad, awaySquad, homeName, awayName) {
    homeScore.value = 0
    awayScore.value = 0
    gameTick.value  = 0
    halfSwapped     = false
    scorers.value   = []
    motmPlayer.value= ''
    overlay.value   = null
    gamePaused      = false

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
    const posList = ['GK','RB','CB','CB','LB','CM','CM','CM','RW','ST','LW']

    homePlayers = homeSquad.slice(0, 11).map((p, i) => ({
      idx: i, name: p.name, pos: posList[i] || 'CM',
      x: homeFormPos[i][0], y: homeFormPos[i][1],
      baseX: homeFormPos[i][0], baseY: homeFormPos[i][1],
      pace: p.pace || 75, shooting: p.shooting || 70,
      passing: p.passing || 70, defending: p.defending || 65,
      team: 'home', hasBall: false, sprintTimer: 0,
      vx: 0, vy: 0,
    }))

    awayPlayers = awaySquad.slice(0, 11).map((p, i) => ({
      idx: i, name: p.name, pos: posList[i] || 'CM',
      x: awayFormPos[i][0], y: awayFormPos[i][1],
      baseX: awayFormPos[i][0], baseY: awayFormPos[i][1],
      pace: p.pace || 75, shooting: p.shooting || 70,
      passing: p.passing || 70, defending: p.defending || 65,
      team: 'away', hasBall: false, sprintTimer: 0,
      vx: 0, vy: 0,
    }))

    ball = { x: 100, y: 40, vx: 0, vy: 0 }
    controlledId = _nearestHomeTo(100, 40)
    sprintCooldown = 0
    goalFlash = 0

    phase.value = 'match'
  }

  // ── Start / stop the tick loop ────────────────────────────────────────────
  function startLoop() {
    loopInterval = setInterval(_tick, 1000 / FPS)
  }

  function stopLoop() {
    clearInterval(loopInterval)
    loopInterval = null
  }

  // ── Per-tick update ───────────────────────────────────────────────────────
  function _tick() {
    if (gamePaused || phase.value !== 'match') return

    gameTick.value++
    const tick = gameTick.value
    gameMinDisplay.value = Math.floor(tick / TICKS_PER_GMIN)

    // Half-time
    if (tick === HALFTIME_TICK && !halfSwapped) {
      _showHalftime()
      return
    }

    // Full time
    if (tick >= GAME_DUR_TICKS) {
      _endMatch()
      return
    }

    if (goalFlash > 0) { goalFlash--; return }

    _handleInput()
    _moveBall()
    _checkBallPickup()
    _checkGoal()
    tickAI({
      ball, awayPlayers, homePlayers,
      homeScore: homeScore.value, awayScore: awayScore.value,
      PW, PH, GOAL_Y1, GOAL_Y2, GOAL_CY, tick,
    })
    _clampPositions()
  }

  // ── Input handling ────────────────────────────────────────────────────────
  function _handleInput() {
    const p = homePlayers[controlledId]
    if (!p) return

    const sprinting = keys.x && sprintCooldown === 0
    const spd = sprinting ? SPD_SPRINT : SPD_NORMAL
    if (sprinting) sprintCooldown = 40

    let moved = false
    if (keys.up)    { p.y -= spd; p.vy = -spd; moved = true }
    if (keys.down)  { p.y += spd; p.vy =  spd; moved = true }
    if (keys.left)  { p.x -= spd; p.vx = -spd; moved = true }
    if (keys.right) { p.x += spd; p.vx =  spd; moved = true }
    if (!moved) { p.vx *= 0.7; p.vy *= 0.7 }
    if (sprintCooldown > 0) sprintCooldown--

    if (p.hasBall) {
      ball.x = p.x; ball.y = p.y

      if (keys.space && !keyLatch.space) {
        keyLatch.space = true
        _pass(p)
      }
      if (keys.z && !keyLatch.z) {
        keyLatch.z = true
        _shoot(p)
      }
    }

    if (keys.s && !keyLatch.s) {
      keyLatch.s = true
      _attemptTackle()
    }

    // Auto switch to nearest home player to ball when not in possession
    if (!homePlayers.some(h => h.hasBall)) {
      controlledId = _nearestHomeTo(ball.x, ball.y)
    }
  }

  function _pass(p) {
    // Find best open teammate ahead
    const targets = homePlayers.filter(t => t !== p && !t.hasBall)
    if (!targets.length) return
    const fwd = targets.sort((a, b) => b.x - a.x)[0]
    const dx = fwd.x - p.x, dy = fwd.y - p.y
    const d = Math.sqrt(dx * dx + dy * dy) || 1
    ball.vx = (dx / d) * PASS_PWR
    ball.vy = (dy / d) * PASS_PWR
    p.hasBall = false
  }

  function _shoot(p) {
    const dx = PW - p.x
    const dy = GOAL_CY - p.y + rnd(-8, 8)
    const d = Math.sqrt(dx * dx + dy * dy) || 1
    ball.vx = (dx / d) * SHOOT_PWR
    ball.vy = (dy / d) * SHOOT_PWR
    p.hasBall = false
  }

  function _attemptTackle() {
    const controlled = homePlayers[controlledId]
    if (!controlled) return
    checkTackle({
      p: controlled,
      ball,
      targetPlayers: awayPlayers,
      tackleRadius: TACKLE_RAD,
    })
  }

  // ── Ball physics ──────────────────────────────────────────────────────────
  function _moveBall() {
    if (homePlayers.some(p => p.hasBall) || awayPlayers.some(p => p.hasBall)) return

    ball.x += ball.vx
    ball.y += ball.vy
    ball.vx *= FRICTION
    ball.vy *= FRICTION

    // Bounce off top/bottom touchlines
    if (ball.y < 0)   { ball.y = 0;  ball.vy *= -0.6 }
    if (ball.y > PH)  { ball.y = PH; ball.vy *= -0.6 }

    // Bounce off side touchlines (not in goal mouth)
    const inGoalMouth = ball.y > GOAL_Y1 && ball.y < GOAL_Y2
    if (ball.x < 0) {
      if (inGoalMouth) { _scoreGoal('away'); return }
      ball.x = 0; ball.vx *= -0.6
    }
    if (ball.x > PW) {
      if (inGoalMouth) { _scoreGoal('home'); return }
      ball.x = PW; ball.vx *= -0.6
    }
  }

  function _checkBallPickup() {
    const allPlayers = [...homePlayers, ...awayPlayers]
    const hasPossession = allPlayers.some(p => p.hasBall)
    if (hasPossession) return

    for (const p of allPlayers) {
      if (dist(p, ball) < CTRL_RAD + BALL_R) {
        // Check no opponent has it
        if (!allPlayers.some(o => o !== p && o.hasBall)) {
          p.hasBall = true
          ball.vx = 0; ball.vy = 0
          ball.x = p.x; ball.y = p.y
          if (p.team === 'home') controlledId = p.idx
          return
        }
      }
    }
  }

  function _checkGoal() {
    // Goals are scored in _moveBall when ball crosses line inside mouth
  }

  function _scoreGoal(scoringTeam) {
    if (scoringTeam === 'home') {
      homeScore.value++
      const scorer = homePlayers.find(p => p.pos === 'ST' || p.pos === 'CAM')
      if (scorer) scorers.value.push({ player: scorer.name, minute: gameMinDisplay.value, team: 'home' })
    } else {
      awayScore.value++
      const scorer = awayPlayers.find(p => p.pos === 'ST' || p.pos === 'CAM')
      if (scorer) scorers.value.push({ player: scorer.name, minute: gameMinDisplay.value, team: 'away' })
    }
    goalFlash = 60
    overlay.value = {
      title: scoringTeam === 'home' ? '⚽ GOAL!' : '⚽ They Score!',
      subtitle: `${homeScore.value} – ${awayScore.value}`,
      btn: 'Kick Off',
      action: _resetKickoff,
    }
    overlayClass.value = scoringTeam === 'home' ? 'overlay-goal' : 'overlay-concede'
  }

  function _resetKickoff() {
    overlay.value = null
    goalFlash = 0
    homePlayers.forEach((p, i) => {
      const formPos = [[4,40],[22,10],[22,30],[22,50],[22,70],[60,20],[60,40],[60,60],[85,15],[90,40],[85,65]]
      p.x = formPos[i]?.[0] ?? p.baseX
      p.y = formPos[i]?.[1] ?? p.baseY
      p.hasBall = false; p.vx = 0; p.vy = 0
    })
    awayPlayers.forEach((p, i) => {
      const formPos = [[196,40],[178,70],[178,50],[178,30],[178,10],[140,60],[140,40],[140,20],[115,65],[110,40],[115,15]]
      p.x = formPos[i]?.[0] ?? p.baseX
      p.y = formPos[i]?.[1] ?? p.baseY
      p.hasBall = false; p.vx = 0; p.vy = 0
    })
    ball.x = 100; ball.y = 40; ball.vx = 0; ball.vy = 0
    controlledId = _nearestHomeTo(100, 40)
  }

  function _showHalftime() {
    halfSwapped = true
    gamePaused = true
    overlay.value = {
      title: 'Half Time',
      subtitle: `${homeScore.value} – ${awayScore.value}`,
      btn: 'Second Half',
      action: () => {
        overlay.value = null
        gamePaused = false
        // Swap sides
        homePlayers.forEach(p => { p.x = PW - p.x; p.baseX = PW - p.baseX })
        awayPlayers.forEach(p => { p.x = PW - p.x; p.baseX = PW - p.baseX })
        _resetKickoff()
      },
    }
    overlayClass.value = 'overlay-halftime'
  }

  function _endMatch() {
    stopLoop()
    // Assign naive MOTM — highest-rated home player
    const motm = homePlayers.sort((a, b) => b.shooting - a.shooting)[0]
    motmPlayer.value = motm?.name ?? ''
    phase.value = 'fulltime'
  }

  function _clampPositions() {
    ;[...homePlayers, ...awayPlayers].forEach(p => {
      p.x = clamp(p.x, PLAYER_R, PW - PLAYER_R)
      p.y = clamp(p.y, PLAYER_R, PH - PLAYER_R)
    })
  }

  function _nearestHomeTo(tx, ty) {
    let bestIdx = 0, bestD = Infinity
    homePlayers.forEach((p, i) => {
      const d = Math.sqrt((p.x - tx) ** 2 + (p.y - ty) ** 2)
      if (d < bestD) { bestD = d; bestIdx = i }
    })
    return bestIdx
  }

  // ── Keyboard handlers ─────────────────────────────────────────────────────
  function onKeyDown(e) {
    switch (e.code) {
      case 'ArrowUp':    keys.up    = true; break
      case 'ArrowDown':  keys.down  = true; break
      case 'ArrowLeft':  keys.left  = true; break
      case 'ArrowRight': keys.right = true; break
      case 'Space':      if (!keyLatch.space) { keys.space = true; keyLatch.space = true } break
      case 'KeyZ':       if (!keyLatch.z)     { keys.z = true;     keyLatch.z = true }     break
      case 'KeyX':       keys.x = true; break
      case 'KeyS':       if (!keyLatch.s)     { keys.s = true;     keyLatch.s = true }     break
      case 'Escape':     togglePause(); break
      case 'Enter':      overlay.value?.action?.(); break
      default: return
    }
    e.preventDefault()
  }

  function onKeyUp(e) {
    switch (e.code) {
      case 'ArrowUp':    keys.up    = false; break
      case 'ArrowDown':  keys.down  = false; break
      case 'ArrowLeft':  keys.left  = false; break
      case 'ArrowRight': keys.right = false; break
      case 'Space':      keys.space = false; keyLatch.space = false; break
      case 'KeyZ':       keys.z     = false; keyLatch.z     = false; break
      case 'KeyX':       keys.x     = false; break
      case 'KeyS':       keys.s     = false; keyLatch.s     = false; break
    }
  }

  function togglePause() {
    if (phase.value !== 'match') return
    gamePaused = !gamePaused
    if (gamePaused) {
      overlay.value = { title: 'Paused', btn: 'Resume', action: () => { overlay.value = null; gamePaused = false } }
      overlayClass.value = 'overlay-pause'
    } else {
      overlay.value = null
    }
  }

  // ── Accessors for rendering ───────────────────────────────────────────────
  function getGameState() {
    return { homePlayers, awayPlayers, ball }
  }

  return {
    // reactive refs
    homeScore, awayScore, gameTick, gameMinDisplay,
    overlay, overlayClass, scorers, motmPlayer, phase,
    // methods
    initMatch, startLoop, stopLoop,
    onKeyDown, onKeyUp, togglePause,
    getGameState,
  }
}
