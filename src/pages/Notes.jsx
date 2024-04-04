import styles from "./Notes.module.css";
import NoteCard from "../components/NoteCard";
import Container from "../components/layout/Container";
import BigButton from "../components/customers_page/BigButton";

function Notes() {
  return (
    <Container>
      <div className={styles.header}>
        <h1 className={styles.customerName}>Matheus</h1>
        <h3 className={styles.phoneNumber}>21 12345-6789</h3>
        <div className={styles.title}>Histórico</div>
      </div>
      <div className={styles.notesList}>
        <NoteCard />
        <NoteCard />
      </div>
      <BigButton icon="newCostumer2" name="NOVA ANOTAÇÃO" />
    </Container>
  );
}

export default Notes;
