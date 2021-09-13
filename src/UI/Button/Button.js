import classes from "./Button.module.css";

const Button = (props) => {
  const typeClasses =
    props.type === "secondary"
      ? classes.secondary
      : props.type === "primary"
      ? classes.primary
      : props.type === "primaryOutlined"
      ? classes.primaryOutlined
      : null;
  const sizeClasses = props.size === "lg" ? classes.btnLarge : null;

  return (
    <button
      className={`${classes.button} ${typeClasses} ${sizeClasses} ${props.className}`}
      href={props.href} onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
