import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { HOME_ROUTE, TV_ROUTE } from '../routes';
import { BASE_URL, API_KEY } from '../constants/constants.js';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import SearchBox from '../components/SearchBox';
import logo from '../assets/images/logo.svg';

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const [genre, setGenre] = useState();
  const humburgerRef = useRef();
  const activeClass =
    'bg-primary px-3 py-1 rounded-sm h-full w-full hover:bg-secondary hover:text-light';
  const deactiveClass =
    'px-3 py-1 h-full w-full hover:px-3 hover:py-1 hover:bg-secondary rounded-sm hover:text-light ';

  const closeMenu = () => setmenu(false);
  const handleClick = () => {
    if (humburgerRef.current && !humburgerRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setGenre(data.genres));
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [menu]);
  return (
    <nav className="h-[50px] bg-dark  border-b border-danger text-light lg:px-12 md:px-8 px-2  flex sticky top-0 z-20 relative ">
      {/* logo */}
      <NavLink to={HOME_ROUTE} className="text-3xl w-12 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </NavLink>
      {/* navigation */}
      <div
        className={` ${
          menu
            ? 'absolute top-[50px] left-0 z-20 h-40 w-full m-0  '
            : 'sm:hidden hidden md:block lg:block '
        }  items-end lg:items-center pr-2   capitalize bg-dark border-b border-danger pt-2`}>
        <ul
          className={`flex flex-col items-end lg:items-center pr-2 justify-center justify-start  capitalize bg-dark lg:flex-row md:flex-row md:items-center gap-2`}
          ref={humburgerRef}>
          <li className="border border-dark rounded-sm " onClick={() => closeMenu()}>
            <NavLink
              to={HOME_ROUTE}
              className={({ isActive }) =>
                isActive ? `${activeClass} bg-primary` : `${deactiveClass}`
              }>
              Home
            </NavLink>
          </li>
          <li className=" border border-dark rounded-sm " onClick={() => closeMenu()}>
            <NavLink
              to={TV_ROUTE}
              className={({ isActive }) =>
                isActive ? `${activeClass} bg-primary ` : `${deactiveClass}`
              }>
              tv shows
            </NavLink>
          </li>
          <li className="min-w-[7rem] rounded-sm relative">
            <DropDown data={genre} click={closeMenu} />
          </li>
          {/* TODO: show search and loginbtn in mobile size */}
          <li className="min-w-[7rem] rounded-sm relative">
            <div className="lg:hidden md:hidden sm:absolute absolute top-0 right-0 z-40">
              <SearchBox />
            </div>
          </li>
        </ul>
      </div>

      <div className="absolute lg:right-12 md:right-8 right-3 flex items-center  gap-2 h-full">
        <i
          className={`ri ${
            !menu ? 'ri-menu-3-fill' : 'ri-close-fill text-4xl'
          }  text-3xl cursor-pointer lg:hidden md:hidden block`}
          onClick={() => setmenu((prev) => !prev)}></i>
        <div className="lg:block md:block sm:hidden hidden right-0 z-40">
          <SearchBox />
        </div>
        {/* login/signup */}
        <NavLink to="/signin" className="lg:block md:block sm:hidden hidden">
          <Button
            text="Sign in"
            css="px-3 hover:bg-secondary hover:text-light hover:border-secondary mt-0 rounded-sm"
          />
        </NavLink>
      </div>
    </nav>
  );
}
