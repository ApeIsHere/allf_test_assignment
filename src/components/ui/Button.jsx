function Button({
  children,
  type = "filled",
  size = "normal",
  icon: IconComponent = null,
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
      {IconComponent && IconComponent}
      {children && <span>{children}</span>}
    </button>
  );
}

export default Button;
