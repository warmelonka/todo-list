import React from 'react';
import './Textarea.css';

function Textarea(props) {
  const {
    className,
    placeholder,
    name,
    value,
    onChange,
  } = props;

  // const handlerResize = (e) => {
  //     e.target.style.height = 'auto'
  //     e.target.style.height = e.target.scrollHeight + 2 + "px"
  // }

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

export default Textarea;
