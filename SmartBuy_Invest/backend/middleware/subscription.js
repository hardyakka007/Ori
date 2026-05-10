const requireSubscription = (tier) => (req, res, next) => {
  const tiers = { free: 0, premium: 1, investor: 2 };
  const userTier = tiers[req.user?.subscription?.tier || 'free'];
  const required = tiers[tier] || 0;
  if (userTier < required) {
    return res.status(403).json({
      message: `This feature requires ${tier} subscription`,
      upgradeRequired: true,
      tier
    });
  }
  next();
};

module.exports = { requireSubscription };
