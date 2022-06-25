import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import info from '../popular.json';
import { PICTURE_URL } from '../constants/constants';
import Button from '../components/Button';
import MovieCard from '../components/MovieCard';
import RightArrow from '../components/RightArrow';
import LeftArrow from '../components/LeftArrow';
import { MOVIE_ROUTE, TV_ROUTE } from '../routes';

function Home() {
  const navigate = useNavigate();

  const populars = useSelector((state) => state.popular?.list?.results);
  const upcomings = useSelector((state) => state.upcoming?.list?.results);
  const trendings = useSelector((state) => state.trending?.list?.results);
  const topRated = useSelector((state) => state.topRated?.list?.results);
  const now = useSelector((state) => state.now?.list?.results);

  return (
    <div className="bg-gray-dark2">
      <Carousel showThumbs={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
        {now?.map((i) => {
          return (
            <div
              key={i.id}
              style={{
                backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.99),
           transparent),url(${PICTURE_URL}${i.backdrop_path}) `,
                // height: '90vh',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              className=" lg:h-full md:h-96 sm:px-10 lg:px-24 md:px-12 py-10 grid lg:grid-cols-3 md:grid-cols-2   justify-center items-end ">
              {/* details */}
              <div className="text-white order-1 lg:order-none  self-center p-2 flex flex-col gap-1 bg-gray-800 bg-opacity-0">
                <h1 className="text-xl lg:text-5xl md:text-2xl  self-start">
                  {i.name || i.original_name || i.title}
                </h1>
                <p className="flex gap-2 items-center self-start mt-5">
                  <span className="text-yellow-400 fill-current">
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-line"></i>
                  </span>{' '}
                  <span>{i.first_air_date?.slice(0, 4)}</span>
                  <span className="border px-1 py-0 text-sm font-bold">T</span>
                  {i.origin_country?.map((o) => {
                    return (
                      <span key={o} className="border px-1 py-0 text-sm font-bold">
                        {o}
                      </span>
                    );
                  })}
                </p>
                <p className="hidden md:block lg:block self-start text-left">
                  {i.overview.slice(0, 156)}...
                </p>
                <p className="flex gap-4 mt-6 lg:w-96  w-80">
                  {' '}
                  <Button
                    text="Play Now"
                    icon="play-circle-fill"
                    css="lg:px-5 px-2 py-2 lg:w-52 md:w-28 w-24 text-sm"
                    click={() => navigate(`${MOVIE_ROUTE}/${i.id}`)}
                  />
                  <Button
                    text="My List"
                    icon="add-circle-fill"
                    css="lg:px-5 px-2 py-2 lg:w-52 md:w-28 w-24 text-sm"
                    onClick={() => {}}
                  />
                </p>
              </div>
              <div />
            </div>
          );
        })}
      </Carousel>
      {/* Featured Movies Shows */}
      <div className="lg:mx-24 md:mx-12 sm:mx-2  my-6 ">
        <div className=" flex gap-5 mb-5">
          <Button text="Featured" css="px-3 py-1 " />
          <Button text="Movies" css="px-3 py-1  bg-dark border-dark" />
          <Button text="Shows" css="px-3 py-1  bg-dark border-dark" />
        </div>
        <div className="flex overflow-x-scroll   mb-14  scrollbar-hide relative " id="elem">
          <LeftArrow />
          <div className="flex gap-3 ">
            {trendings?.map((x) => {
              return (
                <MovieCard
                  key={x.id}
                  name={x.name || x.original_title}
                  date={x.first_air_date}
                  image={x.poster_path}
                  rate={x.vote_average}
                  country={x.original_country || x.original_language.toUpperCase()}
                  click={() =>
                    navigate(`${x.media_type === 'tv' ? TV_ROUTE : MOVIE_ROUTE}/${x.id}`)
                  }
                  id={x.id}
                  media={x.media_type}
                />
              );
            })}
          </div>
          <RightArrow />
        </div>
      </div>
      {/* Popular Movies  */}
      <div className="lg:mx-24 md:mx-12 sm:mx-2  my-6 ">
        <div className="mb-5 flex flex-col gap-2">
          <h1 className="text-4xl text-white">POPULAR MOVIES</h1>
          <div className="border-b-4 border-b-red-light w-20"></div>
        </div>
        <div className="flex overflow-x-scroll scroll  mb-14  scrollbar-hide  " id="elem">
          <LeftArrow />
          <div className="flex gap-3">
            {populars?.map((x) => {
              return (
                <MovieCard
                  key={x.id}
                  name={x.name || x.original_title}
                  date={x.first_air_date}
                  image={x.poster_path}
                  rate={x.vote_average}
                  country={x.original_country || x.original_language.toUpperCase()}
                  click={() => navigate(`${MOVIE_ROUTE}/${x.id}`)}
                />
              );
            })}
          </div>
          <RightArrow />
        </div>
      </div>
      {/* upcomings Movies  */}
      <div className="lg:mx-24 md:mx-12 sm:mx-2  my-6 ">
        <div className="mb-5 flex flex-col gap-2">
          <h1 className="text-4xl text-white">UPCOMING MOVIES</h1>
          <div className="border-b-4 border-b-red-light w-20"></div>
        </div>
        <div className="flex overflow-x-scroll scroll  mb-14  scrollbar-hide  " id="elem">
          <LeftArrow />
          <div className="flex gap-3">
            {upcomings?.map((x) => {
              return (
                <MovieCard
                  key={x.id}
                  name={x.name || x.original_title}
                  date={x.first_air_date}
                  image={x.poster_path}
                  rate={x.vote_average}
                  country={x.original_country || x.original_language.toUpperCase()}
                  click={() => navigate(`${MOVIE_ROUTE}/${x.id}`)}
                />
              );
            })}
          </div>
          <RightArrow />
        </div>
      </div>
      {/* Suggested For You Movies  */}
      <div className="lg:mx-24 md:mx-12 sm:mx-2 my-6 ">
        <div className="mb-5 flex flex-col gap-2">
          <h1 className="text-4xl text-white">TOP RATED</h1>
          <div className="border-b-4 border-b-red-light w-20"></div>
        </div>
        <div className="flex overflow-x-scroll scroll  mb-14  scrollbar-hide  " id="elem">
          <LeftArrow />
          <div className="flex gap-3">
            {topRated?.map((x) => {
              return (
                <MovieCard
                  key={x.id}
                  name={x.name || x.original_title}
                  date={x.first_air_date}
                  image={x.poster_path}
                  rate={x.vote_average}
                  country={x.original_country || x.original_language.toUpperCase()}
                  click={() => navigate(`${MOVIE_ROUTE}/${x.id}`)}
                />
              );
            })}
          </div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

export default Home;
