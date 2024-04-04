import styles from "./BigButton.module.css";

// eslint-disable-next-line react/prop-types
function BigButton({ icon, name }) {
  return (
    <div className={styles.button}>
      <div className={icon}></div>
      <span>{name}</span>
    </div>
  );
}

export default BigButton;
