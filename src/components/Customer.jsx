import Button from "./Button";
import styles from "./Customer.module.css";
import { PropTypes } from "prop-types";

function Customer({ name }) {
  return (
    <div className={styles.container_inline}>
      <div className={styles.bar} style={{ backgroundColor: 'red' }}>
        <span>{name}</span>
        <div className={styles.buttons}>
          <Button type="EditButton" />
          <Button type="DeleteButton" />
        </div>
      </div>
    </div>
  );
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Customer;
