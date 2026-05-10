const router = require('express').Router();
const NotificationQueue = require('../models/NotificationQueue');
const auth = require('../middleware/auth');

// GET /api/notifications - user's notifications
router.get('/', auth, async (req, res) => {
  try {
    const { unreadOnly, page = 1, limit = 30 } = req.query;
    const query = { userId: req.user._id, notificationType: 'in-app' };
    if (unreadOnly === 'true') query.read = false;

    const [notifications, total, unreadCount] = await Promise.all([
      NotificationQueue.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(Number(limit)),
      NotificationQueue.countDocuments(query),
      NotificationQueue.countDocuments({ userId: req.user._id, read: false, notificationType: 'in-app' })
    ]);
    res.json({ notifications, total, unreadCount, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/notifications/read-all
router.put('/read-all', auth, async (req, res) => {
  try {
    await NotificationQueue.updateMany({ userId: req.user._id, read: false }, { read: true });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/notifications/:id/read
router.put('/:id/read', auth, async (req, res) => {
  try {
    await NotificationQueue.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, { read: true });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
