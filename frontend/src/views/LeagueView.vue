<template>
  <div class="league-view">

    <div class="screen-header">
      <button class="back-btn" @click="handleBack">← Back</button>
      <h1>Leagues</h1>
      <p>Simulate a full season</p>
    </div>

    <!-- ── PHASE: Select ── -->
    <div v-if="phase === 'select'" class="phase-wrap">
      <h2 class="phase-title">Choose a League</h2>
      <div class="league-grid">
        <button
          v-for="lg in leagues" :key="lg.name"
          class="league-card"
          @click="selectLeague(lg)"
        >
          <span class="lc-flag">{{ lg.flag }}</span>
          <span class="lc-name">{{ lg.name }}</span>
          <span class="lc-country">{{ lg.country }}</span>
        </button>
      </div>
    </div>

    <!-- ── PHASE: Loading ── -->
    <div v-else-if="phase === 'loading'" class="phase-wrap loading-wrap">
      <div class="spinner"></div>
      <p class="loading-text">Simulating season…</p>
      <p class="loading-sub">{{ selectedLeague?.name }}</p>
    </div>

    <!-- ── PHASE: Results ── -->
    <div v-else-if="phase === 'results'" class="phase-wrap results-wrap">

      <!-- Awards bar -->
      <div class="awards-bar">
        <div class="award-card">
          <span class="award-icon">🏆</span>
          <div class="award-body">
            <span class="award-label">Champions</span>
            <span class="award-value">{{ result.champion }}</span>
          </div>
        </div>
        <div class="award-card">
          <span class="award-icon">⚽</span>
          <div class="award-body">
            <span class="award-label">Top Scorer</span>
            <span class="award-value">{{ result.top_scorer?.name || result.top_scorer }}</span>
            <span class="award-sub" v-if="result.top_scorer?.goals != null">{{ result.top_scorer.goals }} goals</span>
          </div>
        </div>
        <div class="award-card">
          <span class="award-icon">🧤</span>
          <div class="award-body">
            <span class="award-label">Golden Glove</span>
            <span class="award-value">{{ result.golden_glove?.name || result.golden_glove }}</span>
            <span class="award-sub" v-if="result.golden_glove?.clean_sheets != null">{{ result.golden_glove.clean_sheets }} clean sheets</span>
          </div>
        </div>
      </div>

      <!-- Two-column layout: standings + scorers -->
      <div class="results-columns">

        <!-- Standings table -->
        <div class="results-panel">
          <h3 class="panel-title">{{ selectedLeague?.name }} — Final Standings</h3>
          <div class="table-wrap">
            <table class="standings-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th class="th-club">Club</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, i) in result.standings"
                  :key="row.club"
                  :class="rowClass(i, result.standings.length)"
                >
                  <td class="td-pos">{{ i + 1 }}</td>
                  <td class="td-club">{{ row.club }}</td>
                  <td>{{ row.played ?? row.p }}</td>
                  <td>{{ row.won ?? row.w }}</td>
                  <td>{{ row.drawn ?? row.d }}</td>
                  <td>{{ row.lost ?? row.l }}</td>
                  <td>{{ row.gf }}</td>
                  <td>{{ row.ga }}</td>
                  <td class="td-gd">{{ gdStr(row) }}</td>
                  <td class="td-pts">{{ row.points ?? row.pts }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="legend">
            <span class="legend-dot cl"></span> Champions League
            <span class="legend-dot el"></span> Europa League
            <span class="legend-dot rel"></span> Relegation
          </div>
        </div>

        <!-- Top Scorers -->
        <div class="results-panel scorers-panel">
          <h3 class="panel-title">Top Scorers</h3>
          <ol class="scorers-list">
            <li
              v-for="(s, i) in topFiveScorers"
              :key="s.name || s.player"
              class="scorer-row"
            >
              <span class="scorer-rank">{{ i + 1 }}</span>
              <span class="scorer-name">{{ s.name || s.player }}</span>
              <span class="scorer-club" v-if="s.club">{{ s.club }}</span>
              <span class="scorer-goals">{{ s.goals }} <span class="goals-label">gls</span></span>
            </li>
          </ol>
        </div>

      </div>

      <!-- Matchday Results Browser -->
      <div class="results-panel matchday-panel">
        <h3 class="panel-title">Matchday Results</h3>
        <div class="matchday-list">
          <div
            v-for="(matches, md) in matchdayGroups"
            :key="md"
            class="matchday-group"
          >
            <button
              class="md-header"
              @click="toggleMatchday(md)"
            >
              <span>Matchday {{ md }}</span>
              <span class="md-chevron" :class="{ open: openMatchdays.has(md) }">▶</span>
            </button>
            <div v-if="openMatchdays.has(md)" class="md-fixtures">
              <div
                v-for="(match, idx) in matches"
                :key="idx"
                class="md-fixture-row"
                @click="toggleMatchPopup(md, idx)"
              >
                <span class="mf-home">{{ match.home }}</span>
                <span class="mf-score">{{ match.home_score }} – {{ match.away_score }}</span>
                <span class="mf-away">{{ match.away }}</span>
                <span class="mf-expand">{{ activePopup?.md === md && activePopup?.idx === idx ? '▲' : '▼' }}</span>

                <!-- Inline scorers popup -->
                <div
                  v-if="activePopup?.md === md && activePopup?.idx === idx"
                  class="scorer-popup"
                  @click.stop
                >
                  <div class="popup-cols">
                    <div class="popup-side">
                      <div class="popup-team">{{ match.home }}</div>
                      <div
                        v-for="(s, si) in homeScorers(match)"
                        :key="si"
                        class="popup-scorer"
                      >⚽ {{ s.player || s.name }} <span class="popup-min" v-if="s.minute">{{ s.minute }}'</span></div>
                      <div v-if="!homeScorers(match).length" class="popup-no-goals">—</div>
                    </div>
                    <div class="popup-divider"></div>
                    <div class="popup-side">
                      <div class="popup-team">{{ match.away }}</div>
                      <div
                        v-for="(s, si) in awayScorers(match)"
                        :key="si"
                        class="popup-scorer"
                      >⚽ {{ s.player || s.name }} <span class="popup-min" v-if="s.minute">{{ s.minute }}'</span></div>
                      <div v-if="!awayScorers(match).length" class="popup-no-goals">—</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="action-row">
        <button class="action-btn" @click="simulateAgain">↺ Simulate Again</button>
        <button class="action-btn secondary-btn" @click="phase = 'select'">← Back to League Select</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const leagues = [
  { name: 'Premier Division',      country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'Primera División',      country: 'Spain',   flag: '🇪🇸' },
  { name: 'German Top Flight',     country: 'Germany', flag: '🇩🇪' },
  { name: 'Italian First Division',country: 'Italy',   flag: '🇮🇹' },
  { name: 'French First Division', country: 'France',  flag: '🇫🇷' },
]

const phase          = ref('select')
const selectedLeague = ref(null)
const result         = ref(null)
const openMatchdays  = ref(new Set())
const activePopup    = ref(null)

// ── Navigation ────────────────────────────────────────────────────────────────
function handleBack() {
  if (phase.value === 'results') {
    phase.value = 'select'
  } else {
    router.push('/')
  }
}

// ── League selection & fetch ──────────────────────────────────────────────────
async function selectLeague(lg) {
  selectedLeague.value = lg
  openMatchdays.value  = new Set()
  activePopup.value    = null
  await runSimulation()
}

async function simulateAgain() {
  openMatchdays.value = new Set()
  activePopup.value   = null
  await runSimulation()
}

async function runSimulation() {
  phase.value = 'loading'
  try {
    const url = `/api/league/${encodeURIComponent(selectedLeague.value.name)}`
    const res  = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    result.value = await res.json()
    phase.value  = 'results'
  } catch (e) {
    alert(`Failed to simulate season: ${e.message}`)
    phase.value = 'select'
  }
}

// ── Standings helpers ─────────────────────────────────────────────────────────
function gdStr(row) {
  const gd = row.gd ?? (row.gf - (row.ga ?? 0))
  return gd >= 0 ? `+${gd}` : `${gd}`
}

function rowClass(i, total) {
  if (i < 4)              return 'row-cl'
  if (i === 4)            return 'row-el'
  if (i >= total - 3)     return 'row-rel'
  return ''
}

// ── Top scorers ───────────────────────────────────────────────────────────────
const topFiveScorers = computed(() => {
  const list = result.value?.top_scorers ?? result.value?.scorers ?? []
  return list.slice(0, 5)
})

// ── Matchday groups ───────────────────────────────────────────────────────────
const matchdayGroups = computed(() => {
  const matches = result.value?.results ?? result.value?.fixtures ?? []
  const groups  = {}
  for (const m of matches) {
    const md = m.matchday ?? m.round ?? '?'
    if (!groups[md]) groups[md] = []
    groups[md].push(m)
  }
  return groups
})

function toggleMatchday(md) {
  const s = new Set(openMatchdays.value)
  if (s.has(md)) s.delete(md)
  else s.add(md)
  openMatchdays.value = s
}

function toggleMatchPopup(md, idx) {
  if (activePopup.value?.md === md && activePopup.value?.idx === idx) {
    activePopup.value = null
  } else {
    activePopup.value = { md, idx }
  }
}

// ── Scorer popup helpers ──────────────────────────────────────────────────────
function homeScorers(match) {
  if (!match.scorers) return []
  return match.scorers.filter(s => s.team === 'home' || s.team === match.home)
}

function awayScorers(match) {
  if (!match.scorers) return []
  return match.scorers.filter(s => s.team === 'away' || s.team === match.away)
}
</script>

<style scoped>
/* ── Base ── */
.league-view {
  min-height: 100vh;
  background: #0d1117;
  color: #fff;
}

/* ── Header ── */
.screen-header {
  padding: 24px 40px 12px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #1e2535;
}
.screen-header h1 {
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
}
.screen-header p {
  font-size: 12px;
  color: #556;
  margin-top: 4px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.back-btn {
  position: absolute;
  left: 40px;
  top: 28px;
  background: none;
  border: 1px solid #333;
  color: #888;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: all .12s;
}
.back-btn:hover {
  border-color: #555;
  color: #ccc;
}

/* ── Phase wrapper ── */
.phase-wrap {
  padding: 28px 40px 48px;
}
.phase-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #aaa;
  text-transform: uppercase;
  margin-bottom: 20px;
}

/* ── League select ── */
.league-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  max-width: 900px;
}
.league-card {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 10px;
  padding: 24px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all .15s;
  color: #fff;
}
.league-card:hover {
  background: #1a2535;
  border-color: #ffd700;
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(255, 215, 0, .15);
}
.lc-flag {
  font-size: 44px;
  line-height: 1;
}
.lc-name {
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: #fff;
}
.lc-country {
  font-size: 11px;
  color: #556;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ── Loading ── */
.loading-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 20px;
}
.spinner {
  width: 56px;
  height: 56px;
  border: 4px solid #1e2535;
  border-top-color: #ffd700;
  border-radius: 50%;
  animation: spin .8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.loading-text {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
}
.loading-sub {
  font-size: 13px;
  color: #ffd700;
  letter-spacing: 1px;
}

/* ── Results layout ── */
.results-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Awards bar */
.awards-bar {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.award-card {
  flex: 1;
  min-width: 180px;
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 10px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.award-icon {
  font-size: 30px;
  flex-shrink: 0;
}
.award-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.award-label {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #556;
}
.award-value {
  font-size: 15px;
  font-weight: 700;
  color: #ffd700;
}
.award-sub {
  font-size: 11px;
  color: #889;
}

/* Columns */
.results-columns {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

/* Generic panel */
.results-panel {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 10px;
  padding: 18px 20px;
  flex: 1;
}
.panel-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #aaa;
  text-transform: uppercase;
  margin-bottom: 14px;
}

/* Standings */
.table-wrap {
  overflow-x: auto;
}
.standings-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  white-space: nowrap;
}
.standings-table th {
  color: #556;
  padding: 5px 6px;
  text-align: center;
  border-bottom: 1px solid #1e2535;
  font-weight: 600;
  letter-spacing: 1px;
}
.standings-table td {
  padding: 6px 6px;
  text-align: center;
  border-bottom: 1px solid #161c28;
}
.th-club,
.td-club {
  text-align: left;
  padding-left: 8px;
}
.td-club {
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.td-pos {
  color: #556;
  font-size: 11px;
  width: 28px;
}
.td-gd { color: #889; }
.td-pts {
  font-weight: 700;
  color: #ffd700;
}

/* Row highlights */
.row-cl td  { background: rgba(41, 128, 185, .12); }
.row-cl .td-pos::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 12px;
  background: #2980b9;
  border-radius: 2px;
  margin-right: 4px;
  vertical-align: middle;
}
.row-el td  { background: rgba(230, 126, 34, .12); }
.row-el .td-pos::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 12px;
  background: #e67e22;
  border-radius: 2px;
  margin-right: 4px;
  vertical-align: middle;
}
.row-rel td { background: rgba(192, 57, 43, .12); }
.row-rel .td-pos::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 12px;
  background: #c0392b;
  border-radius: 2px;
  margin-right: 4px;
  vertical-align: middle;
}

/* Legend */
.legend {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 12px;
  font-size: 10px;
  color: #556;
  letter-spacing: 1px;
}
.legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  margin-right: 4px;
}
.legend-dot.cl  { background: #2980b9; }
.legend-dot.el  { background: #e67e22; }
.legend-dot.rel { background: #c0392b; }

/* Top Scorers */
.scorers-panel {
  flex: 0 0 260px;
}
.scorers-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.scorer-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  background: #0d1117;
  border-radius: 6px;
  border: 1px solid #1a1a1a;
  font-size: 13px;
}
.scorer-rank {
  width: 20px;
  text-align: center;
  font-size: 11px;
  color: #556;
  flex-shrink: 0;
}
.scorer-name {
  flex: 1;
  font-weight: 600;
  color: #ddd;
}
.scorer-club {
  font-size: 10px;
  color: #445;
  flex-shrink: 0;
}
.scorer-goals {
  font-weight: 700;
  color: #ffd700;
  font-size: 15px;
  flex-shrink: 0;
}
.goals-label {
  font-size: 9px;
  color: #556;
  font-weight: 400;
}

/* Matchday browser */
.matchday-panel {
  flex: none;
  width: 100%;
}
.matchday-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 480px;
  overflow-y: auto;
  padding-right: 4px;
}
.matchday-list::-webkit-scrollbar { width: 4px; }
.matchday-list::-webkit-scrollbar-track { background: #0d1117; }
.matchday-list::-webkit-scrollbar-thumb { background: #1e2535; border-radius: 2px; }

.matchday-group {
  border: 1px solid #1a1a1a;
  border-radius: 6px;
  overflow: hidden;
}
.md-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 14px;
  background: #161c28;
  border: none;
  color: #aaa;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background .1s;
}
.md-header:hover { background: #1a2535; color: #fff; }
.md-chevron {
  font-size: 10px;
  transition: transform .15s;
  color: #556;
}
.md-chevron.open { transform: rotate(90deg); color: #ffd700; }

.md-fixtures { background: #0d1117; }
.md-fixture-row {
  display: grid;
  grid-template-columns: 1fr 80px 1fr 20px;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 12px;
  border-bottom: 1px solid #111;
  cursor: pointer;
  transition: background .1s;
  position: relative;
}
.md-fixture-row:last-child { border-bottom: none; }
.md-fixture-row:hover { background: #111820; }
.mf-home { text-align: right; color: #ccc; }
.mf-away { text-align: left; color: #ccc; }
.mf-score {
  text-align: center;
  font-weight: 700;
  color: #ffd700;
  font-family: 'Courier New', monospace;
  font-size: 13px;
}
.mf-expand {
  font-size: 9px;
  color: #445;
  text-align: center;
}

/* Scorer popup */
.scorer-popup {
  grid-column: 1 / -1;
  margin-top: 4px;
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 6px;
  padding: 12px 16px;
  cursor: default;
}
.popup-cols {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.popup-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.popup-team {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #889;
  margin-bottom: 6px;
}
.popup-scorer {
  font-size: 12px;
  color: #ccc;
}
.popup-min {
  color: #556;
  font-size: 10px;
  margin-left: 4px;
}
.popup-no-goals {
  font-size: 12px;
  color: #334;
}
.popup-divider {
  width: 1px;
  background: #1e2535;
  align-self: stretch;
}

/* Action buttons */
.action-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 20px;
}
.action-btn {
  padding: 13px 28px;
  background: linear-gradient(135deg, #27ae60, #1a7a40);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 18px rgba(39, 174, 96, .3);
  transition: all .12s;
}
.action-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(39, 174, 96, .45); }
.secondary-btn {
  background: #111820;
  box-shadow: none;
  border: 1px solid #1e2535;
  color: #aaa;
}
.secondary-btn:hover {
  background: #1a2535;
  border-color: #2e4060;
  color: #fff;
  box-shadow: none;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .phase-wrap { padding: 20px 16px 32px; }
  .back-btn   { left: 16px; }
  .results-columns { flex-direction: column; }
  .scorers-panel   { flex: none; width: 100%; }
  .awards-bar      { flex-direction: column; }
  .md-fixture-row  { grid-template-columns: 1fr 64px 1fr 16px; font-size: 11px; padding: 7px 10px; }
  .action-row      { flex-direction: column; }
  .action-btn      { width: 100%; text-align: center; }
}
</style>
