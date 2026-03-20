<template>
  <div class="career-view">
    <div class="screen-header">
      <button class="back-btn" @click="$router.push('/')">← Back</button>
      <h1>Career Mode</h1>
      <p>Manage your club through a full season</p>
    </div>

    <!-- ── PHASE: Select Club ── -->
    <div v-if="phase === 'select'" class="phase-wrap">
      <h2 class="phase-title">Choose Your Club</h2>
      <div class="club-grid">
        <button
          v-for="club in clubs" :key="club.name"
          class="club-card" :class="{ selected: pickedClub === club.name }"
          @click="pickedClub = club.name"
        >
          <span class="cc-name">{{ club.name }}</span>
          <span class="cc-league">{{ club.league }}</span>
          <span class="cc-prestige">⭐ {{ club.prestige }}/10</span>
        </button>
      </div>
      <button class="action-btn" :disabled="!pickedClub" @click="startCareer">
        Start Career ⚽
      </button>
    </div>

    <!-- ── PHASE: Season ── -->
    <div v-else-if="phase === 'season'" class="phase-wrap season-layout">

      <!-- Standings sidebar -->
      <aside class="standings-panel">
        <h3 class="panel-title">{{ career.league }} — Standings</h3>
        <table class="standings-table">
          <thead>
            <tr><th>#</th><th>Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in standings" :key="row.club"
              :class="{ 'my-club': row.club === career.club }"
            >
              <td>{{ i + 1 }}</td>
              <td class="td-club">{{ row.club }}</td>
              <td>{{ row.played }}</td>
              <td>{{ row.won }}</td>
              <td>{{ row.drawn }}</td>
              <td>{{ row.lost }}</td>
              <td>{{ row.gd >= 0 ? '+' + row.gd : row.gd }}</td>
              <td class="td-pts">{{ row.points }}</td>
            </tr>
          </tbody>
        </table>
        <div class="budget-bar">
          <span>Budget</span>
          <span class="budget-val">£{{ (career.budget / 1000).toFixed(0) }}M</span>
        </div>
        <div class="training-bar" v-if="career.trainingAvailable">
          <span>🏋️ Training slot available!</span>
        </div>
      </aside>

      <!-- Fixtures main area -->
      <main class="fixtures-panel">
        <div class="fixtures-header">
          <h3 class="panel-title">Season Fixtures — {{ career.club }}</h3>
          <span class="matchday-badge">MD {{ currentMatchday }}</span>
        </div>

        <div class="fixture-list">
          <div
            v-for="f in upcomingFixtures" :key="f.matchday + f.home + f.away"
            class="fixture-row"
            :class="{ 'my-fixture': isMyFixture(f), played: f.played }"
          >
            <span class="md-badge">MD{{ f.matchday }}</span>
            <span class="fx-team" :class="{ 'my-team': f.home === career.club }">{{ f.home }}</span>
            <span class="fx-score" v-if="f.played">{{ f.home_score }} – {{ f.away_score }}</span>
            <span class="fx-vs" v-else>vs</span>
            <span class="fx-team away" :class="{ 'my-team': f.away === career.club }">{{ f.away }}</span>

            <div v-if="isMyFixture(f) && !f.played" class="fx-actions">
              <button class="fx-btn play-btn" @click="playMatch(f)">Play</button>
              <button class="fx-btn sim-btn" :disabled="simulating" @click="simMatch(f)">Simulate</button>
            </div>
          </div>
        </div>

        <div v-if="simulating" class="sim-overlay">Simulating…</div>

        <div v-if="seasonDone" class="season-end">
          <h2>🏆 Season Complete!</h2>
          <p>{{ standings[0].club }} are Champions!</p>
          <p>You finished {{ myPosition }}{{ ordinal(myPosition) }}</p>
          <button class="action-btn" @click="newSeason">Start Next Season</button>
          <button class="action-btn secondary-btn" @click="resetCareer">End Career</button>
        </div>
      </main>
    </div>

    <!-- ── PHASE: Match Result ── -->
    <div v-else-if="phase === 'result'" class="phase-wrap result-phase">
      <div class="result-card">
        <h2>{{ lastResult.home }} <span class="result-score">{{ lastResult.home_score }} – {{ lastResult.away_score }}</span> {{ lastResult.away }}</h2>
        <p class="result-outcome">{{ resultOutcome }}</p>
        <div class="result-scorers" v-if="lastResult.scorers && lastResult.scorers.length">
          <div v-for="s in lastResult.scorers" :key="s.player+s.minute">
            ⚽ {{ s.player }} <span class="min">{{ s.minute }}'</span>
            <span class="sc-team">({{ s.team === 'home' ? lastResult.home : lastResult.away }})</span>
          </div>
        </div>
        <button class="action-btn" @click="phase = 'season'">Continue</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router   = useRouter()
const phase    = ref('select')
const clubs    = ref([])
const pickedClub = ref('')
const simulating = ref(false)
const lastResult = ref(null)

const career = ref({
  club: '',
  league: '',
  budget: 0,
  season: 1,
  trainingAvailable: false,
  fixtures: [],
})

const SAVE_KEY = 'tbg_career'

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const res = await fetch('/api/clubs')
    clubs.value = await res.json()
  } catch { /* ignore */ }

  // Restore saved career
  const saved = localStorage.getItem(SAVE_KEY)
  if (saved) {
    try {
      career.value = JSON.parse(saved)
      phase.value  = 'season'
    } catch { /* corrupt save */ }
  }
})

// ── Career start ──────────────────────────────────────────────────────────────
async function startCareer() {
  const clubData = clubs.value.find(c => c.name === pickedClub.value)
  if (!clubData) return

  try {
    const res = await fetch(`/api/career/fixtures/${encodeURIComponent(clubData.league)}`)
    const data = await res.json()

    career.value = {
      club: pickedClub.value,
      league: clubData.league,
      budget: clubData.prestige * 5000,    // prestige × £5M
      season: 1,
      trainingAvailable: true,
      fixtures: data.fixtures,
      clubs: data.clubs,
    }
    saveCareer()
    phase.value = 'season'
  } catch (e) {
    alert('Could not load fixtures — is the backend running?')
  }
}

// ── Computed ──────────────────────────────────────────────────────────────────
const standings = computed(() => {
  const clubs_in_league = career.value.clubs || []
  const rows = {}
  clubs_in_league.forEach(c => {
    rows[c] = { club: c, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
  })

  for (const f of career.value.fixtures || []) {
    if (!f.played) continue
    const h = f.home, a = f.away
    if (!rows[h] || !rows[a]) continue
    rows[h].played++; rows[h].gf += f.home_score; rows[h].ga += f.away_score
    rows[a].played++; rows[a].gf += f.away_score; rows[a].ga += f.home_score
    if (f.home_score > f.away_score)      { rows[h].won++; rows[h].points += 3; rows[a].lost++ }
    else if (f.away_score > f.home_score) { rows[a].won++; rows[a].points += 3; rows[h].lost++ }
    else                                  { rows[h].drawn++; rows[h].points++; rows[a].drawn++; rows[a].points++ }
  }

  return Object.values(rows).sort((a, b) => {
    const gda = a.gf - a.ga, gdb = b.gf - b.ga
    return b.points - a.points || gdb - gda || b.gf - a.gf || a.club.localeCompare(b.club)
  })
})

const currentMatchday = computed(() => {
  const played = career.value.fixtures?.filter(f => f.played && isMyFixture(f))
  return (played?.length || 0) + 1
})

const upcomingFixtures = computed(() => {
  return (career.value.fixtures || []).slice(0, 60)
})

const seasonDone = computed(() =>
  career.value.fixtures?.every(f => f.played) && career.value.fixtures?.length > 0
)

const myPosition = computed(() => {
  return standings.value.findIndex(r => r.club === career.value.club) + 1
})

const resultOutcome = computed(() => {
  if (!lastResult.value) return ''
  const r = lastResult.value
  const myHome = r.home === career.value.club
  const myScore  = myHome ? r.home_score : r.away_score
  const oppScore = myHome ? r.away_score : r.home_score
  if (myScore > oppScore)  return '✅ Victory!'
  if (myScore === oppScore) return '🤝 Draw'
  return '❌ Defeat'
})

// ── Fixture helpers ───────────────────────────────────────────────────────────
function isMyFixture(f) {
  return f.home === career.value.club || f.away === career.value.club
}

function playMatch(f) {
  // Navigate to Play the Game with pre-selected teams
  router.push(`/play?home=${encodeURIComponent(f.home)}&away=${encodeURIComponent(f.away)}&career=1`)
}

async function simMatch(f) {
  simulating.value = true
  try {
    const res = await fetch('/api/career/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ home: f.home, away: f.away }),
    })
    const data = await res.json()
    f.home_score = data.score.home
    f.away_score = data.score.away
    f.played = true

    lastResult.value = {
      home: f.home,
      away: f.away,
      home_score: f.home_score,
      away_score: f.away_score,
      scorers: data.scorers,
    }
    saveCareer()
    phase.value = 'result'
  } catch {
    alert('Simulation failed')
  } finally {
    simulating.value = false
  }
}

function newSeason() {
  career.value.fixtures.forEach(f => { f.played = false; f.home_score = -1; f.away_score = -1 })
  career.value.season++
  career.value.trainingAvailable = true
  saveCareer()
  phase.value = 'season'
}

function resetCareer() {
  localStorage.removeItem(SAVE_KEY)
  phase.value = 'select'
  pickedClub.value = ''
}

function saveCareer() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(career.value))
}

function ordinal(n) {
  const s = ['th','st','nd','rd'], v = n % 100
  return s[(v - 20) % 10] || s[v] || s[0]
}
</script>

<style scoped>
.career-view { min-height: 100vh; background: #0d1117; color: #fff; }

.screen-header { padding: 24px 40px 12px; text-align: center; position: relative; }
.screen-header h1 { font-size: 26px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; }
.screen-header p { font-size: 12px; color: #556; margin-top: 4px; letter-spacing: 2px; }
.back-btn {
  position: absolute; left: 40px; top: 28px;
  background: none; border: 1px solid #333; color: #888;
  padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 13px;
}
.back-btn:hover { border-color: #555; color: #aaa; }

.phase-wrap { padding: 20px 40px 40px; }
.phase-title { font-size: 18px; font-weight: 700; letter-spacing: 2px; color: #aaa; text-transform: uppercase; margin-bottom: 16px; }

/* Club select */
.club-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin-bottom: 24px; }
.club-card {
  background: #111820; border: 1px solid #1e2535; border-radius: 8px;
  padding: 14px 16px; cursor: pointer; text-align: left; color: #ccc;
  display: flex; flex-direction: column; gap: 4px; transition: all .12s;
}
.club-card:hover { background: #1a2535; border-color: #2e4060; }
.club-card.selected { background: #1a3a5c; border-color: #2980b9; color: #fff; }
.cc-name   { font-size: 14px; font-weight: 700; }
.cc-league { font-size: 11px; color: #556; }
.cc-prestige { font-size: 11px; color: #ffd700; margin-top: 4px; }

.action-btn {
  padding: 14px 36px; background: linear-gradient(135deg, #27ae60, #1a7a40);
  color: #fff; border: none; border-radius: 8px; font-size: 14px; font-weight: 700;
  cursor: pointer; text-transform: uppercase; letter-spacing: 1px;
  box-shadow: 0 4px 18px rgba(39,174,96,.35); transition: all .12s;
}
.action-btn:disabled { opacity: .4; cursor: not-allowed; }
.action-btn:not(:disabled):hover { transform: translateY(-2px); }
.secondary-btn { background: #1a2535; box-shadow: none; margin-left: 12px; }

/* Season layout */
.season-layout { display: flex; gap: 24px; align-items: flex-start; }

.standings-panel { width: 320px; flex-shrink: 0; background: #111820; border: 1px solid #1e2535; border-radius: 8px; padding: 16px; }
.panel-title { font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #aaa; text-transform: uppercase; margin-bottom: 12px; }

.standings-table { width: 100%; border-collapse: collapse; font-size: 12px; }
.standings-table th { color: #556; padding: 4px 4px; text-align: center; }
.standings-table td { padding: 5px 4px; text-align: center; border-bottom: 1px solid #1a1a1a; }
.td-club { text-align: left; font-size: 11px; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.td-pts { font-weight: 700; color: #ffd700; }
.my-club td { color: #4fc3f7; }

.budget-bar { display: flex; justify-content: space-between; margin-top: 12px; font-size: 12px; color: #889; border-top: 1px solid #1e2535; padding-top: 10px; }
.budget-val { color: #27ae60; font-weight: 700; }
.training-bar { margin-top: 8px; font-size: 12px; color: #ffd700; }

/* Fixtures panel */
.fixtures-panel { flex: 1; background: #111820; border: 1px solid #1e2535; border-radius: 8px; padding: 16px; position: relative; }
.fixtures-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.matchday-badge { font-size: 11px; background: #1a2535; border: 1px solid #2e4060; border-radius: 4px; padding: 3px 8px; color: #4fc3f7; }

.fixture-list { display: flex; flex-direction: column; gap: 4px; max-height: calc(100vh - 280px); overflow-y: auto; }
.fixture-row {
  display: grid; grid-template-columns: 40px 1fr 60px 1fr auto;
  align-items: center; gap: 8px; padding: 8px 10px;
  background: #0d1117; border-radius: 4px; border: 1px solid #1a1a1a;
  font-size: 13px;
}
.fixture-row.my-fixture { border-color: #1e3a5c; background: #0d1a2a; }
.fixture-row.played { opacity: 0.6; }
.md-badge { font-size: 10px; color: #445; text-align: center; }
.fx-team { text-align: right; }
.fx-team.away { text-align: left; }
.fx-team.my-team { color: #4fc3f7; font-weight: 700; }
.fx-score { text-align: center; font-weight: 700; color: #ffd700; font-family: monospace; }
.fx-vs { text-align: center; color: #445; font-size: 11px; }
.fx-actions { display: flex; gap: 6px; }
.fx-btn { padding: 4px 10px; border: none; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; text-transform: uppercase; }
.play-btn { background: #27ae60; color: #fff; }
.sim-btn  { background: #1a3a5c; color: #aaa; border: 1px solid #2e4060; }
.sim-btn:disabled { opacity: .4; cursor: not-allowed; }

.sim-overlay { position: absolute; inset: 0; background: rgba(0,0,0,.6); display: flex; align-items: center; justify-content: center; font-size: 18px; border-radius: 8px; }

.season-end { text-align: center; padding: 40px; }
.season-end h2 { font-size: 28px; margin-bottom: 12px; color: #ffd700; }

/* Result phase */
.result-phase { display: flex; justify-content: center; }
.result-card { background: #111820; border: 1px solid #1e2535; border-radius: 12px; padding: 40px 56px; text-align: center; max-width: 500px; }
.result-card h2 { font-size: 20px; margin-bottom: 8px; }
.result-score { color: #ffd700; font-family: monospace; font-size: 32px; display: block; margin: 8px 0; }
.result-outcome { font-size: 20px; margin: 12px 0; }
.result-scorers { font-size: 13px; margin: 16px 0; display: flex; flex-direction: column; gap: 4px; color: #aaa; }
.min { color: #556; margin-left: 4px; }
.sc-team { color: #445; margin-left: 4px; }
</style>
