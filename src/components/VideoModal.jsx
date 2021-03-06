import React from 'react';
import PropTypes from 'prop-types';

import { PICTURE_URL } from '../constants/constants.js';

export default function VideoModal(props) {
  const { videos, id, click, show } = props;
  if (show)
    return (
      <div
        id={id}
        className="h-screen w-full bg-dark bg-opacity-90 transition-transform duration-1000 ease-in-out  fixed  top-0 z-50">
        <div className=" lg:h-[80vh] md:h-[65vh] sm:h-[55vh] h-[45vh] lg:w-[90vw] w-full  bg-gray-dark fixed  z-10 rounded-lg lg:top-1/2 top-1/3 left-1/3 lg:left-1/2 transform origni-top lg:-translate-x-1/2 -translate-x-1/3 lg:-translate-y-1/2 -translate-y-1/3">
          <iframe
            src={`https://www.youtube.com/embed/${videos?.key}?autoplay=1`}
            frameBorder="1"
            allowFullScreen
            className=" w-full h-full rounded-lg"
            poster={`${PICTURE_URL}/x6FsYvt33846IQnDSFxla9j0RX8.jpg`}
            loading="eager"
          />
          <button
            className="bg-danger text-light w-10 h-10 text-center p-1 rounded-tr-lg rounded-bl-3xl capitalize absolute top-0 right-0 text-2xl hover:bg-primary"
            onClick={click}>
            X
          </button>
        </div>
      </div>
    );
}

VideoModal.propTypes = {
  videos: PropTypes.object,
  click: PropTypes.func,
  show: PropTypes.bool,
  id: PropTypes.string
};

VideoModal.defaultProps = {
  ref: {},
  videos: {},
  show: false,
  id: ''
};
