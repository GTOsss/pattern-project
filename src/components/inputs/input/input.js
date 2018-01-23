import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CloseBtn from 'react-icons/lib/md/clear';

import style from './input.scss';

const Input = ({
  input, meta: { touched, error }, placeholder, setRef, cssInput,
  cssTypeGroup, cssWidth, readOnly, onBlur, onFocus, onChange: onChangeHandler,
  addon, className, classNameError, titleError, type, isNoClearButton, mask, id,
}) => (
  <div
    className={style.wrapInput}
    style={cssWidth ? { width: cssWidth, marginLeft: '-2px' } : {}}
  >
    {addon || null}
    <input
      {...input}
      id={id}
      value={(mask && mask(input.value)) || input.value}
      className={cx(
        className || style.input,
        style[cssTypeGroup],
        touched && error ? classNameError || style.inputError : '',
      )}
      onBlur={e => input.onBlur(e) && onBlur && onBlur(e)}
      onFocus={e => input.onFocus(e) && onFocus && onFocus(e)}
      onChange={e => input.onChange(e) && onChangeHandler && onChangeHandler(e)}
      type={type}
      placeholder={placeholder}
      ref={setRef}
      style={cssInput}
      readOnly={readOnly}
      title={titleError && touched && error ? error : null}
    />
    {!isNoClearButton && (input.value !== '')
      ? <CloseBtn
        className={style.clearBtn}
        onClick={() => input.onChange('')}
      /> : ''}
    { !titleError ?
      <div className={touched && error ? style.errorMsg : style.errorMsgHidden}>
        {touched && error ? error : ' '}
      </div> : null }
  </div>
);

Input.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
  cssTypeGroup: PropTypes.oneOf(['left', 'right', 'both', 'none']),
  cssWidth: PropTypes.string,
  className: PropTypes.string,
  classNameError: PropTypes.string,
  setRef: PropTypes.func,
  cssInput: PropTypes.objectOf(PropTypes.any),
  readOnly: PropTypes.bool,
  titleError: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  addon: PropTypes.element,
  type: PropTypes.string,
  isNoClearButton: PropTypes.bool,
  mask: PropTypes.func,
  id: PropTypes.string,
};

Input.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
  cssTypeGroup: 'none',
  cssWidth: '',
  className: '',
  classNameError: '',
  type: 'text',
  setRef: null,
  cssInput: {},
  readOnly: false,
  onBlur: null,
  onFocus: null,
  onChange: null,
  addon: null,
  titleError: false,
  isNoClearButton: true,
  mask: null,
  id: '',
};

export default Input;
