import styles from "./Login.module.css";

import Input from "../components/form/Input";
import SubmitButton from "../components/form/SubmitButton";

function Signup() {
  return (
    <section>
      <div className={styles.login_form}>
        <div className={styles.logo}></div>

        <Input
          type="text"
          text="Digite um email válido"
          name="email"
          placeholder="Digite seu e-mail"
        />

        <Input
          type="text"
          text="Digite o email novamente"
          name="email"
          placeholder="Digite seu e-mail"
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
          name="password"
          placeholder="Digite sua senha"
        />

        <SubmitButton text="REGISTRAR" customClass="signup_btn" />
      </div>
    </section>
  );
}

export default Signup;
