import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styles from './forms.module.css';

import Input from '../components/form/Input';
import BigButton from '../components/global/BigButton';
import SubmitButton from '../components/form/SubmitButton';
import api from '../services/api';

const EditCustomer = () => {
  const { id } = useParams(); // Captura o ID do cliente da URL
  const navigate = useNavigate(); // Para redirecionar após salvar
  const [customer, setCustomer] = useState({
    customerName: '',
    phoneNumber: '',
    email: '',
  });
  const [loading, setLoading] = useState(true); // Controle de carregamento
  const [error, setError] = useState(null); // Controle de erros

  // Busca os dados do cliente ao montar o componente
  useEffect(() => {
    api
      .get(`/customers/${id}`)
      .then((response) => {
        setCustomer({
          customerName: response.data.name || '',
          phoneNumber: response.data.phone || '',
          email: response.data.email || '',
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar cliente:', err);
        setError('Não foi possível carregar os dados do cliente.');
        setLoading(false);
      });
  }, [id]);

  // Lida com alterações no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  // Lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .put(`/customers/${id}`, {
        name: customer.customerName,
        phone: customer.phoneNumber,
        email: customer.email,
      })
      .then(() => {
        alert('Cliente atualizado com sucesso!');
        navigate('/customers'); // Redireciona para a lista de clientes
      })
      .catch((err) => {
        console.error('Erro ao atualizar cliente:', err);
        alert('Erro ao atualizar o cliente. Tente novamente.');
      });
  };

  // Renderiza a interface
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Editar cliente</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <div className={styles.inputs}>
          <Input
            type="text"
            text="Nome"
            name="customerName"
            placeholder="Digite o nome do(a) cliente"
            value={customer.customerName} // Campo controlado
            handleOnChange={handleChange} // Atualiza o estado
          />
          <Input
            type="phone"
            text="Telefone"
            name="phoneNumber"
            placeholder="(00) 00000-0000"
            value={customer.phoneNumber} // Campo controlado
            handleOnChange={handleChange} // Atualiza o estado
          />
          <Input
            type="email"
            text="E-mail"
            name="email"
            placeholder="example@email.com"
            value={customer.email} // Campo controlado
            handleOnChange={handleChange} // Atualiza o estado
          />
        </div>
      )}
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

export default EditCustomer;
