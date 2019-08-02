import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper bg-dark'>
          <Link to='/' className='brand-logo left p-2'>
            <i className={icon}>cloud</i> {title}
          </Link>
          <ul className='nav-mobile right'>
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
  icon: 'material-icons'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
