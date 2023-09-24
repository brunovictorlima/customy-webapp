import styles from "./Login.module.css";

import Input from "../components/form/Input";
import SubmitButton from "../components/form/SubmitButton";

function Login() {
  return (
    <section>
      <div className={styles.login_form}>
        <div className={styles.logo}></div>

        <Input
          type="text"
          text="e-mail"
          name="email"
          placeholder="Digite seu e-mail"
        />

        <Input
          type="password"
          text="senha"
          name="password"
          placeholder="Digite sua senha"
        />

        <SubmitButton text="LOGIN" />

        <span>Não tem uma conta?</span>

        <SubmitButton text="REGISTRE-SE" customClass="signup_btn" />

        <span>Esqueci minha senha</span>
      </div>
    </section>
  );
}

export default Login;
