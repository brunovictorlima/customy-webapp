import styles from './SubmitButton.module.css';
import PropTypes from 'prop-types';

function SubmitButton({ text, customClass, onClick }) {
  return (
    <button
      className={`${styles.btn} ${styles[customClass]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
};

export default SubmitButton;
