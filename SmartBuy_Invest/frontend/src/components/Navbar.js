import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { markAllRead } from '../store/notificationsSlice';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(s => s.auth);
  const { unreadCount, items } = useSelector(s => s.notifications);
  const [showNotifs, setShowNotifs] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🏠</span>
          <span className="text-xl font-bold text-blue-600">SmartBuy</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/search" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Search</Link>
          <Link to="/hot-deals" className="text-red-600 font-semibold hover:text-red-700">🔥 Hot Deals</Link>
          <Link to="/compare" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Compare</Link>
          <Link to="/favorites" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Favorites</Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Notification bell */}
          <div className="relative">
            <button
              onClick={() => { setShowNotifs(!showNotifs); if (unreadCount > 0) dispatch(markAllRead()); }}
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              <BellIcon className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
            {showNotifs && (
              <div className="absolute right-0 top-10 w-80 max-h-96 overflow-y-auto card shadow-xl z-50 p-2">
                <p className="text-xs font-semibold text-gray-500 px-2 py-1">Notifications</p>
                {items.length === 0 ? (
                  <p className="text-sm text-gray-400 px-2 py-4 text-center">No notifications yet</p>
                ) : items.slice(0, 10).map((n, i) => (
                  <div key={i} className={`px-3 py-2 rounded-lg text-sm mb-1 ${n.read ? 'text-gray-500' : 'bg-blue-50 dark:bg-blue-900/20 text-gray-800 dark:text-gray-200'}`}>
                    <p className="font-semibold text-xs">{n.title}</p>
                    <p className="text-xs">{n.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)} className="flex items-center gap-2">
              {user?.photo
                ? <img src={user.photo} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                : <UserCircleIcon className="w-8 h-8 text-gray-600" />
              }
            </button>
            {showMenu && (
              <div className="absolute right-0 top-10 w-44 card shadow-xl z-50 py-2">
                <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">My Profile</Link>
                <Link to="/agent-settings" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Agent Settings</Link>
                <hr className="my-1 border-gray-100 dark:border-gray-700" />
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-700">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
