import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button(props) {
  const {
    children,
    onClick,
    disabled,
    className,
    value,
  } = props;
  return (
    <button
      className={clsx(s.button, className)}
      type="button"
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
