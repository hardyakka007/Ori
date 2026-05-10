const router = require('express').Router();
const Listing = require('../models/Listing');
const auth = require('../middleware/auth');

// GET /api/favorites
router.get('/', auth, async (req, res) => {
  try {
    const listings = await Listing.find({ savedBy: req.user._id }).sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/favorites/:listingId - save listing
router.post('/:listingId', auth, async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.listingId,
      { $addToSet: { savedBy: req.user._id } },
      { new: true }
    );
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json({ saved: true, listing });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/favorites/:listingId - unsave listing
router.delete('/:listingId', auth, async (req, res) => {
  try {
    await Listing.findByIdAndUpdate(req.params.listingId, { $pull: { savedBy: req.user._id } });
    res.json({ saved: false });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
