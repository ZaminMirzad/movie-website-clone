import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/Button';
import MainContainer from '../../../components/MainContainer';
import CastCard from '../../../components/CastCard';
import VideoModal from '../../../components/VideoModal';

import { PICTURE_URL } from '../../../constants/constants';
import { getTvById } from '../../../context/slices/tv/getTvDetailsSlice.js';
import svg from '../../../assets/images/pulse.svg';

export default function SingleTv() {
  const [show, setShow] = useState(false);
  const details = useSelector((state) => state.tvDetails.list);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTvById(params.tvId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.tvId]);

  const producer = details?.credits?.crew?.filter(
    (x) =>
      x.job?.toLocaleLowerCase() === 'producer' ||
      x.job?.toLocaleLowerCase() === 'executive producer'
  );

  const el = document.getElementById('modal');
  const handleClick = (e) => {
    if (el !== e.currentTarget) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [show]);
  return (
    <div className="text-light">
      {/* video */}
      {details?.videos?.results?.length > 0 && (
        <VideoModal
          videos={details?.videos?.results[0]}
          click={() => handleClick}
          id="modal"
          show={show}
        />
      )}
      {/* End video */}
      <div
        style={{
          backgroundImage: `url(${PICTURE_URL}/original/${details?.backdrop_path})` || { svg },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImageRepeat: 'no-repeat',
          load: 'eager'
        }}
        className="lg:h-[calc(100vh-10vh)]   w-full flex flex-col lg:justify-center md:justify-end justify-end"
        loading="eager">
        <div className="lg:px-12 md:px-8 sm:px-4 px-4 py-10 flex flex-col lg:items-center md:items-center items-center sm:items-center gap-10 lg:flex-row sm:flex-col md:flex-row lg:justify-start">
          <div className="flex flex-col justify-between place-self-center self-center h-full  p-5 lg:w-[500px]  w-96  bg-opacity-80 lg:ml-5 bg-dark rounded-lg">
            <h1 className="text-xl lg:text-4xl md:text-2xl ">
              {details?.original_title || details?.name} ({details?.first_air_date?.slice(0, 4)})
            </h1>
            <div className="flex flex-wrap gap-4  w-full my-5 flex-col lg:flex-row text-sm">
              <span className="flex items-center gap-1 text-gray ">
                <span className="flex items-center gap-1 text-gray  ">
                  <i className="ri-user-fill text-warning"></i>
                  {details?.adult ? '18+' : '12+'}
                </span>
                {details?.runtime && (
                  <span>
                    <i className="ri-time-line"></i>
                    {Math.floor(details?.runtime / 60)}hr {details?.runtime % 60}min
                  </span>
                )}
              </span>

              <span className="flex items-center gap-1 text-gray text-xs  ">
                <i className="ri-user-smile-line text-warning"></i>
                {details?.genres.map((g) => (
                  <span key={g.id} className="border rounded-sm px-2 border-secondary">
                    {g.name}
                  </span>
                ))}
              </span>
              <span className="flex items-center gap-1 text-gray  text-sm">
                <i className="ri-earth-line text-warning"></i>
                {details?.production_countries.map((c) => c.name).join(', ')}
              </span>
            </div>
            <p className="w-full">{details?.overview}</p>
            {/* buttons */}
            <div className="flex  mt-1 gap-1 w-full place-self-center ">
              <Button
                text="Trailer"
                icon="play-fill"
                css="lg:w-36 md:w-24 w-24 flex justify-center py-1 md:text-md  text-sm"
                click={() => setShow(true)}
              />
              <Button
                text="My List"
                icon="add-line"
                css="lg:w-36 md:w-24 w-24 flex justify-center py-1 md:text-md  text-sm"
              />
              <Button
                text="Share"
                icon="share-fill"
                css="lg:w-36 md:w-24 w-24 flex justify-center py-1 md:text-md  text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      {/* casts and crews */}
      <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  mt-5 lg:px-12 md:px-8 sm:px-4 px-4">
        <CastCard data={producer?.slice(0, 1)} title="producer" css="mb-5 col-span-1" />
        <CastCard
          data={details?.credits?.cast}
          title="casts"
          css="col-span-5 mb-5 lg:mr-12 md:mr-8 sm:mr-4 w-full"
        />
      </div>
      {/* related movies */}
      <MainContainer title="related" data={details?.similar?.results} />
    </div>
  );
}
