const router = require('express').Router();
const Comparison = require('../models/Comparison');
const Listing = require('../models/Listing');
const auth = require('../middleware/auth');
const { requireSubscription } = require('../middleware/subscription');

// Area popularity scores (static seed data)
const AREA_POPULARITY = {
  'Tel Aviv': 95, 'Ramat Gan': 85, 'Herzeliya': 80, 'Jerusalem': 90,
  'Haifa': 75, 'Petah Tikva': 70, 'Rishon LeZion': 72, 'Netanya': 68,
  'Beer Sheva': 60, 'Ashdod': 62, 'Rehovot': 65, 'Holon': 70
};

async function getAreaMetrics(area) {
  const stats = await Listing.aggregate([
    { $match: { area: new RegExp(area, 'i'), isActive: true } },
    { $group: {
      _id: null,
      avgPrice: { $avg: '$price' },
      avgPricePerSqm: { $avg: '$pricePerSqm' },
      totalListings: { $sum: 1 }
    }}
  ]);

  const s = stats[0] || { avgPrice: 0, avgPricePerSqm: 0, totalListings: 0 };
  return {
    area,
    avgPrice: Math.round(s.avgPrice || 0),
    pricePerSqm: Math.round(s.avgPricePerSqm || 0),
    avgRent: Math.round((s.avgPrice || 0) * 0.003), // rough rental yield estimate
    priceTrend: (Math.random() * 10 - 2).toFixed(1), // placeholder: replace with real trend data
    totalListings: s.totalListings,
    popularityScore: AREA_POPULARITY[area] || 50
  };
}

// POST /api/comparisons - compare areas
router.post('/', auth, async (req, res) => {
  try {
    // Free users: max 1 comparison/day
    if (req.user.subscription.tier === 'free') {
      const now = new Date();
      const resetAt = new Date(req.user.comparisonsResetAt);
      if (now - resetAt > 24 * 60 * 60 * 1000) {
        req.user.comparisonsToday = 0;
        req.user.comparisonsResetAt = now;
        await req.user.save();
      }
      if (req.user.comparisonsToday >= 1) {
        return res.status(403).json({ message: 'Free plan: 1 comparison per day. Upgrade to Premium.', upgradeRequired: true });
      }
      req.user.comparisonsToday += 1;
      await req.user.save();
    }

    const { areas, name } = req.body;
    if (!areas || areas.length < 2) return res.status(400).json({ message: 'At least 2 areas required' });
    if (areas.length > 4) return res.status(400).json({ message: 'Maximum 4 areas allowed' });

    const metrics = await Promise.all(areas.map(getAreaMetrics));

    const comparison = await Comparison.create({ userId: req.user._id, areas, name: name || areas.join(' vs '), metrics });
    res.json(comparison);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/comparisons - user's saved comparisons
router.get('/', auth, async (req, res) => {
  try {
    const comparisons = await Comparison.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(comparisons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/comparisons/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    await Comparison.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
