import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CastItem = ({ user: { name, url, play_count } }) => {
  return (
    <div className='card text-center'>
      <h4>{name}</h4>
      <span>Play count: <small>{play_count}</small></span>
      <div>
        <a href={`${url}`} className='btn btn-dark btn-sm my-1' target='_blank'>
          More
        </a>
      </div>
    </div>
  );
};

CastItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default CastItem;
