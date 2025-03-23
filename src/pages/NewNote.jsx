import styles from './forms.module.css';

import Input from '../components/form/Input';
import BigButton from '../components/global/BigButton';
import SubmitButton from '../components/form/SubmitButton';
import { Link } from 'react-router-dom';

const NewNote = () => {
  return (
    <section className={styles.form}>
      <h1 className={styles.title}>Nova anotação</h1>
      <div className={styles.inputs}>
        <Input
          type="date"
          text="Data"
          name="noteDate"
          placeholder="dd/mm/aaaa"
        />
        <Input
          type="text"
          text="Título"
          name="title"
          placeholder="Digite o título da anotação"
        />
        <Input
          type="textarea"
          text="Anotação"
          name="email"
          placeholder="Escreva sua anotação"
        />
      </div>
      <div className={styles.buttons}>
        <Link to="/notes">
          <BigButton icon="save" name="SALVAR" />
        </Link>
        <Link to="/customers">
          <SubmitButton text="VOLTAR" customClass="logoffBtn" />
        </Link>
      </div>
    </section>
  );
};

export default NewNote;
