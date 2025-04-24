import styles from './NoteCard.module.css';
import Button from '../global/Button';
import PropTypes from 'prop-types';

function NoteCard({ title, content, date, onExpand, onEdit, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
        <div className={styles.buttons}>
          <Button type="ExpandButton" onClick={onExpand} />
          <Button type="EditButton" onClick={onEdit} />
          <Button type="DeleteButton" onClick={onDelete} />
        </div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{content}</div>
    </div>
  );
}

NoteCard.propTypes = {
  title: PropTypes.string.isRequired, // Título da anotação
  content: PropTypes.string, // Conteúdo da anotação
  date: PropTypes.string.isRequired, // Data da anotação
  onExpand: PropTypes.func, // Função para expandir a anotação
  onEdit: PropTypes.func, // Função para editar a anotação
  onDelete: PropTypes.func, // Função para deletar a anotação
};

export default NoteCard;

