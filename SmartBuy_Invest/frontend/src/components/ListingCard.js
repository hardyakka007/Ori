import React, { useState } from 'react';
import { HeartIcon, MapPinIcon, HomeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { favoritesAPI } from '../services/api';
import toast from 'react-hot-toast';

function DealScoreBadge({ score }) {
  if (!score) return null;
  let cls = 'deal-badge-fair';
  if (score >= 80) cls = 'deal-badge-hot';
  else if (score >= 75) cls = 'deal-badge-good';
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${cls}`}>
      {score >= 80 ? '🔥' : '⭐'} {score}/100
    </span>
  );
}

export default function ListingCard({ listing, onSaveToggle }) {
  const [saved, setSaved] = useState(listing.savedBy?.length > 0);
  const [saving, setSaving] = useState(false);

  const handleSave = async (e) => {
    e.stopPropagation();
    setSaving(true);
    try {
      if (saved) {
        await favoritesAPI.remove(listing._id);
        setSaved(false);
        toast.success('Removed from favorites');
      } else {
        await favoritesAPI.save(listing._id);
        setSaved(true);
        toast.success('Saved to favorites!');
      }
      onSaveToggle?.();
    } catch { toast.error('Please log in to save listings'); }
    finally { setSaving(false); }
  };

  const price = listing.price || listing.listing?.price;
  const area = listing.area || listing.listing?.area;
  const rooms = listing.rooms || listing.listing?.rooms;
  const sqm = listing.sqm || listing.listing?.sqm;
  const title = listing.title || listing.listing?.title;
  const images = listing.images || listing.listing?.images || [];
  const dealScore = listing.dealScore || listing.metrics?.dealScore;
  const priceVsMarket = listing.priceVsMarket || listing.metrics?.priceVsMarket;
  const source = listing.source;

  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      {/* Image */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
        {images[0]
          ? <img src={images[0]} alt={title} className="w-full h-full object-cover" />
          : <div className="w-full h-full flex items-center justify-center"><HomeIcon className="w-16 h-16 text-gray-300" /></div>
        }
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
          {dealScore && <DealScoreBadge score={dealScore} />}
          {source && <span className="bg-black/60 text-white text-xs px-2 py-0.5 rounded-full capitalize">{source}</span>}
        </div>
        {/* Save button */}
        <button onClick={handleSave} disabled={saving} className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow">
          {saved ? <HeartSolid className="w-5 h-5 text-red-500" /> : <HeartIcon className="w-5 h-5 text-gray-600" />}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="font-bold text-lg text-blue-700 dark:text-blue-400">
          ₪{price?.toLocaleString() || 'N/A'}
        </p>
        {priceVsMarket && (
          <p className={`text-xs font-medium ${priceVsMarket < 0 ? 'text-green-600' : 'text-red-500'}`}>
            {priceVsMarket < 0 ? '⬇️' : '⬆️'} {Math.abs(priceVsMarket).toFixed(1)}% vs market avg
          </p>
        )}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{title}</p>
        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 dark:text-gray-400">
          <MapPinIcon className="w-3 h-3" />
          <span>{area}</span>
        </div>
        <div className="flex gap-3 mt-2 text-xs text-gray-500">
          {rooms && <span>🛏 {rooms} rooms</span>}
          {sqm && <span>📐 {sqm} sqm</span>}
        </div>
      </div>
    </div>
  );
}
