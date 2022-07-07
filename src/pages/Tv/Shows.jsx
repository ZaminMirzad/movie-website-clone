import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import MainContainer from '../../components/MainContainer';
import CarouselSlider from '../../components/CarouselSlider';
// async fetches
import { fetchOnAirToday } from '../../context/slices/tv/airingTodaySlice.js';
import { fetchOnAir } from '../../context/slices/tv/onAirSlice.js';
import { fetchPopulars } from '../../context/slices/tv/popularSlice.js';
import { fetchTopRated } from '../../context/slices/tv/topRatedSlice.js';

export default function Shows() {
  const dispatch = useDispatch();

  const trending = useSelector((state) => state.trending.list);
  const onAir = useSelector((state) => state.onAir.list);
  const top = useSelector((state) => state.tvTopRated.list);
  const popular = useSelector((state) => state.tvPopular.list);
  const airingToday = useSelector((state) => state.airingToday.list);

  useEffect(() => {
    dispatch(fetchOnAirToday());
    dispatch(fetchOnAir());
    dispatch(fetchPopulars());
    dispatch(fetchTopRated());
  }, [dispatch]);

  return (
    <div className="bg-gray-dark2">
      {/* carousel */}
      <CarouselSlider data={trending?.results} />
      {/* Featured Movies Shows */}
      <div className=" flex gap-5 lg:mx-12 md:mx-8 mx-3  my-6 mb-5">
        <Button text="Featured" css="px-3 py-1 " />
        <Button text="Movies" css="px-3 py-1  bg-dark border-dark" />
        <Button text="Shows" css="px-3 py-1  bg-dark border-dark" />
      </div>
      <MainContainer title="" data={airingToday?.results} type="tv" />
      {/* Popular Movies  */}
      <MainContainer title="popular" data={popular?.results} type="tv" />
      {/* Trending Movies  */}
      <MainContainer title="on air" data={onAir?.results} type="tv" />
      {/* TOP RATED For You Movies  */}
      <MainContainer title="top rated" data={top?.results} type="tv" />
    </div>
  );
}
