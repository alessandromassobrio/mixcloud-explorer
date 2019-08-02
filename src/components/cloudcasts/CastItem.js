import React from 'react';
import PropTypes from 'prop-types';

const CastItem = ({ cast: { name, url, play_count, slug, pictures: { large }, user: { username } } } ) => {

  return (
    <div className='col xl4 l4 m6 s12'>
      <div className='card large text-center'>
      <img 
        src={large}
        alt={slug}
        />
        <h5 style={{height:'100px'}}>{name}</h5>
        <span>Play count: <small>{play_count}</small></span><br />
        <span><small>by {username}</small></span>
        <div>
          <a href={`${url}`} className='btn btn-light btn-sm my-1' target='_blank' rel="noopener noreferrer">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

CastItem.propTypes = {
  cast: PropTypes.object.isRequired
};

export default CastItem;
