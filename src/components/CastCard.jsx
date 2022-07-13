import PropTypes from 'prop-types';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

import { PICTURE_URL } from '../constants/constants.js';

export default function CastCard({ data, title, css }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${css} `}>
        <h1 className="text-3xl font-normal capitalize">{title}</h1>
        <div className="flex overflow-auto  cusScroll  mt-4">
          <div className="flex gap-1 font-semibold ">
            {data?.map((cr) => (
              <div
                key={cr.id}
                className="bg-cover h-36 w-28 min-w-28 relative rounded-sm hover:cursor-pointer"
                style={{
                  backgroundImage: cr.profile_path
                    ? `url(${PICTURE_URL}/w185/${cr.profile_path})`
                    : 'url("https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png")',
                  backgroundPosition: 'center'
                }}
                loading="lazy"
                onClick={() => navigate(`/person/${cr.id}`)}>
                <span className="text-[10px] text-gray bg-dark absolute bottom-0 w-full p-0.5 rounded-b-sm font-bold">
                  {cr.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

CastCard.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  css: PropTypes.string
};
CastCard.defaultProps = {
  data: [],
  title: '',
  css: ''
};
