const axios = require('axios');

const YAD2_FORSALE = 'https://gw.yad2.co.il/feed-search-legacy/realestate/forsale';
const YAD2_RENT    = 'https://gw.yad2.co.il/feed-search-legacy/realestate/rent';

// Routes the request through ScraperAPI if a key is set,
// otherwise tries a direct call (may be blocked by Cloudflare)
function buildUrl(targetUrl, params) {
  const query = new URLSearchParams({ ...params, forceLdLoad: true, page: 1, rows: 20 }).toString();
  const fullTarget = `${targetUrl}?${query}`;

  if (process.env.SCRAPER_API_KEY) {
    return `http://api.scraperapi.com?api_key=${process.env.SCRAPER_API_KEY}&url=${encodeURIComponent(fullTarget)}`;
  }
  return fullTarget;
}

const DIRECT_HEADERS = {
  'User-Agent':      'Yad2/6.5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15',
  'Accept':          'application/json, text/plain, */*',
  'Accept-Language': 'he-IL,he;q=0.9,en-US;q=0.8',
  'Referer':         'https://www.yad2.co.il/',
  'Origin':          'https://www.yad2.co.il',
  'mobile-app':      'true',
};

async function fetchYad2Listings({ minPrice, maxPrice, rooms, city } = {}) {
  const results = [];

  const endpoints = [
    {
      base: YAD2_FORSALE,
      label: 'sale',
      params: {
        subCategory: 7,
        priceMin: minPrice || 300000,
        priceMax: maxPrice || 5000000,
        city: city || '',
        rooms: rooms || '',
      },
    },
    {
      base: YAD2_RENT,
      label: 'rent',
      params: {
        subCategory: 7,
        priceMin: minPrice || 2000,
        priceMax: maxPrice || 20000,
        city: city || '',
        rooms: rooms || '',
      },
    },
  ];

  const usingProxy = !!process.env.SCRAPER_API_KEY;
  console.log(`[Yad2Agent] Using ${usingProxy ? 'ScraperAPI proxy' : 'direct connection'}`);

  for (const { base, label, params } of endpoints) {
    try {
      const url = buildUrl(base, params);
      const { data } = await axios.get(url, {
        headers: usingProxy ? {} : DIRECT_HEADERS,
        timeout: 30000,
      });

      const items = (data?.data?.feed?.feed_items || []).filter(i => i.type === 'ad');
      const normalized = items.map(item => normalizeItem(item, label));
      results.push(...normalized);
      console.log(`[Yad2Agent] ${label}: fetched ${normalized.length} real listings`);
    } catch (err) {
      console.error(`[Yad2Agent] ${label} failed: ${err.message}`);
    }
  }

  if (results.length === 0) {
    console.warn('[Yad2Agent] Could not fetch real data — falling back to mock listings');
    return getMockListings();
  }

  return results;
}

function normalizeItem(item, listingType) {
  const price = Number(String(item.price || '0').replace(/[^0-9]/g, '')) || 0;
  return {
    sourceId:     String(item.id || item.token || Math.random()),
    listingType,
    title:        item.title || `${item.rooms || '?'}-room apartment in ${item.city || 'Israel'}`,
    price,
    sqm:          Number(item.square_meters) || null,
    rooms:        parseFloat(item.rooms)     || null,
    floor:        Number(item.floor)         || null,
    city:         item.city          || '',
    area:         item.city_area     || item.city || '',
    neighborhood: item.neighborhood  || '',
    address:      item.street ? `${item.street} ${item.house_number || ''}`.trim() : '',
    images:       (item.images || []).slice(0, 6).map(img => img.src || img),
    agentName:    item.contact_name  || '',
    agentPhone:   item.phone         || '',
    sourceUrl:    `https://www.yad2.co.il/item/${item.token || item.id}`,
    propertyType: mapType(item.HomeTypeID),
    source:       'yad2',
  };
}

function mapType(id) {
  return { 1:'Apartment', 2:'House', 3:'Studio', 6:'Penthouse', 9:'Duplex' }[id] || 'Apartment';
}

function getMockListings() {
  const cities = ['Tel Aviv','Ramat Gan','Haifa','Jerusalem','Netanya','Beer Sheva'];
  return Array.from({ length: 12 }, (_, i) => ({
    sourceId:     `yad2_mock_${i}`,
    listingType:  i % 3 === 0 ? 'rent' : 'sale',
    title:        `${(i % 3) + 2}-room apartment`,
    price:        i % 3 === 0 ? (3000 + i * 200) : (500000 + i * 80000),
    sqm:          55 + i * 5,
    rooms:        (i % 3) + 2,
    floor:        (i % 8) + 1,
    city:         cities[i % cities.length],
    area:         cities[i % cities.length],
    neighborhood: 'City Center',
    address:      `Ha-Yarkon ${10 + i}`,
    images:       [],
    agentName:    'SmartBuy Agent',
    agentPhone:   '050-0000000',
    sourceUrl:    'https://www.yad2.co.il',
    propertyType: 'Apartment',
    source:       'yad2',
  }));
}

module.exports = { fetchYad2Listings };
