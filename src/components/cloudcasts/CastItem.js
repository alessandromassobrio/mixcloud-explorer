import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CastItem = ({ cast: { name, play_count, slug, pictures: { large }, user: { username } } } ) => {

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
          <Link to=
          {`/cast/${username}/${slug}/`}
          className='btn btn-light btn-sm my-1'
          style={{padding:'0 15px'}}
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

CastItem.propTypes = {
  cast: PropTypes.object.isRequired
};

export default CastItem;
