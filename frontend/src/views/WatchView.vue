<template>
  <div class="watch-view">

    <!-- ── TEAM SELECTION ── -->
    <div v-if="phase === 'select'" class="screen select-screen">
      <header class="screen-header">
        <button class="back-btn" @click="goHome">← Back</button>
        <h1>Watch the Play</h1>
        <p>Pick two clubs and watch the simulation unfold</p>
      </header>

      <div class="team-pickers">
        <!-- Home -->
        <div class="picker-col">
          <h2 class="picker-title">🏠 Home Team</h2>
          <div class="club-grid">
            <button
              v-for="club in clubs"
              :key="club.name"
              class="club-btn"
              :class="{ selected: homeTeam === club.name, blocked: awayTeam === club.name }"
              :disabled="awayTeam === club.name"
              @click="homeTeam = club.name"
            >
              <span class="club-name">{{ club.name }}</span>
              <span class="club-league">{{ club.league }}</span>
            </button>
          </div>
        </div>

        <!-- vs -->
        <div class="vs-col">
          <div class="vs-badge">VS</div>
          <button
            class="kickoff-btn"
            :disabled="!homeTeam || !awayTeam"
            @click="startMatch"
          >
            Kick Off ⚽
          </button>
        </div>

        <!-- Away -->
        <div class="picker-col">
          <h2 class="picker-title">✈️ Away Team</h2>
          <div class="club-grid">
            <button
              v-for="club in clubs"
              :key="club.name"
              class="club-btn"
              :class="{ selected: awayTeam === club.name, blocked: homeTeam === club.name }"
              :disabled="homeTeam === club.name"
              @click="awayTeam = club.name"
            >
              <span class="club-name">{{ club.name }}</span>
              <span class="club-league">{{ club.league }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ── MATCH FEED ── -->
    <div v-else-if="phase === 'match'" class="screen match-screen">
      <div class="match-scorebar">
        <span class="team-name">{{ result.home }}</span>
        <span class="scorebox">{{ result.score.home }} – {{ result.score.away }}</span>
        <span class="team-name">{{ result.away }}</span>
      </div>

      <div class="feed-wrap">
        <EventFeed :events="visibleEvents" />
      </div>

      <div class="match-footer">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPct + '%' }"></div>
        </div>
        <span class="progress-label">{{ visibleEvents.length }} / {{ result.events.length }} events</span>
      </div>
    </div>

    <!-- ── POST MATCH ── -->
    <div v-else-if="phase === 'postmatch'" class="screen">
      <PostMatch :result="result" @back="goHome" />
    </div>

    <!-- ── LOADING ── -->
    <div v-else class="screen loading-screen">
      <div class="spinner"></div>
      <p>Simulating match…</p>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import EventFeed from '../components/EventFeed.vue'
import PostMatch from '../components/PostMatch.vue'

const router = useRouter()
const clubs    = ref([])
const homeTeam = ref('')
const awayTeam = ref('')
const phase    = ref('select')   // select | loading | match | postmatch
const result   = ref(null)
const visibleEvents = ref([])

const progressPct = computed(() => {
  if (!result.value) return 0
  return (visibleEvents.value.length / result.value.events.length) * 100
})

onMounted(async () => {
  try {
    const res = await fetch('/api/clubs')
    clubs.value = await res.json()
  } catch { /* ignore */ }
})

function goHome() { router.push('/') }

async function startMatch() {
  if (!homeTeam.value || !awayTeam.value) return
  phase.value = 'loading'

  try {
    const res = await fetch('/api/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ home: homeTeam.value, away: awayTeam.value }),
    })
    result.value = await res.json()
    phase.value = 'match'
    streamEvents()
  } catch {
    phase.value = 'select'
    alert('Simulation failed — is the backend running?')
  }
}

function streamEvents() {
  const all = result.value.events
  let i = 0
  const interval = setInterval(() => {
    if (i >= all.length) {
      clearInterval(interval)
      setTimeout(() => { phase.value = 'postmatch' }, 1200)
      return
    }
    visibleEvents.value.push(all[i++])
  }, 90)
}
</script>

<style scoped>
.watch-view { min-height: 100vh; background: #0d1117; color: #fff; }

.screen { min-height: 100vh; display: flex; flex-direction: column; align-items: center; }

/* Header */
.screen-header {
  width: 100%;
  padding: 24px 40px 12px;
  text-align: center;
  position: relative;
}
.screen-header h1 { font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; }
.screen-header p  { font-size: 12px; color: #556; letter-spacing: 2px; margin-top: 4px; }
.back-btn {
  position: absolute; left: 40px; top: 28px;
  background: none; border: 1px solid #333; color: #888;
  padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 13px;
  transition: border-color .15s;
}
.back-btn:hover { border-color: #555; color: #aaa; }

/* Team pickers */
.team-pickers {
  display: flex;
  gap: 0;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px 40px;
  flex: 1;
  align-items: flex-start;
}
.picker-col  { flex: 1; padding: 0 20px; }
.picker-title { font-size: 14px; font-weight: 700; letter-spacing: 2px; margin-bottom: 14px; color: #aaa; text-transform: uppercase; }

.club-grid { display: flex; flex-direction: column; gap: 6px; }
.club-btn {
  display: flex; flex-direction: column;
  padding: 10px 16px;
  background: #111820; border: 1px solid #1e2535;
  border-radius: 6px; cursor: pointer; color: #ccc;
  text-align: left; transition: all .12s ease;
}
.club-btn:hover:not(:disabled) { background: #1a2535; border-color: #2e4060; }
.club-btn.selected { background: #1a3a5c; border-color: #2980b9; color: #fff; }
.club-btn.blocked  { opacity: .3; cursor: not-allowed; }
.club-name  { font-size: 13px; font-weight: 700; }
.club-league { font-size: 10px; color: #556; margin-top: 2px; }

.vs-col {
  width: 120px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 36px;
}
.vs-badge { font-size: 28px; font-weight: 900; color: #ffd700; }
.kickoff-btn {
  padding: 14px 20px;
  background: linear-gradient(135deg, #27ae60, #1a7a40);
  color: #fff; border: none; border-radius: 8px;
  font-size: 14px; font-weight: 700; cursor: pointer;
  text-transform: uppercase; letter-spacing: 1px;
  box-shadow: 0 4px 18px rgba(39,174,96,.35);
  transition: all .12s;
}
.kickoff-btn:hover:not(:disabled) { transform: translateY(-2px); }
.kickoff-btn:disabled { opacity: .4; cursor: not-allowed; }

/* Match screen */
.match-screen { padding-bottom: 40px; }
.match-scorebar {
  display: flex; align-items: center; justify-content: center; gap: 24px;
  padding: 20px 40px;
  background: #111820; width: 100%;
  border-bottom: 1px solid #1e2535;
}
.team-name { font-size: 18px; font-weight: 700; flex: 1; }
.team-name:last-child { text-align: right; }
.scorebox  { font-size: 36px; font-weight: 900; color: #ffd700; font-family: 'Courier New', monospace; min-width: 100px; text-align: center; }

.feed-wrap { width: 100%; max-width: 700px; flex: 1; padding: 20px; }

.match-footer { width: 100%; max-width: 700px; padding: 0 20px; }
.progress-bar  { height: 4px; background: #1e2535; border-radius: 2px; overflow: hidden; }
.progress-fill { height: 100%; background: #27ae60; transition: width .1s linear; }
.progress-label { font-size: 10px; color: #556; margin-top: 6px; display: block; text-align: right; }

/* Loading */
.loading-screen { justify-content: center; gap: 20px; }
.spinner {
  width: 48px; height: 48px;
  border: 4px solid #1e2535; border-top-color: #27ae60;
  border-radius: 50%; animation: spin .8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.loading-screen p { color: #556; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; }
</style>
