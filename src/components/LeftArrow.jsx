import React from 'react';
import PropTypes from 'prop-types';

export default function LeftArrow({ click }) {
  return (
    <span
      className="lg:flex md:flex sm:hidden hidden absolute  lg:left-12 md:left-8 sm:left-2 left-2 h-96   text-3xl lg:h-[370px] md:h-[310px] h-52 bg-gradient-to-r from-gray-dark to-transparent text-light items-center  hover:cursor-pointer hover:from-secondary from-primary pr-2 pl-2 z-[10]"
      onClick={() => click()}>
      {'<'}
    </span>
  );
}

LeftArrow.propTypes = {
  click: PropTypes.func
};
