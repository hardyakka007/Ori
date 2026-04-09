/**
 * DifficultyManager.js
 * Controls AI behaviour presets and difficulty-scaling parameters.
 */

export const DIFFICULTIES = {
  easy: {
    label: 'Easy',
    aiReactionTime: 0.6,       // seconds before AI responds to ball change
    aiSpeedMultiplier: 0.55,
    aiShootAccuracy: 0.45,     // 0-1, chance of shot landing on target
    aiPassAccuracy: 0.55,
    aiPressingIntensity: 0.3,  // how aggressively AI chases the ball
    aiDecisionFrequency: 1.2,  // seconds between AI recalculations
    playerSpeedBoost: 1.15,    // give the human player an edge
  },
  medium: {
    label: 'Medium',
    aiReactionTime: 0.25,
    aiSpeedMultiplier: 0.80,
    aiShootAccuracy: 0.68,
    aiPassAccuracy: 0.72,
    aiPressingIntensity: 0.6,
    aiDecisionFrequency: 0.5,
    playerSpeedBoost: 1.0,
  },
  hard: {
    label: 'Hard',
    aiReactionTime: 0.05,
    aiSpeedMultiplier: 1.0,
    aiShootAccuracy: 0.88,
    aiPassAccuracy: 0.90,
    aiPressingIntensity: 0.95,
    aiDecisionFrequency: 0.18,
    playerSpeedBoost: 0.92,    // slight handicap to balance the game
  },
};

export class DifficultyManager {
  constructor(preset = 'medium') {
    this.current = preset;
    this.config = { ...DIFFICULTIES[preset] };
  }

  set(preset) {
    if (!DIFFICULTIES[preset]) throw new Error(`Unknown difficulty: ${preset}`);
    this.current = preset;
    this.config = { ...DIFFICULTIES[preset] };
  }

  get(key) {
    return this.config[key];
  }

  /** Returns a normalised 0-1 random value skewed by accuracy parameter */
  rollAccuracy(accuracyKey) {
    const base = this.config[accuracyKey] ?? 0.5;
    // Add slight random noise so every play feels different
    return Math.min(1, Math.max(0, base + (Math.random() - 0.5) * 0.18));
  }
}
