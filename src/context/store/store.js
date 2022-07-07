import { configureStore } from '@reduxjs/toolkit';

import trendeingReducer from '../slices/movie/trendingSlice';
import popularReducer from '../slices/movie/popularSlice';
import upcomingReducer from '../slices/movie/upcomingSlice';
import topRatedReducer from '../slices/movie/topRatedSlice';
import nowReducer from '../slices/movie/nowPlayingSlice';
import movieDetailsReducer from '../slices/movie/getMovieDetailsSlice';
import tvPopularReducer from '../slices/tv/popularSlice';
import tvTopRatedReducer from '../slices/tv/topRatedSlice';
import tvOnAirReducer from '../slices/tv/onAirSlice';
import tvAiringTodayReducer from '../slices/tv/airingTodaySlice';
import tvDetailsReducer from '../slices/tv/getTvDetailsSlice';
import searchResultsReducer from '../slices/searchSlice';

export default configureStore({
  reducer: {
    trending: trendeingReducer,
    popular: popularReducer,
    upcoming: upcomingReducer,
    topRated: topRatedReducer,
    now: nowReducer,
    movieDetails: movieDetailsReducer,
    // tvs
    tvPopular: tvPopularReducer,
    tvTopRated: tvTopRatedReducer,
    onAir: tvOnAirReducer,
    airingToday: tvAiringTodayReducer,
    tvDetails: tvDetailsReducer,
    // search results
    searchResults: searchResultsReducer
  }
});
