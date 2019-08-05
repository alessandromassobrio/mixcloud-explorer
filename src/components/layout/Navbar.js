import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title, home_i, more_i }) => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper bg-dark'>
          <div className='brand-logo left'>
            <i className={icon} /> {title}
          </div>
          <ul className='right hide-on-small-only'>
            <li>
              <Link to='/'><i className={home_i}>home</i></Link>
            </li>
            <li>
              <Link to='/about'><i className={more_i}>more_vert</i></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Mixcloud Explorer',
  icon: 'fab fa-mixcloud left',
  home_i: 'material-icons',
  more_i: 'material-icons'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  home_i: PropTypes.string.isRequired,
  more_i: PropTypes.string.isRequired
};

export default Navbar;
