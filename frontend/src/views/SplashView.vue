<template>
  <div class="splash">

    <!-- ── STADIUM HERO ── -->
    <div class="stadium">
      <div class="sky"></div>

      <!-- Floodlight towers -->
      <div class="fl fl-left">
        <div class="fl-pole"></div>
        <div class="fl-head"></div>
        <div class="fl-beam"></div>
      </div>
      <div class="fl fl-right">
        <div class="fl-pole"></div>
        <div class="fl-head"></div>
        <div class="fl-beam fl-beam-r"></div>
      </div>

      <!-- Scoreboard -->
      <div class="scoreboard">
        <span class="sb-score">00 — 00</span>
        <span class="sb-time">00:00</span>
      </div>

      <!-- Crowd stands -->
      <div class="stands" ref="standsRef"></div>

      <!-- Pitch -->
      <div class="pitch">
        <svg class="pitch-svg" viewBox="0 0 800 160" preserveAspectRatio="none">
          <!-- Touchlines -->
          <rect x="30" y="8" width="740" height="144" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
          <!-- Halfway line -->
          <line x1="400" y1="8" x2="400" y2="152" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
          <!-- Centre circle -->
          <circle cx="400" cy="80" r="40" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
          <circle cx="400" cy="80" r="3" fill="rgba(255,255,255,.5)"/>
          <!-- Home penalty area -->
          <rect x="30" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
          <rect x="30" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
          <!-- Away penalty area -->
          <rect x="680" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
          <rect x="726" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
          <!-- Goals -->
          <rect x="10" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5"/>
          <rect x="770" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5"/>
        </svg>
      </div>

      <!-- Player Spotlight -->
      <div class="spotlight-wrap" v-if="spotlightPlayer">
        <div class="spotlight-label">★ Player Spotlight ★</div>
        <PlayerCard :player="spotlightPlayer" />
      </div>
      <div class="spotlight-wrap" v-else>
        <div class="spotlight-label">★ Player Spotlight ★</div>
        <div class="card-loading">Loading…</div>
      </div>
    </div>

    <!-- ── MAIN MENU ── -->
    <div class="menu">
      <div class="title">
        <h1>The Beautiful Game <span class="year">2026</span></h1>
        <p class="subtitle">Choose your game mode</p>
      </div>

      <nav class="menu-buttons">
        <button class="btn btn-primary" @click="goPlay">▶ &nbsp;Play the Game</button>
        <button class="btn btn-3d" @click="goGame">🎮 &nbsp;3D Match — New!</button>
        <button class="btn btn-secondary" @click="goWatch">◉ &nbsp;Watch the Play</button>
        <button class="btn btn-disabled" disabled>
          Career Mode
          <span class="badge">Coming Soon</span>
        </button>
        <button class="btn btn-disabled" disabled>
          The Journey
          <span class="badge">Coming Soon</span>
        </button>
      </nav>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PlayerCard from '../components/PlayerCard.vue'

const router = useRouter()
const spotlightPlayer = ref(null)
const standsRef = ref(null)

async function fetchSpotlight() {
  try {
    const res = await fetch('/api/spotlight')
    spotlightPlayer.value = await res.json()
  } catch {
    // silently fail — card stays as loading
  }
}

function buildCrowd() {
  const el = standsRef.value
  if (!el) return
  const colours = ['#b71c1c','#c62828','#d32f2f','#e53935','#1565c0','#1976d2','#0d47a1','#283593','#880e4f','#333']
  for (let r = 0; r < 5; r++) {
    const row = document.createElement('div')
    row.className = 'stand-row'
    for (let s = 0; s < 130; s++) {
      const seat = document.createElement('div')
      seat.className = 'stand-seat'
      const pick = Math.random()
      seat.style.background = pick < 0.55
        ? colours[Math.floor(Math.random() * 4)]
        : pick < 0.8
          ? colours[4 + Math.floor(Math.random() * 4)]
          : colours[9]
      seat.style.animationDelay = `${(Math.random() * 1.5).toFixed(2)}s`
      row.appendChild(seat)
    }
    el.appendChild(row)
  }
}

onMounted(() => {
  fetchSpotlight()
  buildCrowd()
})

function goPlay()  { router.push('/play') }
function goWatch() { router.push('/watch') }
function goGame()  { router.push('/game') }
</script>

<style scoped>
.splash {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
}

/* ── STADIUM ── */
.stadium {
  position: relative;
  height: 460px;
  background: linear-gradient(180deg, #0d1b2a 0%, #1a3a1a 65%, #2d6e2d 100%);
  overflow: hidden;
  min-width: 900px;
}

.sky {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, #1a2a4a 0%, #0d1b2a 70%);
}

/* Floodlights */
.fl { position: absolute; top: 10px; display: flex; flex-direction: column; align-items: center; }
.fl-left  { left: 40px; }
.fl-right { right: 40px; }
.fl-pole  { width: 8px; height: 100px; background: #aaa; border-radius: 2px; }
.fl-head  { width: 56px; height: 8px; background: #ccc; border-radius: 2px; margin-top: -2px; }
.fl-beam  {
  position: absolute;
  top: 100px;
  width: 130px;
  height: 220px;
  background: linear-gradient(180deg, rgba(255,255,200,.09) 0%, transparent 100%);
  clip-path: polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%);
}
.fl-beam-r { transform: scaleX(-1); }

/* Scoreboard */
.scoreboard {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  background: #111;
  border: 2px solid #444;
  border-radius: 4px;
  padding: 5px 18px;
  text-align: center;
  z-index: 2;
}
.sb-score { display: block; font-size: 13px; color: #ff0; font-family: 'Courier New', monospace; letter-spacing: 3px; }
.sb-time  { display: block; font-size: 9px; color: #888; margin-top: 1px; letter-spacing: 2px; }

/* Stands */
.stands {
  position: absolute;
  bottom: 148px;
  left: 0; right: 0;
  height: 120px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 1;
}
.stand-row   { display: flex; flex: 1; overflow: hidden; }
.stand-seat  {
  flex: 1;
  border-radius: 1px;
  animation: sway 3s ease-in-out infinite;
  opacity: 0.88;
}
@keyframes sway {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-2px); }
}

/* Pitch */
.pitch {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 152px;
  background: linear-gradient(180deg, #2d8a2d, #1e6e1e);
}
.pitch-svg { width: 100%; height: 100%; }

/* Spotlight */
.spotlight-wrap {
  position: absolute;
  top: 28px;
  right: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 3;
}
.spotlight-label {
  font-size: 10px;
  letter-spacing: 3px;
  color: #ffd700;
  text-transform: uppercase;
}
.card-loading {
  color: #555;
  font-size: 12px;
  padding: 40px;
}

/* ── MENU ── */
.menu {
  flex: 1;
  background: linear-gradient(180deg, #0d1117 0%, #111820 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 36px 60px 48px;
}

.title { text-align: center; }
.title h1 {
  font-size: 34px;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
}
.year { color: #ffd700; }
.subtitle {
  font-size: 11px;
  color: #556;
  letter-spacing: 3px;
  margin-top: 5px;
  text-transform: uppercase;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 340px;
}

.btn {
  padding: 16px 28px;
  border-radius: 6px;
  border: none;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  transition: transform .12s ease, box-shadow .12s ease;
}
.btn-primary {
  background: linear-gradient(135deg, #27ae60, #1a7a40);
  color: #fff;
  box-shadow: 0 4px 20px rgba(39,174,96,.35);
}
.btn-primary:hover  { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(39,174,96,.5); }
.btn-secondary {
  background: linear-gradient(135deg, #2980b9, #1a5276);
  color: #fff;
  box-shadow: 0 4px 20px rgba(41,128,185,.3);
}
.btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(41,128,185,.45); }
.btn-3d {
  background: linear-gradient(135deg, #8e44ad, #5b1a8a);
  color: #fff;
  box-shadow: 0 4px 20px rgba(142,68,173,.4);
}
.btn-3d:hover { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(142,68,173,.6); }
.btn-disabled {
  background: #1a1a1a;
  color: #444;
  border: 1px solid #2a2a2a;
  cursor: not-allowed;
}
.badge {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 8px;
  letter-spacing: 1px;
  background: #2a2a2a;
  color: #666;
  border-radius: 4px;
  padding: 3px 7px;
  text-transform: uppercase;
}
</style>
