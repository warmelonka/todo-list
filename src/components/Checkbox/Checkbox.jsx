import React from 'react';
import './Checkbox.css';
import PropTypes from 'prop-types';

function Checkbox(props) {
  const { checked, onChange } = props;

  return (
    <label className="checkbox" htmlFor="checkbox">
      <input
        className="visually-hidden"
        id="checkbox"
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
