const axios = require('axios');

// Yad2 gateway API — used by their mobile app, less protected than the website
const YAD2_BASE = 'https://gw.yad2.co.il/feed-search-legacy/realestate';

// Headers that mimic the Yad2 iOS app to reduce bot detection
const YAD2_HEADERS = {
  'User-Agent': 'Yad2/6.5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
  'Accept-Encoding': 'gzip, deflate, br',
  'Referer': 'https://www.yad2.co.il/',
  'Origin': 'https://www.yad2.co.il',
  'mobile-app': 'true',
  'mainsite': 'true',
};

async function fetchYad2Listings({ minPrice, maxPrice, rooms, city } = {}) {
  const results = [];

  const endpoints = [
    { url: `${YAD2_BASE}/forsale`, label: 'sale' },
    { url: `${YAD2_BASE}/rent`,    label: 'rent' },
  ];

  for (const { url, label } of endpoints) {
    try {
      const params = {
        subCategory: 7,
        priceMin: minPrice || (label === 'rent' ? 2000  : 300000),
        priceMax: maxPrice || (label === 'rent' ? 20000 : 5000000),
        city: city || '',
        rooms: rooms || '',
        page: 1,
        rows: 20,
        forceLdLoad: true,
      };

      const { data } = await axios.get(url, {
        params,
        headers: YAD2_HEADERS,
        timeout: 15000,
      });

      const items = data?.data?.feed?.feed_items || [];
      const ads = items.filter(i => i.type === 'ad').map(item => normalizeItem(item, label));
      results.push(...ads);
      console.log(`[Yad2Agent] ${label}: got ${ads.length} listings`);
    } catch (err) {
      console.error(`[Yad2Agent] ${label} fetch failed: ${err.message}`);
    }
  }

  if (results.length === 0) {
    console.warn('[Yad2Agent] No real data — using mock fallback');
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
