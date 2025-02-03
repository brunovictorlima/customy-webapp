import styles from './Login.module.css';

import Input from '../components/form/Input';
import SubmitButton from '../components/form/SubmitButton';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <section>
      <div className={styles.loginForm}>
        <div className={styles.logo}></div>

        <Input
          type="text"
          text="Digite seu e-mail"
          name="email"
          placeholder="example@email.com"
        />

        <Input
          type="text"
          text="Digite o email novamente"
          name="emailConfirmation"
          placeholder="example@email.com"
        />

        <Input
          type="password"
          text="Crie uma senha"
          name="password"
          placeholder="Digite sua senha"
        />

        <Input
          type="password"
          text="Digite a senha novamente"
          name="passwordConfirmation"
          placeholder="Digite sua senha"
        />

        <Link to="/">
          <SubmitButton text="REGISTRAR" customClass="btn" />
        </Link>
      </div>
    </section>
  );
}

export default Signup;
