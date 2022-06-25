import PropTypes from 'prop-types';

import { PICTURE_URL } from '../constants/constants';

function MovieCard({ image, name, date, country, rate, click, media }) {
  return (
    <div
      className="flex h-96 w-48 flex-col gap-2 border-b-2 border-dark hover:border-red-light cursor-pointer justify-between pb-2 transition-all ease-in-out duration-500 min-w-80 "
      onClick={click}>
      <div className="h-72">
        <img src={PICTURE_URL + image} alt={name} className="h-full " />
      </div>
      <h1 className="text-white font-semibold truncate">{name.toUpperCase()}</h1>
      <p className="text-gray flex justify-between font-semibold">
        <span>{date.slice(0, 4)}</span>
        <span className="flex items-center">
          <i className="ri-star-fill px-1 text-yellow text-sm"></i>
          {rate}/10
        </span>
        <span className="border px-0.5 text-xs flex flex-col justify-center">{country}</span>
        {media && (
          <span className="border px-0.5 text-xs flex flex-col justify-center">
            {media.toUpperCase()}
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
  rate: 0,
  media: '',
  click: () => {}
};

export default MovieCard;
