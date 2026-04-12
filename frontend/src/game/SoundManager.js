/**
 * SoundManager.js
 * All sounds synthesised via Web Audio API — no audio files required.
 *
 * Sounds:
 *  startCrowd()      – looping stadium ambience (white noise + filter)
 *  raiseCrowd()      – brief crowd roar (goal reaction)
 *  stopCrowd()       – fade out ambience
 *  playKick()        – short leather-on-ball thud
 *  playGoal()        – triumphant fanfare + crowd spike
 *  playWhistle(n)    – referee whistle, n = number of blasts (1 or 3)
 *  dispose()         – close AudioContext
 */

export class SoundManager {
  constructor() {
    this._ctx         = null;
    this._crowdSource = null;
    this._crowdGain   = null;
    this._crowdFilter = null;
    this.muted        = false;
  }

  // ─── AudioContext (lazy – must be created after a user gesture) ────────────
  _getCtx() {
    if (!this._ctx) {
      this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this._ctx.state === 'suspended') this._ctx.resume();
    return this._ctx;
  }

  // ─── Crowd ambience ────────────────────────────────────────────────────────
  startCrowd() {
    if (this._crowdSource) return;
    const ctx = this._getCtx();

    // 2-second white-noise buffer, looped
    const bufLen = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const data   = buffer.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;

    this._crowdSource = ctx.createBufferSource();
    this._crowdSource.buffer = buffer;
    this._crowdSource.loop   = true;

    // Band-pass around 600 Hz to mimic crowd chatter
    this._crowdFilter = ctx.createBiquadFilter();
    this._crowdFilter.type            = 'bandpass';
    this._crowdFilter.frequency.value = 600;
    this._crowdFilter.Q.value         = 0.8;

    // Low-pass on top to remove harsh highs
    const lp = ctx.createBiquadFilter();
    lp.type            = 'lowpass';
    lp.frequency.value = 1800;

    this._crowdGain = ctx.createGain();
    this._crowdGain.gain.setValueAtTime(0, ctx.currentTime);
    this._crowdGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 2.5);

    this._crowdSource.connect(this._crowdFilter);
    this._crowdFilter.connect(lp);
    lp.connect(this._crowdGain);
    this._crowdGain.connect(ctx.destination);
    this._crowdSource.start();
  }

  /** Spike crowd volume briefly (goal reaction). */
  raiseCrowd(duration = 3) {
    if (!this._crowdGain || this.muted) return;
    const ctx = this._getCtx();
    const now = ctx.currentTime;
    this._crowdGain.gain.cancelScheduledValues(now);
    this._crowdGain.gain.setValueAtTime(this._crowdGain.gain.value, now);
    this._crowdGain.gain.linearRampToValueAtTime(0.55, now + 0.3);
    this._crowdGain.gain.linearRampToValueAtTime(0.18, now + duration);
  }

  stopCrowd() {
    if (!this._crowdGain) return;
    const ctx = this._getCtx();
    const now = ctx.currentTime;
    this._crowdGain.gain.linearRampToValueAtTime(0, now + 2);
    setTimeout(() => {
      try { this._crowdSource?.stop(); } catch {}
      this._crowdSource = null;
      this._crowdGain   = null;
    }, 2200);
  }

  // ─── Kick sound ────────────────────────────────────────────────────────────
  playKick() {
    if (this.muted) return;
    const ctx = this._getCtx();
    const now = ctx.currentTime;

    // Short burst of filtered noise
    const bufLen = Math.floor(ctx.sampleRate * 0.08);
    const buf    = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const d      = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) d[i] = (Math.random() * 2 - 1);

    const src = ctx.createBufferSource();
    src.buffer = buf;

    const lp = ctx.createBiquadFilter();
    lp.type            = 'lowpass';
    lp.frequency.value = 300;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(1.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    src.connect(lp);
    lp.connect(gain);
    gain.connect(ctx.destination);
    src.start(now);
    src.stop(now + 0.1);
  }

  // ─── Goal fanfare ──────────────────────────────────────────────────────────
  playGoal() {
    if (this.muted) return;
    const ctx = this._getCtx();
    this.raiseCrowd(4);

    // Triumphant chord sequence: C4 E4 G4 C5
    const notes = [261.63, 329.63, 392.0, 523.25];
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type      = 'sawtooth';
      osc.frequency.value = freq;

      const start = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.22, start + 0.04);
      gain.gain.linearRampToValueAtTime(0.15, start + 0.3);
      gain.gain.linearRampToValueAtTime(0,    start + 0.7);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.75);
    });

    // Harmony: octave below C4, slightly delayed
    const bass = ctx.createOscillator();
    const bg   = ctx.createGain();
    bass.type  = 'sine';
    bass.frequency.value = 130.81;
    const t = ctx.currentTime;
    bg.gain.setValueAtTime(0.15, t);
    bg.gain.linearRampToValueAtTime(0, t + 0.9);
    bass.connect(bg); bg.connect(ctx.destination);
    bass.start(t); bass.stop(t + 1);
  }

  // ─── Whistle ───────────────────────────────────────────────────────────────
  /**
   * @param {number} blasts – 1 = single, 3 = full-time / half-time
   */
  playWhistle(blasts = 1) {
    if (this.muted) return;
    const ctx = this._getCtx();

    for (let b = 0; b < blasts; b++) {
      const start = ctx.currentTime + b * 0.4;

      const osc  = ctx.createOscillator();
      osc.type   = 'sine';
      osc.frequency.setValueAtTime(2800, start);
      osc.frequency.linearRampToValueAtTime(2600, start + 0.25);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.35, start + 0.01);
      gain.gain.setValueAtTime(0.35, start + 0.2);
      gain.gain.linearRampToValueAtTime(0, start + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.35);
    }
  }

  // ─── Dispose ───────────────────────────────────────────────────────────────
  dispose() {
    try { this._crowdSource?.stop(); } catch {}
    this._ctx?.close();
    this._ctx         = null;
    this._crowdSource = null;
    this._crowdGain   = null;
  }
}
