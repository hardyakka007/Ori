<template>
  <div class="ut-view">

    <!-- ── Coins Bar ── -->
    <div class="coins-bar">
      <button class="back-btn" @click="$router.push('/')">← Back</button>
      <span class="coins-label">⭐ TBG Coins: {{ formatCoins(state.coins) }}</span>
    </div>

    <!-- ── Tab Nav ── -->
    <div class="tab-nav">
      <button
        v-for="tab in ['SQUAD', 'PACKS', 'COLLECTION']"
        :key="tab"
        class="tab-btn"
        :class="{ active: activeTab === tab }"
        @click="activeTab = tab"
      >{{ tab }}</button>
    </div>

    <!-- ════════════════════════════════
         TAB: SQUAD
    ════════════════════════════════ -->
    <div v-if="activeTab === 'SQUAD'" class="tab-content">
      <div class="squad-header">
        <div class="squad-stats">
          <div class="stat-chip">
            <span class="stat-label">Squad OVR</span>
            <span class="stat-val gold">{{ squadOVR }}</span>
          </div>
          <div class="stat-chip">
            <span class="stat-label">Chemistry</span>
            <span class="stat-val" :class="chemClass">{{ chemistry !== null ? chemistry : '—' }}</span>
          </div>
        </div>
        <div class="simulate-area">
          <select v-model="selectedOpponent" class="opp-select">
            <option value="">Select opponent…</option>
            <option v-for="club in opponentClubs" :key="club" :value="club">{{ club }}</option>
          </select>
          <button
            class="action-btn sim-btn"
            :disabled="!selectedOpponent || filledSlots < 11 || simulating"
            @click="simulateMatch"
          >
            {{ simulating ? 'Simulating…' : 'Simulate Match' }}
          </button>
        </div>
      </div>

      <div class="squad-list">
        <div
          v-for="(slot, i) in state.squad"
          :key="i"
          class="squad-slot"
          :class="{ filled: slot !== null }"
          @click="slot ? removeFromSquad(i) : null"
        >
          <span class="pos-badge">{{ POSITIONS[i] }}</span>
          <template v-if="slot">
            <span class="slot-name">{{ slot.name }}</span>
            <span class="slot-ovr" :class="tierClass(slot.tier)">{{ slot.overall }}</span>
            <span class="slot-hint">click to remove</span>
          </template>
          <span v-else class="slot-empty">Empty</span>
        </div>
      </div>
    </div>

    <!-- ════════════════════════════════
         TAB: PACKS
    ════════════════════════════════ -->
    <div v-if="activeTab === 'PACKS'" class="tab-content">
      <div v-if="!packOpening" class="packs-grid">
        <div v-for="pack in packOptions" :key="pack.id" class="pack-card">
          <div class="pack-icon">
            <span class="pack-icon-inner" :class="'pack-icon-' + pack.id">📦</span>
          </div>
          <h3 class="pack-name">{{ pack.name }}</h3>
          <p class="pack-desc">{{ pack.description }}</p>
          <div class="pack-details">
            <span class="pack-cards-count">{{ pack.cards }} cards</span>
            <span class="pack-cost gold">{{ formatCoins(pack.cost) }} coins</span>
          </div>
          <button
            class="action-btn open-btn"
            :class="{ 'btn-disabled': state.coins < pack.cost }"
            :disabled="state.coins < pack.cost || packOpening"
            @click="openPack(pack)"
          >
            {{ state.coins < pack.cost ? 'Not enough coins' : 'Open Pack' }}
          </button>
        </div>
      </div>

      <!-- Pack Opening Animation -->
      <div v-else class="pack-opening">
        <h2 class="opening-title">Opening {{ currentPack?.name }}…</h2>
        <div class="revealed-cards">
          <div
            v-for="(card, i) in revealedCards"
            :key="i"
            class="player-card revealed"
            :class="'tier-' + card.tier"
          >
            <div class="card-tier-label">{{ card.tier.toUpperCase() }}</div>
            <div class="card-pos">{{ card.position }}</div>
            <div class="card-ovr">{{ card.overall }}</div>
            <div class="card-name">{{ card.name }}</div>
          </div>
          <div v-if="revealedCards.length < (pendingCards?.length || 0)" class="card-pending">
            <div class="card-spinner"></div>
          </div>
        </div>
        <button
          v-if="revealedCards.length === pendingCards?.length"
          class="action-btn collect-btn"
          @click="collectCards"
        >
          Add to Collection ({{ pendingCards.length }} cards)
        </button>
      </div>
    </div>

    <!-- ════════════════════════════════
         TAB: COLLECTION
    ════════════════════════════════ -->
    <div v-if="activeTab === 'COLLECTION'" class="tab-content">
      <div class="collection-header">
        <span class="collection-count">{{ filteredCollection.length }} / {{ state.collection.length }} cards</span>
        <div class="filter-btns">
          <button
            v-for="f in ['ALL', 'GK', 'DEF', 'MID', 'ATT']"
            :key="f"
            class="filter-btn"
            :class="{ active: collectionFilter === f }"
            @click="collectionFilter = f"
          >{{ f }}</button>
        </div>
      </div>

      <div v-if="state.collection.length === 0" class="empty-state">
        No cards yet. Open some packs!
      </div>
      <div v-else class="collection-grid">
        <div
          v-for="(card, i) in filteredCollection"
          :key="i"
          class="player-card"
          :class="['tier-' + card.tier, { 'in-squad': isInSquad(card) }]"
          @click="toggleSquadCard(card)"
        >
          <div class="card-tier-label">{{ card.tier.toUpperCase() }}</div>
          <div class="card-pos">{{ card.position }}</div>
          <div class="card-ovr">{{ card.overall }}</div>
          <div class="card-name">{{ card.name }}</div>
          <div v-if="isInSquad(card)" class="in-squad-badge">In Squad</div>
        </div>
      </div>
    </div>

    <!-- ── Match Result Modal ── -->
    <div v-if="matchResult" class="modal-overlay" @click.self="matchResult = null">
      <div class="modal-card">
        <h2 class="modal-title">Match Result</h2>
        <div class="match-scoreline">
          <span class="match-team">My Squad</span>
          <span class="match-score gold">{{ matchResult.home_score }} – {{ matchResult.away_score }}</span>
          <span class="match-team">{{ matchResult.away }}</span>
        </div>
        <div class="match-outcome" :class="resultClass(matchResult)">
          {{ resultLabel(matchResult) }}
        </div>
        <div class="coins-earned">
          +{{ resultCoins(matchResult) }} coins earned
        </div>
        <button class="action-btn" @click="matchResult = null">Close</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ── Constants ──────────────────────────────────────────────────────────────
const LS_KEY   = 'tbg_ultimate_team'
const POSITIONS = ['GK','RB','CB','CB','LB','CDM','CM','CAM','LW','RW','ST']
const POSITION_GROUPS = {
  GK:  'GK',
  RB:  'DEF', CB: 'DEF', LB: 'DEF',
  CDM: 'MID', CM: 'MID', CAM: 'MID',
  LW:  'ATT', RW: 'ATT', ST: 'ATT',
}

// ── State ──────────────────────────────────────────────────────────────────
const defaultState = () => ({
  coins: 5000,
  collection: [],
  squad: Array(11).fill(null),
})

const state = ref(defaultState())

function saveState() {
  localStorage.setItem(LS_KEY, JSON.stringify(state.value))
}

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      // Ensure squad always has 11 slots
      if (!parsed.squad || parsed.squad.length !== 11) {
        parsed.squad = Array(11).fill(null)
      }
      state.value = { ...defaultState(), ...parsed }
    }
  } catch {
    state.value = defaultState()
  }
}

onMounted(() => {
  loadState()
  fetchPacks()
  fetchChemistry()
})

// ── Tabs ───────────────────────────────────────────────────────────────────
const activeTab = ref('SQUAD')

// ── Formatting ─────────────────────────────────────────────────────────────
function formatCoins(n) {
  return Number(n).toLocaleString()
}

// ── Tier helpers ───────────────────────────────────────────────────────────
function tierClass(tier) {
  return 'tier-text-' + (tier || 'standard')
}

// ── PACKS tab ──────────────────────────────────────────────────────────────
const packOptions = ref([])
const packOpening  = ref(false)
const currentPack  = ref(null)
const pendingCards  = ref([])
const revealedCards = ref([])

async function fetchPacks() {
  try {
    const res = await fetch('/api/packs')
    if (res.ok) {
      packOptions.value = await res.json()
    }
  } catch {
    // Fallback defaults
    packOptions.value = [
      { id: 'standard', name: 'Standard Pack', cost: 750,  cards: 5,  description: '5 player cards, mix of tiers.' },
      { id: 'premium',  name: 'Premium Pack',  cost: 2500, cards: 10, description: '10 cards with improved gold chance.' },
      { id: 'elite',    name: 'Elite Pack',    cost: 7500, cards: 15, description: '15 cards guaranteed high ratings.' },
    ]
  }
}

async function openPack(pack) {
  if (state.value.coins < pack.cost) return

  currentPack.value  = pack
  pendingCards.value  = []
  revealedCards.value = []
  packOpening.value   = true

  // Deduct coins immediately
  state.value.coins -= pack.cost
  saveState()

  try {
    const res = await fetch('/api/pack/open', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pack: pack.id }),
    })
    const data = await res.json()
    pendingCards.value = data.cards || []
  } catch {
    // Fallback mock cards
    pendingCards.value = Array.from({ length: pack.cards }, (_, i) => ({
      name: `Player ${Math.floor(Math.random() * 900) + 100}`,
      position: POSITIONS[Math.floor(Math.random() * POSITIONS.length)],
      overall: Math.floor(Math.random() * 30) + 60,
      tier: ['standard', 'silver', 'gold'][Math.floor(Math.random() * 3)],
    }))
  }

  // Reveal cards one by one with 300ms delay
  for (let i = 0; i < pendingCards.value.length; i++) {
    await delay(300)
    revealedCards.value.push(pendingCards.value[i])
  }
}

function collectCards() {
  state.value.collection.push(...pendingCards.value)
  saveState()
  packOpening.value   = false
  currentPack.value   = null
  pendingCards.value  = []
  revealedCards.value = []
  activeTab.value     = 'COLLECTION'
  fetchChemistry()
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ── COLLECTION tab ─────────────────────────────────────────────────────────
const collectionFilter = ref('ALL')

const filteredCollection = computed(() => {
  if (collectionFilter.value === 'ALL') return state.value.collection
  return state.value.collection.filter(c => {
    const group = POSITION_GROUPS[c.position] || 'ATT'
    return group === collectionFilter.value
  })
})

function isInSquad(card) {
  return state.value.squad.some(s => s && s.name === card.name && s.overall === card.overall)
}

function toggleSquadCard(card) {
  // If already in squad, remove it
  const idx = state.value.squad.findIndex(s => s && s.name === card.name && s.overall === card.overall)
  if (idx !== -1) {
    state.value.squad[idx] = null
    saveState()
    fetchChemistry()
    return
  }

  // Find matching position slot
  const posGroup = card.position
  // First try exact position match
  const exactIdx = POSITIONS.findIndex(
    (p, i) => p === card.position && state.value.squad[i] === null
  )
  if (exactIdx !== -1) {
    state.value.squad[exactIdx] = card
    saveState()
    fetchChemistry()
    return
  }

  // Replace first slot with same position
  const replaceIdx = POSITIONS.findIndex(p => p === card.position)
  if (replaceIdx !== -1) {
    state.value.squad[replaceIdx] = card
    saveState()
    fetchChemistry()
    return
  }

  // Fall back to first empty slot
  const emptyIdx = state.value.squad.findIndex(s => s === null)
  if (emptyIdx !== -1) {
    state.value.squad[emptyIdx] = card
    saveState()
    fetchChemistry()
  }
}

// ── SQUAD tab ──────────────────────────────────────────────────────────────
const chemistry   = ref(null)
const simulating  = ref(false)
const matchResult = ref(null)
const selectedOpponent = ref('')

const opponentClubs = ref([
  'Manchester City', 'Real Madrid', 'Bayern Munich', 'PSG', 'Inter Milan',
  'Arsenal', 'Liverpool', 'Barcelona', 'Juventus', 'Atletico Madrid',
  'Chelsea', 'Dortmund', 'AC Milan', 'Napoli', 'Porto',
])

const filledSlots = computed(() => state.value.squad.filter(s => s !== null).length)

const squadOVR = computed(() => {
  const filled = state.value.squad.filter(s => s !== null)
  if (filled.length === 0) return '—'
  return Math.round(filled.reduce((sum, c) => sum + c.overall, 0) / filled.length)
})

const chemClass = computed(() => {
  const c = chemistry.value
  if (c === null) return ''
  if (c >= 80) return 'gold'
  if (c >= 50) return 'silver-text'
  return 'standard-text'
})

function removeFromSquad(idx) {
  state.value.squad[idx] = null
  saveState()
  fetchChemistry()
}

async function fetchChemistry() {
  const filled = state.value.squad.filter(s => s !== null)
  if (filled.length === 0) {
    chemistry.value = null
    return
  }
  try {
    const res = await fetch('/api/pack/chemistry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ squad: state.value.squad }),
    })
    if (res.ok) {
      const data = await res.json()
      chemistry.value = data.chemistry ?? data.score ?? null
    }
  } catch {
    // Calculate basic chemistry locally
    chemistry.value = Math.min(100, Math.round(filled.length * 9.1))
  }
}

async function simulateMatch() {
  if (!selectedOpponent.value || filledSlots.value < 11 || simulating.value) return
  simulating.value = true
  try {
    const res = await fetch('/api/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ home: 'My Squad', away: selectedOpponent.value }),
    })
    const data = await res.json()
    matchResult.value = data
    const earned = resultCoins(data)
    state.value.coins += earned
    saveState()
  } catch {
    // Fallback mock result
    const hs = Math.floor(Math.random() * 5)
    const as = Math.floor(Math.random() * 4)
    matchResult.value = { home: 'My Squad', away: selectedOpponent.value, home_score: hs, away_score: as }
    const earned = resultCoins(matchResult.value)
    state.value.coins += earned
    saveState()
  } finally {
    simulating.value = false
  }
}

function resultLabel(result) {
  if (result.home_score > result.away_score) return 'Victory!'
  if (result.home_score === result.away_score) return 'Draw'
  return 'Defeat'
}

function resultClass(result) {
  if (result.home_score > result.away_score) return 'outcome-win'
  if (result.home_score === result.away_score) return 'outcome-draw'
  return 'outcome-loss'
}

function resultCoins(result) {
  if (result.home_score > result.away_score) return 500
  if (result.home_score === result.away_score) return 200
  return 100
}
</script>

<style scoped>
/* ── Base ───────────────────────────────────────────────────────────────── */
.ut-view {
  min-height: 100vh;
  background: #0d1117;
  color: #e6edf3;
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding-bottom: 40px;
}

/* ── Coins Bar ───────────────────────────────────────────────────────────── */
.coins-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111820;
  border-bottom: 1px solid #1e2535;
  padding: 12px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-btn {
  background: none;
  border: 1px solid #1e2535;
  color: #8b949e;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}
.back-btn:hover {
  border-color: #ffd700;
  color: #ffd700;
}

.coins-label {
  font-size: 1rem;
  font-weight: 600;
  color: #ffd700;
  letter-spacing: 0.03em;
}

/* ── Tab Nav ─────────────────────────────────────────────────────────────── */
.tab-nav {
  display: flex;
  background: #111820;
  border-bottom: 2px solid #1e2535;
}

.tab-btn {
  flex: 1;
  padding: 14px;
  background: none;
  border: none;
  color: #8b949e;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}
.tab-btn::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0; right: 0;
  height: 2px;
  background: #ffd700;
  transform: scaleX(0);
  transition: transform 0.2s;
}
.tab-btn.active {
  color: #ffd700;
}
.tab-btn.active::after {
  transform: scaleX(1);
}

/* ── Tab Content ─────────────────────────────────────────────────────────── */
.tab-content {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* ── Action Buttons ──────────────────────────────────────────────────────── */
.action-btn {
  background: linear-gradient(135deg, #b8860b, #ffd700);
  color: #0d1117;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}
.action-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}
.action-btn:disabled,
.action-btn.btn-disabled {
  background: #1e2535;
  color: #4a5568;
  cursor: not-allowed;
  transform: none;
}

/* ── Colour helpers ──────────────────────────────────────────────────────── */
.gold          { color: #ffd700; }
.silver-text   { color: #aaaaaa; }
.standard-text { color: #5a7a40; }

/* ══════════════════════════════════════════════════════
   SQUAD TAB
══════════════════════════════════════════════════════ */
.squad-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.squad-stats {
  display: flex;
  gap: 16px;
}

.stat-chip {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 8px;
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 90px;
}
.stat-label {
  font-size: 0.7rem;
  color: #8b949e;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.stat-val {
  font-size: 1.4rem;
  font-weight: 700;
}

.simulate-area {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.opp-select {
  background: #111820;
  border: 1px solid #1e2535;
  color: #e6edf3;
  padding: 9px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  outline: none;
  min-width: 180px;
}
.opp-select:focus {
  border-color: #ffd700;
}

.sim-btn {
  white-space: nowrap;
}

.squad-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.squad-slot {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: border-color 0.2s, background 0.2s;
}
.squad-slot.filled {
  cursor: pointer;
  border-color: #2a3545;
}
.squad-slot.filled:hover {
  background: #1a2333;
  border-color: #ff4d4d55;
}

.pos-badge {
  background: #1e2535;
  color: #8b949e;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  border-radius: 5px;
  min-width: 40px;
  text-align: center;
}

.slot-name {
  flex: 1;
  font-weight: 600;
  font-size: 0.95rem;
}

.slot-ovr {
  font-size: 1rem;
  font-weight: 700;
  min-width: 28px;
  text-align: right;
}

.tier-text-gold     { color: #ffd700; }
.tier-text-silver   { color: #aaaaaa; }
.tier-text-standard { color: #5a7a40; }

.slot-hint {
  font-size: 0.72rem;
  color: #ff4d4d88;
  margin-left: 8px;
}

.slot-empty {
  color: #4a5568;
  font-size: 0.88rem;
  font-style: italic;
}

/* ══════════════════════════════════════════════════════
   PACKS TAB
══════════════════════════════════════════════════════ */
.packs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.pack-card {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 14px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.pack-card:hover {
  border-color: #ffd70055;
  transform: translateY(-3px);
}

.pack-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.pack-icon-standard { filter: hue-rotate(0deg); }
.pack-icon-premium  { filter: hue-rotate(60deg); }
.pack-icon-elite    { filter: hue-rotate(180deg); }

.pack-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e6edf3;
  margin: 0;
}

.pack-desc {
  font-size: 0.82rem;
  color: #8b949e;
  margin: 0;
  line-height: 1.5;
}

.pack-details {
  display: flex;
  gap: 14px;
  align-items: center;
  font-size: 0.85rem;
}

.pack-cards-count {
  color: #8b949e;
  background: #1e2535;
  padding: 3px 10px;
  border-radius: 12px;
}

.pack-cost {
  font-weight: 700;
  font-size: 1rem;
}

.open-btn {
  width: 100%;
  margin-top: 4px;
}

/* ── Pack Opening ─────────────────────────────────────────────────────────── */
.pack-opening {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.opening-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffd700;
  margin: 0;
}

.revealed-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.card-pending {
  width: 110px;
  height: 150px;
  background: #111820;
  border: 2px solid #1e2535;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-spinner {
  width: 28px;
  height: 28px;
  border: 3px solid #1e2535;
  border-top-color: #ffd700;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

.collect-btn {
  font-size: 1rem;
  padding: 12px 32px;
}

/* ══════════════════════════════════════════════════════
   PLAYER CARDS (shared)
══════════════════════════════════════════════════════ */
.player-card {
  width: 110px;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;
}
.player-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

/* Tier backgrounds */
.tier-gold {
  background: linear-gradient(160deg, #2a1f00, #3a2d00);
  border-color: #b8860b;
}
.tier-silver {
  background: linear-gradient(160deg, #1a1a1a, #2a2a2a);
  border-color: #555555;
}
.tier-standard {
  background: linear-gradient(160deg, #0f1f0a, #1a2f12);
  border-color: #3a5028;
}

.card-tier-label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  opacity: 0.7;
}
.tier-gold   .card-tier-label { color: #ffd700; }
.tier-silver .card-tier-label { color: #aaaaaa; }
.tier-standard .card-tier-label { color: #5a7a40; }

.card-pos {
  font-size: 0.7rem;
  font-weight: 700;
  background: rgba(0,0,0,0.3);
  padding: 2px 8px;
  border-radius: 8px;
  color: #e6edf3;
}

.card-ovr {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}
.tier-gold     .card-ovr { color: #ffd700; }
.tier-silver   .card-ovr { color: #cccccc; }
.tier-standard .card-ovr { color: #7aaa50; }

.card-name {
  font-size: 0.72rem;
  font-weight: 600;
  color: #e6edf3;
  word-break: break-word;
  line-height: 1.3;
}

/* Revealed animation */
.player-card.revealed {
  animation: cardReveal 0.35s ease-out both;
}
@keyframes cardReveal {
  from { opacity: 0; transform: scale(0.6) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* In-squad highlight */
.player-card.in-squad {
  outline: 2px solid #ffd700;
  outline-offset: 2px;
}
.in-squad-badge {
  position: absolute;
  bottom: 6px;
  left: 0; right: 0;
  text-align: center;
  font-size: 0.6rem;
  font-weight: 700;
  color: #ffd700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ══════════════════════════════════════════════════════
   COLLECTION TAB
══════════════════════════════════════════════════════ */
.collection-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.collection-count {
  font-size: 0.9rem;
  color: #8b949e;
}

.filter-btns {
  display: flex;
  gap: 6px;
}

.filter-btn {
  background: #111820;
  border: 1px solid #1e2535;
  color: #8b949e;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: all 0.15s;
}
.filter-btn.active,
.filter-btn:hover {
  border-color: #ffd700;
  color: #ffd700;
  background: #1a1600;
}

.collection-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.empty-state {
  text-align: center;
  color: #4a5568;
  padding: 60px 0;
  font-size: 1rem;
  font-style: italic;
}

/* ══════════════════════════════════════════════════════
   MODAL
══════════════════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(3px);
}

.modal-card {
  background: #111820;
  border: 1px solid #1e2535;
  border-radius: 16px;
  padding: 32px 36px;
  min-width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}

.modal-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffd700;
  margin: 0;
}

.match-scoreline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 1rem;
}

.match-team {
  color: #e6edf3;
  font-weight: 600;
}

.match-score {
  font-size: 1.8rem;
  font-weight: 800;
}

.match-outcome {
  font-size: 1.1rem;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 8px;
}
.outcome-win  { background: #0d2a0d; color: #4aff4a; border: 1px solid #2a5a2a; }
.outcome-draw { background: #1a1a00; color: #ffd700; border: 1px solid #3a3a00; }
.outcome-loss { background: #2a0d0d; color: #ff6666; border: 1px solid #5a2a2a; }

.coins-earned {
  font-size: 0.85rem;
  color: #ffd700;
}
</style>
