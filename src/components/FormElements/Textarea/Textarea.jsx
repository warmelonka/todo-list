import React from 'react';
import './Textarea.css';
import PropTypes from 'prop-types';

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
      className={`main-textarea ${className}`}
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
