import styles from "./Notes.module.css";
import NoteCard from "../components/notes_page/NoteCard";
import Container from "../components/layout/Container";
import BigButton from "../components/global/BigButton";
import { PropTypes } from "prop-types";

function Notes({name, phoneNumber}) {
  return (
    <Container>
      <div className={styles.header}>
        <h1 className={styles.customerName}>{name}</h1>
        <h3 className={styles.phoneNumber}>{phoneNumber}</h3>
        <div className={styles.title}>Histórico</div>
      </div>
      <div className={styles.notesList}>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
      <BigButton icon="newNote" name="NOVA ANOTAÇÃO" />
    </Container>
  );
}

Notes.propTypes = {
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default Notes;
