<template>
  <!-- ── Team selection screen ────────────────────────────────────────────── -->
  <div v-if="phase === 'select'" class="select-screen">
    <button class="back-btn" @click="router.push('/')">← Back</button>
    <h1 class="title">3D MATCH</h1>
    <p class="subtitle">Select teams &amp; difficulty</p>

    <div class="pickers">
      <!-- Home team -->
      <div class="picker-col">
        <h2>🎮 Your Team</h2>
        <div class="club-grid">
          <button
            v-for="(t, id) in teams" :key="id"
            class="club-btn"
            :class="{ selected: homeId === id, blocked: awayId === id }"
            :disabled="awayId === id"
            @click="homeId = id"
          >
            <span class="dot" :style="{ background: t.primaryColor }"></span>
            {{ t.name }}
            <small>{{ t.league }}</small>
          </button>
        </div>
      </div>

      <!-- VS / settings -->
      <div class="vs-col">
        <div class="vs-badge">VS</div>
        <div class="diff-group">
          <label>Difficulty</label>
          <div class="diff-btns">
            <button v-for="d in ['easy','medium','hard']" :key="d"
              class="diff-btn" :class="{ active: difficulty === d }"
              @click="difficulty = d"
            >{{ d }}</button>
          </div>
        </div>
        <button class="kickoff-btn" :disabled="!homeId || !awayId" @click="startGame">
          ⚽ Kick Off
        </button>
      </div>

      <!-- Away team -->
      <div class="picker-col">
        <h2>🤖 Opponent</h2>
        <div class="club-grid">
          <button
            v-for="(t, id) in teams" :key="id"
            class="club-btn"
            :class="{ selected: awayId === id, blocked: homeId === id }"
            :disabled="homeId === id"
            @click="awayId = id"
          >
            <span class="dot" :style="{ background: t.primaryColor }"></span>
            {{ t.name }}
            <small>{{ t.league }}</small>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Loading screen ────────────────────────────────────────────────────── -->
  <div v-else-if="phase === 'loading'" class="loading-screen">
    <div class="spinner"></div>
    <p>Building the stadium…</p>
  </div>

  <!-- ── 3D game canvas ────────────────────────────────────────────────────── -->
  <div v-else-if="phase === 'game'" class="game-wrap" ref="gameWrap">
    <canvas ref="canvasEl" class="game-canvas"></canvas>
    <!-- UI overlays injected here by UIHandler -->
    <div ref="uiEl" class="ui-layer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { SoccerGame } from '../game/App.js'

const router = useRouter()

// ── State ─────────────────────────────────────────────────────────────────────
const phase      = ref('select')
const difficulty = ref('medium')
const homeId     = ref(null)
const awayId     = ref(null)
const teams      = ref({})

const gameWrap = ref(null)
const canvasEl = ref(null)
const uiEl     = ref(null)

let game = null

// ── Load player data ──────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    const res  = await fetch('/data/players.json')
    const data = await res.json()
    teams.value = data.teams ?? {}
  } catch (e) {
    console.error('Failed to load players.json', e)
  }
})

// ── Start the 3D game ─────────────────────────────────────────────────────────
async function startGame() {
  if (!homeId.value || !awayId.value) return
  phase.value = 'loading'

  await nextTick()

  // Give the browser a frame to paint the loading screen
  await new Promise(r => setTimeout(r, 60))

  phase.value = 'game'
  await nextTick()
  // Extra frame so the browser paints the canvas element before we read its size
  await new Promise(r => requestAnimationFrame(r))

  const canvas      = canvasEl.value
  const uiContainer = uiEl.value

  if (!canvas || !uiContainer) {
    console.error('Canvas or UI container not found after mount')
    phase.value = 'select'
    return
  }

  // Size canvas buffer to match CSS layout size
  const w = gameWrap.value.clientWidth  || window.innerWidth
  const h = gameWrap.value.clientHeight || window.innerHeight
  canvas.width  = w
  canvas.height = h

  const homeTeamData = teams.value[homeId.value]
  const awayTeamData = teams.value[awayId.value]

  if (!homeTeamData?.players?.length || !awayTeamData?.players?.length) {
    console.error('Team data missing players', { homeTeamData, awayTeamData })
    phase.value = 'select'
    return
  }

  const homeTeam = { id: homeId.value, ...homeTeamData }
  const awayTeam = { id: awayId.value, ...awayTeamData }

  game = new SoccerGame(canvas, uiContainer, {
    homeTeam,
    awayTeam,
    difficulty: difficulty.value,
    onQuit: () => router.push('/'),
  })
  game.start()
}

// ── Cleanup ───────────────────────────────────────────────────────────────────
onBeforeUnmount(() => {
  game?.dispose()
  game = null
})
</script>

<style scoped>
/* ── Select screen ──────────────────────────────────────────────────────────── */
.select-screen {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0f1a 0%, #091209 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 32px 48px;
  gap: 16px;
}

.back-btn {
  align-self: flex-start;
  background: none; border: 1px solid #333; color: #888;
  padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 13px;
}
.back-btn:hover { color: #fff; border-color: #666; }

.title {
  font-size: 36px; font-weight: 900; letter-spacing: 6px;
  color: #fff; margin: 0;
}
.subtitle { font-size: 12px; color: #556; letter-spacing: 3px; margin: 0; text-transform: uppercase; }

.pickers {
  display: flex; gap: 32px; align-items: flex-start; margin-top: 16px;
  width: 100%; max-width: 900px;
}

.picker-col { flex: 1; }
.picker-col h2 { font-size: 14px; letter-spacing: 2px; color: #aaa; margin: 0 0 12px; text-transform: uppercase; }

.club-grid { display: flex; flex-direction: column; gap: 8px; }

.club-btn {
  display: flex; align-items: center; gap: 10px;
  background: #111; border: 1px solid #222; color: #ccc;
  padding: 10px 14px; border-radius: 6px; cursor: pointer;
  font-size: 14px; font-weight: 600; text-align: left;
  transition: border-color .15s, background .15s;
  width: 100%;
}
.club-btn small { margin-left: auto; font-size: 11px; color: #555; font-weight: 400; }
.club-btn:hover:not(:disabled) { background: #1a1a2a; border-color: #444; color: #fff; }
.club-btn.selected { border-color: #27ae60; background: #0e2e1a; color: #fff; }
.club-btn.blocked, .club-btn:disabled { opacity: 0.35; cursor: not-allowed; }

.dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }

/* ── VS column ──────────────────────────────────────────────────────────────── */
.vs-col {
  display: flex; flex-direction: column; align-items: center;
  gap: 20px; padding-top: 28px; flex-shrink: 0;
}
.vs-badge {
  font-size: 28px; font-weight: 900; color: #ffd700;
  text-shadow: 0 0 20px rgba(255,215,0,.5);
}

.diff-group { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.diff-group label { font-size: 11px; color: #555; letter-spacing: 2px; text-transform: uppercase; }
.diff-btns { display: flex; gap: 6px; }
.diff-btn {
  background: #1a1a1a; border: 1px solid #333; color: #666;
  padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 12px;
  text-transform: uppercase; letter-spacing: 1px;
}
.diff-btn.active { background: #1a2e3a; border-color: #2980b9; color: #7ec8e3; }

.kickoff-btn {
  background: linear-gradient(135deg, #27ae60, #1a7a40);
  color: #fff; border: none; border-radius: 8px;
  padding: 16px 32px; font-size: 16px; font-weight: 900;
  letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
  box-shadow: 0 4px 24px rgba(39,174,96,.4);
  transition: transform .12s, box-shadow .12s;
}
.kickoff-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 32px rgba(39,174,96,.55); }
.kickoff-btn:disabled { opacity: 0.35; cursor: not-allowed; }

/* ── Loading screen ─────────────────────────────────────────────────────────── */
.loading-screen {
  min-height: 100vh;
  background: #050d0a;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 24px; color: #aaa; font-size: 14px; letter-spacing: 3px; text-transform: uppercase;
}
.spinner {
  width: 48px; height: 48px;
  border: 3px solid #1a3a1a;
  border-top-color: #27ae60;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Game canvas ────────────────────────────────────────────────────────────── */
.game-wrap {
  position: fixed; inset: 0; background: #000;
  overflow: hidden;
}
.game-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  display: block;
}
.ui-layer {
  position: absolute; inset: 0;
  pointer-events: none;
}
</style>
