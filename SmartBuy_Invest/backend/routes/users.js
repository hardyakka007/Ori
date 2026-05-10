const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// GET /api/users - user directory (public profiles)
router.get('/', async (req, res) => {
  try {
    const { area, style, page = 1, limit = 20 } = req.query;
    const query = { isPublic: true };
    if (area) query.preferredAreas = area;
    if (style) query.investmentStyle = style;

    const [users, total] = await Promise.all([
      User.find(query).select('-password -fcmToken -comparisonsToday').skip((page - 1) * limit).limit(Number(limit)),
      User.countDocuments(query)
    ]);
    res.json({ users, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/users/:id - public profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password -fcmToken -email -comparisonsToday');
    if (!user || !user.isPublic) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/users/profile - update own profile
router.put('/profile', auth, async (req, res) => {
  try {
    const allowed = ['name', 'bio', 'photo', 'investmentStyle', 'preferredAreas', 'budget', 'language', 'isPublic'];
    const updates = {};
    allowed.forEach(k => { if (req.body[k] !== undefined) updates[k] = req.body[k]; });

    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true }).select('-password -fcmToken');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/users/upgrade - upgrade subscription (simplified, no Stripe integration yet)
router.post('/upgrade', auth, async (req, res) => {
  try {
    const { tier } = req.body;
    if (!['premium', 'investor'].includes(tier)) return res.status(400).json({ message: 'Invalid tier' });

    const prices = { premium: 9.99, investor: 19.99 };
    const user = await User.findByIdAndUpdate(req.user._id, {
      'subscription.tier': tier,
      'subscription.startDate': new Date(),
      'subscription.endDate': new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    }, { new: true }).select('-password');

    res.json({ success: true, user, price: prices[tier] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
