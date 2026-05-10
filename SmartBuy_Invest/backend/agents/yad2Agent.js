const axios = require('axios');

// Yad2 Agent — fetches real estate listings from Yad2 API
// Note: Yad2 has an unofficial API endpoint used by their mobile app.
// For production, replace with official API credentials or Puppeteer scraping.
const YAD2_API_BASE = 'https://gw.yad2.co.il/feed-search-legacy/realestate/forsale';

async function fetchYad2Listings({ area, minPrice, maxPrice, rooms } = {}) {
  try {
    const params = {
      category: 2, // For sale
      subCategory: 7, // Apartments
      priceMin: minPrice || 0,
      priceMax: maxPrice || 10000000,
      city: area || '',
      rooms: rooms || '',
      forceLdLoad: true,
      page: 1
    };

    const response = await axios.get(YAD2_API_BASE, {
      params,
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
        'Accept': 'application/json',
        'Accept-Language': 'he-IL,he;q=0.9'
      },
      timeout: 15000
    });

    const items = response.data?.data?.feed?.feed_items || [];
    return items.filter(i => i.type === 'ad').map(normalizeYad2Item);
  } catch (err) {
    console.error('[Yad2Agent] Fetch error:', err.message);
    // Return mock data in development if real API fails
    if (process.env.NODE_ENV !== 'production') return getMockYad2Listings();
    return [];
  }
}

function normalizeYad2Item(item) {
  return {
    sourceId: String(item.id || item.token),
    title: item.title || `${item.rooms} room apt in ${item.city}`,
    price: Number(item.price?.replace(/[^0-9]/g, '') || 0),
    sqm: Number(item.square_meters) || null,
    rooms: parseFloat(item.rooms) || null,
    area: item.city_area || item.city || '',
    neighborhood: item.neighborhood || '',
    city: item.city || '',
    address: item.street ? `${item.street} ${item.house_number || ''}`.trim() : '',
    images: (item.images || []).map(img => img.src),
    agentName: item.contact_name || '',
    agentPhone: item.phone || '',
    sourceUrl: `https://www.yad2.co.il/item/${item.token}`,
    propertyType: mapYad2Type(item.HomeTypeID),
    floor: Number(item.floor) || null,
    yearBuilt: Number(item.year_built) || null
  };
}

function mapYad2Type(typeId) {
  const map = { 1: 'apartment', 2: 'house', 3: 'studio', 6: 'penthouse', 9: 'duplex' };
  return map[typeId] || 'apartment';
}

function getMockYad2Listings() {
  const areas = ['Tel Aviv', 'Ramat Gan', 'Herzeliya', 'Jerusalem', 'Netanya'];
  return Array.from({ length: 12 }, (_, i) => ({
    sourceId: `yad2_mock_${Date.now()}_${i}`,
    title: `${Math.floor(Math.random() * 3) + 2}-room apartment`,
    price: Math.floor(Math.random() * 2000000) + 800000,
    sqm: Math.floor(Math.random() * 80) + 50,
    rooms: Math.floor(Math.random() * 3) + 2,
    area: areas[Math.floor(Math.random() * areas.length)],
    neighborhood: 'City Center',
    city: areas[Math.floor(Math.random() * areas.length)],
    address: `Ha-Yarkon ${Math.floor(Math.random() * 100) + 1}`,
    images: [],
    agentName: 'Mock Agent',
    agentPhone: '050-0000000',
    sourceUrl: 'https://yad2.co.il',
    propertyType: 'apartment',
    floor: Math.floor(Math.random() * 10) + 1,
    yearBuilt: 2000 + Math.floor(Math.random() * 20)
  }));
}

module.exports = { fetchYad2Listings };
