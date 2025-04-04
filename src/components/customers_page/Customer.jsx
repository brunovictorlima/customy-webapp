import Button from '../global/Button';
import styles from './Customer.module.css';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Customer({ id, name }) {
  return (
    <div className={styles.container_inline}>
      <div className={styles.bar}>
        {/* Link direto no nome do cliente para Notes */}
        <Link to={`/notes/${id}`} className={styles.name}>
          {name}
        </Link>
        <div className={styles.buttons}>
          <Link to={`/customers/edit/${id}`}>
            <Button type="EditButton" />
          </Link>
          <Button type="DeleteButton" />
        </div>
      </div>
    </div>
  );
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Customer;
