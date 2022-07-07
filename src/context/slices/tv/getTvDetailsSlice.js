import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../../constants/constants';

// fetching thunk function
export const getTvById = createAsyncThunk('movies/fetchTvById', async (id) => {
  const response = await axios.get(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos,similar,credits`
  );
  return response.data;
});

// the slice
export const tvDetailsSlice = createSlice({
  name: 'singleTv',
  initialState: {
    status: '',
    list: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvById.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getTvById.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    });
    builder.addCase(getTvById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    });
  }
});

export default tvDetailsSlice.reducer;
