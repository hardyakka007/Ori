<template>
  <div class="play-view">

    <!-- ── TEAM SELECTION ── -->
    <div v-if="phase === 'select'" class="screen select-screen">
      <header class="screen-header">
        <button class="back-btn" @click="goHome">← Back</button>
        <h1>Play the Game</h1>
        <p>Choose your club and opponent</p>
      </header>

      <!-- League filter tabs -->
      <div class="league-tabs">
        <button
          v-for="lg in leagues" :key="lg"
          class="league-tab"
          :class="{ active: selectedLeague === lg }"
          @click="selectedLeague = lg"
        >{{ lg }}</button>
      </div>

      <div class="team-pickers">
        <!-- Home picker -->
        <div class="picker-col">
          <h2 class="picker-title">🎮 Your Club</h2>
          <div class="club-grid">
            <button
              v-for="club in filteredClubs" :key="club.name"
              class="club-btn"
              :class="{ selected: myTeam === club.name, blocked: oppTeam === club.name }"
              :disabled="oppTeam === club.name"
              :style="myTeam === club.name ? { background: club.primary_color, color: club.secondary_color, borderColor: club.secondary_color } : {}"
              @click="myTeam = club.name"
            >
              <span class="club-badge" :style="{ background: club.primary_color }">
                <span class="badge-letter">{{ club.name[0] }}</span>
              </span>
              <span class="club-info">
                <span class="club-name">{{ club.name }}</span>
                <span class="club-prestige">{{ '★'.repeat(Math.ceil(club.prestige / 2)) }}</span>
              </span>
            </button>
          </div>
        </div>

        <div class="vs-col">
          <div class="selected-preview home-preview" v-if="myTeam">
            <div class="preview-badge" :style="{ background: getClub(myTeam)?.primary_color }">
              {{ myTeam[0] }}
            </div>
            <div class="preview-name">{{ myTeam }}</div>
          </div>
          <div class="vs-badge">VS</div>
          <div class="selected-preview away-preview" v-if="oppTeam">
            <div class="preview-badge" :style="{ background: getClub(oppTeam)?.primary_color }">
              {{ oppTeam[0] }}
            </div>
            <div class="preview-name">{{ oppTeam }}</div>
          </div>
          <button class="kickoff-btn" :disabled="!myTeam || !oppTeam" @click="loadTeams">
            ⚽ Kick Off
          </button>
        </div>

        <!-- Away picker -->
        <div class="picker-col">
          <h2 class="picker-title">🤖 Opponent</h2>
          <div class="club-grid">
            <button
              v-for="club in filteredClubs" :key="club.name"
              class="club-btn"
              :class="{ selected: oppTeam === club.name, blocked: myTeam === club.name }"
              :disabled="myTeam === club.name"
              :style="oppTeam === club.name ? { background: club.primary_color, color: club.secondary_color, borderColor: club.secondary_color } : {}"
              @click="oppTeam = club.name"
            >
              <span class="club-badge" :style="{ background: club.primary_color }">
                <span class="badge-letter">{{ club.name[0] }}</span>
              </span>
              <span class="club-info">
                <span class="club-name">{{ club.name }}</span>
                <span class="club-prestige">{{ '★'.repeat(Math.ceil(club.prestige / 2)) }}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ── MATCH ── -->
    <div v-else-if="phase === 'match'" class="match-wrapper" tabindex="0" @keydown.prevent>

      <!-- Scorebar -->
      <div class="scorebar">
        <div class="sb-club">
          <span class="sb-dot" :style="{ background: homeColor }"></span>
          <span class="sb-team">{{ homeName }}</span>
        </div>
        <div class="sb-center">
          <span class="sb-score">{{ homeScore }} – {{ awayScore }}</span>
          <span class="sb-time">{{ gameMinDisplay }}'</span>
        </div>
        <div class="sb-club">
          <span class="sb-team away">{{ awayName }}</span>
          <span class="sb-dot" :style="{ background: awayColor }"></span>
        </div>
      </div>

      <!-- 3D Pitch -->
      <div class="canvas-wrap">
        <ThreePitch
          :gameState="liveGameState"
          :homeColor="homeColor"
          :awayColor="awayColor"
          :active="phase === 'match'"
        />

        <!-- Overlays -->
        <div v-if="overlay" class="overlay" :class="overlayClass">
          <div class="overlay-content">
            <div class="overlay-title">{{ overlay.title }}</div>
            <div v-if="overlay.subtitle" class="overlay-sub">{{ overlay.subtitle }}</div>
            <button v-if="overlay.btn" class="overlay-btn" @click="overlay.action">{{ overlay.btn }}</button>
          </div>
        </div>
      </div>

      <!-- Controls legend -->
      <div class="controls-bar">
        <span><kbd>↑↓←→</kbd> Move</span>
        <span><kbd>SPC</kbd> Pass</span>
        <span><kbd>Z</kbd> Shoot</span>
        <span><kbd>X</kbd> Sprint</span>
        <span><kbd>S</kbd> Tackle</span>
        <span><kbd>Esc</kbd> Pause</span>
      </div>
    </div>

    <!-- ── FULL TIME ── -->
    <div v-else-if="phase === 'fulltime'" class="screen ft-screen">
      <div class="ft-card">
        <div class="ft-badges">
          <div class="ft-badge" :style="{ background: homeColor }">{{ homeName[0] }}</div>
          <div class="ft-score-big">{{ homeScore }} – {{ awayScore }}</div>
          <div class="ft-badge" :style="{ background: awayColor }">{{ awayName[0] }}</div>
        </div>
        <div class="ft-teams">{{ homeName }} vs {{ awayName }}</div>
        <div class="ft-result">
          {{ homeScore > awayScore ? '🏆 Victory!' : homeScore < awayScore ? '😔 Defeat' : '🤝 Draw' }}
        </div>

        <div v-if="scorers.length" class="ft-scorers">
          <h3>Goals</h3>
          <div v-for="s in scorers" :key="s.player + s.minute" class="ft-scorer">
            ⚽ {{ s.player }}
            <span class="ft-min">{{ s.minute }}'</span>
            <span class="ft-team-tag" :style="{ background: s.team === 'home' ? homeColor : awayColor }">
              {{ s.team === 'home' ? homeName : awayName }}
            </span>
          </div>
        </div>

        <div class="ft-motm" v-if="motmPlayer">
          🏅 Man of the Match: <strong>{{ motmPlayer }}</strong>
        </div>

        <div class="ft-actions">
          <button class="back-btn" @click="rematch">🔄 Rematch</button>
          <button class="back-btn" @click="goHome">🏠 Main Menu</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ThreePitch from '../components/ThreePitch.vue'
import { useGameLoop } from '../composables/useGameLoop.js'

const router = useRouter()

// ── Club data ─────────────────────────────────────────────────────────────
const clubs = ref([])
const myTeam    = ref('')
const oppTeam   = ref('')
const homeName  = ref('')
const awayName  = ref('')
const homeColor = ref('#e74c3c')
const awayColor = ref('#3498db')

const leagues = ['All', 'Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1']
const selectedLeague = ref('All')

const filteredClubs = computed(() => {
  if (selectedLeague.value === 'All') return clubs.value
  return clubs.value.filter(c => c.league === selectedLeague.value)
})

function getClub(name) {
  return clubs.value.find(c => c.name === name)
}

// ── Game loop composable ───────────────────────────────────────────────────
const {
  homeScore, awayScore, gameMinDisplay,
  overlay, overlayClass, scorers, motmPlayer, phase,
  initMatch, startLoop, stopLoop,
  onKeyDown, onKeyUp,
  getGameState,
} = useGameLoop()

// Live game state for ThreePitch (updated each RAF via a getter)
const liveGameState = computed(() => getGameState())

// ── Lifecycle ─────────────────────────────────────────────────────────────
onMounted(async () => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup',   onKeyUp)
  try {
    const res = await fetch('/api/clubs')
    clubs.value = await res.json()
  } catch { /* backend not running */ }
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup',   onKeyUp)
  stopLoop()
})

// ── Navigation ────────────────────────────────────────────────────────────
function goHome() {
  stopLoop()
  router.push('/')
}

function rematch() {
  stopLoop()
  phase.value = 'select'
}

// ── Load teams & kick off ─────────────────────────────────────────────────
async function loadTeams() {
  if (!myTeam.value || !oppTeam.value) return
  try {
    const [homeRes, awayRes] = await Promise.all([
      fetch(`/api/teams/${encodeURIComponent(myTeam.value)}`),
      fetch(`/api/teams/${encodeURIComponent(oppTeam.value)}`),
    ])
    const homeData = await homeRes.json()
    const awayData = await awayRes.json()

    homeName.value  = homeData.club.name
    awayName.value  = awayData.club.name
    homeColor.value = homeData.club.primary_color  || '#e74c3c'
    awayColor.value = awayData.club.primary_color  || '#3498db'

    initMatch(homeData.players, awayData.players, homeName.value, awayName.value)
    startLoop()
  } catch {
    alert('Could not load team data — is the backend running?')
  }
}
</script>

<style scoped>
/* ── Base ── */
.play-view { min-height: 100vh; background: #0d1117; color: #fff; font-family: 'Segoe UI', sans-serif; }

/* ── Select screen ── */
.select-screen { padding: 16px; }
.screen-header { text-align: center; margin-bottom: 16px; }
.screen-header h1 { font-size: 2rem; margin: 0; background: linear-gradient(135deg,#00d2ff,#3a7bd5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.screen-header p  { color: #888; margin: 4px 0 0; }

/* League tabs */
.league-tabs { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
.league-tab  { padding: 6px 14px; border-radius: 20px; border: 1px solid #333; background: #161b22; color: #aaa; cursor: pointer; font-size: 0.82rem; transition: all .2s; }
.league-tab.active { background: #1f6feb; border-color: #1f6feb; color: #fff; }

/* Pickers */
.team-pickers { display: flex; gap: 16px; max-width: 1200px; margin: 0 auto; }
.picker-col   { flex: 1; }
.picker-title { font-size: 1rem; color: #7dd3fc; margin-bottom: 10px; text-align: center; }
.vs-col       { width: 140px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; }
.vs-badge     { font-size: 1.8rem; font-weight: 900; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,.4); }

.club-grid { display: flex; flex-direction: column; gap: 6px; max-height: 72vh; overflow-y: auto; padding-right: 4px; }
.club-grid::-webkit-scrollbar { width: 4px; }
.club-grid::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }

.club-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 12px; border-radius: 8px; border: 1px solid #21262d;
  background: #161b22; color: #ccc; cursor: pointer; text-align: left;
  transition: all .15s; font-size: 0.83rem;
}
.club-btn:hover:not(:disabled) { border-color: #3b82f6; background: #1c2535; color: #fff; }
.club-btn.selected { border-color: #22c55e; color: #fff; }
.club-btn.blocked  { opacity: .35; cursor: not-allowed; }

.club-badge       { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.badge-letter     { font-weight: 900; font-size: 0.9rem; color: rgba(255,255,255,.9); }
.club-info        { display: flex; flex-direction: column; }
.club-name        { font-weight: 600; }
.club-prestige    { font-size: 0.65rem; color: #f59e0b; letter-spacing: 1px; }

/* Selected preview */
.selected-preview { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.preview-badge    { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 900; color: rgba(255,255,255,.9); }
.preview-name     { font-size: 0.7rem; color: #aaa; text-align: center; max-width: 100px; word-break: break-word; }

.kickoff-btn {
  padding: 12px 24px; font-size: 1rem; font-weight: 700;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff; border: none; border-radius: 10px; cursor: pointer;
  transition: transform .1s, box-shadow .1s;
  box-shadow: 0 4px 15px rgba(34,197,94,.35);
}
.kickoff-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(34,197,94,.45); }
.kickoff-btn:disabled { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }

/* ── Match screen ── */
.match-wrapper { display: flex; flex-direction: column; height: 100vh; }
.scorebar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 20px; background: #0d1117; border-bottom: 1px solid #21262d;
  z-index: 10;
}
.sb-club   { display: flex; align-items: center; gap: 8px; }
.sb-dot    { width: 12px; height: 12px; border-radius: 50%; }
.sb-team   { font-weight: 700; font-size: 1rem; }
.sb-center { display: flex; flex-direction: column; align-items: center; }
.sb-score  { font-size: 1.8rem; font-weight: 900; letter-spacing: 4px; }
.sb-time   { font-size: 0.75rem; color: #888; }

.canvas-wrap { flex: 1; min-height: 0; position: relative; overflow: hidden; }

.overlay {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,.65); backdrop-filter: blur(6px);
  z-index: 20;
}
.overlay-content { text-align: center; }
.overlay-title   { font-size: 2.8rem; font-weight: 900; margin-bottom: 8px; }
.overlay-sub     { font-size: 1.4rem; color: #ccc; margin-bottom: 20px; }
.overlay-btn     { padding: 12px 32px; font-size: 1rem; font-weight: 700; border: none; border-radius: 8px; background: #22c55e; color: #fff; cursor: pointer; }
.overlay-goal    .overlay-title { color: #22c55e; text-shadow: 0 0 30px rgba(34,197,94,.7); }
.overlay-concede .overlay-title { color: #ef4444; }
.overlay-halftime .overlay-title { color: #f59e0b; }
.overlay-pause   .overlay-title { color: #60a5fa; }

.controls-bar {
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
  padding: 6px 12px; background: #0d1117; border-top: 1px solid #21262d;
  font-size: 0.78rem; color: #666;
}
.controls-bar kbd { background: #21262d; padding: 2px 6px; border-radius: 4px; color: #ccc; font-size: 0.75rem; }

/* ── Full Time ── */
.ft-screen { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
.ft-card   { background: #161b22; border: 1px solid #21262d; border-radius: 16px; padding: 40px 48px; text-align: center; max-width: 500px; width: 100%; }
.ft-badges { display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 8px; }
.ft-badge  { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; font-weight: 900; color: rgba(255,255,255,.9); }
.ft-score-big { font-size: 2.8rem; font-weight: 900; }
.ft-teams  { color: #888; font-size: 0.9rem; margin-bottom: 8px; }
.ft-result { font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; }
.ft-scorers { margin: 16px 0; text-align: left; }
.ft-scorers h3 { color: #888; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
.ft-scorer { display: flex; align-items: center; gap: 8px; padding: 5px 0; border-bottom: 1px solid #21262d; font-size: 0.9rem; }
.ft-min    { color: #888; font-size: 0.8rem; margin-left: auto; }
.ft-team-tag { font-size: 0.7rem; padding: 2px 7px; border-radius: 10px; color: #fff; }
.ft-motm   { margin: 16px 0; padding: 12px; background: rgba(245,158,11,.1); border: 1px solid rgba(245,158,11,.3); border-radius: 8px; font-size: 0.95rem; }
.ft-actions { display: flex; gap: 12px; justify-content: center; margin-top: 20px; }

.back-btn { padding: 10px 20px; background: #21262d; border: 1px solid #30363d; color: #ccc; border-radius: 8px; cursor: pointer; font-size: 0.9rem; }
.back-btn:hover { background: #2d333b; color: #fff; }
</style>
