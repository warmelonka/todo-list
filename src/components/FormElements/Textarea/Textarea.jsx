import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import s from './Textarea.module.css';

function Textarea(props) {
  const {
    className,
    placeholder,
    name,
    value,
    onChange,
  } = props;

  return (
    <textarea
      className={clsx(s.mainTextarea, className)}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

Textarea.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
