import './Button.css';

function Button(props) {
  const {
    children,
    onClick,
    state,
    className,
    value,
  } = props;
  return (
    <button
      className={`button ${className}`}
      type="button"
      value={value}
      onClick={onClick}
      disabled={state}
    >
      {children}
    </button>
  );
}

export default Button;
