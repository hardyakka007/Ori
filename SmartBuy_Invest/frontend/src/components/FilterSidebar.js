import React from 'react';

const AREAS = ['Tel Aviv', 'Ramat Gan', 'Herzeliya', 'Jerusalem', 'Haifa', 'Netanya', 'Beer Sheva', 'Rishon LeZion', 'Petah Tikva', 'Holon'];
const TYPES = ['apartment', 'house', 'studio', 'penthouse', 'duplex'];

export default function FilterSidebar({ filters, onChange }) {
  const set = (key, val) => onChange({ ...filters, [key]: val });

  return (
    <aside className="card p-4 space-y-5 sticky top-20">
      <h3 className="font-bold text-gray-800 dark:text-gray-100">Filters</h3>

      {/* Area */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">City / Area</label>
        <select value={filters.area || ''} onChange={e => set('area', e.target.value)}
          className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-gray-800">
          <option value="">All Areas</option>
          {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      {/* Price range */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Price Range (₪)</label>
        <div className="flex gap-2 mt-1">
          <input type="number" placeholder="Min" value={filters.minPrice || ''}
            onChange={e => set('minPrice', e.target.value)}
            className="w-1/2 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-gray-800" />
          <input type="number" placeholder="Max" value={filters.maxPrice || ''}
            onChange={e => set('maxPrice', e.target.value)}
            className="w-1/2 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-gray-800" />
        </div>
      </div>

      {/* Rooms */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Rooms</label>
        <div className="flex gap-2 mt-1">
          <input type="number" placeholder="Min" min="1" max="10" value={filters.minRooms || ''}
            onChange={e => set('minRooms', e.target.value)}
            className="w-1/2 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-gray-800" />
          <input type="number" placeholder="Max" min="1" max="10" value={filters.maxRooms || ''}
            onChange={e => set('maxRooms', e.target.value)}
            className="w-1/2 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-gray-800" />
        </div>
      </div>

      {/* Property type */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Property Type</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {TYPES.map(t => (
            <button key={t} onClick={() => set('propertyType', filters.propertyType === t ? '' : t)}
              className={`text-xs px-3 py-1 rounded-full border capitalize transition-colors ${filters.propertyType === t ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-400'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Sort By</label>
        <select value={filters.sort || 'newest'} onChange={e => set('sort', e.target.value)}
          className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-sm bg-white dark:bg-gray-800">
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="deal-score">Best Deal Score</option>
        </select>
      </div>

      <button onClick={() => onChange({})} className="w-full btn-secondary text-sm">Clear All</button>
    </aside>
  );
}
