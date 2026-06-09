const axios = require('axios');

const REMAX_API = 'https://www.remax.co.il/api/properties/search';

function buildUrl(targetUrl) {
  if (process.env.SCRAPER_API_KEY) {
    return `http://api.scraperapi.com?api_key=${process.env.SCRAPER_API_KEY}&url=${encodeURIComponent(targetUrl)}`;
  }
  return targetUrl;
}

async function fetchRemaxListings({ minPrice, maxPrice, rooms, city } = {}) {
  const results = [];
  const usingProxy = !!process.env.SCRAPER_API_KEY;
  console.log(`[RemaxAgent] Using ${usingProxy ? 'ScraperAPI proxy' : 'direct connection'}`);

  const dealTypes = [
    { type: 'sale', label: 'sale', typeId: 1 },
    { type: 'rent', label: 'rent', typeId: 2 },
  ];

  for (const { label, typeId } of dealTypes) {
    try {
      const url = buildUrl(REMAX_API);
      const { data } = await axios.post(
        url,
        {
          dealTypeId: typeId,
          cityId: city || null,
          rooms: rooms || null,
          priceFrom: minPrice || (typeId === 2 ? 2000 : 300000),
          priceTo: maxPrice || (typeId === 2 ? 20000 : 8000000),
          pageNumber: 1,
          pageSize: 20,
        },
        {
          headers: {
            'User-Agent':   'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
            'Content-Type': 'application/json',
            'Accept':       'application/json',
            'Referer':      'https://www.remax.co.il/',
            'Origin':       'https://www.remax.co.il',
          },
          timeout: 30000,
        }
      );

      const items = data?.data?.properties || data?.properties || data?.results || [];
      const normalized = items.map(item => normalizeItem(item, label));
      results.push(...normalized);
      console.log(`[RemaxAgent] ${label}: fetched ${normalized.length} real listings`);
    } catch (err) {
      console.error(`[RemaxAgent] ${label} failed: ${err.message}`);
    }
  }

  if (results.length === 0) {
    console.warn('[RemaxAgent] Could not fetch real data — falling back to mock listings');
    return getMockListings();
  }

  return results;
}

function normalizeItem(item, listingType) {
  return {
    sourceId:     `remax_${item.id || item.propertyId || Math.random()}`,
    listingType,
    title:        item.title || `${item.rooms || '?'}-room property in ${item.cityName || 'Israel'}`,
    price:        Number(item.price) || 0,
    sqm:          Number(item.squareMeters || item.size) || null,
    rooms:        parseFloat(item.rooms) || null,
    floor:        Number(item.floor) || null,
    city:         item.cityName || item.city || '',
    area:         item.cityName || item.area || '',
    neighborhood: item.neighborhood || item.streetName || '',
    address:      item.address || item.streetName || '',
    images:       (item.images || item.photos || []).slice(0, 6).map(img => img.url || img.src || img),
    agentName:    item.agentName || item.agent?.name || 'RE/MAX Agent',
    agentPhone:   item.agentPhone || item.agent?.phone || '',
    sourceUrl:    `https://www.remax.co.il/property/${item.id || item.propertyId}`,
    propertyType: mapType(item.propertyType || item.typeId),
    source:       'remax',
  };
}

function mapType(type) {
  const map = {
    1: 'Apartment', 2: 'House', 3: 'Studio', 4: 'Penthouse',
    'APARTMENT': 'Apartment', 'HOUSE': 'House', 'VILLA': 'House',
    'STUDIO': 'Studio', 'PENTHOUSE': 'Penthouse',
  };
  return map[type] || 'Apartment';
}

function getMockListings() {
  const cities = ['Tel Aviv', 'Jerusalem', 'Herzliya', 'Ra\'anana', 'Kfar Saba'];
  return Array.from({ length: 10 }, (_, i) => ({
    sourceId:     `remax_mock_${i}`,
    listingType:  i % 4 === 0 ? 'rent' : 'sale',
    title:        `${(i % 3) + 2}-room property`,
    price:        i % 4 === 0 ? (4000 + i * 200) : (800000 + i * 120000),
    sqm:          65 + i * 8,
    rooms:        (i % 3) + 2,
    floor:        (i % 6) + 1,
    city:         cities[i % cities.length],
    area:         cities[i % cities.length],
    neighborhood: 'Premium Area',
    address:      `Begin ${20 + i}`,
    images:       [],
    agentName:    'RE/MAX Agent',
    agentPhone:   '03-0000000',
    sourceUrl:    'https://www.remax.co.il',
    propertyType: 'Apartment',
    source:       'remax',
  }));
}

module.exports = { fetchRemaxListings };
