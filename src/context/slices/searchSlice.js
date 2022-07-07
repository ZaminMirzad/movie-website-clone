import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../constants/constants';

// fetching thunk function
export const searchByQuery = createAsyncThunk('search/multi', async (id) => {
  const response = await axios.get(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${id}&page=1&include_adult=false`
  );
  return response.data;
});

// the slice
export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    status: '',
    list: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchByQuery.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(searchByQuery.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    });
    builder.addCase(searchByQuery.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    });
  }
});

export default searchSlice.reducer;
