/**
 * ball.js — 3D football with physics
 * The Beautiful Game 2026
 *
 * Physics:
 *   - Gravity pulls ball down when airborne (y > 0)
 *   - Bounce on pitch contact (y-velocity inverted × 0.6 restitution)
 *   - Rolling friction decays velocity each frame (0.97 multiplier)
 *   - Wall bounce for Footy Street mode
 */
import * as THREE from 'three'
import { PITCH_W, PITCH_L } from './pitch.js'

const GRAVITY      = -18    // units/s²
const RESTITUTION  = 0.55
const FRICTION     = 0.97
const BALL_R       = 0.22
const MIN_BOUNCE_V = 0.5    // below this, stop bouncing

export function createBall(scene, color = 0xffffff) {
  const geo  = new THREE.SphereGeometry(BALL_R, 16, 12)
  const mat  = new THREE.MeshLambertMaterial({ color })
  const ball = new THREE.Mesh(geo, mat)
  ball.castShadow    = true
  ball.receiveShadow = false
  ball.position.set(0, BALL_R, 0)

  // Panel lines (black seam lines)
  const lineMat = new THREE.MeshBasicMaterial({ color: 0x111111 })
  for (let i = 0; i < 6; i++) {
    const panelGeo = new THREE.TorusGeometry(BALL_R * 0.98, 0.012, 6, 32)
    const panel = new THREE.Mesh(panelGeo, lineMat)
    panel.rotation.x = (i / 6) * Math.PI
    panel.rotation.y = (i / 6) * Math.PI * 0.7
    ball.add(panel)
  }

  // Physics state stored in userData
  ball.userData.vel = new THREE.Vector3(0, 0, 0)
  ball.userData.angVel = new THREE.Vector3(0, 0, 0)

  scene.add(ball)
  return ball
}

/**
 * Step ball physics.
 * @param {THREE.Mesh} ball
 * @param {number} dt — delta seconds
 * @param {object} opts — { wallBounce: bool, wallX, wallZ, pitchBound }
 */
export function stepBallPhysics(ball, dt, opts = {}) {
  const v = ball.userData.vel

  // Gravity
  if (ball.position.y > BALL_R) {
    v.y += GRAVITY * dt
  }

  // Integrate position
  ball.position.x += v.x * dt
  ball.position.y += v.y * dt
  ball.position.z += v.z * dt

  // Pitch contact bounce
  if (ball.position.y <= BALL_R) {
    ball.position.y = BALL_R
    if (Math.abs(v.y) > MIN_BOUNCE_V) {
      v.y = -v.y * RESTITUTION
    } else {
      v.y = 0
    }
    // Rolling friction (only when on ground)
    v.x *= FRICTION
    v.z *= FRICTION
  }

  // Pitch boundary (clamp + stop — goals are gaps in boundary)
  const hw = PITCH_W / 2 + 2
  const hl = PITCH_L / 2 + 2

  if (opts.wallBounce) {
    // Street mode — bounce off all 4 walls
    const wx = opts.wallX || PITCH_W / 2
    const wz = opts.wallZ || PITCH_L / 2
    if (Math.abs(ball.position.x) > wx) {
      ball.position.x = Math.sign(ball.position.x) * wx
      v.x = -v.x * 0.75
    }
    if (Math.abs(ball.position.z) > wz) {
      ball.position.z = Math.sign(ball.position.z) * wz
      v.z = -v.z * 0.75
    }
  } else {
    // Normal mode — clamp side boundaries only (goals at z ends)
    if (Math.abs(ball.position.x) > hw) {
      ball.position.x = Math.sign(ball.position.x) * hw
      v.x = -v.x * 0.4
    }
  }

  // Spin the ball mesh based on velocity
  const speed = v.length()
  if (speed > 0.1) {
    ball.rotation.x += v.z * dt * 2
    ball.rotation.z -= v.x * dt * 2
  }
}

/**
 * Kick the ball — sets velocity toward target with optional loft.
 */
export function kickBall(ball, direction, power = 1.0, loft = 0.3) {
  const spd = 18 * power
  ball.userData.vel.set(
    direction.x * spd,
    loft * spd * 0.5,
    direction.z * spd
  )
}

/**
 * Check if ball is in goal. Returns 'home' | 'away' | null
 * home goal: z < -PITCH_L/2   away goal: z > +PITCH_L/2
 */
export function checkGoal(ball) {
  const GOAL_W_HALF = 3.66
  const GOAL_H_MAX  = 2.44
  const bx = ball.position.x
  const by = ball.position.y
  const bz = ball.position.z

  if (bz < -PITCH_L / 2 && Math.abs(bx) < GOAL_W_HALF && by < GOAL_H_MAX) {
    return 'home'  // ball crossed home goal line → away team scored
  }
  if (bz > PITCH_L / 2 && Math.abs(bx) < GOAL_W_HALF && by < GOAL_H_MAX) {
    return 'away'  // ball crossed away goal line → home team scored
  }
  return null
}

export function resetBall(ball, x = 0, z = 0) {
  ball.position.set(x, BALL_R, z)
  ball.userData.vel.set(0, 0, 0)
}
