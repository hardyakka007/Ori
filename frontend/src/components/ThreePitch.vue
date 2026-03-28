<template>
  <canvas ref="canvasRef" class="three-pitch" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useThreeScene } from '../composables/useThreeScene.js'

const props = defineProps({
  gameState:    { type: Object, default: null },
  homeColor:    { type: String, default: '#e74c3c' },
  awayColor:    { type: String, default: '#3498db' },
  active:       { type: Boolean, default: false },
})

const canvasRef = ref(null)
const { init, updateState, render, dispose } = useThreeScene()
let rafId = null

onMounted(async () => {
  // Wait for layout so canvas.clientWidth/Height are correct
  await nextTick()
  const canvas = canvasRef.value
  if (!canvas) return

  // If still 0 (flex container not measured yet), wait one rAF
  await new Promise(resolve => requestAnimationFrame(resolve))
  init(canvas)

  const loop = () => {
    rafId = requestAnimationFrame(loop)
    if (props.active && props.gameState) {
      updateState({
        homePlayers: props.gameState.homePlayers,
        awayPlayers: props.gameState.awayPlayers,
        ball:        props.gameState.ball,
        homeColor:   props.homeColor,
        awayColor:   props.awayColor,
      })
    }
    render()
  }
  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  dispose()
})
</script>

<style scoped>
.three-pitch {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
