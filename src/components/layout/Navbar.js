import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
                <h1>
                <i className={icon} /> {title}
                </h1>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

Navbar.defaultProps = {
    title: 'Mixcloud Explorer', 
    icon: 'fab fa-mixcloud'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;

