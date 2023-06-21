import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import s from './Checkbox.module.css';

function Checkbox(props) {
  const { checked, onChange, className } = props;

  return (
    <label className={clsx(s.checkbox, className)}>
      <input
        className="visually-hidden"
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span />
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Checkbox;
