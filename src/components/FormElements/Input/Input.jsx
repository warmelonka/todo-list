import './Input.css';

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
      className={`main-input ${className}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
