<template>
  <!-- ══ MANAGER CREATION ══════════════════════════════════════════════════ -->
  <div v-if="phase === 'create-manager'" class="screen dark-screen">
    <button class="back-btn" @click="router.push('/')">← Back</button>
    <div class="form-card">
      <h1 class="screen-title">CREATE YOUR MANAGER</h1>
      <p class="screen-sub">Build your legacy from the dugout</p>
      <div class="field-group">
        <label>Full Name</label>
        <input v-model="form.name" placeholder="e.g. Marco Rossi" maxlength="32" />
      </div>
      <div class="field-group">
        <label>Nationality</label>
        <input v-model="form.nationality" placeholder="e.g. Italian" maxlength="24" />
      </div>
      <div class="field-group">
        <label>Age</label>
        <input v-model.number="form.age" type="number" min="28" max="72" placeholder="45" />
      </div>
      <div class="field-group">
        <label>Tactical Style</label>
        <div class="style-btns">
          <button v-for="s in styles" :key="s.key"
            class="style-btn" :class="{ active: form.style === s.key }"
            @click="form.style = s.key">
            <span class="style-icon">{{ s.icon }}</span>
            <span class="style-label">{{ s.label }}</span>
            <span class="style-desc">{{ s.desc }}</span>
          </button>
        </div>
      </div>
      <button class="primary-btn" :disabled="!form.name || !form.nationality" @click="saveManager">
        Continue →
      </button>
    </div>
  </div>

  <!-- ══ TEAM SELECTION ════════════════════════════════════════════════════ -->
  <div v-else-if="phase === 'select-team'" class="screen dark-screen">
    <button class="back-btn" @click="phase = 'create-manager'">← Back</button>
    <h1 class="screen-title">CHOOSE YOUR CLUB</h1>
    <p class="screen-sub">Take charge of an existing club — or build from scratch</p>
    <div class="team-grid">
      <button v-for="(t, id) in teams" :key="id"
        class="team-card" @click="selectTeam(id)">
        <div class="team-badge" :style="{ background: t.primaryColor }">
          {{ t.shortName }}
        </div>
        <div class="team-info">
          <div class="team-name">{{ t.name }}</div>
          <div class="team-league">{{ t.league }}</div>
          <div class="team-rating">★ {{ t.rating }}</div>
        </div>
      </button>
      <button class="team-card create-club-card" @click="phase = 'create-club'">
        <div class="team-badge" style="background:#2a2a2a; font-size:24px;">+</div>
        <div class="team-info">
          <div class="team-name">Create-a-Club</div>
          <div class="team-league">Build from zero</div>
        </div>
      </button>
    </div>
  </div>

  <!-- ══ CREATE-A-CLUB ════════════════════════════════════════════════════ -->
  <div v-else-if="phase === 'create-club'" class="screen dark-screen">
    <button class="back-btn" @click="phase = 'select-team'">← Back</button>
    <div class="form-card">
      <h1 class="screen-title">CREATE-A-CLUB</h1>
      <div class="field-group">
        <label>Club Name</label>
        <input v-model="clubForm.name" placeholder="e.g. City FC" maxlength="32" />
      </div>
      <div class="field-group">
        <label>Short Name (3 letters)</label>
        <input v-model="clubForm.shortName" placeholder="CFC" maxlength="3"
          @input="clubForm.shortName = clubForm.shortName.toUpperCase()" />
      </div>
      <div class="field-group">
        <label>Primary Colour</label>
        <div class="color-row">
          <input type="color" v-model="clubForm.primaryColor" class="color-pick" />
          <span class="color-preview" :style="{ background: clubForm.primaryColor }">{{ clubForm.primaryColor }}</span>
        </div>
      </div>
      <div class="field-group">
        <label>Secondary Colour</label>
        <div class="color-row">
          <input type="color" v-model="clubForm.secondaryColor" class="color-pick" />
          <span class="color-preview" :style="{ background: clubForm.secondaryColor }">{{ clubForm.secondaryColor }}</span>
        </div>
      </div>
      <div class="kit-preview">
        <div class="kit-shirt" :style="{ background: `linear-gradient(135deg, ${clubForm.primaryColor} 50%, ${clubForm.secondaryColor} 50%)` }">
          <span>{{ clubForm.shortName || '???' }}</span>
        </div>
      </div>
      <button class="primary-btn" :disabled="!clubForm.name || clubForm.shortName.length < 2" @click="saveNewClub">
        Found the Club →
      </button>
    </div>
  </div>

  <!-- ══ CAREER HUB ════════════════════════════════════════════════════════ -->
  <div v-else-if="phase === 'hub'" class="hub-screen">

    <!-- Top bar -->
    <header class="hub-header">
      <div class="hub-manager">
        <div class="manager-avatar">{{ managerInitials }}</div>
        <div>
          <div class="manager-name">{{ career.save.manager?.name }}</div>
          <div class="manager-detail">{{ myClub?.name }} · Season {{ career.save.season }} · Week {{ career.save.week }}</div>
        </div>
      </div>
      <div class="hub-tabs">
        <button v-for="t in tabs" :key="t.key"
          class="hub-tab" :class="{ active: activeTab === t.key }"
          @click="activeTab = t.key">{{ t.label }}</button>
      </div>
      <button class="back-btn ghost" @click="router.push('/')">⬅ Main Menu</button>
    </header>

    <!-- ── LEAGUE TABLE TAB ── -->
    <div v-if="activeTab === 'table'" class="tab-content">
      <h2 class="tab-title">LEAGUE STANDINGS</h2>
      <table class="league-table">
        <thead>
          <tr>
            <th>#</th><th>Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in table" :key="row.id"
            :class="{ 'my-row': row.id === career.save.myTeamId, 'champions': row.position === 1, 'relegated': row.position >= table.length - 2 }">
            <td>{{ row.position }}</td>
            <td class="club-cell">
              <span class="club-dot" :style="{ background: teams[row.id]?.primaryColor || '#888' }"></span>
              {{ row.name }}
            </td>
            <td>{{ row.played }}</td>
            <td>{{ row.won }}</td>
            <td>{{ row.drawn }}</td>
            <td>{{ row.lost }}</td>
            <td>{{ row.gf }}</td>
            <td>{{ row.ga }}</td>
            <td :class="{ positive: row.gd > 0, negative: row.gd < 0 }">{{ row.gd > 0 ? '+' : '' }}{{ row.gd }}</td>
            <td class="pts-cell">{{ row.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ── FIXTURES TAB ── -->
    <div v-if="activeTab === 'fixtures'" class="tab-content">
      <div class="fixtures-header">
        <h2 class="tab-title">WEEK {{ career.save.week }} FIXTURES</h2>
        <button class="sim-btn" :disabled="myMatchPlayed" @click="simulateOthers">
          Simulate Other Matches
        </button>
      </div>

      <div class="fixture-list">
        <div v-for="(f, i) in weekFixtures" :key="i"
          class="fixture-row" :class="{ 'my-match': isMyMatch(f), played: f.played }">
          <div class="fixture-team home-team">
            <span class="fx-dot" :style="{ background: teams[f.home]?.primaryColor || '#888' }"></span>
            {{ teams[f.home]?.name || f.home }}
          </div>
          <div class="fixture-score" v-if="f.played">
            {{ f.score.home }} – {{ f.score.away }}
          </div>
          <div class="fixture-vs" v-else>VS</div>
          <div class="fixture-team away-team">
            {{ teams[f.away]?.name || f.away }}
            <span class="fx-dot" :style="{ background: teams[f.away]?.primaryColor || '#888' }"></span>
          </div>
          <button v-if="isMyMatch(f) && !f.played" class="play-match-btn" @click="launchMatch(f)">
            ▶ Play
          </button>
          <span v-if="isMyMatch(f) && f.played" class="played-badge">✓ Done</span>
        </div>
      </div>

      <div class="week-actions" v-if="allWeekPlayed">
        <button class="primary-btn" @click="advanceWeek">Next Week →</button>
      </div>
    </div>

    <!-- ── CUP TAB ── -->
    <div v-if="activeTab === 'cup'" class="tab-content">
      <div class="cup-header">
        <h2 class="tab-title">KNOCKOUT CUP</h2>
        <button class="primary-btn small" v-if="!career.save.cup" @click="startCup">
          Initialise Cup
        </button>
        <div v-if="career.save.cup?.champion" class="champion-banner">
          🏆 Champion: {{ teams[career.save.cup.champion]?.name || career.save.cup.champion }}
        </div>
      </div>
      <div v-if="career.save.cup && !career.save.cup.champion" class="bracket">
        <div class="bracket-round">
          <div class="round-label">Round {{ career.save.cup.round }}</div>
          <div v-for="(match, i) in career.save.cup.brackets" :key="i" class="bracket-match">
            <div class="bracket-team" :class="{ winner: match.winner === match.home }">
              <span class="fx-dot" :style="{ background: teams[match.home]?.primaryColor || '#888' }"></span>
              {{ teams[match.home]?.name || match.home }}
            </div>
            <div class="bracket-vs">vs</div>
            <div class="bracket-team" :class="{ winner: match.winner === match.away }">
              <span class="fx-dot" :style="{ background: teams[match.away]?.primaryColor || '#888' }"></span>
              {{ teams[match.away]?.name || match.away }}
            </div>
            <button v-if="!match.winner" class="sim-btn small" @click="simulateCupMatch(i)">Sim</button>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- ══ 3D MATCH ══════════════════════════════════════════════════════════ -->
  <div v-else-if="phase === 'match'" class="game-wrap" ref="gameWrap">
    <canvas ref="canvasEl" class="game-canvas"></canvas>
    <div ref="uiEl" class="ui-layer"></div>
  </div>

  <!-- ══ MATCH RESULT ══════════════════════════════════════════════════════ -->
  <div v-else-if="phase === 'result'" class="screen dark-screen result-screen">
    <div class="result-card">
      <div class="result-label">FULL TIME</div>
      <div class="result-teams">
        <span>{{ teams[lastFixture?.home]?.name }}</span>
        <span class="result-score">{{ lastResult?.home }} – {{ lastResult?.away }}</span>
        <span>{{ teams[lastFixture?.away]?.name }}</span>
      </div>
      <div class="result-verdict" :class="resultVerdict.cls">{{ resultVerdict.text }}</div>
      <div class="result-actions">
        <button class="primary-btn" @click="backToHub">Continue →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { CareerManager } from '../game/CareerManager.js'
import { SoccerGame }    from '../game/App.js'

const router = useRouter()

// ── Data ──────────────────────────────────────────────────────────────────────
const phase     = ref('create-manager')
const teams     = ref({})
const career    = ref(new CareerManager())
const activeTab = ref('fixtures')

// Forms
const form = ref({ name: '', nationality: '', age: 35, style: 'balanced' })
const clubForm = ref({ name: '', shortName: '', primaryColor: '#cc0000', secondaryColor: '#ffffff' })

// Match
const canvasEl     = ref(null)
const uiEl         = ref(null)
const gameWrap     = ref(null)
const lastFixture  = ref(null)
const lastResult   = ref(null)
let   game         = null

const styles = [
  { key: 'attacking',  icon: '⚡', label: 'Attacking',  desc: 'High press, fast play' },
  { key: 'balanced',   icon: '⚖️', label: 'Balanced',   desc: 'Flexible and adaptive' },
  { key: 'defensive',  icon: '🛡️', label: 'Defensive',  desc: 'Solid shape, counter' },
]

const tabs = [
  { key: 'fixtures', label: 'Fixtures' },
  { key: 'table',    label: 'Table'    },
  { key: 'cup',      label: 'Cup'      },
]

// ── Computed ──────────────────────────────────────────────────────────────────
const myClub = computed(() => {
  const id = career.value.save.myTeamId
  return id ? { id, ...teams.value[id] } : null
})

const table = computed(() => career.value.getTable())

const weekFixtures = computed(() =>
  career.value.getFixturesForWeek(career.value.save.week)
    .map(f => ({ ...f, _key: `${f.home}-${f.away}` }))
)

const myMatchPlayed = computed(() =>
  weekFixtures.value.find(f => isMyMatch(f))?.played ?? true
)

const allWeekPlayed = computed(() =>
  weekFixtures.value.every(f => f.played)
)

const managerInitials = computed(() => {
  const name = career.value.save.manager?.name ?? ''
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
})

const resultVerdict = computed(() => {
  if (!lastFixture.value || !lastResult.value) return { text: '', cls: '' }
  const myHome = lastFixture.value.home === career.value.save.myTeamId
  const myG    = myHome ? lastResult.value.home : lastResult.value.away
  const oppG   = myHome ? lastResult.value.away : lastResult.value.home
  if (myG > oppG)  return { text: '🏆 Victory!',  cls: 'win'  }
  if (myG === oppG) return { text: '🤝 Draw',      cls: 'draw' }
  return              { text: '💔 Defeat',    cls: 'loss' }
})

// ── Load teams data ───────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const res  = await fetch('/data/players.json')
    const data = await res.json()
    teams.value = data.teams ?? {}
  } catch (e) {
    console.error('Failed to load players.json', e)
  }
  // If there's an existing save, resume it
  if (career.value.save.myTeamId && career.value.save.manager) {
    // Generate fixtures if none exist
    if (!career.value.save.fixtures.length) career.value.generateSeason()
    phase.value = 'hub'
  }
})

// ── Manager creation ──────────────────────────────────────────────────────────
function saveManager() {
  career.value.createManager({ ...form.value })
  phase.value = 'select-team'
}

// ── Team selection ────────────────────────────────────────────────────────────
function selectTeam(id) {
  career.value.selectTeam(id)
  career.value.generateSeason()
  phase.value = 'hub'
}

function saveNewClub() {
  const id = 'custom_' + Date.now()
  career.value.createClub({
    id,
    name:          clubForm.value.name,
    primaryColor:  clubForm.value.primaryColor,
    secondaryColor: clubForm.value.secondaryColor,
  })
  // Also add to local teams ref so the UI can render it
  teams.value[id] = {
    name:          clubForm.value.name,
    shortName:     clubForm.value.shortName,
    primaryColor:  clubForm.value.primaryColor,
    secondaryColor: clubForm.value.secondaryColor,
    league: 'Custom League',
    rating: 70,
    players: [],
  }
  career.value.generateSeason()
  phase.value = 'hub'
}

// ── Fixtures helpers ──────────────────────────────────────────────────────────
function isMyMatch(f) {
  const id = career.value.save.myTeamId
  return f.home === id || f.away === id
}

function simulateOthers() {
  career.value.simulateWeek(true)
}

function advanceWeek() {
  career.value.advanceWeek()
  activeTab.value = 'fixtures'
}

// ── Cup ───────────────────────────────────────────────────────────────────────
function startCup() {
  career.value.initCup(Object.keys(teams.value))
}

function simulateCupMatch(idx) {
  const bracket = career.value.save.cup.brackets[idx]
  const winner  = Math.random() > 0.5 ? bracket.home : bracket.away
  career.value.advanceCupRound([{ matchIdx: idx, winner }])
}

// ── Launch 3D match ───────────────────────────────────────────────────────────
async function launchMatch(fixture) {
  lastFixture.value = fixture
  phase.value = 'match'
  await nextTick()
  await new Promise(r => setTimeout(r, 60))

  const canvas = canvasEl.value
  const ui     = uiEl.value
  canvas.width  = gameWrap.value.clientWidth
  canvas.height = gameWrap.value.clientHeight

  const myId   = career.value.save.myTeamId
  const isHome = fixture.home === myId
  const homeId = fixture.home
  const awayId = fixture.away

  const homeTeam = { id: homeId, ...teams.value[homeId] }
  const awayTeam = { id: awayId, ...teams.value[awayId] }

  // Fallback players for Create-a-Club teams that have no roster
  if (!homeTeam.players?.length) homeTeam.players = _dummyPlayers(homeId)
  if (!awayTeam.players?.length) awayTeam.players = _dummyPlayers(awayId)

  game = new SoccerGame(canvas, ui, {
    homeTeam,
    awayTeam,
    difficulty: career.value.save.manager?.style === 'defensive' ? 'easy'
              : career.value.save.manager?.style === 'attacking' ? 'hard' : 'medium',
    onQuit: () => { game?.dispose(); game = null; phase.value = 'hub' },
  })

  // Listen for full-time to capture result
  game.match.on('full_time', (data) => {
    const score = data.score
    career.value.recordResult(fixture, score.home, score.away)
    career.value.persist()
    lastResult.value = score
    setTimeout(() => {
      game?.dispose(); game = null
      phase.value = 'result'
    }, 4000) // let the full-time overlay show for 4s
  })

  game.start()
}

function backToHub() {
  lastFixture.value = null
  lastResult.value  = null
  phase.value = 'hub'
  activeTab.value = allWeekPlayed.value ? 'table' : 'fixtures'
}

// ── Dummy players for Create-a-Club (no real roster) ─────────────────────────
function _dummyPlayers(teamId) {
  const positions = ['GK','LB','CB','CB','RB','CM','CM','CM','LW','ST','RW']
  return positions.map((pos, i) => ({
    id: `${teamId}_p${i}`,
    genericName: `${pos} ${i + 1}`,
    position: pos,
    rating: 68 + Math.floor(Math.random() * 12),
    pace: 65, shooting: 65, passing: 65, dribbling: 65, defending: 65, physical: 65,
  }))
}

// ── Cleanup ───────────────────────────────────────────────────────────────────
onBeforeUnmount(() => {
  game?.dispose()
  game = null
})
</script>

<style scoped>
/* ── Base ────────────────────────────────────────────────────────────────────── */
.screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 24px 56px;
  gap: 20px;
}
.dark-screen { background: linear-gradient(160deg, #080e18 0%, #0a150a 100%); color: #fff; }

.back-btn {
  align-self: flex-start;
  background: none; border: 1px solid #333; color: #888;
  padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 13px;
}
.back-btn:hover, .back-btn.ghost:hover { color: #fff; border-color: #666; }
.back-btn.ghost { border-color: transparent; }

.screen-title { font-size: 30px; font-weight: 900; letter-spacing: 5px; color: #fff; margin: 0; text-transform: uppercase; }
.screen-sub   { font-size: 12px; color: #556; letter-spacing: 2px; margin: 0; text-transform: uppercase; }

/* ── Form card ────────────────────────────────────────────────────────────────── */
.form-card {
  width: 100%; max-width: 480px;
  background: #0e1a0e; border: 1px solid #1a3a1a;
  border-radius: 10px; padding: 32px; display: flex; flex-direction: column; gap: 20px;
}
.field-group { display: flex; flex-direction: column; gap: 6px; }
.field-group label { font-size: 11px; color: #66a; letter-spacing: 2px; text-transform: uppercase; }
.field-group input {
  background: #111; border: 1px solid #2a2a2a; color: #fff;
  padding: 10px 12px; border-radius: 5px; font-size: 14px; outline: none;
}
.field-group input:focus { border-color: #27ae60; }

.style-btns { display: flex; gap: 8px; }
.style-btn {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px;
  background: #111; border: 1px solid #2a2a2a; color: #aaa;
  padding: 12px 8px; border-radius: 6px; cursor: pointer; transition: border-color .15s;
}
.style-btn.active { border-color: #27ae60; background: #0d2a0d; color: #fff; }
.style-icon  { font-size: 20px; }
.style-label { font-size: 12px; font-weight: 700; }
.style-desc  { font-size: 10px; color: #556; }

/* ── Team selection ───────────────────────────────────────────────────────────── */
.team-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px; width: 100%; max-width: 960px;
}
.team-card {
  display: flex; align-items: center; gap: 14px;
  background: #0d1a0d; border: 1px solid #1a2a1a; color: #ccc;
  padding: 14px 16px; border-radius: 8px; cursor: pointer;
  transition: border-color .15s, background .15s; text-align: left;
}
.team-card:hover { border-color: #27ae60; background: #0e2e1a; }
.create-club-card { border-style: dashed; border-color: #333; }
.team-badge {
  width: 48px; height: 48px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 900; color: #fff; flex-shrink: 0;
}
.team-name   { font-size: 14px; font-weight: 700; color: #fff; }
.team-league { font-size: 11px; color: #666; margin-top: 2px; }
.team-rating { font-size: 11px; color: #ffd700; margin-top: 3px; }

/* ── Create-a-club ─────────────────────────────────────────────────────────────── */
.color-row { display: flex; align-items: center; gap: 12px; }
.color-pick { width: 44px; height: 36px; border-radius: 4px; border: 1px solid #333; cursor: pointer; padding: 2px; background: #111; }
.color-preview { padding: 6px 12px; border-radius: 4px; font-size: 11px; color: #000; font-weight: 700; }
.kit-preview { display: flex; justify-content: center; margin: 8px 0; }
.kit-shirt {
  width: 72px; height: 80px; border-radius: 8px 8px 4px 4px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 14px; color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
  clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%);
}

/* ── Hub layout ────────────────────────────────────────────────────────────────── */
.hub-screen { min-height: 100vh; background: #080d10; color: #fff; display: flex; flex-direction: column; }
.hub-header {
  display: flex; align-items: center; gap: 24px;
  padding: 14px 24px; background: #0d1b14;
  border-bottom: 1px solid #1a2a1a;
}
.hub-manager { display: flex; align-items: center; gap: 14px; }
.manager-avatar {
  width: 42px; height: 42px; border-radius: 50%;
  background: linear-gradient(135deg, #27ae60, #1a5a30);
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 16px;
}
.manager-name   { font-weight: 700; font-size: 15px; }
.manager-detail { font-size: 11px; color: #666; margin-top: 2px; }
.hub-tabs { display: flex; gap: 4px; margin-left: auto; }
.hub-tab {
  background: none; border: 1px solid #222; color: #666;
  padding: 6px 18px; border-radius: 4px; cursor: pointer; font-size: 12px; letter-spacing: 1px;
}
.hub-tab.active { border-color: #27ae60; color: #27ae60; background: #0d2a0d; }

.tab-content { flex: 1; padding: 24px 28px; overflow-y: auto; }
.tab-title { font-size: 16px; letter-spacing: 3px; color: #aaa; font-weight: 700; text-transform: uppercase; margin: 0 0 16px; }

/* ── League table ──────────────────────────────────────────────────────────────── */
.league-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.league-table th {
  text-align: left; padding: 6px 10px; color: #556; font-size: 10px; letter-spacing: 1px;
  border-bottom: 1px solid #1a2a1a; text-transform: uppercase;
}
.league-table td { padding: 8px 10px; border-bottom: 1px solid #111; }
.league-table tr:hover td { background: #0d1a0d; }
.my-row td { background: rgba(39,174,96,.08); }
.my-row td:first-child { border-left: 3px solid #27ae60; }
.champions td { color: #ffd700; }
.relegated td  { color: #c0392b; }
.pts-cell { font-weight: 700; color: #fff; }
.club-cell { display: flex; align-items: center; gap: 8px; }
.club-dot  { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.positive { color: #27ae60; }
.negative { color: #c0392b; }

/* ── Fixtures ──────────────────────────────────────────────────────────────────── */
.fixtures-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.fixture-list { display: flex; flex-direction: column; gap: 8px; }
.fixture-row {
  display: flex; align-items: center; gap: 12px;
  background: #0d1310; border: 1px solid #1a2a1a;
  border-radius: 6px; padding: 12px 16px;
}
.fixture-row.my-match { border-color: #27ae60; background: rgba(39,174,96,.06); }
.fixture-row.played   { opacity: 0.7; }
.fixture-team { flex: 1; display: flex; align-items: center; gap: 8px; font-size: 14px; }
.away-team    { justify-content: flex-end; }
.fixture-score { font-size: 20px; font-weight: 900; color: #fff; min-width: 60px; text-align: center; }
.fixture-vs    { font-size: 12px; color: #556; min-width: 60px; text-align: center; letter-spacing: 2px; }
.fx-dot        { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.play-match-btn {
  background: linear-gradient(135deg, #27ae60, #1a7a40); color: #fff;
  border: none; border-radius: 5px; padding: 8px 18px; cursor: pointer;
  font-size: 13px; font-weight: 700; letter-spacing: 1px; flex-shrink: 0;
}
.played-badge { font-size: 12px; color: #27ae60; flex-shrink: 0; }
.week-actions { margin-top: 24px; display: flex; justify-content: flex-end; }

/* ── Cup bracket ───────────────────────────────────────────────────────────────── */
.cup-header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.champion-banner { font-size: 18px; font-weight: 700; color: #ffd700; }
.bracket { display: flex; gap: 32px; }
.bracket-round { display: flex; flex-direction: column; gap: 12px; }
.round-label { font-size: 11px; color: #556; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
.bracket-match {
  display: flex; align-items: center; gap: 10px;
  background: #0d1a0d; border: 1px solid #1a2a1a;
  border-radius: 6px; padding: 10px 14px; min-width: 320px;
}
.bracket-team { flex: 1; display: flex; align-items: center; gap: 8px; font-size: 13px; }
.bracket-team.winner { color: #ffd700; font-weight: 700; }
.bracket-vs { font-size: 10px; color: #444; }

/* ── Shared buttons ────────────────────────────────────────────────────────────── */
.primary-btn {
  background: linear-gradient(135deg, #27ae60, #1a7a40); color: #fff;
  border: none; border-radius: 6px; padding: 14px 36px;
  font-size: 15px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
  cursor: pointer; transition: transform .12s, box-shadow .12s;
  box-shadow: 0 4px 20px rgba(39,174,96,.3);
}
.primary-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(39,174,96,.5); }
.primary-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.primary-btn.small { padding: 8px 18px; font-size: 12px; }

.sim-btn {
  background: #1a1a2a; border: 1px solid #333; color: #aaa;
  padding: 8px 16px; border-radius: 5px; cursor: pointer; font-size: 12px;
}
.sim-btn:hover:not(:disabled) { border-color: #555; color: #fff; }
.sim-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.sim-btn.small { padding: 4px 10px; font-size: 11px; }

/* ── 3D game canvas ────────────────────────────────────────────────────────────── */
.game-wrap { position: fixed; inset: 0; background: #000; overflow: hidden; }
.game-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.ui-layer    { position: absolute; inset: 0; pointer-events: none; }

/* ── Result screen ─────────────────────────────────────────────────────────────── */
.result-screen { justify-content: center; }
.result-card {
  background: #0e1a0e; border: 1px solid #1a3a1a; border-radius: 12px;
  padding: 48px 64px; text-align: center; display: flex; flex-direction: column; gap: 20px;
}
.result-label  { font-size: 12px; letter-spacing: 4px; color: #556; text-transform: uppercase; }
.result-teams  { display: flex; align-items: center; justify-content: center; gap: 24px; font-size: 18px; font-weight: 700; }
.result-score  { font-size: 48px; font-weight: 900; color: #fff; }
.result-verdict { font-size: 24px; font-weight: 900; letter-spacing: 2px; }
.result-verdict.win  { color: #ffd700; }
.result-verdict.draw { color: #aaa; }
.result-verdict.loss { color: #c0392b; }
.result-actions { display: flex; justify-content: center; margin-top: 8px; }
</style>
