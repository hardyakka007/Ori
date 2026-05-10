import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, MagnifyingGlassIcon, FireIcon, ScaleIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

const navItems = [
  { to: '/', icon: HomeIcon, label: 'Home' },
  { to: '/search', icon: MagnifyingGlassIcon, label: 'Search' },
  { to: '/hot-deals', icon: FireIcon, label: 'Hot', hot: true },
  { to: '/compare', icon: ScaleIcon, label: 'Compare' },
  { to: '/favorites', icon: HeartIcon, label: 'Saved' }
];

export default function BottomNav() {
  const { unreadCount } = useSelector(s => s.notifications);
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ to, icon: Icon, label, hot }) => (
          <NavLink key={to} to={to} className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-3 py-2 relative ${isActive ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`
          }>
            <div className="relative">
              <Icon className="w-6 h-6" />
              {hot && unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
            <span className={`text-xs font-medium ${hot ? 'text-red-500' : ''}`}>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
