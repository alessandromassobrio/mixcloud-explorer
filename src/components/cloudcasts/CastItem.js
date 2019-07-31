import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CastItem = ({ cast: { name, url, play_count, slug, pictures: { large }, user: { username } } } ) => {

  return (
    <div className='card text-center'>
    <img 
      src={large}
      alt={slug}
      />
      <h4>{name}</h4>
      <span>Play count: <small>{play_count}</small></span>
      <span><small>by {username}</small></span>
      <div>
        <a href={`${url}`} className='btn btn-light btn-sm my-1' target='_blank'>
          More
        </a>
      </div>
    </div>
  );
};

CastItem.propTypes = {
  cast: PropTypes.object.isRequired
};

export default CastItem;
