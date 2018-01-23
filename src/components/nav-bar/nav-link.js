import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './nav-bar.scss';

const NavLink = ({ to, exact, children }) => (
  <li>
    <Link
      className={style.navItem}
      activeClassName={style.navItemActive}
      to={to}
      exact={exact}
    >
      {children}
    </Link>
  </li>
);

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  children: '',
  exact: false,
};

export default NavLink;
