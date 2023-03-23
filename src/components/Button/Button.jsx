import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

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
      className={`button ${className}`}
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
