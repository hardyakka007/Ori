import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchListings, setFilters } from '../store/listingsSlice';
import ListingCard from '../components/ListingCard';
import FilterSidebar from '../components/FilterSidebar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search() {
  const dispatch = useDispatch();
  const { items, total, pages, page, loading, filters } = useSelector(s => s.listings);
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState('');

  const doSearch = (f = filters, p = 1) => {
    dispatch(searchListings({ ...f, page: p, limit: 20 }));
  };

  useEffect(() => { doSearch(); }, []);

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters));
    doSearch(newFilters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-extrabold mb-4">Search Listings</h1>

      {/* Search bar */}
      <div className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by area, city, or neighborhood..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleFilterChange({ ...filters, area: search })}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button onClick={() => handleFilterChange({ ...filters, area: search })} className="btn-primary px-6">Search</button>
        <button onClick={() => setShowFilters(!showFilters)} className="btn-secondary md:hidden">
          {showFilters ? 'Hide' : 'Filters'}
        </button>
      </div>

      <div className="flex gap-6">
        {/* Sidebar — always visible on desktop */}
        <div className={`w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <FilterSidebar filters={filters} onChange={handleFilterChange} />
        </div>

        {/* Results */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-500">{total.toLocaleString()} listings found</p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="card h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="card p-12 text-center text-gray-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-semibold">No listings found</p>
              <p className="text-sm mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((l, i) => <ListingCard key={l._id || i} listing={l} />)}
            </div>
          )}

          {/* Pagination */}
          {pages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.min(pages, 7) }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => doSearch(filters, p)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium ${p === page ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600'}`}>
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
