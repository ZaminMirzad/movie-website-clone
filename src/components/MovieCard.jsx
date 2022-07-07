import PropTypes from 'prop-types';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { PICTURE_URL } from '../constants/constants';
// import puls from '../assets/images/pulse.svg';

function MovieCard({ image, name, date, country, rate, click, media }) {
  return (
    <div
      className="flex lg:h-[370px] md:h-[310px] sm:h-56 h-56 lg:w-64 md:w-44 sm:w-32 w-28  flex-col lg:gap-2 gap border-b-2 border-dark hover:border-secondary cursor-pointer justify-between pb-2 transition-all ease-in-out duration-300 min-w-80 relative flex-auto max-w-[15rem] mb-10 bg-primary rounded-sm"
      onClick={click}>
      <div className="h-32 lg:h-64 md:h-52 ">
        <img
          src={
            `${PICTURE_URL}${image}` ||
            'https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png'
          }
          alt={name}
          placeholder="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
          load="eager"
          className="h-full w-full rounded-t-sm"
        />
      </div>
      <span className=" text-gray capitalize mx-1 lg:text-lg md:text-sm text-[10px] break-normal ">
        {name?.slice(0, 34)}
      </span>
      <p className=" text-gray flex items-center gap-2 justify-around  mx-1 lg:text-lg md:text-sm text-[8px]">
        {date && <span className="lg:text-lg md:text-sm text-xs">{date?.slice(0, 4)}</span>}
        {rate !== 0 && (
          <span className="text-yellow-400 fill-current">
            {Array.from({ length: parseInt(rate / 2) }, (_, i) => i + 1).map((r) => {
              return <i key={r} className="ri-star-s-fill text-warning "></i>;
            })}
          </span>
        )}
        {country && (
          <span className="border   flex items-center justify-center  uppercase m-0 p-0 w-3 h-3 lg:w-auto lg:h-auto md:h-auto md:w-auto rounded-sm">
            {country}
          </span>
        )}
        {media && (
          <span className="border  flex items-center uppercase  lg:w-auto lg:h-auto md:h-auto md:w-auto rounded-sm">
            {media}
          </span>
        )}
      </p>
    </div>
  );
}

MovieCard.propTypes = {
  image: PropTypes.string,
  // id: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  country: PropTypes.string,
  rate: PropTypes.number,
  click: PropTypes.func,
  media: PropTypes.string
};
MovieCard.defaultProps = {
  image: '',
  // id: '',
  name: '',
  date: '',
  country: '',
  media: '',
  click: () => {}
};

export default MovieCard;
