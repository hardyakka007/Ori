<template>
  <div class="journey-view">
    <div class="screen-header">
      <button class="back-btn" @click="$router.push('/')">← Back</button>
      <h1>The Journey</h1>
      <p>Ori Franklin — Rise to the Top</p>
    </div>

    <!-- ── HUB ── -->
    <div v-if="phase === 'hub'" class="hub-wrap">

      <!-- Ori Franklin card -->
      <div class="ori-card">
        <div class="ori-badge" :class="oriTier">{{ oriCard.overall }}</div>
        <div class="ori-info">
          <div class="ori-name">Ori Franklin</div>
          <div class="ori-pos">CM</div>
          <div class="ori-club">{{ oriCard.club }}</div>
        </div>
        <div class="ori-stats">
          <div class="os" v-for="(v, k) in oriStats" :key="k">
            <span class="os-label">{{ k }}</span>
            <span class="os-val">{{ v }}</span>
          </div>
        </div>
      </div>

      <!-- Chapter list -->
      <div class="chapter-list">
        <div
          v-for="ch in chapters" :key="ch.number"
          class="chapter-row"
          :class="{
            completed: isCompleted(ch.number),
            current:   isCurrentChapter(ch.number),
            locked:    isLocked(ch.number),
          }"
          @click="!isLocked(ch.number) && openChapter(ch.number)"
        >
          <div class="ch-num">{{ ch.number }}</div>
          <div class="ch-info">
            <div class="ch-title">{{ ch.title }}</div>
            <div class="ch-club">{{ ch.club }}</div>
          </div>
          <div class="ch-status">
            <span v-if="isCompleted(ch.number)">✅</span>
            <span v-else-if="isCurrentChapter(ch.number)">▶</span>
            <span v-else>🔒</span>
          </div>
        </div>
      </div>

      <button v-if="journeyComplete" class="action-btn" @click="resetJourney">Play Again</button>
    </div>

    <!-- ── CHAPTER INTRO ── -->
    <div v-else-if="phase === 'intro'" class="story-wrap">
      <div class="story-card">
        <div class="chapter-label">Chapter {{ currentChapter.number }} — {{ currentChapter.title }}</div>
        <div class="story-text" v-html="formattedIntro"></div>
        <div class="objective-box">
          <span class="obj-label">🎯 Objective</span>
          <span class="obj-text">{{ currentChapter.objective }}</span>
        </div>

        <!-- Previous choice flavor -->
        <div class="choice-flavor" v-if="prevChoiceFlavor">
          <em>{{ prevChoiceFlavor }}</em>
        </div>

        <div class="intro-actions">
          <button class="action-btn" @click="goToPreMatch">Play the Match</button>
          <button class="action-btn secondary-btn" @click="simulateChapter">Simulate</button>
        </div>
      </div>
    </div>

    <!-- ── POST MATCH ── -->
    <div v-else-if="phase === 'post'" class="story-wrap">
      <div class="story-card">
        <div class="chapter-label">Chapter {{ currentChapter.number }} — {{ currentChapter.title }}</div>

        <div class="match-result-banner" :class="wonChapter ? 'win-banner' : 'loss-banner'">
          {{ wonChapter ? '✅ Victory' : '❌ Defeat' }}
          <span class="match-score" v-if="chapterMatch">
            {{ chapterMatch.home }} {{ chapterMatch.score.home }} – {{ chapterMatch.score.away }} {{ chapterMatch.away }}
          </span>
        </div>

        <div class="story-text" v-html="formattedPostText"></div>

        <!-- Choice -->
        <div v-if="currentChapter.choice && !choiceMade" class="choice-box">
          <p class="choice-question">{{ currentChapter.choice.text }}</p>
          <div class="choice-btns">
            <button class="action-btn" @click="makeChoice">Speak your mind</button>
            <button class="action-btn secondary-btn" @click="skipChoice">Stay silent</button>
          </div>
        </div>

        <div v-if="choiceMade || !currentChapter.choice" class="next-actions">
          <div class="ovr-gain" v-if="wonChapter && oriOvrGain > 0">
            ⬆️ Ori's OVR: {{ oriCard.overall }} (+{{ oriOvrGain }})
          </div>
          <button class="action-btn" v-if="!isLastChapter" @click="nextChapter">Next Chapter →</button>
          <button class="action-btn" v-else @click="endJourney">🏆 Finish The Journey</button>
        </div>
      </div>
    </div>

    <!-- ── COMPLETE ── -->
    <div v-else-if="phase === 'complete'" class="story-wrap">
      <div class="story-card complete-card">
        <div class="complete-title">The Journey Complete</div>
        <div class="ori-final">
          <div class="ori-ovr-big">{{ oriCard.overall }}</div>
          <div class="ori-name-big">Ori Franklin</div>
          <div class="ori-pos">CM — {{ oriCard.club }}</div>
        </div>
        <p class="complete-text">From a trial at Hotspur to a Champions League winner. One incredible journey.</p>
        <button class="action-btn" @click="$router.push('/')">Back to Menu</button>
        <button class="action-btn secondary-btn" @click="resetJourney">Play Again</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const SAVE_KEY = 'tbg_journey'

// ── Journey state ─────────────────────────────────────────────────────────────
const phase   = ref('hub')
const chapters = ref([])

const oriCard = ref({
  overall: 72, club: 'Youth Academy', pace: 72, shooting: 68,
  passing: 74, dribbling: 73, defending: 55, physical: 68,
})

const progress = ref({
  completedChapters: [],
  choices: {},        // chapter number → 'spoke' | 'silent'
  oriOvr: 72,
})

const currentChapter  = ref(null)
const wonChapter      = ref(false)
const chapterMatch    = ref(null)
const choiceMade      = ref(false)
const oriOvrGain      = ref(0)

const CHAPTER_CLUBS = {
  1: 'Youth Academy', 2: 'Hotspur FC', 3: 'Blues Man City',
  4: 'Blues Man City', 5: 'White Madrid FC',
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(async () => {
  try {
    // Load all chapter metadata
    const reqs = [1,2,3,4,5].map(n => fetch(`/api/journey/chapter/${n}`).then(r => r.json()))
    chapters.value = await Promise.all(reqs)
  } catch { /* use empty */ }

  const saved = localStorage.getItem(SAVE_KEY)
  if (saved) {
    try {
      const s = JSON.parse(saved)
      progress.value = s.progress || progress.value
      oriCard.value.overall = progress.value.oriOvr || 72
      oriCard.value.club = CHAPTER_CLUBS[currentUnlockedChapter.value] || 'Youth Academy'
    } catch { /* corrupt */ }
  }
})

// ── Computed ──────────────────────────────────────────────────────────────────
const currentUnlockedChapter = computed(() =>
  Math.min(5, (progress.value.completedChapters.length || 0) + 1)
)

const journeyComplete = computed(() => progress.value.completedChapters.length >= 5)

const isLastChapter = computed(() => currentChapter.value?.number === 5)

const oriTier = computed(() => {
  const o = oriCard.value.overall
  if (o >= 90) return 'tier-gold'
  if (o >= 85) return 'tier-silver'
  return 'tier-standard'
})

const oriStats = computed(() => ({
  PAC: oriCard.value.pace,
  SHO: oriCard.value.shooting,
  PAS: oriCard.value.passing,
  DRI: oriCard.value.dribbling,
  DEF: oriCard.value.defending,
  PHY: oriCard.value.physical,
}))

const formattedIntro = computed(() =>
  currentChapter.value?.intro.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') || ''
)

const formattedPostText = computed(() => {
  const text = wonChapter.value ? currentChapter.value?.post_win : currentChapter.value?.post_loss
  return text?.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') || ''
})

const prevChoiceFlavor = computed(() => {
  if (!currentChapter.value || currentChapter.value.number <= 1) return ''
  const prevNum = currentChapter.value.number - 1
  const prevChoice = progress.value.choices[prevNum]
  if (prevChoice === 'spoke') {
    return chapters.value.find(c => c.number === prevNum)?.choice?.flavor_next || ''
  }
  return ''
})

// ── Methods ───────────────────────────────────────────────────────────────────
function isCompleted(n) { return progress.value.completedChapters.includes(n) }
function isCurrentChapter(n) { return n === currentUnlockedChapter.value }
function isLocked(n) { return n > currentUnlockedChapter.value }

function openChapter(n) {
  const ch = chapters.value.find(c => c.number === n)
  if (!ch) return
  currentChapter.value = ch
  choiceMade.value = false
  chapterMatch.value = null
  phase.value = 'intro'
}

function goToPreMatch() {
  router.push(`/play?home=${encodeURIComponent(currentChapter.value.home_club)}&away=${encodeURIComponent(currentChapter.value.away_club)}&journey=${currentChapter.value.number}`)
}

async function simulateChapter() {
  try {
    const res = await fetch('/api/journey/result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: currentChapter.value.number }),
    })
    const data = await res.json()
    wonChapter.value  = data.won
    oriOvrGain.value  = data.ori_ovr_gain
    chapterMatch.value = data.match
    showPostMatch()
  } catch { alert('Simulation failed') }
}

function showPostMatch() {
  if (wonChapter.value) {
    oriCard.value.overall += oriOvrGain.value
    progress.value.oriOvr = oriCard.value.overall
    oriCard.value.club = CHAPTER_CLUBS[currentChapter.value.number]
  }
  phase.value = 'post'
}

function makeChoice() {
  progress.value.choices[currentChapter.value.number] = 'spoke'
  choiceMade.value = true
  completeChapter()
}

function skipChoice() {
  progress.value.choices[currentChapter.value.number] = 'silent'
  choiceMade.value = true
  completeChapter()
}

function completeChapter() {
  if (!progress.value.completedChapters.includes(currentChapter.value.number)) {
    progress.value.completedChapters.push(currentChapter.value.number)
  }
  saveProgress()
}

function nextChapter() {
  if (!currentChapter.value) return
  const next = chapters.value.find(c => c.number === currentChapter.value.number + 1)
  if (next) openChapter(next.number)
  else phase.value = 'hub'
}

function endJourney() {
  completeChapter()
  phase.value = 'complete'
}

function resetJourney() {
  progress.value = { completedChapters: [], choices: {}, oriOvr: 72 }
  oriCard.value = { overall: 72, club: 'Youth Academy', pace: 72, shooting: 68, passing: 74, dribbling: 73, defending: 55, physical: 68 }
  localStorage.removeItem(SAVE_KEY)
  phase.value = 'hub'
}

function saveProgress() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({ progress: progress.value }))
}
</script>

<style scoped>
.journey-view { min-height: 100vh; background: #0d1117; color: #fff; }
.screen-header { padding: 24px 40px 12px; text-align: center; position: relative; }
.screen-header h1 { font-size: 26px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; }
.screen-header p { font-size: 12px; color: #556; margin-top: 4px; }
.back-btn {
  position: absolute; left: 40px; top: 28px; background: none;
  border: 1px solid #333; color: #888; padding: 6px 14px; border-radius: 4px; cursor: pointer; font-size: 13px;
}
.back-btn:hover { border-color: #555; color: #aaa; }

/* Hub */
.hub-wrap { display: flex; gap: 32px; padding: 24px 40px; align-items: flex-start; }

.ori-card {
  width: 200px; flex-shrink: 0; background: #111820; border: 1px solid #1e2535;
  border-radius: 10px; padding: 20px; display: flex; flex-direction: column; gap: 12px; align-items: center;
}
.ori-badge {
  width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 22px; font-weight: 900;
}
.tier-gold     { background: linear-gradient(135deg, #b8860b, #ffd700); color: #1a1a00; }
.tier-silver   { background: linear-gradient(135deg, #555, #aaa); color: #000; }
.tier-standard { background: linear-gradient(135deg, #3a5028, #5a7a40); color: #fff; }
.ori-info { text-align: center; }
.ori-name { font-size: 16px; font-weight: 700; }
.ori-pos  { font-size: 12px; color: #ffd700; letter-spacing: 2px; }
.ori-club { font-size: 11px; color: #556; margin-top: 2px; }
.ori-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; width: 100%; }
.os { display: flex; justify-content: space-between; font-size: 12px; }
.os-label { color: #556; }
.os-val { font-weight: 700; color: #fff; }

.chapter-list { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.chapter-row {
  display: flex; align-items: center; gap: 16px;
  background: #111820; border: 1px solid #1e2535; border-radius: 8px; padding: 16px 20px;
  cursor: pointer; transition: all .12s;
}
.chapter-row:hover:not(.locked) { background: #1a2535; border-color: #2e4060; }
.chapter-row.locked { opacity: .4; cursor: not-allowed; }
.chapter-row.completed { border-color: #1a3a2a; }
.chapter-row.current { border-color: #2980b9; }
.ch-num { font-size: 24px; font-weight: 900; color: #ffd700; width: 32px; flex-shrink: 0; }
.ch-title { font-size: 16px; font-weight: 700; }
.ch-club  { font-size: 12px; color: #556; margin-top: 2px; }
.ch-status { margin-left: auto; font-size: 20px; }

/* Story */
.story-wrap { display: flex; justify-content: center; padding: 32px 40px; }
.story-card {
  background: #111820; border: 1px solid #1e2535; border-radius: 12px;
  padding: 40px 48px; max-width: 680px; width: 100%;
  display: flex; flex-direction: column; gap: 20px;
}
.chapter-label { font-size: 11px; letter-spacing: 3px; color: #556; text-transform: uppercase; }
.story-text { font-size: 16px; line-height: 1.8; color: #ddd; }
.story-text :deep(p) { margin: 0 0 12px 0; }

.objective-box {
  background: #0d1a2a; border: 1px solid #1a3a5c; border-radius: 6px;
  padding: 12px 16px; display: flex; flex-direction: column; gap: 4px;
}
.obj-label { font-size: 10px; letter-spacing: 2px; color: #4fc3f7; text-transform: uppercase; }
.obj-text  { font-size: 14px; color: #ccc; }

.choice-flavor { font-size: 13px; color: #ffd700; font-style: italic; border-left: 3px solid #ffd700; padding-left: 12px; }

.intro-actions { display: flex; gap: 12px; }

.match-result-banner {
  padding: 16px 20px; border-radius: 6px; text-align: center;
  font-size: 18px; font-weight: 700; display: flex; flex-direction: column; gap: 6px; align-items: center;
}
.win-banner  { background: rgba(39,174,96,.2); border: 1px solid #27ae60; color: #27ae60; }
.loss-banner { background: rgba(231,76,60,.2); border: 1px solid #e74c3c; color: #e74c3c; }
.match-score { font-size: 13px; color: #aaa; font-weight: 400; }

.choice-box { background: #0d1a2a; border: 1px solid #1a3a5c; border-radius: 6px; padding: 16px 20px; }
.choice-question { font-size: 14px; color: #ccc; margin-bottom: 12px; }
.choice-btns { display: flex; gap: 10px; }

.ovr-gain { font-size: 14px; color: #ffd700; margin-bottom: 8px; }
.next-actions { display: flex; flex-direction: column; gap: 8px; align-items: flex-start; }

.action-btn {
  padding: 13px 30px; background: linear-gradient(135deg, #27ae60, #1a7a40);
  color: #fff; border: none; border-radius: 8px; font-size: 14px; font-weight: 700;
  cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all .12s;
}
.action-btn:hover { transform: translateY(-1px); }
.secondary-btn { background: #1a2535; box-shadow: none; }

/* Complete */
.complete-card { align-items: center; text-align: center; }
.complete-title { font-size: 28px; font-weight: 900; letter-spacing: 2px; color: #ffd700; text-transform: uppercase; }
.ori-final { margin: 16px 0; }
.ori-ovr-big { font-size: 64px; font-weight: 900; color: #ffd700; font-family: monospace; }
.ori-name-big { font-size: 22px; font-weight: 700; }
.complete-text { font-size: 15px; color: #aaa; max-width: 400px; margin: 12px 0 20px; }
</style>
