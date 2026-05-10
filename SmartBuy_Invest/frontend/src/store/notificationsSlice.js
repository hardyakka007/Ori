import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsAPI } from '../services/api';

export const fetchNotifications = createAsyncThunk('notifications/fetch', async () => {
  const res = await notificationsAPI.list();
  return res.data;
});

export const markAllRead = createAsyncThunk('notifications/readAll', async () => {
  await notificationsAPI.readAll();
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: { items: [], unreadCount: 0, loading: false },
  reducers: {
    addNotification: (state, action) => {
      state.items.unshift(action.payload);
      state.unreadCount += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.fulfilled, (s, a) => {
        s.items = a.payload.notifications;
        s.unreadCount = a.payload.unreadCount;
      })
      .addCase(markAllRead.fulfilled, (s) => { s.unreadCount = 0; s.items.forEach(n => n.read = true); });
  }
});

export const { addNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
