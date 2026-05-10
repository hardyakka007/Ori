const axios = require('axios');

// Madlan Agent — fetches listings from Madlan (Diraon)
// Madlan has a GraphQL API; this uses the public endpoint.
const MADLAN_API = 'https://gw.madlan.co.il/nadlan-search/api/v3/properties';

async function fetchMadlanListings({ area, minPrice, maxPrice } = {}) {
  try {
    const response = await axios.post(MADLAN_API,
      {
        query: {
          dealType: 'FOR_SALE',
          placeId: area || 'gush_dan',
          priceMin: minPrice || 0,
          priceMax: maxPrice || 10000000,
          propertyTypes: ['APARTMENT', 'HOUSE'],
          page: 1,
          pageSize: 30
        }
      },
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 15000
      }
    );

    const items = response.data?.data?.properties || [];
    return items.map(normalizeMadlanItem);
  } catch (err) {
    console.error('[MadlanAgent] Fetch error:', err.message);
    if (process.env.NODE_ENV !== 'production') return getMockMadlanListings();
    return [];
  }
}

function normalizeMadlanItem(item) {
  return {
    sourceId: `madlan_${item.id || item.listingId}`,
    title: item.title || `${item.rooms} rooms in ${item.cityName}`,
    price: Number(item.price) || 0,
    sqm: Number(item.floorSize) || null,
    rooms: parseFloat(item.rooms) || null,
    area: item.cityName || item.neighborhood || '',
    neighborhood: item.neighborhood || '',
    city: item.cityName || '',
    address: item.address || '',
    images: (item.images || []).map(img => img.url || img),
    agentName: item.contact?.name || '',
    agentPhone: item.contact?.phone || '',
    sourceUrl: `https://www.madlan.co.il/listings/${item.id}`,
    propertyType: mapMadlanType(item.propertyType),
    floor: Number(item.floor) || null,
    yearBuilt: Number(item.yearBuilt) || null
  };
}

function mapMadlanType(type) {
  const map = { 'APARTMENT': 'apartment', 'HOUSE': 'house', 'STUDIO': 'studio', 'PENTHOUSE': 'penthouse' };
  return map[type] || 'apartment';
}

function getMockMadlanListings() {
  const areas = ['Tel Aviv', 'Ramat Gan', 'Petah Tikva', 'Rishon LeZion', 'Haifa'];
  return Array.from({ length: 10 }, (_, i) => ({
    sourceId: `madlan_mock_${Date.now()}_${i}`,
    title: `Beautiful ${Math.floor(Math.random() * 3) + 2}-room apartment`,
    price: Math.floor(Math.random() * 1500000) + 700000,
    sqm: Math.floor(Math.random() * 70) + 45,
    rooms: Math.floor(Math.random() * 3) + 2,
    area: areas[Math.floor(Math.random() * areas.length)],
    neighborhood: 'Downtown',
    city: areas[Math.floor(Math.random() * areas.length)],
    address: `Rothschild ${Math.floor(Math.random() * 80) + 1}`,
    images: [],
    agentName: 'Madlan Agent',
    agentPhone: '052-0000000',
    sourceUrl: 'https://madlan.co.il',
    propertyType: 'apartment',
    floor: Math.floor(Math.random() * 8) + 1,
    yearBuilt: 1995 + Math.floor(Math.random() * 25)
  }));
}

module.exports = { fetchMadlanListings };
