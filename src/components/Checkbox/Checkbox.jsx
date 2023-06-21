import React from 'react';
import PropTypes from 'prop-types';
import s from './Checkbox.module.css';

function Checkbox(props) {
  const { checked, onChange } = props;

  return (
    <label className={s.checkbox}>
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
};

export default Checkbox;
