import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import style from './dropdown.scss';

const Dropdown = ({ children, className }) => (
  <div
    className={cx(className, style.wrap)}
  >
    {children}
  </div>
);

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  children: '',
  className: '',
};

export default Dropdown;
