<template>
  <div class="playerdb-view">

    <!-- ── Screen Header ───────────────────────────────────────────────────── -->
    <div class="screen-header">
      <button class="back-btn" @click="$router.push('/')">← Back</button>
      <h1>Player Database</h1>
    </div>

    <!-- ── Filter Bar ──────────────────────────────────────────────────────── -->
    <div class="filter-bar">
      <input
        v-model="filters.search"
        class="filter-input filter-search"
        type="text"
        placeholder="Search player name..."
        @input="onFilterChange"
      />

      <select v-model="filters.position" class="filter-select" @change="onFilterChange">
        <option value="">ALL</option>
        <option value="GK">GK</option>
        <option value="DEF">DEF</option>
        <option value="MID">MID</option>
        <option value="ATT">ATT</option>
      </select>

      <select v-model="filters.league" class="filter-select" @change="onLeagueChange">
        <option value="">ALL Leagues</option>
        <option v-for="league in availableLeagues" :key="league" :value="league">{{ league }}</option>
      </select>

      <select v-model="filters.club" class="filter-select" @change="onFilterChange">
        <option value="">ALL Clubs</option>
        <option v-for="club in filteredClubs" :key="club.name" :value="club.name">{{ club.name }}</option>
      </select>

      <input
        v-model.number="filters.min_ovr"
        class="filter-input filter-ovr"
        type="number"
        placeholder="Min OVR"
        min="1" max="99"
        @input="onFilterChange"
      />

      <input
        v-model.number="filters.max_ovr"
        class="filter-input filter-ovr"
        type="number"
        placeholder="Max OVR"
        min="1" max="99"
        @input="onFilterChange"
      />

      <select v-model="filters.sort" class="filter-select" @change="onFilterChange">
        <option value="overall">Overall</option>
        <option value="name">Name</option>
        <option value="pace">Pace</option>
        <option value="shooting">Shooting</option>
        <option value="passing">Passing</option>
        <option value="dribbling">Dribbling</option>
        <option value="defending">Defending</option>
        <option value="physical">Physical</option>
      </select>
    </div>

    <!-- ── Player Count ────────────────────────────────────────────────────── -->
    <div class="player-count">
      <span v-if="loading" class="count-text">Loading...</span>
      <span v-else class="count-text">Showing <strong>{{ players.length }}</strong> players</span>
    </div>

    <!-- ── Loading State ───────────────────────────────────────────────────── -->
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading players...</p>
    </div>

    <!-- ── Player Grid ─────────────────────────────────────────────────────── -->
    <div v-else class="player-grid">
      <div
        v-for="player in players"
        :key="player.id ?? (player.name + player.club)"
        class="player-card"
        @click="openModal(player)"
      >
        <!-- Tier colour header -->
        <div class="card-header" :class="tierClass(player.overall)">
          <span class="card-ovr">{{ player.overall }}</span>
          <span class="card-pos">{{ player.position }}</span>
        </div>

        <!-- Card body -->
        <div class="card-body">
          <div class="card-name">{{ player.name }}</div>
          <div class="card-club">{{ player.club }}</div>

          <div class="card-stats">
            <div v-for="stat in keyStats(player)" :key="stat.label" class="stat-pill">
              <span class="stat-label">{{ stat.label }}</span>
              <span class="stat-value">{{ stat.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Empty state ─────────────────────────────────────────────────────── -->
    <div v-if="!loading && players.length === 0" class="empty-state">
      <p>No players found matching your filters.</p>
    </div>

    <!-- ── Player Modal ────────────────────────────────────────────────────── -->
    <transition name="modal-fade">
      <div v-if="selectedPlayer" class="modal-overlay" @click.self="closeModal">
        <div class="modal-card">
          <button class="modal-close" @click="closeModal">✕</button>

          <!-- Modal header -->
          <div class="modal-header" :class="tierClass(selectedPlayer.overall)">
            <div class="modal-ovr">{{ selectedPlayer.overall }}</div>
            <div class="modal-pos-badge">{{ selectedPlayer.position }}</div>
          </div>

          <div class="modal-body">
            <h2 class="modal-name">{{ selectedPlayer.name }}</h2>
            <div class="modal-meta">
              <span class="meta-item">{{ selectedPlayer.club }}</span>
              <span class="meta-sep">·</span>
              <span class="meta-item">{{ selectedPlayer.nationality ?? '—' }}</span>
              <span class="meta-sep">·</span>
              <span class="meta-item">Age {{ selectedPlayer.age ?? '—' }}</span>
            </div>

            <!-- Stat bars -->
            <div class="modal-stats">
              <div v-for="stat in allStats(selectedPlayer)" :key="stat.label" class="stat-row">
                <span class="stat-row-label">{{ stat.label }}</span>
                <div class="stat-bar-track">
                  <div
                    class="stat-bar-fill"
                    :class="statBarClass(stat.value)"
                    :style="{ width: statBarWidth(stat.value) }"
                  ></div>
                </div>
                <span class="stat-row-value" :class="statBarClass(stat.value)">{{ stat.value }}</span>
              </div>
            </div>

            <!-- Extra info -->
            <div class="modal-extra">
              <div class="extra-item" v-if="selectedPlayer.value != null">
                <span class="extra-label">Value</span>
                <span class="extra-value gold">{{ formatValue(selectedPlayer.value) }}</span>
              </div>
              <div class="extra-item" v-if="selectedPlayer.wage != null">
                <span class="extra-label">Wage</span>
                <span class="extra-value">£{{ selectedPlayer.wage?.toLocaleString() }}p/w</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// ── State ──────────────────────────────────────────────────────────────────────
const players       = ref([])
const allClubs      = ref([])
const loading       = ref(false)
const selectedPlayer = ref(null)

const filters = ref({
  search:   '',
  position: '',
  league:   '',
  club:     '',
  min_ovr:  null,
  max_ovr:  null,
  sort:     'overall',
})

// ── Derived club/league lists ──────────────────────────────────────────────────
const availableLeagues = computed(() => {
  const leagues = [...new Set(allClubs.value.map(c => c.league).filter(Boolean))]
  return leagues.sort()
})

const filteredClubs = computed(() => {
  if (!filters.value.league) return allClubs.value
  return allClubs.value.filter(c => c.league === filters.value.league)
})

// ── Filter handlers ────────────────────────────────────────────────────────────
let debounceTimer = null

function onFilterChange() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(fetchPlayers, 250)
}

function onLeagueChange() {
  // Reset club if it no longer belongs to the selected league
  if (filters.value.club) {
    const club = allClubs.value.find(c => c.name === filters.value.club)
    if (club && filters.value.league && club.league !== filters.value.league) {
      filters.value.club = ''
    }
  }
  onFilterChange()
}

// ── API calls ──────────────────────────────────────────────────────────────────
async function fetchClubs() {
  try {
    const res = await fetch('/api/clubs')
    allClubs.value = await res.json()
  } catch { /* ignore */ }
}

async function fetchPlayers() {
  loading.value = true
  try {
    const params = new URLSearchParams()
    if (filters.value.search)   params.set('search',   filters.value.search)
    if (filters.value.position) params.set('position', filters.value.position)
    if (filters.value.league)   params.set('league',   filters.value.league)
    if (filters.value.club)     params.set('club',     filters.value.club)
    if (filters.value.min_ovr != null && filters.value.min_ovr !== '') {
      params.set('min_ovr', filters.value.min_ovr)
    }
    if (filters.value.max_ovr != null && filters.value.max_ovr !== '') {
      params.set('max_ovr', filters.value.max_ovr)
    }
    if (filters.value.sort)     params.set('sort',     filters.value.sort)

    const res = await fetch(`/api/players?${params.toString()}`)
    players.value = await res.json()
  } catch {
    players.value = []
  } finally {
    loading.value = false
  }
}

// ── Lifecycle ──────────────────────────────────────────────────────────────────
onMounted(async () => {
  await fetchClubs()
  await fetchPlayers()
})

// ── Helpers ────────────────────────────────────────────────────────────────────
function tierClass(ovr) {
  if (ovr >= 90) return 'tier-gold'
  if (ovr >= 85) return 'tier-silver'
  return 'tier-standard'
}

function keyStats(player) {
  const pos = player.position?.toUpperCase()
  if (pos === 'GK') {
    return [
      { label: 'OVR', value: player.overall  ?? '—' },
      { label: 'PHY', value: player.physical  ?? '—' },
      { label: 'PAS', value: player.passing   ?? '—' },
    ]
  }
  if (pos === 'DEF') {
    return [
      { label: 'DEF', value: player.defending ?? '—' },
      { label: 'PHY', value: player.physical  ?? '—' },
      { label: 'PAC', value: player.pace      ?? '—' },
    ]
  }
  if (pos === 'MID') {
    return [
      { label: 'PAS', value: player.passing   ?? '—' },
      { label: 'DRI', value: player.dribbling ?? '—' },
      { label: 'SHO', value: player.shooting  ?? '—' },
    ]
  }
  // ST / LW / RW / ATT (default)
  return [
    { label: 'PAC', value: player.pace      ?? '—' },
    { label: 'SHO', value: player.shooting  ?? '—' },
    { label: 'DRI', value: player.dribbling ?? '—' },
  ]
}

function allStats(player) {
  return [
    { label: 'PAC', value: player.pace      ?? 0 },
    { label: 'SHO', value: player.shooting  ?? 0 },
    { label: 'PAS', value: player.passing   ?? 0 },
    { label: 'DRI', value: player.dribbling ?? 0 },
    { label: 'DEF', value: player.defending ?? 0 },
    { label: 'PHY', value: player.physical  ?? 0 },
  ]
}

function statBarClass(value) {
  if (value >= 85) return 'bar-green'
  if (value >= 75) return 'bar-yellow'
  if (value >= 60) return 'bar-orange'
  return 'bar-red'
}

function statBarWidth(value) {
  const pct = Math.min(Math.max(value, 0), 99)
  return `${(pct / 99) * 100}%`
}

function formatValue(val) {
  if (val == null) return '—'
  const k = Math.round(val / 1000)
  return `£${k.toLocaleString()}k`
}

// ── Modal ──────────────────────────────────────────────────────────────────────
function openModal(player) {
  selectedPlayer.value = player
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedPlayer.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* ── Base ──────────────────────────────────────────────────────────────────── */
.playerdb-view {
  min-height: 100vh;
  background: #0d1117;
  color: #fff;
  padding-bottom: 60px;
}

/* ── Header ────────────────────────────────────────────────────────────────── */
.screen-header {
  padding: 24px 40px 12px;
  text-align: center;
  position: relative;
  background: #0d1117;
}
.screen-header h1 {
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
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
  transition: border-color .12s, color .12s;
}
.back-btn:hover {
  border-color: #555;
  color: #aaa;
}

/* ── Filter Bar ────────────────────────────────────────────────────────────── */
.filter-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #0d1117;
  border-bottom: 1px solid #1e2535;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px 24px;
  align-items: center;
}

.filter-input,
.filter-select {
  background: #111820;
  border: 1px solid #1e2535;
  color: #ccc;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  outline: none;
  transition: border-color .15s;
}
.filter-input:focus,
.filter-select:focus {
  border-color: #ffd700;
  color: #fff;
}
.filter-input::placeholder {
  color: #445;
}
.filter-select option {
  background: #111820;
  color: #ccc;
}

.filter-search { flex: 1 1 180px; min-width: 160px; }
.filter-select { flex: 0 0 auto; }
.filter-ovr    { width: 90px; flex: 0 0 90px; }

/* ── Player count ──────────────────────────────────────────────────────────── */
.player-count {
  padding: 10px 28px 4px;
  font-size: 12px;
  color: #556;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.count-text strong {
  color: #ffd700;
  font-weight: 700;
}

/* ── Loading ───────────────────────────────────────────────────────────────── */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  color: #556;
  gap: 16px;
}
.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid #1e2535;
  border-top-color: #ffd700;
  border-radius: 50%;
  animation: spin .7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Empty state ───────────────────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #445;
  font-size: 14px;
}

/* ── Player Grid ───────────────────────────────────────────────────────────── */
.player-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 16px 24px;
  transition: opacity .2s;
}
@media (max-width: 1100px) { .player-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 760px)  { .player-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px)  { .player-grid { grid-template-columns: 1fr; } }

/* ── Player Card ───────────────────────────────────────────────────────────── */
.player-card {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform .15s, border-color .15s, box-shadow .15s;
}
.player-card:hover {
  transform: translateY(-3px);
  border-color: #ffd700;
  box-shadow: 0 6px 24px rgba(255, 215, 0, .12);
}

/* Tier colour headers */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px 8px;
}
.tier-gold     { background: linear-gradient(135deg, #b8860b, #ffd700); }
.tier-silver   { background: linear-gradient(135deg, #555, #aaa); }
.tier-standard { background: linear-gradient(135deg, #3a5028, #5a7a40); }

.card-ovr {
  font-size: 28px;
  font-weight: 900;
  color: rgba(0,0,0,.65);
  line-height: 1;
}
.card-pos {
  font-size: 11px;
  font-weight: 800;
  color: rgba(0,0,0,.55);
  background: rgba(0,0,0,.18);
  padding: 3px 8px;
  border-radius: 3px;
  letter-spacing: 1px;
}

.card-body {
  padding: 10px 14px 14px;
}
.card-name {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}
.card-club {
  font-size: 11px;
  color: #556;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-stats {
  display: flex;
  gap: 6px;
}
.stat-pill {
  flex: 1;
  background: #0d1117;
  border: 1px solid #1e2535;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 2px;
  gap: 1px;
}
.stat-label {
  font-size: 9px;
  color: #445;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.stat-value {
  font-size: 13px;
  font-weight: 700;
  color: #ccc;
}

/* ── Modal ─────────────────────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
}

.modal-card {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 14px;
  width: 100%;
  max-width: 420px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,.7);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 12px;
  background: rgba(0,0,0,.3);
  border: none;
  color: rgba(255,255,255,.7);
  font-size: 16px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: background .12s, color .12s;
}
.modal-close:hover {
  background: rgba(0,0,0,.6);
  color: #fff;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px 14px;
}
.modal-ovr {
  font-size: 48px;
  font-weight: 900;
  color: rgba(0,0,0,.65);
  line-height: 1;
}
.modal-pos-badge {
  font-size: 14px;
  font-weight: 800;
  color: rgba(0,0,0,.55);
  background: rgba(0,0,0,.18);
  padding: 5px 12px;
  border-radius: 4px;
  letter-spacing: 1px;
}

.modal-body {
  padding: 16px 20px 22px;
}
.modal-name {
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  margin: 0 0 6px;
}
.modal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 0;
  align-items: center;
  margin-bottom: 18px;
}
.meta-item {
  font-size: 12px;
  color: #778;
}
.meta-sep {
  font-size: 12px;
  color: #334;
  margin: 0 6px;
}

/* Stat bars */
.modal-stats {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;
}
.stat-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.stat-row-label {
  width: 34px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #667;
  text-transform: uppercase;
  flex-shrink: 0;
}
.stat-bar-track {
  flex: 1;
  height: 8px;
  background: #0d1117;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #1e2535;
}
.stat-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width .4s ease;
}
.stat-row-value {
  width: 28px;
  text-align: right;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}

/* Bar colour classes */
.bar-green  { background: #27ae60; color: #27ae60; }
.bar-yellow { background: #f1c40f; color: #f1c40f; }
.bar-orange { background: #e67e22; color: #e67e22; }
.bar-red    { background: #e74c3c; color: #e74c3c; }

/* Extra info row */
.modal-extra {
  display: flex;
  gap: 20px;
  padding-top: 14px;
  border-top: 1px solid #1e2535;
}
.extra-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.extra-label {
  font-size: 10px;
  color: #445;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.extra-value {
  font-size: 15px;
  font-weight: 700;
  color: #ccc;
}
.extra-value.gold {
  color: #ffd700;
}

/* ── Modal transitions ─────────────────────────────────────────────────────── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active .modal-card,
.modal-fade-leave-active .modal-card {
  transition: transform .2s ease;
}
.modal-fade-enter-from .modal-card {
  transform: translateY(20px) scale(.97);
}
.modal-fade-leave-to .modal-card {
  transform: translateY(10px) scale(.98);
}
</style>
