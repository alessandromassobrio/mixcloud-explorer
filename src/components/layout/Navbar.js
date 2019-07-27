import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    return (
        <div>
            <nav className='navbar bg-secondary'>
                <h1>
                <i className={icon} /> {title}
                </h1>
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

