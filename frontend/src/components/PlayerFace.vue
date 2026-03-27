<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${SIZE} ${SIZE}`"
    xmlns="http://www.w3.org/2000/svg"
    class="player-face"
  >
    <!-- Neck -->
    <rect
      :x="SIZE/2 - 8" :y="SIZE*0.72"
      width="16" :height="SIZE*0.15"
      :fill="skinColor"
    />

    <!-- Head shape -->
    <ellipse
      :cx="SIZE/2" :cy="SIZE*0.45"
      :rx="SIZE*0.32" :ry="SIZE*0.35"
      :fill="skinColor"
    />

    <!-- Hair base (top/back) — drawn behind face features -->
    <ellipse
      v-if="faceStyle !== 'bald'"
      :cx="SIZE/2" :cy="SIZE*0.26"
      :rx="SIZE*0.33" :ry="SIZE*0.22"
      :fill="hairColor"
    />

    <!-- Ears -->
    <ellipse :cx="SIZE*0.18" :cy="SIZE*0.45" rx="6" ry="8" :fill="skinColor"/>
    <ellipse :cx="SIZE*0.82" :cy="SIZE*0.45" rx="6" ry="8" :fill="skinColor"/>

    <!-- Face skin overlay (covers bottom of hair) -->
    <ellipse
      :cx="SIZE/2" :cy="SIZE*0.50"
      :rx="SIZE*0.30" :ry="SIZE*0.28"
      :fill="skinColor"
    />

    <!-- ── HAIR STYLES ── -->
    <!-- Short/default: side parts -->
    <template v-if="faceStyle === 'short'">
      <path
        :d="`M ${SIZE*0.20} ${SIZE*0.38}
             Q ${SIZE/2} ${SIZE*0.10} ${SIZE*0.80} ${SIZE*0.38}
             Q ${SIZE*0.80} ${SIZE*0.28} ${SIZE/2} ${SIZE*0.14}
             Q ${SIZE*0.20} ${SIZE*0.28} ${SIZE*0.20} ${SIZE*0.38}Z`"
        :fill="hairColor"
      />
    </template>

    <!-- Curly -->
    <template v-else-if="faceStyle === 'curly'">
      <ellipse :cx="SIZE/2" :cy="SIZE*0.18" :rx="SIZE*0.30" :ry="SIZE*0.14" :fill="hairColor"/>
      <circle v-for="i in 8" :key="i"
        :cx="SIZE*0.20 + (SIZE*0.60/(8-1))*(i-1)"
        :cy="SIZE*0.24"
        r="6" :fill="hairColor"/>
    </template>

    <!-- Shaved/buzzcut -->
    <template v-else-if="faceStyle === 'shaved'">
      <ellipse
        :cx="SIZE/2" :cy="SIZE*0.30"
        :rx="SIZE*0.31" :ry="SIZE*0.18"
        :fill="hairColor" opacity="0.85"
      />
    </template>

    <!-- Long -->
    <template v-else-if="faceStyle === 'long'">
      <path
        :d="`M ${SIZE*0.18} ${SIZE*0.38}
             L ${SIZE*0.14} ${SIZE*0.72}
             Q ${SIZE/2} ${SIZE*0.80} ${SIZE*0.86} ${SIZE*0.72}
             L ${SIZE*0.82} ${SIZE*0.38}
             Q ${SIZE/2} ${SIZE*0.10} ${SIZE*0.18} ${SIZE*0.38}Z`"
        :fill="hairColor"
      />
    </template>

    <!-- Afro -->
    <template v-else-if="faceStyle === 'afro'">
      <ellipse :cx="SIZE/2" :cy="SIZE*0.26" :rx="SIZE*0.36" :ry="SIZE*0.30" :fill="hairColor"/>
    </template>

    <!-- Mohawk -->
    <template v-else-if="faceStyle === 'mohawk'">
      <rect
        :x="SIZE/2 - 5" :y="SIZE*0.06"
        width="10" :height="SIZE*0.30"
        :fill="hairColor" rx="4"
      />
    </template>

    <!-- Bald — no hair needed -->

    <!-- ── EYES ── -->
    <!-- Eye whites -->
    <ellipse :cx="SIZE*0.36" :cy="SIZE*0.48" rx="8" ry="6" fill="white"/>
    <ellipse :cx="SIZE*0.64" :cy="SIZE*0.48" rx="8" ry="6" fill="white"/>
    <!-- Irises -->
    <circle :cx="SIZE*0.36" :cy="SIZE*0.49" r="4" :fill="eyeColor"/>
    <circle :cx="SIZE*0.64" :cy="SIZE*0.49" r="4" :fill="eyeColor"/>
    <!-- Pupils -->
    <circle :cx="SIZE*0.36" :cy="SIZE*0.49" r="2" fill="#111"/>
    <circle :cx="SIZE*0.64" :cy="SIZE*0.49" r="2" fill="#111"/>
    <!-- Eye shine -->
    <circle :cx="SIZE*0.37" :cy="SIZE*0.475" r="1" fill="white"/>
    <circle :cx="SIZE*0.65" :cy="SIZE*0.475" r="1" fill="white"/>
    <!-- Eyebrows -->
    <path :d="`M ${SIZE*0.28} ${SIZE*0.415} Q ${SIZE*0.36} ${SIZE*0.40} ${SIZE*0.44} ${SIZE*0.415}`"
      :stroke="eyebrowColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path :d="`M ${SIZE*0.56} ${SIZE*0.415} Q ${SIZE*0.64} ${SIZE*0.40} ${SIZE*0.72} ${SIZE*0.415}`"
      :stroke="eyebrowColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>

    <!-- ── NOSE ── -->
    <path
      :d="`M ${SIZE/2} ${SIZE*0.50} L ${SIZE*0.44} ${SIZE*0.58} Q ${SIZE/2} ${SIZE*0.61} ${SIZE*0.56} ${SIZE*0.58} Z`"
      :fill="noseShadowColor" opacity="0.5"
    />
    <circle :cx="SIZE*0.44" :cy="SIZE*0.58" r="3" :fill="noseShadowColor" opacity="0.4"/>
    <circle :cx="SIZE*0.56" :cy="SIZE*0.58" r="3" :fill="noseShadowColor" opacity="0.4"/>

    <!-- ── MOUTH ── -->
    <path
      :d="`M ${SIZE*0.38} ${SIZE*0.655} Q ${SIZE/2} ${SIZE*0.685} ${SIZE*0.62} ${SIZE*0.655}`"
      :stroke="lipColor" stroke-width="2.2" fill="none" stroke-linecap="round"
    />
    <path
      :d="`M ${SIZE*0.38} ${SIZE*0.655} Q ${SIZE/2} ${SIZE*0.640} ${SIZE*0.62} ${SIZE*0.655}`"
      :stroke="lipColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"
    />

    <!-- ── FACIAL HAIR ── -->
    <!-- Stubble -->
    <template v-if="beard === 'stubble'">
      <ellipse
        :cx="SIZE/2" :cy="SIZE*0.66"
        :rx="SIZE*0.22" :ry="SIZE*0.10"
        :fill="hairColor" opacity="0.30"
      />
      <!-- Stubble dots -->
      <circle v-for="(dot, i) in stubbleDots" :key="i"
        :cx="dot.x" :cy="dot.y" :r="dot.r"
        :fill="hairColor" opacity="0.45"
      />
    </template>

    <!-- Full beard -->
    <template v-else-if="beard === 'beard'">
      <path
        :d="`M ${SIZE*0.20} ${SIZE*0.56}
             Q ${SIZE*0.18} ${SIZE*0.76} ${SIZE/2} ${SIZE*0.82}
             Q ${SIZE*0.82} ${SIZE*0.76} ${SIZE*0.80} ${SIZE*0.56}
             Q ${SIZE*0.65} ${SIZE*0.62} ${SIZE/2} ${SIZE*0.63}
             Q ${SIZE*0.35} ${SIZE*0.62} ${SIZE*0.20} ${SIZE*0.56}Z`"
        :fill="hairColor" opacity="0.80"
      />
    </template>

    <!-- Goatee -->
    <template v-else-if="beard === 'goatee'">
      <ellipse
        :cx="SIZE/2" :cy="SIZE*0.70"
        :rx="SIZE*0.10" :ry="SIZE*0.10"
        :fill="hairColor" opacity="0.80"
      />
    </template>

    <!-- ── TIER GLOW (gold/silver ring for high-rated players) ── -->
    <circle
      v-if="tier === 'gold'"
      :cx="SIZE/2" :cy="SIZE/2" :r="SIZE/2 - 2"
      fill="none" stroke="#FFD700" stroke-width="3" opacity="0.7"
    />
    <circle
      v-else-if="tier === 'silver'"
      :cx="SIZE/2" :cy="SIZE/2" :r="SIZE/2 - 2"
      fill="none" stroke="#C0C0C0" stroke-width="2" opacity="0.6"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  faceSkin:  { type: Number, default: 2 },   // 1–5
  faceHair:  { type: String, default: 'brown' },
  faceStyle: { type: String, default: 'short' },
  beard:     { type: String, default: 'clean' },
  tier:      { type: String, default: 'standard' },
  size:      { type: Number, default: 80 },
})

const SIZE = 80  // internal SVG coordinate space

// ── Skin tone palette ──────────────────────────────────────────────────────
const SKIN_TONES = {
  1: '#fde8d0',  // very light
  2: '#f5cba7',  // light
  3: '#d4956a',  // medium
  4: '#b57a4e',  // tan/olive
  5: '#7a4a28',  // dark
}

// ── Hair colour palette ────────────────────────────────────────────────────
const HAIR_COLORS = {
  black:  '#1a1a1a',
  brown:  '#5c3d2e',
  blonde: '#c8a850',
  red:    '#a83200',
  grey:   '#888888',
  white:  '#e8e8e8',
  bald:   'transparent',
}

const skinColor      = computed(() => SKIN_TONES[props.faceSkin] ?? SKIN_TONES[2])
const hairColor      = computed(() => HAIR_COLORS[props.faceHair] ?? HAIR_COLORS.brown)
const eyeColor       = computed(() => props.faceSkin >= 4 ? '#4a2c0a' : '#3a5f8a')
const eyebrowColor   = computed(() => HAIR_COLORS[props.faceHair] ?? '#444')
const noseShadowColor= computed(() => props.faceSkin >= 4 ? '#6b3a1f' : '#c4956a')
const lipColor       = computed(() => props.faceSkin >= 4 ? '#8b4513' : '#c47a7a')

// Randomised-but-deterministic stubble dots based on skin tone
const stubbleDots = computed(() => {
  const dots = []
  const seed = props.faceSkin * 7
  for (let i = 0; i < 18; i++) {
    const t = (i * 37 + seed) % 100 / 100
    const angle = t * Math.PI * 2
    const rr = 0.08 + (i % 5) * 0.025
    dots.push({
      x: SIZE / 2 + Math.cos(angle) * SIZE * rr * 2.2,
      y: SIZE * 0.665 + Math.sin(angle) * SIZE * rr,
      r: 0.8 + (i % 3) * 0.4,
    })
  }
  return dots
})
</script>

<style scoped>
.player-face {
  border-radius: 50%;
  overflow: hidden;
  display: block;
}
</style>
