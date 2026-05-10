const cron = require('node-cron');
const ScannedListing = require('../models/ScannedListing');
const UserAgentPreferences = require('../models/UserAgentPreferences');
const User = require('../models/User');
const { fetchYad2Listings } = require('./yad2Agent');
const { fetchMadlanListings } = require('./madlanAgent');
const { scoreListing } = require('./dealScorer');
const { notifyUser } = require('./notifier');

const AGENT_INTERVAL = process.env.AGENT_INTERVAL_MINUTES || 60;

const agentSources = [
  { name: 'yad2', label: 'Yad2', fetcher: fetchYad2Listings },
  { name: 'madlan', label: 'Madlan', fetcher: fetchMadlanListings }
];

async function processListing(rawListing, source) {
  // Skip if already seen
  const exists = await ScannedListing.findOne({ source, sourceId: rawListing.sourceId });
  if (exists) {
    // Update lastSeen and check for price drop
    const lastPrice = exists.listing?.price;
    if (lastPrice && rawListing.price < lastPrice) {
      console.log(`[${source}] Price drop: ${rawListing.area} ${lastPrice} → ${rawListing.price}`);
      // TODO: Phase 2 — trigger price drop notification
    }
    await ScannedListing.findByIdAndUpdate(exists._id, { lastSeen: new Date() });
    return null;
  }

  // Score the listing
  const metrics = await scoreListing(rawListing);

  // Persist to DB
  const scanned = await ScannedListing.create({
    source,
    sourceId: rawListing.sourceId,
    listing: rawListing,
    metrics,
    isHotDeal: metrics.isHotDeal,
    foundAt: new Date()
  });

  return { scanned, metrics };
}

async function findMatchingUsers(listing, metrics) {
  const prefs = await UserAgentPreferences.find({
    active: true,
    $or: [
      { areasToMonitor: { $elemMatch: { $regex: listing.area, $options: 'i' } } },
      { areasToMonitor: { $size: 0 } } // monitors all areas
    ],
    budgetMin: { $lte: listing.price },
    budgetMax: { $gte: listing.price },
    dealScoreThreshold: { $lte: metrics.dealScore },
    enabledAgents: listing.source || 'yad2'
  });

  const userIds = prefs.map(p => p.userId);
  return User.find({ _id: { $in: userIds } });
}

async function runSingleAgent(agent) {
  console.log(`[AgentRunner] Running ${agent.label} agent...`);
  try {
    const rawListings = await agent.fetcher();
    console.log(`[AgentRunner] ${agent.label}: fetched ${rawListings.length} listings`);

    let hotDealsFound = 0;

    for (const raw of rawListings) {
      raw.source = agent.name;
      try {
        const result = await processListing(raw, agent.name);
        if (!result) continue; // already seen

        const { scanned, metrics } = result;
        console.log(`[${agent.label}] New: ${raw.area} ₪${raw.price?.toLocaleString()} | Score: ${metrics.dealScore}`);

        if (metrics.isHotDeal) {
          hotDealsFound++;
          const matchingUsers = await findMatchingUsers(raw, metrics);
          for (const user of matchingUsers) {
            await notifyUser(user, raw, metrics.dealScore, agent.name);
          }
          await ScannedListing.findByIdAndUpdate(scanned._id, { notifiedUsers: matchingUsers.map(u => u._id) });
        }
      } catch (err) {
        console.error(`[${agent.label}] Error processing listing:`, err.message);
      }
    }

    console.log(`[${agent.label}] Done. Hot deals found: ${hotDealsFound}`);
  } catch (err) {
    console.error(`[${agent.label}] Agent failed:`, err.message);
  }
}

async function runAllAgents() {
  console.log('[AgentRunner] Starting all agents...');
  for (const agent of agentSources) {
    await runSingleAgent(agent);
    await new Promise(r => setTimeout(r, 2000)); // 2s delay between agents
  }
  console.log('[AgentRunner] All agents complete.');
}

function startAgentRunner() {
  // Run immediately on start
  runAllAgents();

  // Schedule recurring runs (every N minutes)
  const cronExpr = `*/${AGENT_INTERVAL} * * * *`;
  cron.schedule(cronExpr, () => {
    runAllAgents();
  });

  console.log(`[AgentRunner] Scheduled to run every ${AGENT_INTERVAL} minutes.`);
}

module.exports = { startAgentRunner, runAllAgents };
