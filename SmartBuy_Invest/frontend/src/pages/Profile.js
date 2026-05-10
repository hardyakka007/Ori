import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMe } from '../store/authSlice';
import { usersAPI } from '../services/api';
import SubscriptionBanner from '../components/SubscriptionBanner';
import toast from 'react-hot-toast';

const STYLES = ['buy-to-live', 'buy-to-rent', 'flip', 'long-term'];
const AREAS = ['Tel Aviv', 'Ramat Gan', 'Herzeliya', 'Jerusalem', 'Haifa', 'Netanya', 'Beer Sheva', 'Rishon LeZion'];

export default function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user: me } = useSelector(s => s.auth);
  const isOwn = !id || id === me?._id;

  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState('profile');

  useEffect(() => {
    if (isOwn) {
      setProfile(me);
      setForm({ name: me?.name, bio: me?.bio, investmentStyle: me?.investmentStyle, preferredAreas: me?.preferredAreas || [], isPublic: me?.isPublic, language: me?.language });
    } else {
      usersAPI.getById(id).then(r => setProfile(r.data)).catch(() => {});
    }
  }, [id, me]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await usersAPI.updateProfile(form);
      await dispatch(fetchMe());
      setEditing(false);
      toast.success('Profile updated!');
    } catch { toast.error('Update failed'); }
    finally { setSaving(false); }
  };

  const toggleArea = (area) => {
    setForm(f => ({
      ...f,
      preferredAreas: f.preferredAreas?.includes(area)
        ? f.preferredAreas.filter(a => a !== area)
        : [...(f.preferredAreas || []), area]
    }));
  };

  if (!profile) return <div className="p-8 text-center text-gray-400">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile header */}
      <div className="card p-6 mb-6 flex flex-col sm:flex-row items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-3xl font-bold text-blue-700 dark:text-blue-300">
          {profile.name?.[0]?.toUpperCase() || '?'}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-xl font-extrabold">{profile.name}</h1>
          {profile.bio && <p className="text-sm text-gray-500 mt-1">{profile.bio}</p>}
          <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
            {profile.investmentStyle && (
              <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                {profile.investmentStyle.replace('-', ' ')}
              </span>
            )}
            <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-full capitalize">
              {profile.subscription?.tier || 'free'} plan
            </span>
          </div>
        </div>
        {isOwn && !editing && (
          <button onClick={() => setEditing(true)} className="btn-secondary text-sm">Edit Profile</button>
        )}
      </div>

      {/* Tabs */}
      {isOwn && (
        <div className="flex gap-1 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          {['profile', 'subscription'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg capitalize transition-colors ${tab === t ? 'bg-white dark:bg-gray-700 shadow' : 'text-gray-500'}`}>
              {t === 'profile' ? '👤 Profile' : '💎 Subscription'}
            </button>
          ))}
        </div>
      )}

      {tab === 'profile' && (
        <div className="card p-6">
          {editing ? (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold">Full Name</label>
                <input value={form.name || ''} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800" />
              </div>
              <div>
                <label className="text-sm font-semibold">Bio</label>
                <textarea rows={3} value={form.bio || ''} onChange={e => setForm({ ...form, bio: e.target.value })}
                  className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800 resize-none" />
              </div>
              <div>
                <label className="text-sm font-semibold">Investment Style</label>
                <select value={form.investmentStyle || ''} onChange={e => setForm({ ...form, investmentStyle: e.target.value })}
                  className="mt-1 w-full border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800">
                  {STYLES.map(s => <option key={s} value={s}>{s.replace(/-/g, ' ')}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Preferred Areas</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {AREAS.map(a => (
                    <button key={a} onClick={() => toggleArea(a)} type="button"
                      className={`text-xs px-3 py-1 rounded-full border transition-colors ${form.preferredAreas?.includes(a) ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-600 dark:text-gray-300'}`}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="isPublic" checked={form.isPublic ?? true} onChange={e => setForm({ ...form, isPublic: e.target.checked })} />
                <label htmlFor="isPublic" className="text-sm">Public profile (visible to other investors)</label>
              </div>
              <div className="flex gap-3">
                <button onClick={handleSave} disabled={saving} className="btn-primary disabled:opacity-50">{saving ? 'Saving...' : 'Save Changes'}</button>
                <button onClick={() => setEditing(false)} className="btn-secondary">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div><span className="text-sm font-semibold text-gray-500">Investment style:</span> <span className="capitalize">{profile.investmentStyle?.replace('-', ' ') || '—'}</span></div>
              <div><span className="text-sm font-semibold text-gray-500">Preferred areas:</span> {profile.preferredAreas?.length ? profile.preferredAreas.join(', ') : '—'}</div>
              <div><span className="text-sm font-semibold text-gray-500">Profile:</span> {profile.isPublic ? 'Public' : 'Private'}</div>
            </div>
          )}
        </div>
      )}

      {tab === 'subscription' && isOwn && (
        <SubscriptionBanner currentTier={me?.subscription?.tier} onUpgrade={() => dispatch(fetchMe())} />
      )}
    </div>
  );
}
