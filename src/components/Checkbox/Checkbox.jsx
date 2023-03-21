import React from 'react';
import './Checkbox.css';

function Checkbox(props) {
  const { checked, onChange } = props;

  return (
    <label className="checkbox">
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

export default Checkbox;
