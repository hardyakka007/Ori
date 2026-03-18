<template>
  <div class="postmatch">
    <!-- Score banner -->
    <div class="score-banner">
      <div class="team-block">
        <span class="team-name">{{ result.home }}</span>
      </div>
      <div class="score-center">
        <span class="final-score">{{ result.score.home }} – {{ result.score.away }}</span>
        <span class="full-time-label">Full Time</span>
      </div>
      <div class="team-block away">
        <span class="team-name">{{ result.away }}</span>
      </div>
    </div>

    <!-- Scorers -->
    <div v-if="allScorers.length" class="section">
      <h3 class="section-title">⚽ Goal Scorers</h3>
      <div class="scorers-list">
        <div v-for="s in allScorers" :key="s.player + s.minute" class="scorer-row">
          <span class="scorer-team-dot" :class="s.team"></span>
          <span class="scorer-name">{{ s.player }}</span>
          <span class="scorer-minute">{{ s.minute }}'</span>
        </div>
      </div>
    </div>

    <!-- Stats bar -->
    <div class="section stats-grid">
      <h3 class="section-title">📊 Match Stats</h3>
      <StatBar label="Possession" :home="result.possession.home" :away="result.possession.away" unit="%" />
      <StatBar label="Shots" :home="result.shots.home" :away="result.shots.away" :total="result.shots.home + result.shots.away" />
      <StatBar label="On Target" :home="result.shots_on_target.home" :away="result.shots_on_target.away" :total="result.shots.home + result.shots.away" />
    </div>

    <!-- Player ratings top 5 each -->
    <div class="section ratings-grid">
      <h3 class="section-title">⭐ Player Ratings</h3>
      <div class="ratings-cols">
        <div class="ratings-col">
          <h4>{{ result.home }}</h4>
          <div v-for="r in homeRatings" :key="r.player" class="rating-row">
            <span class="r-name">{{ r.player }}</span>
            <div class="r-bar-wrap">
              <div class="r-bar" :style="{ width: (r.rating / 10 * 100) + '%', background: ratingColor(r.rating) }"></div>
            </div>
            <span class="r-val">{{ r.rating.toFixed(1) }}</span>
          </div>
        </div>
        <div class="ratings-col">
          <h4>{{ result.away }}</h4>
          <div v-for="r in awayRatings" :key="r.player" class="rating-row">
            <span class="r-name">{{ r.player }}</span>
            <div class="r-bar-wrap">
              <div class="r-bar" :style="{ width: (r.rating / 10 * 100) + '%', background: ratingColor(r.rating) }"></div>
            </div>
            <span class="r-val">{{ r.rating.toFixed(1) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- MoTM -->
    <div class="section motm-section" v-if="result.motm?.player">
      <h3 class="section-title">🏅 Man of the Match</h3>
      <div class="motm-card">
        <div class="motm-face">
          <img v-if="motmImgOk && result.motm.face_url" :src="result.motm.face_url" @error="motmImgOk = false" class="motm-img" />
          <svg v-else viewBox="0 0 80 80" class="motm-svg">
            <circle cx="40" cy="28" r="18" fill="rgba(255,215,0,.5)"/>
            <ellipse cx="40" cy="72" rx="26" ry="20" fill="rgba(255,215,0,.5)"/>
          </svg>
        </div>
        <div class="motm-info">
          <div class="motm-name">{{ result.motm.player }}</div>
          <div class="motm-rating">{{ result.motm.rating.toFixed(1) }} / 10</div>
        </div>
      </div>
    </div>

    <button class="back-btn" @click="$emit('back')">← Back to Menu</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ result: { type: Object, required: true } })
defineEmits(['back'])

const motmImgOk = ref(true)

const allScorers = computed(() => {
  return [...(props.result.scorers || [])].sort((a, b) => a.minute - b.minute)
})

const homeRatings = computed(() =>
  props.result.ratings.filter(r => r.team === 'home').slice(0, 5)
)
const awayRatings = computed(() =>
  props.result.ratings.filter(r => r.team === 'away').slice(0, 5)
)

function ratingColor(r) {
  if (r >= 8)   return '#27ae60'
  if (r >= 6.5) return '#f39c12'
  return '#e74c3c'
}
</script>

<script>
// StatBar as a local sub-component
export default {
  components: {
    StatBar: {
      props: ['label', 'home', 'away', 'unit', 'total'],
      template: `
        <div class="stat-bar-row">
          <span class="sb-val">{{ home }}{{ unit || '' }}</span>
          <span class="sb-label">{{ label }}</span>
          <span class="sb-val away">{{ away }}{{ unit || '' }}</span>
          <div class="sb-track">
            <div class="sb-fill-home" :style="{ width: homeW + '%' }"></div>
            <div class="sb-fill-away" :style="{ width: awayW + '%' }"></div>
          </div>
        </div>
      `,
      computed: {
        homeW() {
          const t = this.total || (this.home + this.away)
          return t ? (this.home / t * 100) : 50
        },
        awayW() {
          const t = this.total || (this.home + this.away)
          return t ? (this.away / t * 100) : 50
        },
      }
    }
  }
}
</script>

<style scoped>
.postmatch {
  width: 100%;
  max-width: 900px;
  padding: 0 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Score banner */
.score-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 40px;
  background: linear-gradient(135deg, #111820, #1a2535);
  border-radius: 12px;
  border: 1px solid #1e2535;
  margin-top: 24px;
}
.team-block    { flex: 1; }
.team-block.away { text-align: right; }
.team-name     { font-size: 18px; font-weight: 700; }
.score-center  { display: flex; flex-direction: column; align-items: center; }
.final-score   { font-size: 48px; font-weight: 900; color: #ffd700; font-family: 'Courier New', monospace; }
.full-time-label { font-size: 10px; color: #556; letter-spacing: 3px; text-transform: uppercase; }

/* Sections */
.section { background: #111820; border-radius: 10px; padding: 20px 24px; border: 1px solid #1e2535; }
.section-title { font-size: 13px; font-weight: 700; letter-spacing: 2px; color: #ffd700; text-transform: uppercase; margin-bottom: 14px; }

/* Scorers */
.scorers-list { display: flex; flex-direction: column; gap: 6px; }
.scorer-row   { display: flex; align-items: center; gap: 10px; font-size: 14px; }
.scorer-team-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
}
.scorer-team-dot.home { background: #2980b9; }
.scorer-team-dot.away { background: #e74c3c; }
.scorer-name   { flex: 1; font-weight: 600; }
.scorer-minute { color: #556; font-size: 12px; }

/* Ratings */
.ratings-cols { display: flex; gap: 32px; }
.ratings-col  { flex: 1; }
.ratings-col h4 { font-size: 11px; color: #556; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
.rating-row   { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; }
.r-name       { width: 120px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.r-bar-wrap   { flex: 1; height: 6px; background: #1e2535; border-radius: 3px; overflow: hidden; }
.r-bar        { height: 100%; border-radius: 3px; transition: width .4s ease; }
.r-val        { width: 28px; text-align: right; font-size: 12px; font-weight: 700; }

/* MoTM */
.motm-card { display: flex; align-items: center; gap: 20px; }
.motm-face {
  width: 80px; height: 80px; border-radius: 50%;
  overflow: hidden; border: 3px solid #ffd700;
  background: rgba(0,0,0,.3); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.motm-img { width: 100%; height: 100%; object-fit: cover; }
.motm-svg { width: 70px; height: 70px; }
.motm-name   { font-size: 20px; font-weight: 700; }
.motm-rating { font-size: 28px; font-weight: 900; color: #ffd700; }

/* Stat bar rows (used via sub-component) */
:deep(.stat-bar-row) { margin-bottom: 10px; }
:deep(.sb-val)   { font-size: 13px; font-weight: 700; display: inline-block; width: 46px; }
:deep(.sb-val.away) { text-align: right; }
:deep(.sb-label) { font-size: 11px; color: #667; display: inline-block; width: 90px; text-align: center; }
:deep(.sb-track) {
  height: 6px; background: #1e2535; border-radius: 3px;
  overflow: hidden; display: flex; margin-top: 4px;
}
:deep(.sb-fill-home) { height: 100%; background: #2980b9; }
:deep(.sb-fill-away) { height: 100%; background: #e74c3c; }

.back-btn {
  align-self: center;
  padding: 14px 40px;
  background: #1a2535; border: 1px solid #2e4060;
  color: #aaa; border-radius: 8px; cursor: pointer;
  font-size: 14px; font-weight: 700; letter-spacing: 1px;
  text-transform: uppercase; transition: all .12s;
}
.back-btn:hover { background: #1e2d45; color: #fff; }
</style>
