import styles from './Customers.module.css';

import Input from '../components/form/Input';
import SubmitButton from '../components/form/SubmitButton';
import Customer from '../components/customers_page/Customer';
import Container from '../components/layout/Container';
import BigButton from '../components/global/BigButton';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/api';

function Customers() {
  const [customers, setCustomers] = useState([]); // Lista completa de clientes
  const [loading, setLoading] = useState(true); // Controle de carregamento
  const [search, setSearch] = useState(''); // Estado para o valor digitado no input
  const [filteredCustomers, setFilteredCustomers] = useState([]); // Lista filtrada

  useEffect(() => {
    // Fazer a requisição à API
    api
      .get('/customers')
      .then((response) => {
        // Converta o id para número ao processar os dados
        const processedData = response.data.map((customer) => ({
          ...customer,
          id: Number(customer.id),
        }));
        setCustomers(processedData); // Atualiza a lista completa de clientes
        setFilteredCustomers(processedData); // Inicialmente, exibe todos os clientes
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
        setLoading(false); // Garante que o carregamento encerre, mesmo com erro
      });
  }, []);

  // Lida com mudanças no campo de busca
  const handleSearchChange = (e) => {
    setSearch(e.target.value); // Atualiza o estado com o valor digitado
  };

  // Filtra os clientes ao clicar no botão buscar
  const handleSearch = () => {
    const filtered = customers.filter((customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredCustomers(filtered); // Atualiza a lista filtrada
  };

  return (
    <Container>
      <div className={styles.centralize}>
        <div className={styles.top}>
          <h1 className={styles.title}>Clientes</h1>
          <Input
            type="text"
            name="busca"
            placeholder="Faça sua busca"
            aria-label="Campo de busca" // Para auxiliar na acessibilidade
            value={search} // Controlado pelo estado
            handleOnChange={handleSearchChange} // Atualiza o estado
          />
          <button type="button" onClick={handleSearch}>
            <SubmitButton text="BUSCAR" customClass="signup_btn" />
          </button>
        </div>
        <div className={styles.customersList}>
          {loading ? (
            <p>Carregando...</p> // Mostrar carregamento enquanto os dados são buscados
          ) : (
            filteredCustomers.map((customer) => (
              <Customer
                key={customer.id}
                id={customer.id}
                name={customer.name}
              />
            ))
          )}
        </div>
        <div className={styles.buttons}>
          <Link to="/customers/new">
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
