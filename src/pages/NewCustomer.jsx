import styles from './forms.module.css';

import Input from '../components/form/Input';
import BigButton from '../components/global/BigButton';
import SubmitButton from '../components/form/SubmitButton';
import { Link } from 'react-router-dom';

const NewCustomer = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    console.log('Formulário enviado!');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Novo cliente</h1>
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
      <div className={styles.buttons}>
        <button type="submit">
          <BigButton icon="save" name="SALVAR" />
        </button>
        <Link to="/customers">
          <SubmitButton text="VOLTAR" customClass="logoffBtn" />
        </Link>
      </div>
    </form>
  );
};

export default NewCustomer;
