import { useSelector } from 'react-redux';

import MainContainer from '../components/MainContainer';
import CarouselSlider from '../components/CarouselSlider';
import Button from '../components/Button';

function Home() {
  const trending = useSelector((state) => state.trending.list);
  const nowplaying = useSelector((state) => state.now.list);
  const popular = useSelector((state) => state.popular.list);
  const top = useSelector((state) => state.topRated.list);
  const upcoming = useSelector((state) => state.upcoming.list);

  return (
    <div className="bg-dark">
      {/* carousel */}
      <CarouselSlider data={trending?.results} />
      {/* Featured Movies Shows */}
      <div className="lg:mx-12 md:mx-12 sm:mx-2 mx-2  my-6  flex gap-5 mb-5">
        <Button text="Featured" css="px-3 py-1 " />
        <Button text="Movies" css="px-3 py-1  bg-dark border-dark" />
        <Button text="Shows" css="px-3 py-1  bg-dark border-dark" />
      </div>
      <MainContainer title="" data={nowplaying?.results} />

      {/* Popular Movies  */}
      <MainContainer title="Popular" data={popular?.results} />

      {/* upcomings Movies  */}
      <MainContainer title="Upcoming" data={upcoming?.results} />

      {/* top rated Movies  */}
      <MainContainer title="top rated" data={top?.results} />
    </div>
  );
}

export default Home;
