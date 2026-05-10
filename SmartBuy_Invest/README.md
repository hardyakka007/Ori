# SmartBuy — AI-Powered Real Estate Investment Platform

SmartBuy is an Israeli real estate investment platform with **AI agents** that continuously hunt for the cheapest, best-value properties across multiple sources.

## Features

| Feature | Status |
|---------|--------|
| 🤖 AI Agents (Yad2 + Madlan) | MVP Ready |
| 🔥 Hot Deal Scoring (0-100) | MVP Ready |
| 🔔 Real-time Push Notifications | MVP Ready |
| 🔍 Search & Filter Listings | MVP Ready |
| ⚖️ Area Comparison Tool | MVP Ready |
| ❤️ Favorites / Saved Listings | MVP Ready |
| 👤 User Profiles & Networking | MVP Ready |
| 📧 Email Digest (Daily/Weekly) | MVP Ready |
| 💎 Subscription Tiers (Free/Premium/Investor) | MVP Ready |
| 🌍 Hebrew + English Support | MVP Ready |
| 📱 Mobile Responsive + Bottom Nav | MVP Ready |
| 👥 Facebook/Instagram/TikTok Agents | Phase 2 |
| 🌍 RE/MAX / Sotheby's / Airbnb Agents | Phase 3 |

## Architecture

```
SmartBuy_Invest/
├── backend/               # Node.js + Express API
│   ├── agents/            # AI deal-hunting agents
│   │   ├── agentRunner.js   # Main scheduler (cron)
│   │   ├── yad2Agent.js     # Yad2 source
│   │   ├── madlanAgent.js   # Madlan source
│   │   ├── dealScorer.js    # Rule-based scoring (0-100)
│   │   └── notifier.js      # Push/email/in-app notifications
│   ├── models/            # MongoDB schemas
│   ├── routes/            # REST API endpoints
│   ├── middleware/        # Auth + subscription checks
│   └── services/          # Firebase, email services
└── frontend/              # React.js + Tailwind CSS
    └── src/
        ├── pages/         # Home, Search, HotDeals, Compare, Favorites, Profile, AgentSettings
        ├── components/    # Navbar, ListingCard, FilterSidebar, etc.
        └── store/         # Redux slices
```

## Quick Start

### Requirements
- Node.js 20+
- MongoDB 7
- Redis (optional, for queues)

### 1. Backend Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and secrets
npm install
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 3. Docker (Full Stack)
```bash
docker-compose up -d
```

## Agent System

Agents run on a configurable schedule (default: every 60 minutes):

1. **Yad2 Agent** — Fetches from Israel's largest real estate site
2. **Madlan Agent** — Fetches from Israel's second largest platform

Each listing is scored (0-100) based on:
- Price vs area market average (50 pts)
- Area popularity/demand (30 pts)
- Price per sqm value (20 pts)

Score ≥ 75 = Hot Deal → Users are notified via push/email/in-app.

## Subscription Tiers

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Search, 1 comparison/day |
| Premium | $9.99/mo | Unlimited comparisons, agent alerts, email digest |
| Investor | $19.99/mo | Premium + investment calculator, market trends |

## Environment Variables

See `backend/.env.example` for all required variables.

Key variables:
- `MONGODB_URI` — MongoDB connection string
- `JWT_SECRET` — Secret for JWT tokens
- `FIREBASE_*` — Firebase credentials for push notifications
- `SENDGRID_API_KEY` — For email digests
- `AGENT_INTERVAL_MINUTES` — How often agents run (default: 60)

## Tech Stack

- **Frontend:** React 18, Redux Toolkit, Tailwind CSS, Recharts, Socket.IO
- **Backend:** Node.js, Express, MongoDB, Mongoose, Bull, Socket.IO
- **Agents:** Axios (API calls), Puppeteer (scraping), node-cron
- **Notifications:** Firebase Cloud Messaging, Nodemailer/SendGrid
- **Deploy:** Docker + docker-compose, Vercel (frontend), Railway (backend)
