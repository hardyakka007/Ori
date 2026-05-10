const router = require('express').Router();
const Listing = require('../models/Listing');
const ScannedListing = require('../models/ScannedListing');
const auth = require('../middleware/auth');

// GET /api/listings - search & filter
router.get('/', async (req, res) => {
  try {
    const { area, city, minPrice, maxPrice, propertyType, minRooms, maxRooms, minSqm, sort, source, hotDeals, page = 1, limit = 20 } = req.query;
    const query = { isActive: true };

    if (area) query.area = new RegExp(area, 'i');
    if (city) query.city = new RegExp(city, 'i');
    if (minPrice || maxPrice) query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
    if (propertyType) query.propertyType = propertyType;
    if (minRooms) query.rooms = { $gte: Number(minRooms) };
    if (maxRooms) query.rooms = { ...query.rooms, $lte: Number(maxRooms) };
    if (minSqm) query.sqm = { $gte: Number(minSqm) };
    if (source) query.source = source;
    if (hotDeals === 'true') query.isHotDeal = true;

    const sortMap = {
      'price-asc': { price: 1 },
      'price-desc': { price: -1 },
      'newest': { createdAt: -1 },
      'deal-score': { dealScore: -1 }
    };
    const sortObj = sortMap[sort] || { createdAt: -1 };

    const [listings, total] = await Promise.all([
      Listing.find(query).sort(sortObj).skip((page - 1) * limit).limit(Number(limit)),
      Listing.countDocuments(query)
    ]);

    res.json({ listings, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/listings/hot-deals - agent-discovered hot deals
router.get('/hot-deals', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const [listings, total] = await Promise.all([
      ScannedListing.find({ isHotDeal: true }).sort({ 'metrics.dealScore': -1 }).skip((page - 1) * limit).limit(Number(limit)),
      ScannedListing.countDocuments({ isHotDeal: true })
    ]);
    res.json({ listings, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/listings/:id
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/listings/area-stats/:area - avg price for area
router.get('/area-stats/:area', async (req, res) => {
  try {
    const area = decodeURIComponent(req.params.area);
    const stats = await Listing.aggregate([
      { $match: { area: new RegExp(area, 'i'), isActive: true } },
      { $group: {
        _id: '$area',
        avgPrice: { $avg: '$price' },
        avgPricePerSqm: { $avg: '$pricePerSqm' },
        totalListings: { $sum: 1 },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }}
    ]);
    res.json(stats[0] || { area, avgPrice: 0, avgPricePerSqm: 0, totalListings: 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
