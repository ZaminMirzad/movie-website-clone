import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SEARCH_ROUTE } from '../routes';
import { BASE_URL, API_KEY } from '../constants/constants.js';

export default function SearchBox() {
  const [term, setTerm] = useState('');
  const [res, setRes] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    event.preventDefault();
    navigate(`${SEARCH_ROUTE}/${term}`);
    setShow(false);
  };

  const handleChange = async () => {
    setTerm(event.target.value);
    const res = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${term}`);
    const json = await res.json();
    setRes(json.results?.slice(0, 15));
    setShow(true);
  };
  return (
    <div className="relative">
      <form
        onSubmit={() => handleSubmit()}
        className="border border-primary flex items-center gap-1 rounded-sm ">
        <input
          type="text"
          className="bg-primary outline-none px-2 py-0.5 focus:border-secondary border-primary border rounded-[1px] caret-secondary"
          placeholder="Search..."
          value={term}
          onChange={() => handleChange()}
          required
        />
        <i
          className={`text-lg ${
            term === '' ? 'ri-search-line' : 'ri-close-fill'
          } mr-1 w-6 h-6 flex items-center justify-center cursor-pointer hover:text-light text-primary text-2xl font-bold`}
          onClick={() => setTerm('')}></i>
      </form>
      {term !== '' && show && (
        <div className="absolute bg-primary rounded-sm flex flex-col gap-2 max-h-72 shadow-xl overflow-y-auto scrollbar-thin w-full mt-1 overflow-x-hidden ">
          {res?.length !== 0 &&
            res?.map((a) => {
              return (
                <span
                  key={a.id}
                  className="hover:bg-secondary rounded-sm px-1 hover:cursor-pointer mb-1 mx-1 "
                  onClick={() => {
                    navigate(`${SEARCH_ROUTE}/${a.name || a.title}`);
                    setShow(false);
                  }}>
                  {a.name || a.title}
                </span>
              );
            })}
        </div>
      )}
    </div>
  );
}
