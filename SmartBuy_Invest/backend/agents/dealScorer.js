const Listing = require('../models/Listing');

// Static area popularity scores (0-100)
const AREA_POPULARITY = {
  'tel aviv': 95, 'תל אביב': 95,
  'ramat gan': 85, 'רמת גן': 85,
  'herzeliya': 80, 'herzliya': 80, 'הרצליה': 80,
  'jerusalem': 90, 'ירושלים': 90,
  'haifa': 75, 'חיפה': 75,
  'petah tikva': 70, 'פתח תקווה': 70,
  'rishon lezion': 72, 'rishon le-zion': 72, 'ראשון לציון': 72,
  'netanya': 68, 'נתניה': 68,
  'beer sheva': 60, 'באר שבע': 60,
  'ashdod': 62, 'אשדוד': 62,
  'rehovot': 65, 'רחובות': 65,
  'holon': 70, 'חולון': 70,
  'bat yam': 65, 'בת ים': 65,
  'givatayim': 82, 'גבעתיים': 82,
  'raanana': 78, 'רעננה': 78,
  'kfar saba': 74, 'כפר סבא': 74
};

// Cache area averages to avoid DB spam
const areaAvgCache = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

async function getAreaAveragePrice(area) {
  const key = area.toLowerCase();
  const cached = areaAvgCache.get(key);
  if (cached && Date.now() - cached.ts < CACHE_TTL) return cached.avg;

  const stats = await Listing.aggregate([
    { $match: { area: new RegExp(area, 'i'), isActive: true } },
    { $group: { _id: null, avg: { $avg: '$price' }, avgPerSqm: { $avg: '$pricePerSqm' } } }
  ]);

  const avg = stats[0]?.avg || getFallbackAvg(area);
  areaAvgCache.set(key, { avg, ts: Date.now() });
  return avg;
}

function getFallbackAvg(area) {
  // Fallback market averages in ILS when DB has no data
  const defaults = {
    'tel aviv': 2500000, 'ramat gan': 1800000, 'herzeliya': 2200000,
    'jerusalem': 2000000, 'haifa': 1200000, 'netanya': 1400000,
    'beer sheva': 900000, 'rishon lezion': 1500000
  };
  return defaults[area.toLowerCase()] || 1500000;
}

function getAreaPopularityScore(area) {
  return (AREA_POPULARITY[area.toLowerCase()] || 50) / 100; // normalize 0-1
}

async function calculateDealScore({ price, marketAvg, sqm, area }) {
  // Price vs market (50 points max)
  const priceSavings = (marketAvg - price) / marketAvg;
  const priceScore = Math.min(50, Math.max(0, priceSavings * 100));

  // Area popularity (30 points max)
  const areaScore = getAreaPopularityScore(area) * 30;

  // Price per sqm value (20 points max)
  let valueScore = 0;
  if (sqm && sqm > 0) {
    const pricePerSqm = price / sqm;
    const areaAvgPerSqm = marketAvg / 100;
    const saving = (areaAvgPerSqm - pricePerSqm) / areaAvgPerSqm;
    valueScore = Math.min(20, Math.max(0, saving * 40));
  }

  const total = Math.round(Math.min(100, priceScore + areaScore + valueScore));
  return total;
}

async function scoreListing(listing) {
  const areaAvg = await getAreaAveragePrice(listing.area);
  const dealScore = await calculateDealScore({
    price: listing.price,
    marketAvg: areaAvg,
    sqm: listing.sqm,
    area: listing.area
  });

  const priceVsMarket = areaAvg > 0 ? ((listing.price - areaAvg) / areaAvg * 100).toFixed(1) : 0;
  const pricePerSqm = listing.sqm ? Math.round(listing.price / listing.sqm) : null;
  const popularityScore = Math.round(getAreaPopularityScore(listing.area) * 100);

  return {
    dealScore,
    pricePerSqm,
    areaAvgPrice: Math.round(areaAvg),
    priceVsMarket: Number(priceVsMarket),
    areaPopularityScore: popularityScore,
    isHotDeal: dealScore >= 75
  };
}

module.exports = { scoreListing, getAreaAveragePrice };
