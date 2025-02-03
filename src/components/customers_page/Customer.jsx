import Button from '../global/Button';
import styles from './Customer.module.css';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Customer({ name }) {
  return (
    <div className={styles.container_inline}>
      <div className={styles.bar}>
        <span>{name}</span>
        <div className={styles.buttons}>
          <Link to="/editCustomer">
            <Button type="EditButton" />
          </Link>
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
