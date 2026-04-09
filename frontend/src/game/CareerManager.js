/**
 * CareerManager.js
 * Handles Career Mode state: manager profile, league table,
 * fixture scheduling, and basic transfer logic.
 *
 * All data is persisted to localStorage under the key 'ori_career_save'.
 */

const SAVE_KEY = 'ori_career_save';

// ── Default league setup (generic names, copyright-safe) ─────────────────────
const DEFAULT_CLUBS = [
  { id: 'team_eng_1', name: 'Red Lions FC',       points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
  { id: 'team_spa_1', name: 'Blue Matadors CF',   points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
  { id: 'team_ger_1', name: 'Silver Eagles FC',   points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
  { id: 'team_fra_1', name: 'Golden Cockerels PSG',points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
  { id: 'team_ita_1', name: 'Azzurri United',     points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
  { id: 'team_por_1', name: 'Porto Verde SC',     points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
  { id: 'team_ned_1', name: 'Orange Total FC',    points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
  { id: 'team_bra_1', name: 'Samba Stars SC',     points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
];

export class CareerManager {
  constructor() {
    this.save = this._load() ?? this._defaultSave();
  }

  // ─── Persistence ───────────────────────────────────────────────────────────
  _defaultSave() {
    return {
      version:  1,
      manager:  null,           // set during creation flow
      myTeamId: null,
      season:   1,
      week:     1,
      clubs:    structuredClone(DEFAULT_CLUBS),
      fixtures: [],
      transfers: [],
      cup: null,
    };
  }

  _load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  persist() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(this.save));
  }

  deleteSave() {
    localStorage.removeItem(SAVE_KEY);
    this.save = this._defaultSave();
  }

  // ─── Manager creation ──────────────────────────────────────────────────────
  /**
   * @param {object} managerData – { name, nationality, age, style }
   *   style: 'attacking' | 'balanced' | 'defensive'
   */
  createManager(managerData) {
    this.save.manager = {
      ...managerData,
      reputation: 1,    // 1–10
      trophies:   [],
      joined:     new Date().toISOString(),
    };
    this.persist();
  }

  // ─── Team selection ────────────────────────────────────────────────────────
  /** Choose an existing club to manage. */
  selectTeam(teamId) {
    const club = this.save.clubs.find(c => c.id === teamId);
    if (!club) throw new Error(`Unknown team id: ${teamId}`);
    this.save.myTeamId = teamId;
    this.persist();
    return club;
  }

  /** Initialise a brand-new club and add it to the league. */
  createClub({ id, name, primaryColor, secondaryColor }) {
    const newClub = { id, name, primaryColor, secondaryColor,
      points: 0, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 };
    this.save.clubs.push(newClub);
    this.save.myTeamId = id;
    this.persist();
    return newClub;
  }

  // ─── Fixture generation ────────────────────────────────────────────────────
  generateSeason() {
    const ids      = this.save.clubs.map(c => c.id);
    const fixtures = [];
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        fixtures.push({ home: ids[i], away: ids[j], played: false, score: null, week: fixtures.length + 1 });
        fixtures.push({ home: ids[j], away: ids[i], played: false, score: null, week: fixtures.length + 1 });
      }
    }
    // Shuffle
    for (let i = fixtures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fixtures[i], fixtures[j]] = [fixtures[j], fixtures[i]];
    }
    // Assign week numbers properly (round-robin rounds)
    fixtures.forEach((f, idx) => { f.week = Math.floor(idx / (ids.length / 2)) + 1; });
    this.save.fixtures = fixtures;
    this.persist();
    return fixtures;
  }

  getFixturesForWeek(week) {
    return this.save.fixtures.filter(f => f.week === week);
  }

  getMyFixtures() {
    return this.save.fixtures.filter(
      f => f.home === this.save.myTeamId || f.away === this.save.myTeamId
    );
  }

  // ─── Simulate AI matches ───────────────────────────────────────────────────
  simulateWeek(excludeMyMatch = true) {
    const fixtures = this.getFixturesForWeek(this.save.week);
    fixtures.forEach(f => {
      if (f.played) return;
      if (excludeMyMatch && (f.home === this.save.myTeamId || f.away === this.save.myTeamId)) return;
      const hg = Math.floor(Math.random() * 4);
      const ag = Math.floor(Math.random() * 4);
      this.recordResult(f, hg, ag);
    });
    this.persist();
  }

  /** Record the result of a finished match. */
  recordResult(fixture, homeGoals, awayGoals) {
    fixture.played = true;
    fixture.score  = { home: homeGoals, away: awayGoals };

    const home = this.save.clubs.find(c => c.id === fixture.home);
    const away = this.save.clubs.find(c => c.id === fixture.away);
    if (!home || !away) return;

    home.played++; away.played++;
    home.gf += homeGoals; home.ga += awayGoals;
    away.gf += awayGoals; away.ga += homeGoals;

    if (homeGoals > awayGoals)       { home.won++;   home.points += 3; away.lost++; }
    else if (homeGoals < awayGoals)  { away.won++;   away.points += 3; home.lost++; }
    else                             { home.drawn++; away.drawn++; home.points++; away.points++; }
  }

  advanceWeek() {
    this.save.week++;
    this.persist();
  }

  // ─── League table ──────────────────────────────────────────────────────────
  getTable() {
    return [...this.save.clubs].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const gdA = a.gf - a.ga;
      const gdB = b.gf - b.ga;
      if (gdB !== gdA) return gdB - gdA;
      return b.gf - a.gf;
    }).map((c, i) => ({ ...c, position: i + 1, gd: c.gf - c.ga }));
  }

  // ─── Transfer system ───────────────────────────────────────────────────────
  /**
   * Attempt to sign a player from the free agent pool.
   * @param {object} playerData – player row from players.json
   * @param {number} fee        – transfer fee in £M
   */
  signPlayer(playerData, fee) {
    this.save.transfers.push({
      type: 'signed',
      player: playerData.id,
      fee,
      date: `Season ${this.save.season}, Week ${this.save.week}`,
    });
    this.persist();
  }

  releasePlayer(playerId) {
    this.save.transfers.push({
      type: 'released',
      player: playerId,
      date: `Season ${this.save.season}, Week ${this.save.week}`,
    });
    this.persist();
  }

  // ─── Cup / Knockout ────────────────────────────────────────────────────────
  initCup(teamIds) {
    // Simple single-elimination bracket
    const shuffled = [...teamIds].sort(() => Math.random() - 0.5);
    this.save.cup = {
      round:    1,
      brackets: this._makeBracket(shuffled),
    };
    this.persist();
  }

  _makeBracket(teams) {
    const pairs = [];
    for (let i = 0; i < teams.length; i += 2) {
      pairs.push({ home: teams[i], away: teams[i + 1] ?? null, winner: null });
    }
    return pairs;
  }

  advanceCupRound(results) {
    // results: [{ matchIdx, winner }]
    results.forEach(({ matchIdx, winner }) => {
      this.save.cup.brackets[matchIdx].winner = winner;
    });
    const winners = this.save.cup.brackets.map(b => b.winner).filter(Boolean);
    if (winners.length > 1) {
      this.save.cup.brackets = this._makeBracket(winners);
      this.save.cup.round++;
    } else {
      this.save.cup.champion = winners[0];
    }
    this.persist();
  }

  get cupChampion() { return this.save.cup?.champion ?? null; }
}
