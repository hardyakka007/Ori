const express = require('express');
const router = express.Router();
const { fetchYad2Listings } = require('../agents/yad2Agent');
const { fetchMadlanListings } = require('../agents/madlanAgent');
const { fetchRemaxListings } = require('../agents/remaxAgent');

// Cache results for 30 min to avoid hammering listing sites
let cache = { yad2: null, madlan: null, remax: null, ts: 0 };
const CACHE_TTL = 30 * 60 * 1000;

router.get('/listings', async (req, res) => {
  try {
    const now = Date.now();
    const stale = now - cache.ts > CACHE_TTL;

    if (stale) {
      const [yad2, madlan, remax] = await Promise.allSettled([
        fetchYad2Listings(),
        fetchMadlanListings(),
        fetchRemaxListings(),
      ]);
      cache.yad2   = yad2.status   === 'fulfilled' ? yad2.value   : [];
      cache.madlan = madlan.status === 'fulfilled' ? madlan.value : [];
      cache.remax  = remax.status  === 'fulfilled' ? remax.value  : [];
      cache.ts = now;
      console.log(`[Public] Refreshed: ${cache.yad2.length} Yad2, ${cache.madlan.length} Madlan, ${cache.remax.length} RE/MAX`);
    }

    const source = req.query.source;
    let listings = [];
    if (source === 'yad2')        listings = cache.yad2;
    else if (source === 'madlan') listings = cache.madlan;
    else if (source === 'remax')  listings = cache.remax;
    else listings = [...cache.yad2, ...cache.madlan, ...cache.remax];

    res.json({ success: true, count: listings.length, listings, cachedAt: new Date(cache.ts) });
  } catch (err) {
    console.error('[Public] Error:', err.message);
    res.status(500).json({ success: false, listings: [], error: err.message });
  }
});

module.exports = router;
