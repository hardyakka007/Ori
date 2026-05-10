import React, { useEffect, useState } from 'react';
import { agentsAPI } from '../services/api';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const AREAS = ['Tel Aviv', 'Ramat Gan', 'Herzeliya', 'Jerusalem', 'Haifa', 'Netanya', 'Beer Sheva', 'Rishon LeZion', 'Petah Tikva', 'Holon', 'Givatayim', 'Raanana'];
const TYPES = ['apartment', 'house', 'studio', 'penthouse', 'duplex'];
const AGENTS = [
  { id: 'yad2', label: '🏠 Yad2', phase: 'MVP', active: true },
  { id: 'madlan', label: '🏢 Madlan', phase: 'MVP', active: true },
  { id: 'facebook', label: '👥 Facebook Groups', phase: 'Phase 2', active: false },
  { id: 'instagram', label: '📸 Instagram', phase: 'Phase 2', active: false },
  { id: 'tiktok', label: '🎵 TikTok', phase: 'Phase 2', active: false },
  { id: 'remax', label: '🌍 RE/MAX', phase: 'Phase 3', active: false },
  { id: 'sothebys', label: '💎 Sotheby\'s', phase: 'Phase 3', active: false },
  { id: 'airbnb', label: '🏡 Airbnb', phase: 'Phase 3', active: false }
];

export default function AgentSettings() {
  const { user } = useSelector(s => s.auth);
  const isPremium = ['premium', 'investor'].includes(user?.subscription?.tier);

  const [prefs, setPrefs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isPremium) {
      agentsAPI.getPreferences()
        .then(r => setPrefs(r.data))
        .catch(() => toast.error('Could not load agent preferences'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [isPremium]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await agentsAPI.updatePreferences(prefs);
      toast.success('Agent preferences saved!');
    } catch { toast.error('Failed to save preferences'); }
    finally { setSaving(false); }
  };

  const toggleArea = (area) => setPrefs(p => ({
    ...p,
    areasToMonitor: p.areasToMonitor.includes(area)
      ? p.areasToMonitor.filter(a => a !== area)
      : [...p.areasToMonitor, area]
  }));

  const toggleType = (type) => setPrefs(p => ({
    ...p,
    propertyTypes: p.propertyTypes.includes(type)
      ? p.propertyTypes.filter(t => t !== type)
      : [...p.propertyTypes, type]
  }));

  const toggleChannel = (channel) => setPrefs(p => ({
    ...p,
    notificationChannels: p.notificationChannels.includes(channel)
      ? p.notificationChannels.filter(c => c !== channel)
      : [...p.notificationChannels, channel]
  }));

  if (!isPremium) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-extrabold mb-4">🤖 Agent Settings</h1>
        <div className="card p-8 text-center">
          <p className="text-4xl mb-4">🔒</p>
          <h2 className="text-lg font-bold">Premium Feature</h2>
          <p className="text-gray-500 mt-2 text-sm">AI agents are available on Premium and Investor plans. Upgrade to configure 10 automated deal-hunting agents.</p>
          <a href="/profile" className="mt-4 inline-block btn-primary">Upgrade Now</a>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {AGENTS.map(a => (
              <div key={a.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl opacity-60">
                <span>{a.label}</span>
                <span className="ml-auto text-xs text-gray-400">{a.phase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (loading) return <div className="p-8 text-center text-gray-400">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-2xl font-extrabold">🤖 Agent Settings</h1>
      <p className="text-sm text-gray-500 -mt-4">Configure which properties agents should hunt for you 24/7</p>

      {/* Active Agents */}
      <div className="card p-5">
        <h2 className="font-bold mb-3">Active Agents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {AGENTS.map(a => (
            <div key={a.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${a.active ? 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 opacity-50'}`}>
              <span>{a.label}</span>
              <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-white dark:bg-gray-700">{a.phase}</span>
              {!a.active && <span className="text-xs text-gray-400">Coming soon</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Areas */}
      <div className="card p-5">
        <h2 className="font-bold mb-3">Areas to Monitor</h2>
        <p className="text-xs text-gray-500 mb-3">Leave empty to monitor all areas</p>
        <div className="flex flex-wrap gap-2">
          {AREAS.map(area => (
            <button key={area} onClick={() => toggleArea(area)}
              className={`text-sm px-3 py-1.5 rounded-xl border transition-colors ${prefs?.areasToMonitor.includes(area) ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400'}`}>
              {area}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="card p-5">
        <h2 className="font-bold mb-3">Budget Range (₪)</h2>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-xs text-gray-500">Min Price</label>
            <input type="number" value={prefs?.budgetMin || 0} onChange={e => setPrefs(p => ({ ...p, budgetMin: Number(e.target.value) }))}
              className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800" />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500">Max Price</label>
            <input type="number" value={prefs?.budgetMax || 5000000} onChange={e => setPrefs(p => ({ ...p, budgetMax: Number(e.target.value) }))}
              className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800" />
          </div>
        </div>
      </div>

      {/* Deal Score */}
      <div className="card p-5">
        <h2 className="font-bold mb-3">Deal Score Threshold: <span className="text-blue-600">{prefs?.dealScoreThreshold || 75}+</span></h2>
        <p className="text-xs text-gray-500 mb-3">Only notify when deal score exceeds this</p>
        <input type="range" min="60" max="95" step="5" value={prefs?.dealScoreThreshold || 75}
          onChange={e => setPrefs(p => ({ ...p, dealScoreThreshold: Number(e.target.value) }))}
          className="w-full accent-blue-600" />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>60 (Relaxed)</span><span>75 (Default)</span><span>95 (Strict)</span>
        </div>
      </div>

      {/* Property types */}
      <div className="card p-5">
        <h2 className="font-bold mb-3">Property Types</h2>
        <div className="flex flex-wrap gap-2">
          {TYPES.map(t => (
            <button key={t} onClick={() => toggleType(t)}
              className={`text-sm px-3 py-1.5 rounded-xl border capitalize transition-colors ${prefs?.propertyTypes.includes(t) ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="card p-5">
        <h2 className="font-bold mb-3">Notifications</h2>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-semibold">Frequency</label>
            <select value={prefs?.notificationFrequency || 'real-time'} onChange={e => setPrefs(p => ({ ...p, notificationFrequency: e.target.value }))}
              className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800">
              <option value="real-time">Real-time (instant)</option>
              <option value="daily">Daily digest</option>
              <option value="weekly">Weekly digest</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold">Channels</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {['push', 'email', 'in-app'].map(c => (
                <button key={c} onClick={() => toggleChannel(c)}
                  className={`text-sm px-4 py-2 rounded-xl border capitalize transition-colors ${prefs?.notificationChannels.includes(c) ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'}`}>
                  {c === 'push' ? '📱 Push' : c === 'email' ? '📧 Email' : '🔔 In-App'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSave} disabled={saving} className="w-full btn-primary py-3 text-base disabled:opacity-50">
        {saving ? 'Saving...' : 'Save Agent Preferences'}
      </button>
    </div>
  );
}
