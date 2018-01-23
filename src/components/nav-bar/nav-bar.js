import React from 'react';
import PropTypes from 'prop-types';

import style from './nav-bar.scss';

const NavBar = ({ title, children }) => (
  <nav>
    {title || ''}
    <ul className={style.navbar}>
      {children}
    </ul>
  </nav>
);

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: '',
};

export default NavBar;
