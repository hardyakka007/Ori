import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listingsAPI } from '../services/api';

export const searchListings = createAsyncThunk('listings/search', async (params, { rejectWithValue }) => {
  try {
    const res = await listingsAPI.search(params);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message);
  }
});

export const fetchHotDeals = createAsyncThunk('listings/hotDeals', async (params, { rejectWithValue }) => {
  try {
    const res = await listingsAPI.getHotDeals(params);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message);
  }
});

const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    items: [], hotDeals: [], total: 0, pages: 1, page: 1,
    loading: false, error: null, filters: {}
  },
  reducers: {
    setFilters: (state, action) => { state.filters = action.payload; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchListings.pending, (s) => { s.loading = true; })
      .addCase(searchListings.fulfilled, (s, a) => {
        s.loading = false;
        s.items = a.payload.listings;
        s.total = a.payload.total;
        s.pages = a.payload.pages;
        s.page = a.payload.page;
      })
      .addCase(searchListings.rejected, (s, a) => { s.loading = false; s.error = a.payload; })
      .addCase(fetchHotDeals.fulfilled, (s, a) => { s.hotDeals = a.payload.listings; });
  }
});

export const { setFilters } = listingsSlice.actions;
export default listingsSlice.reducer;
