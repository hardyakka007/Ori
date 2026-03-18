<template>
  <div class="player-card" :class="`card-${player.tier}`">
    <div class="card-ovr">{{ player.overall }}</div>
    <div class="card-pos">{{ player.position }}</div>

    <!-- Face portrait -->
    <div class="face-circle">
      <img
        v-if="imgOk"
        :src="player.face_url"
        :alt="player.name"
        class="face-img"
        @error="imgOk = false"
      />
      <svg v-else class="face-svg" viewBox="0 0 80 80">
        <circle cx="40" cy="28" r="18" fill="rgba(255,255,255,.55)"/>
        <ellipse cx="40" cy="72" rx="26" ry="20" fill="rgba(255,255,255,.55)"/>
      </svg>
    </div>

    <div class="card-name">{{ player.name }}</div>
    <div class="card-club">{{ player.club }}</div>

    <div class="card-stats">
      <div v-for="s in player.stats" :key="s.label" class="stat-box">
        <span class="stat-val">{{ s.value }}</span>
        <span class="stat-lbl">{{ s.label }}</span>
      </div>
    </div>

    <div v-if="player.is_icon" class="icon-badge">★ LEGEND ★</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ player: { type: Object, required: true } })
const imgOk = ref(true)
</script>

<style scoped>
.player-card {
  width: 196px;
  border-radius: 12px;
  padding: 14px 12px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
}

.card-gold     { background: linear-gradient(160deg,#c9a227,#8b6914,#c9a227); border: 1px solid #ffd700; }
.card-silver   { background: linear-gradient(160deg,#9e9e9e,#616161,#9e9e9e); border: 1px solid #ccc; }
.card-standard { background: linear-gradient(160deg,#1565c0,#0d47a1,#1565c0); border: 1px solid #42a5f5; }

.card-ovr {
  position: absolute;
  top: 10px; left: 11px;
  font-size: 22px; font-weight: 900;
  color: rgba(255,255,255,.9);
}
.card-pos {
  position: absolute;
  top: 32px; left: 13px;
  font-size: 9px; font-weight: 700;
  color: rgba(255,255,255,.7);
  letter-spacing: 1px;
}

.face-circle {
  width: 78px; height: 78px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255,255,255,.35);
  background: rgba(0,0,0,.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.face-img { width: 100%; height: 100%; object-fit: cover; }
.face-svg { width: 68px; height: 68px; opacity: .45; }

.card-name { font-size: 13px; font-weight: 800; color: #fff; text-align: center; text-transform: uppercase; line-height: 1.1; }
.card-club { font-size: 9px; color: rgba(255,255,255,.65); text-transform: uppercase; letter-spacing: 1px; }

.card-stats { display: flex; gap: 7px; margin-top: 2px; }
.stat-box {
  display: flex; flex-direction: column; align-items: center;
  background: rgba(0,0,0,.25); border-radius: 6px; padding: 5px 8px; min-width: 42px;
}
.stat-val { font-size: 16px; font-weight: 800; color: #fff; line-height: 1; }
.stat-lbl { font-size: 7px; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .5px; margin-top: 2px; }

.icon-badge {
  font-size: 9px; font-weight: 700; color: #ffd700;
  letter-spacing: 2px; text-transform: uppercase;
  background: rgba(0,0,0,.3); border-radius: 4px; padding: 3px 8px;
}
</style>
