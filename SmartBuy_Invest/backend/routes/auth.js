const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

router.post('/register',
  [
    body('name').trim().notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { name, email, password, language } = req.body;
      if (await User.findOne({ email })) return res.status(400).json({ message: 'Email already registered' });

      const user = await User.create({ name, email, password, language });
      const token = signToken(user._id);
      res.status(201).json({ token, user: { id: user._id, name, email, subscription: user.subscription, language: user.language } });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

router.post('/login',
  [body('email').isEmail(), body('password').notEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = signToken(user._id);
      res.json({ token, user: { id: user._id, name: user.name, email, subscription: user.subscription, language: user.language } });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

router.get('/me', auth, (req, res) => {
  res.json({ user: req.user });
});

router.put('/fcm-token', auth, async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { fcmToken: req.body.token });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
