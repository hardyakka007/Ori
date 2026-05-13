const express = require('express');
const router = express.Router();
const { fetchYad2Listings } = require('../agents/yad2Agent');
const { fetchMadlanListings } = require('../agents/madlanAgent');

// Cache results for 30 min to avoid hammering Yad2
let cache = { yad2: null, madlan: null, ts: 0 };
const CACHE_TTL = 30 * 60 * 1000;

router.get('/listings', async (req, res) => {
  try {
    const now = Date.now();
    const stale = now - cache.ts > CACHE_TTL;

    if (stale) {
      const [yad2, madlan] = await Promise.allSettled([
        fetchYad2Listings(),
        fetchMadlanListings(),
      ]);
      cache.yad2   = yad2.status   === 'fulfilled' ? yad2.value   : [];
      cache.madlan = madlan.status === 'fulfilled' ? madlan.value : [];
      cache.ts = now;
      console.log(`[Public] Refreshed: ${cache.yad2.length} Yad2, ${cache.madlan.length} Madlan`);
    }

    const source = req.query.source;
    let listings = [];
    if (source === 'yad2')   listings = cache.yad2;
    else if (source === 'madlan') listings = cache.madlan;
    else listings = [...cache.yad2, ...cache.madlan];

    res.json({ success: true, count: listings.length, listings, cachedAt: new Date(cache.ts) });
  } catch (err) {
    console.error('[Public] Error:', err.message);
    res.status(500).json({ success: false, listings: [], error: err.message });
  }
});

module.exports = router;
