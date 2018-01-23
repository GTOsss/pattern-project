import React from 'react';
import PropTypes from 'prop-types';
import LanguageIcon from 'react-icons/lib/md/language';
import BottomArrow from 'react-icons/lib/ti/arrow-sorted-down';

import style from './change-language.scss';

const Button = ({ children, onClick }) => (
  <div
    className={style.languageButton}
    onClick={onClick}
  >
    <span>{children}</span>
    <BottomArrow className={style.bottomArrowIcon} />
    <LanguageIcon className={style.languageIcon} />
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
