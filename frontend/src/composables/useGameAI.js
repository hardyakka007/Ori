/**
 * useGameAI.js
 * AI logic for the away team (and uncontrolled home players).
 * Operates on mutable player/ball objects passed by reference.
 */

const CTRL_RAD  = 5
const PASS_PWR  = 17
const SHOOT_PWR = 28
const SPD_AI    = 2.2
const SPD_PRESS = 3.2

export function useGameAI() {

  // ── Top-level tick called once per game tick ───────────────────────────
  function tickAI({ ball, awayPlayers, homePlayers, homeScore, awayScore,
                    PW, PH, GOAL_Y1, GOAL_Y2, GOAL_CY, tick }) {
    _awayTeamAI(ball, awayPlayers, homePlayers, PW, PH, GOAL_Y1, GOAL_Y2, GOAL_CY)
    _homeUncontrolledAI(ball, homePlayers, PW, PH, tick)
  }

  // ── Away team (fully AI-controlled) ──────────────────────────────────────
  function _awayTeamAI(ball, awayPlayers, homePlayers, PW, PH, GOAL_Y1, GOAL_Y2, GOAL_CY) {
    const hasBallPlayer = awayPlayers.find(p => p.hasBall)
    const ballOwnerIsAway = !!hasBallPlayer
    const ballOwnerIsHome = homePlayers.some(p => p.hasBall)

    awayPlayers.forEach((p, idx) => {
      if (p.hasBall) {
        _aiAttack(p, ball, awayPlayers, homePlayers, PW, PH, GOAL_CY)
      } else if (ballOwnerIsAway) {
        _aiSupportRun(p, ball, idx, awayPlayers, PW, PH)
      } else if (ballOwnerIsHome) {
        _aiDefend(p, ball, awayPlayers, homePlayers, idx, PW, PH)
      } else {
        _aiChase(p, ball, homePlayers, idx)
      }
    })
  }

  function _aiAttack(p, ball, awayPlayers, homePlayers, PW, PH, GOAL_CY) {
    // Dribble toward home goal (left side, x=0)
    const targetX = 8
    const targetY = GOAL_CY
    const dx = targetX - p.x, dy = targetY - p.y
    const d = Math.sqrt(dx * dx + dy * dy)

    // Shoot if close enough and on target
    if (p.x < 40 && Math.abs(p.y - GOAL_CY) < 20) {
      if (Math.random() < 0.04) {
        const sx = (targetX - p.x), sy = (targetY - p.y + (Math.random() - 0.5) * 10)
        const sl = Math.sqrt(sx * sx + sy * sy)
        ball.vx = (sx / sl) * SHOOT_PWR
        ball.vy = (sy / sl) * SHOOT_PWR
        p.hasBall = false
        return
      }
    }

    // Pass if a teammate is open and further forward
    if (Math.random() < 0.012) {
      const forward = awayPlayers.filter(t => t !== p && t.x < p.x - 5 && !t.hasBall)
      if (forward.length) {
        const target = forward[Math.floor(Math.random() * forward.length)]
        const pdx = target.x - p.x, pdy = target.y - p.y
        const pl = Math.sqrt(pdx * pdx + pdy * pdy)
        ball.vx = (pdx / pl) * PASS_PWR
        ball.vy = (pdy / pl) * PASS_PWR
        p.hasBall = false
        return
      }
    }

    // Dribble
    if (d > 0.5) {
      const spd = SPD_AI * (p.pace / 80)
      p.x += (dx / d) * spd
      p.y += (dy / d) * spd
      ball.x = p.x
      ball.y = p.y
    }
  }

  function _aiSupportRun(p, ball, idx, awayPlayers, PW, PH) {
    // Spread out and move into space
    const spreadY = PH * 0.1 + (idx % 4) * (PH * 0.22)
    const spreadX = 30 + (idx % 3) * 25
    const dx = spreadX - p.x, dy = spreadY - p.y
    const d = Math.sqrt(dx * dx + dy * dy)
    if (d > 4) {
      p.x += (dx / d) * SPD_AI * 0.7
      p.y += (dy / d) * SPD_AI * 0.7
    }
  }

  function _aiDefend(p, ball, awayPlayers, homePlayers, idx, PW, PH) {
    // Return to defensive position
    const defX = p.baseX + 10
    const defY = p.baseY

    // If close to ball, press it
    const bDist = Math.sqrt((p.x - ball.x) ** 2 + (p.y - ball.y) ** 2)
    if (bDist < 15 && idx < 4) {
      const dx = ball.x - p.x, dy = ball.y - p.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d > 0.5) {
        p.x += (dx / d) * SPD_PRESS * (p.pace / 80)
        p.y += (dy / d) * SPD_PRESS * (p.pace / 80)
      }
    } else {
      // Return to base
      const dx = defX - p.x, dy = defY - p.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d > 3) {
        p.x += (dx / d) * SPD_AI
        p.y += (dy / d) * SPD_AI
      }
    }
  }

  function _aiChase(p, ball, homePlayers, idx) {
    // Closest player chases ball; others hold shape
    const bDist = Math.sqrt((p.x - ball.x) ** 2 + (p.y - ball.y) ** 2)
    const closestAway = idx === 0  // simplified: first away player always presses

    if (closestAway || bDist < 18) {
      const dx = ball.x - p.x, dy = ball.y - p.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d > 0.5) {
        const spd = SPD_AI * (p.pace / 80)
        p.x += (dx / d) * spd
        p.y += (dy / d) * spd
      }
    }
  }

  // ── Home team: uncontrolled players hold shape / press ───────────────────
  function _homeUncontrolledAI(ball, homePlayers, PW, PH, tick) {
    homePlayers.forEach((p, idx) => {
      if (p.hasBall) return  // controlled by human

      // Closest uncontrolled player to ball drifts toward it
      const bDist = Math.sqrt((p.x - ball.x) ** 2 + (p.y - ball.y) ** 2)
      const isForward = p.pos === 'ST' || p.pos === 'LW' || p.pos === 'RW' || p.pos === 'CAM'

      if (bDist < 20 || (isForward && ball.x > PW / 2)) {
        const dx = ball.x - p.x, dy = ball.y - p.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d > 3) {
          p.x += (dx / d) * SPD_AI * 0.65
          p.y += (dy / d) * SPD_AI * 0.65
        }
      } else {
        // Drift back to base position
        const dx = p.baseX - p.x, dy = p.baseY - p.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d > 3) {
          p.x += (dx / d) * SPD_AI * 0.4
          p.y += (dy / d) * SPD_AI * 0.4
        }
      }
    })
  }

  // ── Check if a player can steal the ball ─────────────────────────────────
  function checkTackle({ p, ball, targetPlayers, tackleRadius }) {
    for (const opp of targetPlayers) {
      if (!opp.hasBall) continue
      const d = Math.sqrt((p.x - opp.x) ** 2 + (p.y - opp.y) ** 2)
      if (d < tackleRadius) {
        const success = Math.random() < (p.defending / 100) * 0.7
        if (success) {
          opp.hasBall = false
          return true
        }
      }
    }
    return false
  }

  return { tickAI, checkTackle }
}
