import { useState, useEffect } from 'react';
import styles from './forms.module.css';

import Input from '../components/form/Input';
import BigButton from '../components/global/BigButton';
import SubmitButton from '../components/form/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const NewCustomer = () => {
  // Estado para controlar os campos do formulário
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState(null); // Mensagem de erro
  const [success, setSuccess] = useState(false); // Controle de sucesso
  const [nextId, setNextId] = useState(null); // Próximo ID sequencial
  const navigate = useNavigate();

  // Função para obter o próximo ID disponível no banco
  useEffect(() => {
    const fetchNextId = async () => {
      try {
        const response = await api.get('/customers');
        const maxId = response.data.reduce(
          (max, customer) => Math.max(max, Number(customer.id) || 0), // Garante que IDs anteriores sejam tratados como número
          0
        );
        setNextId(String(maxId + 1)); // Converte para string antes de salvar no estado
      } catch (err) {
        console.error('Erro ao buscar o próximo ID:', err);
        setNextId("1"); // Define como string mesmo em caso de erro
      }
    };

    fetchNextId();
  }, []);

  // Função para lidar com alterações nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(null);

    try {
      if (!customer.name || !customer.phone || !customer.email) {
        setError('Todos os campos são obrigatórios.');
        return;
      }

      const newCustomer = { id: String(nextId), ...customer }; // Garante que o ID seja string
      await api.post('/customers', newCustomer);
      setSuccess(true);
      navigate('/customers'); // Redireciona após sucesso
    } catch (err) {
      console.error('Erro ao criar cliente:', err);
      setError('Erro ao criar cliente. Tente novamente.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Novo cliente</h1>
      <div className={styles.inputs}>
        <Input
          type="text"
          text="Nome"
          name="name"
          placeholder="Digite o nome do(a) cliente"
          value={customer.name}
          handleOnChange={handleChange}
        />
        <Input
          type="phone"
          text="Telefone"
          name="phone"
          placeholder="(00) 00000-0000"
          value={customer.phone}
          handleOnChange={handleChange}
        />
        <Input
          type="email"
          text="E-mail"
          name="email"
          placeholder="example@email.com"
          value={customer.email}
          handleOnChange={handleChange}
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
      {/* Feedback ao usuário */}
      {success && <p className={styles.success}>Cliente criado com sucesso!</p>}
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default NewCustomer;
