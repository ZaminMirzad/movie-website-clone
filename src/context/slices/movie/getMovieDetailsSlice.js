import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../../constants/constants';

// fetching thunk function
export const getMovieById = createAsyncThunk('movies/fetchById', async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,similar,credits`
  );
  return response.data;
});

// the slice
export const movieDetailsSlice = createSlice({
  name: 'singleMovie',
  initialState: {
    status: '',
    list: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieById.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    });
    builder.addCase(getMovieById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    });
  }
});

export default movieDetailsSlice.reducer;
