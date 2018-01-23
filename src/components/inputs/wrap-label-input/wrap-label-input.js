import React from 'react';
import PropTypes from 'prop-types';

import style from './wrap-label-input.scss';

const WrapLabelInput = ({ children, className }) => (
  <div
    className={className || style.wrap}
  >
    {children}
  </div>
);

WrapLabelInput.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

WrapLabelInput.defaultProps = {
  className: '',
};

export default WrapLabelInput;
