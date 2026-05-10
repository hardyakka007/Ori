import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotDeals } from '../store/listingsSlice';
import ListingCard from '../components/ListingCard';

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector(s => s.auth);
  const { hotDeals } = useSelector(s => s.listings);
  const { unreadCount } = useSelector(s => s.notifications);

  useEffect(() => { dispatch(fetchHotDeals({ limit: 6 })); }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold">
          שלום {user?.name?.split(' ')[0] || 'Investor'} 👋
        </h1>
        <p className="mt-2 opacity-90">AI agents are hunting the best deals for you 24/7</p>
        {unreadCount > 0 && (
          <div className="mt-4 bg-white/20 rounded-xl p-3 flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="font-bold">{unreadCount} Hot Deal{unreadCount > 1 ? 's' : ''} Found!</p>
              <p className="text-sm opacity-80">Matching your preferences</p>
            </div>
            <Link to="/hot-deals" className="ml-auto bg-white text-blue-700 font-bold text-sm px-4 py-2 rounded-xl">View →</Link>
          </div>
        )}
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { to: '/search', emoji: '🔍', label: 'Search Listings', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700' },
          { to: '/hot-deals', emoji: '🔥', label: 'Hot Deals', color: 'bg-red-50 dark:bg-red-900/20 text-red-700' },
          { to: '/compare', emoji: '⚖️', label: 'Compare Areas', color: 'bg-green-50 dark:bg-green-900/20 text-green-700' },
          { to: '/agent-settings', emoji: '🤖', label: 'Agent Settings', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700' }
        ].map(({ to, emoji, label, color }) => (
          <Link key={to} to={to} className={`card p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow ${color}`}>
            <span className="text-3xl">{emoji}</span>
            <span className="text-sm font-semibold text-center">{label}</span>
          </Link>
        ))}
      </div>

      {/* Hot Deals preview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">🔥 Latest Hot Deals</h2>
          <Link to="/hot-deals" className="text-sm text-blue-600 font-semibold">See all →</Link>
        </div>
        {hotDeals.length === 0 ? (
          <div className="card p-8 text-center text-gray-400">
            <p className="text-4xl mb-3">🤖</p>
            <p className="font-semibold">Agents are scanning...</p>
            <p className="text-sm mt-1">Hot deals will appear here when found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotDeals.map((l, i) => <ListingCard key={l._id || i} listing={l} />)}
          </div>
        )}
      </div>

      {/* Subscription CTA */}
      {user?.subscription?.tier === 'free' && (
        <div className="card p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h3 className="text-lg font-bold">Upgrade to Premium 🚀</h3>
          <p className="text-sm opacity-90 mt-1">Get unlimited AI agent alerts, area comparisons, and email digests.</p>
          <Link to="/profile" className="mt-4 inline-block bg-white text-blue-700 font-bold text-sm px-6 py-2 rounded-xl">
            View Plans
          </Link>
        </div>
      )}
    </div>
  );
}
