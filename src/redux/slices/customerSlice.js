import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Thunk para buscar clientes da API
export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    const response = await api.get('/customers');
    return response.data;
  },
);

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustomers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default customerSlice.reducer;
