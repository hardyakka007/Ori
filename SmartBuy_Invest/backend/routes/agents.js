const router = require('express').Router();
const UserAgentPreferences = require('../models/UserAgentPreferences');
const ScannedListing = require('../models/ScannedListing');
const auth = require('../middleware/auth');
const { requireSubscription } = require('../middleware/subscription');

// GET /api/agents/preferences
router.get('/preferences', auth, requireSubscription('premium'), async (req, res) => {
  try {
    let prefs = await UserAgentPreferences.findOne({ userId: req.user._id });
    if (!prefs) {
      prefs = await UserAgentPreferences.create({
        userId: req.user._id,
        areasToMonitor: req.user.preferredAreas || [],
        budgetMin: req.user.budget?.min || 0,
        budgetMax: req.user.budget?.max || 5000000
      });
    }
    res.json(prefs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/agents/preferences
router.put('/preferences', auth, requireSubscription('premium'), async (req, res) => {
  try {
    const prefs = await UserAgentPreferences.findOneAndUpdate(
      { userId: req.user._id },
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.json(prefs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/agents/scanned - agent-discovered listings (hot deals)
router.get('/scanned', auth, async (req, res) => {
  try {
    const { source, minScore, page = 1, limit = 20 } = req.query;
    const query = {};
    if (source) query.source = source;
    if (minScore) query['metrics.dealScore'] = { $gte: Number(minScore) };

    const [listings, total] = await Promise.all([
      ScannedListing.find(query).sort({ 'metrics.dealScore': -1, foundAt: -1 }).skip((page - 1) * limit).limit(Number(limit)),
      ScannedListing.countDocuments(query)
    ]);
    res.json({ listings, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/agents/status - which agents are running
router.get('/status', auth, (req, res) => {
  res.json({
    agents: [
      { name: 'yad2', label: 'Yad2', status: 'active', lastRun: new Date(), nextRun: new Date(Date.now() + 3600000) },
      { name: 'madlan', label: 'Madlan', status: 'active', lastRun: new Date(), nextRun: new Date(Date.now() + 3600000) },
      { name: 'facebook', label: 'Facebook Groups', status: 'phase2', lastRun: null, nextRun: null },
      { name: 'instagram', label: 'Instagram', status: 'phase2', lastRun: null, nextRun: null },
      { name: 'tiktok', label: 'TikTok', status: 'phase2', lastRun: null, nextRun: null },
      { name: 'remax', label: 'RE/MAX', status: 'phase3', lastRun: null, nextRun: null },
      { name: 'sothebys', label: "Sotheby's", status: 'phase3', lastRun: null, nextRun: null },
      { name: 'airbnb', label: 'Airbnb', status: 'phase3', lastRun: null, nextRun: null }
    ]
  });
});

module.exports = router;
