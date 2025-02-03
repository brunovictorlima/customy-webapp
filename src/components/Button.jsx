import styles from "./Button.module.css";
import {PropTypes} from 'prop-types';

function Button({ type }) {
  return <div className={styles[type]}></div>;
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
