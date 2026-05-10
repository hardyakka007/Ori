import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { comparisonsAPI } from '../services/api';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const AREAS = ['Tel Aviv', 'Ramat Gan', 'Herzeliya', 'Jerusalem', 'Haifa', 'Netanya', 'Beer Sheva', 'Rishon LeZion', 'Petah Tikva', 'Holon', 'Bat Yam', 'Givatayim', 'Raanana'];

export default function Compare() {
  const { user } = useSelector(s => s.auth);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [comparison, setComparison] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    comparisonsAPI.list().then(r => setSaved(r.data)).catch(() => {});
  }, []);

  const toggleArea = (area) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(prev => prev.filter(a => a !== area));
    } else if (selectedAreas.length < 4) {
      setSelectedAreas(prev => [...prev, area]);
    } else {
      toast.error('Maximum 4 areas');
    }
  };

  const runComparison = async () => {
    if (selectedAreas.length < 2) return toast.error('Select at least 2 areas');
    setLoading(true);
    try {
      const res = await comparisonsAPI.compare(selectedAreas);
      setComparison(res.data);
    } catch (err) {
      const msg = err.response?.data?.message || 'Comparison failed';
      if (err.response?.data?.upgradeRequired) {
        toast.error(`${msg} — Upgrade to Premium for unlimited comparisons`);
      } else {
        toast.error(msg);
      }
    } finally { setLoading(false); }
  };

  const formatPrice = (v) => `₪${(v / 1000).toFixed(0)}K`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-extrabold mb-2">⚖️ Compare Areas</h1>
      <p className="text-gray-500 text-sm mb-6">Select 2-4 neighborhoods to compare side-by-side</p>

      {user?.subscription?.tier === 'free' && (
        <div className="card p-3 mb-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-sm text-yellow-800 dark:text-yellow-200">
          Free plan: 1 comparison per day. <a href="/profile" className="underline font-semibold">Upgrade to Premium</a> for unlimited.
        </div>
      )}

      {/* Area selector */}
      <div className="card p-5 mb-6">
        <h3 className="font-semibold mb-3">Select Areas ({selectedAreas.length}/4)</h3>
        <div className="flex flex-wrap gap-2">
          {AREAS.map(area => (
            <button key={area} onClick={() => toggleArea(area)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${selectedAreas.includes(area) ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
              {area}
              {selectedAreas.includes(area) && ' ✓'}
            </button>
          ))}
        </div>
        <button onClick={runComparison} disabled={selectedAreas.length < 2 || loading}
          className="mt-4 btn-primary disabled:opacity-50">
          {loading ? 'Analyzing...' : 'Compare Now'}
        </button>
      </div>

      {/* Results */}
      {comparison && (
        <div>
          <h2 className="text-lg font-bold mb-4">Results: {comparison.areas.join(' vs ')}</h2>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {comparison.metrics.map(m => (
              <div key={m.area} className="card p-4 text-center">
                <h3 className="font-bold text-blue-700 dark:text-blue-400">{m.area}</h3>
                <p className="text-2xl font-extrabold mt-2">₪{(m.avgPrice / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-gray-500">Avg. Price</p>
                <p className="text-sm font-semibold mt-2">₪{m.pricePerSqm?.toLocaleString()}/sqm</p>
                <p className="text-xs text-gray-500">Per sqm</p>
                <div className={`mt-2 text-xs font-bold px-2 py-0.5 rounded-full inline-block ${m.popularityScore >= 80 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                  Popularity: {m.popularityScore}/100
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-5">
              <h3 className="font-semibold mb-4">Average Price</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={comparison.metrics}>
                  <XAxis dataKey="area" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={formatPrice} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={v => `₪${v?.toLocaleString()}`} />
                  <Bar dataKey="avgPrice" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold mb-4">Price per sqm</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={comparison.metrics}>
                  <XAxis dataKey="area" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={v => `₪${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={v => `₪${v?.toLocaleString()}`} />
                  <Bar dataKey="pricePerSqm" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Saved comparisons */}
      {saved.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-3">Saved Comparisons</h2>
          <div className="space-y-2">
            {saved.map(c => (
              <div key={c._id} className="card p-3 flex items-center justify-between">
                <span className="font-medium">{c.name}</span>
                <button onClick={() => { setSelectedAreas(c.areas); setComparison(c); }}
                  className="text-sm text-blue-600 font-semibold">View →</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
