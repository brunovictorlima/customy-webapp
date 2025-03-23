import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';

import Input from '../components/form/Input';
import SubmitButton from '../components/form/SubmitButton';

function Login() {
  const navigate = useNavigate(); // Para redirecionar após login
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // Para exibir mensagens de erro

  // Atualiza os valores dos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Lida com a submissão do formulário
  const handleLogin = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    if (!formData.email || !formData.password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Substitua esta lógica pela integração com sua API de autenticação
    if (
      formData.email === 'teste@email.com' &&
      formData.password === '123456'
    ) {
      alert('Login bem-sucedido!');
      navigate('/customers'); // Redireciona para a página de clientes
    } else {
      setError('E-mail ou senha inválidos.');
    }
  };

  return (
    <section>
      <div className={styles.loginForm}>
        <div className={styles.logo}></div>

        <form onSubmit={handleLogin}>
          <Input
            type="text"
            text="E-mail"
            name="email"
            placeholder="Digite seu e-mail"
            value={formData.email} // Campo controlado
            handleOnChange={handleChange} // Atualiza o estado
          />

          <Input
            type="password"
            text="Senha"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password} // Campo controlado
            handleOnChange={handleChange} // Atualiza o estado
          />

          {error && <p className={styles.error}>{error}</p>}

          <SubmitButton text="LOGIN" />
        </form>

        <span>Não tem uma conta?</span>

        <Link to="/signup">
          <SubmitButton text="REGISTRE-SE" customClass="signupBtn" />
        </Link>

        <span className={styles.recoverPass}>Esqueci minha senha</span>
      </div>
    </section>
  );
}

export default Login;
