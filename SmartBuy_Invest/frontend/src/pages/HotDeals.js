import React, { useEffect, useState } from 'react';
import { agentsAPI } from '../services/api';
import ListingCard from '../components/ListingCard';

export default function HotDeals() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [minScore, setMinScore] = useState(75);

  const fetchDeals = async () => {
    setLoading(true);
    try {
      const params = { minScore, limit: 30 };
      if (filter !== 'all') params.source = filter;
      const res = await agentsAPI.getScanned(params);
      setListings(res.data.listings);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchDeals(); }, [filter, minScore]);

  const sources = [
    { id: 'all', label: 'All Sources' },
    { id: 'yad2', label: '🏠 Yad2' },
    { id: 'madlan', label: '🏢 Madlan' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-extrabold">🔥 Hot Deals</h1>
          <p className="text-sm text-gray-500 mt-1">AI agents found {listings.length} deals matching your criteria</p>
        </div>
        <div className="flex flex-wrap gap-2 ml-auto">
          {sources.map(s => (
            <button key={s.id} onClick={() => setFilter(s.id)}
              className={`text-sm px-4 py-2 rounded-xl font-medium transition-colors ${filter === s.id ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300'}`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Score filter */}
      <div className="card p-4 mb-6 flex flex-wrap items-center gap-4">
        <span className="text-sm font-semibold">Min Deal Score:</span>
        {[70, 75, 80, 85, 90].map(s => (
          <button key={s} onClick={() => setMinScore(s)}
            className={`text-sm px-3 py-1 rounded-lg font-medium ${minScore === s ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
            {s}+
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(9).fill(0).map((_, i) => <div key={i} className="card h-64 animate-pulse" />)}
        </div>
      ) : listings.length === 0 ? (
        <div className="card p-16 text-center text-gray-400">
          <p className="text-5xl mb-4">🤖</p>
          <p className="text-lg font-semibold">Agents are scanning...</p>
          <p className="text-sm mt-2">Hot deals appear here when agents find properties scoring {minScore}+</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((l, i) => <ListingCard key={l._id || i} listing={l} />)}
        </div>
      )}
    </div>
  );
}
