import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL, API_KEY, PICTURE_URL } from '../../constants/constants.js';
// import svg from '../../assets/images/pulse.svg';

export default function Person() {
  const [data, setdata] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/person/${params.personId}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [params.personId]);
  return (
    <div className="lg:px-12 md:px-8 px-4 text-light">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 my-10">
        <img
          src={`${PICTURE_URL}/original/${data?.profile_path}`}
          alt={data?.name}
          className="h-auto w-full col-span-1"
        />
        <div className="col-span-2">
          <h1 className="text-3xl mb-2">{data?.name}</h1>
          <span className="mb-2">{data?.place_of_birth}</span>
          <h2 className="flex lg:flex-row md:flex-row flex-col gap-3 mb-2">
            {data?.also_known_as?.slice(0, 3).map((a, i) => (
              <span key={i}>{a}</span>
            ))}
          </h2>
          <h1>
            {data?.birthday} {data?.known_for_department}
          </h1>
          <p className="mt-5">{data?.biography}</p>
        </div>
      </div>
    </div>
  );
}
