import styles from './Customers.module.css';

import Input from '../components/form/Input';
import SubmitButton from '../components/form/SubmitButton';
import Customer from '../components/customers_page/Customer';
import Container from '../components/layout/Container';
import BigButton from '../components/global/BigButton';

import { Link } from 'react-router-dom';

function Customers() {
  return (
    <Container>
      <div className={styles.centralize}>
        <div className={styles.top}>
          <h1 className={styles.title}>Clientes</h1>
          <Input type="text" name="busca" placeholder="Faça sua busca" />
          <SubmitButton text="BUSCAR" customClass="signup_btn" />
        </div>
        <div className={styles.customersList}>
          <Customer name="João" />
          <Customer name="Maria" />
          <Customer name="Matheus" />
          <Customer name="Ana" />
          <Customer name="Pedro" />
          <Customer name="Augusto" />
        </div>
       <div className={styles.buttons}>
        <Link to="/newCustomer">
            <BigButton icon="newCostumer" name="NOVO CLIENTE" />
          </Link>
          <Link to="/">
            <SubmitButton text="DESLOGAR" customClass="logoffBtn" />
          </Link>
       </div>
      </div>
    </Container>
  );
}

export default Customers;
