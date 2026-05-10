import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { fetchMe } from './store/authSlice';
import { fetchNotifications, addNotification } from './store/notificationsSlice';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Search from './pages/Search';
import HotDeals from './pages/HotDeals';
import Compare from './pages/Compare';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import AgentSettings from './pages/AgentSettings';
import Login from './pages/Login';
import Register from './pages/Register';
import { io } from 'socket.io-client';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector(s => s.auth);
  return token ? children : <Navigate to="/login" replace />;
};

export default function App() {
  const dispatch = useDispatch();
  const { token, user } = useSelector(s => s.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchMe());
      dispatch(fetchNotifications());
    }
  }, [token]);

  // Real-time WebSocket connection
  useEffect(() => {
    if (!user?._id) return;
    const socket = io(process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000');
    socket.emit('join', user._id);
    socket.on('hot_deal', (data) => {
      dispatch(addNotification({ title: data.title, body: data.message, read: false, createdAt: new Date() }));
    });
    return () => socket.disconnect();
  }, [user?._id]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Toaster position="top-center" />
        {token && <Navbar />}
        <main className={token ? 'pt-16 pb-20 md:pb-0' : ''}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
            <Route path="/hot-deals" element={<ProtectedRoute><HotDeals /></ProtectedRoute>} />
            <Route path="/compare" element={<ProtectedRoute><Compare /></ProtectedRoute>} />
            <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
            <Route path="/profile/:id?" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/agent-settings" element={<ProtectedRoute><AgentSettings /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        {token && <BottomNav />}
      </div>
    </BrowserRouter>
  );
}
