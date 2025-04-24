import { useState, useEffect } from 'react';
import styles from './forms.module.css';

import Input from '../components/form/Input';
import BigButton from '../components/global/BigButton';
import SubmitButton from '../components/form/SubmitButton';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import api from '../services/api';

const NewNote = () => {
  const [note, setNote] = useState({
    title: '',
    note: '', // Mantém a estrutura correta conforme o banco
  }); // Estado para controlar os campos do formulário
  const [error, setError] = useState(null); // Mensagem de erro
  const [success, setSuccess] = useState(false); // Controle de sucesso
  const [nextId, setNextId] = useState(null); // Próximo ID sequencial
  const [searchParams] = useSearchParams(); // Captura query strings, como customerId
  const navigate = useNavigate(); // Para redirecionamento após sucesso
  const customerId = searchParams.get('customerId'); // Captura o ID do cliente relacionado

  // Função para obter o próximo ID disponível no banco
  useEffect(() => {
    const fetchNextId = async () => {
      try {
        const response = await api.get('/notes');
        const maxId = response.data.reduce(
          (max, note) => Math.max(max, Number(note.id) || 0), // Garante que IDs anteriores sejam tratados corretamente
          0,
        );
        setNextId(String(maxId + 1)); // Converte para string antes de salvar no estado
      } catch (err) {
        console.error('Erro ao buscar o próximo ID:', err);
        setNextId('1'); // Define como string mesmo em caso de erro
      }
    };

    fetchNextId();
  }, []);

  // Função para lidar com alterações nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  // Função para formatar a data no padrão `dd/mm/yyyy`
  const getFormattedDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(null);

    try {
      if (!note.title || !note.note) {
        setError('Todos os campos são obrigatórios.');
        return;
      }

      if (!customerId) {
        setError('ID do cliente não identificado.');
        return;
      }

      const newNote = {
        id: String(nextId),
        customerId: String(customerId),
        date: getFormattedDate(), // Insere a data automaticamente
        timestamp: new Date().toISOString(), // Mantém a hora oculta para auditoria
        ...note,
      };

      await api.post('/notes', newNote);
      setSuccess(true);
      navigate(`/notes/${customerId}`); // Redireciona para a página de notas do cliente
    } catch (err) {
      console.error('Erro ao criar anotação:', err);
      setError('Erro ao criar anotação. Tente novamente.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Nova anotação</h1>
      <div className={styles.inputs}>
        <Input
          type="text"
          text="Título"
          name="title"
          placeholder="Digite o título da anotação"
          value={note.title}
          handleOnChange={handleChange}
        />
        <Input
          type="textarea"
          text="Conteúdo"
          name="note"
          placeholder="Escreva sua anotação"
          value={note.note}
          handleOnChange={handleChange}
        />
      </div>
      <div className={styles.buttons}>
        <button type="submit">
          <BigButton icon="save" name="SALVAR" />
        </button>
        {/* Tratamento para evitar erro ao voltar */}
        {customerId ? (
          <Link to={`/notes/${customerId}`}>
            <SubmitButton text="VOLTAR" customClass="logoffBtn" />
          </Link>
        ) : (
          <Link to="/notes">
            <SubmitButton text="VOLTAR" customClass="logoffBtn" />
          </Link>
        )}
      </div>
      {/* Feedback ao usuário */}
      {success && (
        <p className={styles.success}>Anotação criada com sucesso!</p>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default NewNote;

