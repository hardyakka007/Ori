/**
 * Composable for Watch the Play simulation API calls.
 */
import { ref } from 'vue'

export function useMatchSim() {
  const loading = ref(false)
  const error   = ref(null)
  const result  = ref(null)

  async function simulate(homeTeam, awayTeam) {
    loading.value = true
    error.value   = null
    result.value  = null
    try {
      const res = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ home: homeTeam, away: awayTeam }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      result.value = await res.json()
    } catch (e) {
      error.value = e.message || 'Simulation failed'
    } finally {
      loading.value = false
    }
    return result.value
  }

  return { loading, error, result, simulate }
}
