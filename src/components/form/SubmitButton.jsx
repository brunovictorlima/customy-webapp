/* eslint-disable react/prop-types */
import styles from "./SubmitButton.module.css";

function SubmitButton({ text, customClass }) {
  return (
    <div>
      <button className={`${styles.btn} ${styles[customClass]}`}>{text}</button>
    </div>
  );
}

export default SubmitButton;
