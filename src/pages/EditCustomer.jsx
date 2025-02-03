import styles from './forms.module.css';

import Input from '../components/form/Input';
import BigButton from '../components/global/BigButton';
import { Link } from 'react-router-dom';

const EditCustomer = () => {
  return (
    <section className={styles.form}>
      <h1 className={styles.title}>Editar cliente</h1>
      <div className={styles.inputs}>
        <Input
          type="text"
          text="Nome"
          name="customerName"
          placeholder="Digite o nome do(a) cliente"
        />
        <Input
          type="phone"
          text="Telefone"
          name="phoneNumber"
          placeholder="(00) 00000-0000"
        />
        <Input
          type="email"
          text="E-mail"
          name="email"
          placeholder="example@email.com"
        />
      </div>
      <Link to="/customers">
        <BigButton icon="save" name="SALVAR" />
      </Link>
    </section>
  );
};

export default EditCustomer;
