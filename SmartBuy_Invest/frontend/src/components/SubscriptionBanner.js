import React, { useState } from 'react';
import { usersAPI } from '../services/api';
import toast from 'react-hot-toast';

const PLANS = [
  { tier: 'free', label: 'Free', price: 0, features: ['Basic search', '1 comparison/day', 'Browse listings'] },
  { tier: 'premium', label: 'Premium', price: 9.99, features: ['Unlimited comparisons', 'AI agent alerts', 'All sources', 'Email digest'] },
  { tier: 'investor', label: 'Investor', price: 19.99, features: ['Everything in Premium', 'Investment calculator', 'Market trends', 'Priority support'] }
];

export default function SubscriptionBanner({ currentTier = 'free', onUpgrade }) {
  const [loading, setLoading] = useState('');

  const handleUpgrade = async (tier) => {
    setLoading(tier);
    try {
      await usersAPI.upgrade(tier);
      toast.success(`Upgraded to ${tier}! 🎉`);
      onUpgrade?.();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Upgrade failed');
    } finally { setLoading(''); }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {PLANS.map(plan => {
        const isCurrent = plan.tier === currentTier;
        const canUpgrade = plan.tier !== 'free' && !isCurrent;
        return (
          <div key={plan.tier} className={`card p-5 ${isCurrent ? 'ring-2 ring-blue-500' : ''}`}>
            {isCurrent && <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">CURRENT</span>}
            <h3 className="text-lg font-bold mt-2">{plan.label}</h3>
            <p className="text-2xl font-extrabold mt-1">{plan.price === 0 ? 'Free' : `$${plan.price}/mo`}</p>
            <ul className="mt-3 space-y-1">
              {plan.features.map(f => <li key={f} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2"><span>✓</span>{f}</li>)}
            </ul>
            {canUpgrade && (
              <button onClick={() => handleUpgrade(plan.tier)} disabled={!!loading}
                className="mt-4 w-full btn-primary text-sm disabled:opacity-50">
                {loading === plan.tier ? 'Upgrading...' : `Upgrade to ${plan.label}`}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
