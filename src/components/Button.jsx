import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ type }) {
  return <div className={styles[type]}></div>;
}

export default Button;
