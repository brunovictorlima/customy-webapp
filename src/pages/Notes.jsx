import styles from './Notes.module.css';
import NoteCard from '../components/notes_page/NoteCard';
import Container from '../components/layout/Container';
import BigButton from '../components/global/BigButton';
import SubmitButton from '../components/form/SubmitButton';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/api';

function Notes() {
  const { id } = useParams(); // Captura o ID do cliente da URL
  const [customer, setCustomer] = useState(null); // Estado para armazenar informações do cliente
  const [notes, setNotes] = useState([]); // Estado para armazenar as anotações do cliente
  const [loading, setLoading] = useState(true); // Controle de carregamento
  const [error, setError] = useState(null); // Controle de erros

  useEffect(() => {
    // Busca os dados do cliente e suas anotações
    const fetchCustomerData = async () => {
      try {
        setLoading(true);

        // Busca os dados do cliente
        const customerResponse = await api.get(`/customers/${id}`);
        setCustomer(customerResponse.data);

        // Busca as anotações relacionadas ao cliente
        const notesResponse = await api.get(`/notes?customerId=${id}`);
        setNotes(notesResponse.data);

        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar os dados:', err);
        setError('Não foi possível carregar os dados. Tente novamente.');
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, [id]);

  if (loading) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  if (error) {
    return (
      <div>
        <p className={styles.error}>{error}</p>
        <button onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </div>
    );
  }

  if (!customer) {
    return (
      <p className={styles.error}>Informações do cliente não disponíveis.</p>
    );
  }

  return (
    <Container>
      <div className={styles.header}>
        <h1 className={styles.customerName}>{customer.name}</h1>
        <h3 className={styles.phoneNumber}>{customer.phone}</h3>
        <div className={styles.title}>Histórico</div>
      </div>
      <div className={styles.notesList}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              content={note.note} // Substitua por note.content, se necessário
              date={note.date}
            />
          ))
        ) : (
          <p className={styles.noNotes}>Nenhuma anotação encontrada.</p>
        )}
      </div>
      <Link to={`/newNote?customerId=${id}`}>
        <BigButton icon="newNote" name="NOVA ANOTAÇÃO" />
      </Link>
      <Link to="/customers">
        <SubmitButton text="VOLTAR" customClass="logoffBtn" />
      </Link>
    </Container>
  );
}

export default Notes;
