<template>
  <div class="event-feed" ref="feedEl">
    <div
      v-for="(ev, i) in events"
      :key="i"
      class="event-row"
      :class="ev.type"
    >
      <span class="ev-minute">{{ ev.minute }}'</span>
      <span class="ev-icon">{{ icons[ev.type] || '•' }}</span>
      <span class="ev-team">{{ shortTeam(ev.team) }}</span>
      <span class="ev-player">{{ ev.player }}</span>
      <span v-if="ev.detail" class="ev-detail">— {{ ev.detail }}</span>
    </div>
    <div v-if="events.length === 0" class="empty">Waiting for kick-off…</div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({ events: { type: Array, default: () => [] } })
const feedEl = ref(null)

const icons = {
  goal: '⚽',
  yellow: '🟨',
  red: '🟥',
  save: '🧤',
  miss: '💨',
  substitution: '🔄',
  injury: '🤕',
}

function shortTeam(name) {
  return name ? name.split(' ').slice(0,2).join(' ') : ''
}

// Auto-scroll to bottom as events come in
watch(() => props.events.length, async () => {
  await nextTick()
  if (feedEl.value) feedEl.value.scrollTop = feedEl.value.scrollHeight
})
</script>

<style scoped>
.event-feed {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 520px;
  overflow-y: auto;
  padding-right: 4px;
  scrollbar-width: thin;
  scrollbar-color: #2a3040 #111820;
}

.event-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 5px;
  background: #111820;
  font-size: 13px;
  animation: fadeIn .25s ease;
}
@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

.event-row.goal   { background: rgba(39,174,96,.18); border-left: 3px solid #27ae60; }
.event-row.yellow { background: rgba(255,193,7,.12);  border-left: 3px solid #ffc107; }
.event-row.red    { background: rgba(231,76,60,.18);  border-left: 3px solid #e74c3c; }
.event-row.save   { background: rgba(26,188,156,.12); border-left: 3px solid #1abc9c; }
.event-row.miss   { background: rgba(255,255,255,.04); border-left: 3px solid #333; color: #555; }

.ev-minute { width: 28px; font-weight: 700; color: #ffd700; font-size: 11px; flex-shrink: 0; }
.ev-icon   { font-size: 14px; flex-shrink: 0; }
.ev-team   { font-size: 10px; color: #667; flex-shrink: 0; min-width: 80px; }
.ev-player { font-weight: 600; }
.ev-detail { color: #667; font-size: 12px; }

.empty { color: #334; font-size: 13px; padding: 20px; text-align: center; letter-spacing: 1px; }
</style>
