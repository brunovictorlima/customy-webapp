import styles from './Login.module.css';
import Input from '../components/form/Input';
import SubmitButton from '../components/form/SubmitButton';
import { Link } from 'react-router-dom';

function Login() {
  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <section>
      <div className={styles.loginForm}>
        <div className={styles.logo}></div>

        <Input
          type="text"
          text="E-mail"
          name="email"
          placeholder="Digite seu e-mail"
        />

        <Input
          type="password"
          text="Senha"
          name="password"
          placeholder="Digite sua senha"
        />

        <Link to="/customers">
          <SubmitButton text="LOGIN" onClick={handleLogin} />
        </Link>

        <span>Não tem uma conta?</span>

        <Link to="/signup">
          <SubmitButton text="REGISTRE-SE" customClass="signupBtn" />
        </Link>

        <span>Esqueci minha senha</span>
      </div>
    </section>
  );
}

export default Login;
