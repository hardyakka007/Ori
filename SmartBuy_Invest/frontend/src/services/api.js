import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  me: () => api.get('/auth/me'),
  updateFcmToken: (token) => api.put('/auth/fcm-token', { token })
};

export const listingsAPI = {
  search: (params) => api.get('/listings', { params }),
  getHotDeals: (params) => api.get('/listings/hot-deals', { params }),
  getById: (id) => api.get(`/listings/${id}`),
  getAreaStats: (area) => api.get(`/listings/area-stats/${encodeURIComponent(area)}`)
};

export const comparisonsAPI = {
  compare: (areas, name) => api.post('/comparisons', { areas, name }),
  list: () => api.get('/comparisons'),
  delete: (id) => api.delete(`/comparisons/${id}`)
};

export const favoritesAPI = {
  list: () => api.get('/favorites'),
  save: (listingId) => api.post(`/favorites/${listingId}`),
  remove: (listingId) => api.delete(`/favorites/${listingId}`)
};

export const usersAPI = {
  list: (params) => api.get('/users', { params }),
  getById: (id) => api.get(`/users/${id}`),
  updateProfile: (data) => api.put('/users/profile', data),
  upgrade: (tier) => api.post('/users/upgrade', { tier })
};

export const agentsAPI = {
  getPreferences: () => api.get('/agents/preferences'),
  updatePreferences: (data) => api.put('/agents/preferences', data),
  getScanned: (params) => api.get('/agents/scanned', { params }),
  getStatus: () => api.get('/agents/status')
};

export const notificationsAPI = {
  list: (params) => api.get('/notifications', { params }),
  readAll: () => api.put('/notifications/read-all'),
  markRead: (id) => api.put(`/notifications/${id}/read`)
};

export default api;
