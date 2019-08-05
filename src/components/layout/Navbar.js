import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper bg-dark'>
          <div className='brand-logo left'>
            <i className={icon} /> {title}
          </div>
          <ul className='nav-mobile right'>
            <li>
              <Link to='/'>Search</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Mixcloud Explorer',
  icon: 'fab fa-mixcloud left'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
