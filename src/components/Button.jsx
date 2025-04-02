function Button({
  children,
  type = "filled",
  size = "normal",
  icon = null,
  width = "100%",
  onClick,
  disabled = false,
}) {
  return (
    <button
      style={{ width }}
      className={`button button--${type} button--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children && <span className="button__text">{children}</span>}
    </button>
  );
}

export default Button;
