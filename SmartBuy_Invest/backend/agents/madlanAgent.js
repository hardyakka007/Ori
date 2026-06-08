const axios = require('axios');

const MADLAN_API = 'https://gw.madlan.co.il/nadlan-search/api/v3/properties';

function buildUrl(targetUrl) {
  if (process.env.SCRAPER_API_KEY) {
    return `http://api.scraperapi.com?api_key=${process.env.SCRAPER_API_KEY}&url=${encodeURIComponent(targetUrl)}`;
  }
  return targetUrl;
}

async function fetchMadlanListings({ area, minPrice, maxPrice } = {}) {
  const results = [];
  const usingProxy = !!process.env.SCRAPER_API_KEY;
  console.log(`[MadlanAgent] Using ${usingProxy ? 'ScraperAPI proxy' : 'direct connection'}`);

  const dealTypes = ['FOR_SALE', 'FOR_RENT'];

  for (const dealType of dealTypes) {
    try {
      const url = buildUrl(MADLAN_API);
      const { data } = await axios.post(
        url,
        {
          query: {
            dealType,
            placeId: area || 'gush_dan',
            priceMin: minPrice || (dealType === 'FOR_RENT' ? 2000 : 0),
            priceMax: maxPrice || (dealType === 'FOR_RENT' ? 20000 : 10000000),
            propertyTypes: ['APARTMENT', 'HOUSE', 'STUDIO', 'PENTHOUSE'],
            page: 1,
            pageSize: 20,
          },
        },
        {
          headers: {
            'User-Agent':   'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
            'Content-Type': 'application/json',
            'Accept':       'application/json',
            'Referer':      'https://www.madlan.co.il/',
            'Origin':       'https://www.madlan.co.il',
          },
          timeout: 30000,
        }
      );

      const items = data?.data?.properties || [];
      const normalized = items.map(item => normalizeItem(item, dealType));
      results.push(...normalized);
      console.log(`[MadlanAgent] ${dealType}: fetched ${normalized.length} real listings`);
    } catch (err) {
      console.error(`[MadlanAgent] ${dealType} failed: ${err.message}`);
    }
  }

  if (results.length === 0) {
    console.warn('[MadlanAgent] Could not fetch real data — falling back to mock listings');
    return getMockListings();
  }

  return results;
}

function normalizeItem(item, dealType) {
  return {
    sourceId:     `madlan_${item.id || item.listingId}`,
    listingType:  dealType === 'FOR_RENT' ? 'rent' : 'sale',
    title:        item.title || `${item.rooms || '?'}-room apartment in ${item.cityName || 'Israel'}`,
    price:        Number(item.price) || 0,
    sqm:          Number(item.floorSize) || null,
    rooms:        parseFloat(item.rooms) || null,
    floor:        Number(item.floor)     || null,
    city:         item.cityName     || '',
    area:         item.cityName     || item.neighborhood || '',
    neighborhood: item.neighborhood || '',
    address:      item.address      || '',
    images:       (item.images || []).slice(0, 6).map(img => img.url || img),
    agentName:    item.contact?.name  || '',
    agentPhone:   item.contact?.phone || '',
    sourceUrl:    `https://www.madlan.co.il/listings/${item.id}`,
    propertyType: mapType(item.propertyType),
    source:       'madlan',
  };
}

function mapType(type) {
  return { APARTMENT:'Apartment', HOUSE:'House', STUDIO:'Studio', PENTHOUSE:'Penthouse' }[type] || 'Apartment';
}

function getMockListings() {
  const cities = ['Tel Aviv','Ramat Gan','Petah Tikva','Rishon LeZion','Haifa'];
  return Array.from({ length: 10 }, (_, i) => ({
    sourceId:     `madlan_mock_${i}`,
    listingType:  i % 4 === 0 ? 'rent' : 'sale',
    title:        `${(i % 3) + 2}-room apartment`,
    price:        i % 4 === 0 ? (3500 + i * 150) : (700000 + i * 90000),
    sqm:          50 + i * 6,
    rooms:        (i % 3) + 2,
    floor:        (i % 7) + 1,
    city:         cities[i % cities.length],
    area:         cities[i % cities.length],
    neighborhood: 'Downtown',
    address:      `Rothschild ${10 + i}`,
    images:       [],
    agentName:    'Madlan Agent',
    agentPhone:   '052-0000000',
    sourceUrl:    'https://www.madlan.co.il',
    propertyType: 'Apartment',
    source:       'madlan',
  }));
}

module.exports = { fetchMadlanListings };
