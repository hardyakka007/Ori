import React, { useEffect, useState } from 'react';
import { favoritesAPI } from '../services/api';
import ListingCard from '../components/ListingCard';

export default function Favorites() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const res = await favoritesAPI.list();
      setListings(res.data);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchFavorites(); }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-extrabold mb-2">❤️ Saved Listings</h1>
      <p className="text-sm text-gray-500 mb-6">{listings.length} saved listings</p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6).fill(0).map((_, i) => <div key={i} className="card h-64 animate-pulse" />)}
        </div>
      ) : listings.length === 0 ? (
        <div className="card p-16 text-center text-gray-400">
          <p className="text-5xl mb-4">🏠</p>
          <p className="text-lg font-semibold">No saved listings yet</p>
          <p className="text-sm mt-2">Tap the heart icon on any listing to save it here</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((l, i) => <ListingCard key={l._id || i} listing={l} onSaveToggle={fetchFavorites} />)}
        </div>
      )}
    </div>
  );
}
