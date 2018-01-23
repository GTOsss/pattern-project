import React from 'react';
import PropTypes from 'prop-types';

import style from './label.scss';

const Label = ({ children, className, htmlFor }) => (
  <label
    className={className || style.label}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  className: '',
  htmlFor: '',
};

export default Label;
