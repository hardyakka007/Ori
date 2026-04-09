/**
 * UIHandler.js
 * Manages all in-game HTML/CSS overlays: HUD (score, time, minimap),
 * event banners (GOAL!, HALF TIME), and the pause menu.
 *
 * The UIHandler renders into a <div id="ui-root"> that should be placed
 * directly on top of the Three.js canvas (position: absolute, pointer-events: none
 * except for interactive elements).
 */

export class UIHandler {
  /**
   * @param {HTMLElement} container – parent element to mount UI into
   * @param {MatchEngine} engine
   */
  constructor(container, engine) {
    this.container = container;
    this.engine    = engine;

    this._root         = null;
    this._scoreEl      = null;
    this._timeEl       = null;
    this._bannerEl     = null;
    this._minimapCanvas = null;
    this._minimapCtx    = null;
    this._pauseMenu    = null;
    this._camModeEl    = null;
    this._diffEl       = null;

    this._bannerTimeout = null;

    this._build();
    this._bindEngineEvents();
  }

  // ─── DOM construction ──────────────────────────────────────────────────────
  _build() {
    this._root = document.createElement('div');
    this._root.id = 'ui-root';
    Object.assign(this._root.style, {
      position: 'absolute', inset: '0',
      pointerEvents: 'none',
      fontFamily: "'Segoe UI', Arial, sans-serif",
      userSelect: 'none',
    });

    this._root.innerHTML = /* html */`
      <!-- ── HUD ── -->
      <div id="hud" style="
        position:absolute; top:0; left:0; right:0;
        display:flex; align-items:center; justify-content:center;
        padding:8px 16px; gap:24px;
        background:linear-gradient(180deg,rgba(0,0,0,.72) 0%,transparent 100%);
      ">
        <span id="ui-home" style="font-size:15px;font-weight:700;color:#fff;min-width:120px;text-align:right;"></span>
        <div id="ui-scorebox" style="
          background:rgba(0,0,0,.7); border:1px solid rgba(255,255,255,.2);
          border-radius:6px; padding:4px 16px; text-align:center; min-width:110px;
        ">
          <div id="ui-score" style="font-size:22px;font-weight:900;color:#fff;letter-spacing:4px;">0 – 0</div>
          <div id="ui-time"  style="font-size:10px;color:#aaa;letter-spacing:2px;margin-top:1px;">00:00</div>
        </div>
        <span id="ui-away" style="font-size:15px;font-weight:700;color:#fff;min-width:120px;"></span>
      </div>

      <!-- ── Event banner ── -->
      <div id="ui-banner" style="
        display:none; position:absolute; top:50%; left:50%;
        transform:translate(-50%,-50%);
        text-align:center; pointer-events:none;
        animation:none;
      ">
        <div id="ui-banner-title" style="
          font-size:60px; font-weight:900; color:#ffd700;
          text-shadow: 0 0 30px rgba(255,215,0,.8), 2px 2px 0 #000;
          letter-spacing:6px; text-transform:uppercase;
        "></div>
        <div id="ui-banner-sub" style="
          font-size:18px; color:#fff;
          text-shadow: 1px 1px 4px rgba(0,0,0,.8);
          margin-top:8px; letter-spacing:2px;
        "></div>
      </div>

      <!-- ── Minimap ── -->
      <canvas id="ui-minimap" width="120" height="80" style="
        position:absolute; bottom:12px; right:12px;
        border:1px solid rgba(255,255,255,.25); border-radius:4px;
        background:rgba(0,60,0,.7); opacity:.85;
      "></canvas>

      <!-- ── Bottom bar (controls hint) ── -->
      <div id="ui-controls" style="
        position:absolute; bottom:0; left:0; right:0;
        padding:6px 16px; display:flex; gap:20px; justify-content:center;
        background:linear-gradient(0deg,rgba(0,0,0,.65) 0%,transparent 100%);
        font-size:11px; color:rgba(255,255,255,.55); letter-spacing:1px;
      ">
        <span>↑↓←→ Move</span>
        <span>Space Kick</span>
        <span>Z Tackle</span>
        <span>Tab Sprint</span>
        <span>C Camera</span>
        <span>Esc Pause</span>
      </div>

      <!-- ── Camera mode indicator ── -->
      <div id="ui-cam" style="
        position:absolute; top:56px; left:12px;
        font-size:10px; color:rgba(255,255,255,.5); letter-spacing:2px;
        background:rgba(0,0,0,.4); padding:3px 8px; border-radius:4px;
      ">TV CAM</div>

      <!-- ── Difficulty badge ── -->
      <div id="ui-diff" style="
        position:absolute; top:56px; right:12px;
        font-size:10px; letter-spacing:2px;
        background:rgba(0,0,0,.5); padding:3px 10px; border-radius:4px;
        color:#ffd700; text-transform:uppercase;
      ">MEDIUM</div>

      <!-- ── Pause menu ── -->
      <div id="ui-pause" style="
        display:none; position:absolute; inset:0;
        background:rgba(0,0,0,.75); pointer-events:all;
        display:none; flex-direction:column; align-items:center; justify-content:center; gap:16px;
      ">
        <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:4px;margin-bottom:8px;">PAUSED</div>
        <button id="ui-resume" style="${btnStyle('#27ae60')}">Resume</button>
        <button id="ui-difficulty-easy"   style="${btnStyle('#2980b9')}">Difficulty: Easy</button>
        <button id="ui-difficulty-medium" style="${btnStyle('#2980b9')}">Difficulty: Medium</button>
        <button id="ui-difficulty-hard"   style="${btnStyle('#c0392b')}">Difficulty: Hard</button>
        <button id="ui-quit" style="${btnStyle('#555')}">Quit to Menu</button>
      </div>
    `;

    this.container.appendChild(this._root);

    // Cache refs
    this._scoreEl       = this._root.querySelector('#ui-score');
    this._timeEl        = this._root.querySelector('#ui-time');
    this._bannerEl      = this._root.querySelector('#ui-banner');
    this._bannerTitle   = this._root.querySelector('#ui-banner-title');
    this._bannerSub     = this._root.querySelector('#ui-banner-sub');
    this._minimapCanvas = this._root.querySelector('#ui-minimap');
    this._minimapCtx    = this._minimapCanvas.getContext('2d');
    this._pauseMenu     = this._root.querySelector('#ui-pause');
    this._camModeEl     = this._root.querySelector('#ui-cam');
    this._diffEl        = this._root.querySelector('#ui-diff');
    this._homeNameEl    = this._root.querySelector('#ui-home');
    this._awayNameEl    = this._root.querySelector('#ui-away');
  }

  // ─── Engine event bindings ─────────────────────────────────────────────────
  _bindEngineEvents() {
    const e = this.engine;
    e.on('goal',       d => this.showBanner('GOAL!',      d.teamName ?? '', 3000));
    e.on('half_time',  () => this.showBanner('HALF TIME', '', 3500));
    e.on('full_time',  d => {
      const msg = d.winner ? `${d.winner} WIN!` : "IT'S A DRAW!";
      this.showBanner('FULL TIME', msg, 5000);
    });
    e.on('corner',     () => this.showBanner('CORNER',    '', 1800));
    e.on('throw_in',   () => this.showBanner('THROW IN',  '', 1500));
    e.on('goal_kick',  () => this.showBanner('GOAL KICK', '', 1800));
    e.on('free_kick',  () => this.showBanner('FREE KICK', '', 1800));
  }

  // ─── Public API ────────────────────────────────────────────────────────────
  setTeamNames(home, away) {
    if (this._homeNameEl) this._homeNameEl.textContent = home;
    if (this._awayNameEl) this._awayNameEl.textContent = away;
  }

  /** Called every frame from App.js */
  updateHUD(score, gameMinute) {
    if (this._scoreEl) this._scoreEl.textContent = `${score.home} – ${score.away}`;
    if (this._timeEl)  this._timeEl.textContent  = `${String(gameMinute).padStart(2,'0')}'`;
  }

  /** Render the minimap. playerGroups: [{x,z,color}] */
  updateMinimap(ballPos, players) {
    const ctx = this._minimapCtx;
    const W = 120, H = 80;
    const PITCH_W_HALF = 52.5, PITCH_D_HALF = 34;

    ctx.clearRect(0, 0, W, H);

    // Pitch background
    ctx.fillStyle = 'rgba(20,100,20,0.9)';
    ctx.fillRect(0, 0, W, H);

    // Centre line
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(W/2, 0); ctx.lineTo(W/2, H); ctx.stroke();

    // Ball
    const bx = ((ballPos.x + PITCH_W_HALF) / (PITCH_W_HALF * 2)) * W;
    const bz = ((ballPos.z + PITCH_D_HALF) / (PITCH_D_HALF * 2)) * H;
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(bx, bz, 3, 0, Math.PI * 2); ctx.fill();

    // Players
    players.forEach(({ x, z, color }) => {
      const px = ((x + PITCH_W_HALF) / (PITCH_W_HALF * 2)) * W;
      const pz = ((z + PITCH_D_HALF) / (PITCH_D_HALF * 2)) * H;
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(px, pz, 2.5, 0, Math.PI * 2); ctx.fill();
    });
  }

  showBanner(title, subtitle = '', duration = 2500) {
    clearTimeout(this._bannerTimeout);
    this._bannerTitle.textContent = title;
    this._bannerSub.textContent   = subtitle;
    this._bannerEl.style.display  = 'block';
    this._bannerTimeout = setTimeout(() => {
      this._bannerEl.style.display = 'none';
    }, duration);
  }

  setCameraMode(label) {
    if (this._camModeEl) this._camModeEl.textContent = label + ' CAM';
  }

  setDifficulty(label) {
    if (this._diffEl) this._diffEl.textContent = label;
  }

  showPause(onResume, onQuit, onDifficulty) {
    this._pauseMenu.style.display = 'flex';
    this._root.querySelector('#ui-resume').onclick       = () => { this.hidePause(); onResume(); };
    this._root.querySelector('#ui-quit').onclick         = () => { this.hidePause(); onQuit(); };
    this._root.querySelector('#ui-difficulty-easy').onclick   = () => onDifficulty('easy');
    this._root.querySelector('#ui-difficulty-medium').onclick = () => onDifficulty('medium');
    this._root.querySelector('#ui-difficulty-hard').onclick   = () => onDifficulty('hard');
  }

  hidePause() {
    this._pauseMenu.style.display = 'none';
  }

  dispose() {
    clearTimeout(this._bannerTimeout);
    this._root?.remove();
  }
}

function btnStyle(bg) {
  return `
    background:${bg}; color:#fff; border:none; border-radius:6px;
    padding:12px 40px; font-size:15px; font-weight:700; letter-spacing:1px;
    cursor:pointer; width:260px; text-transform:uppercase;
  `;
}
