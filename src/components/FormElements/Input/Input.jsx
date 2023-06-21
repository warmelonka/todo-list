import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import s from './Input.module.css';

function Input(props) {
  const {
    className,
    type,
    placeholder,
    name,
    value,
    onChange,
  } = props;

  return (
    <input
      className={clsx(s.mainInput, className)}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
