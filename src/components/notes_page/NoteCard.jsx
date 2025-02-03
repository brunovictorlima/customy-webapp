import styles from "./NoteCard.module.css";
import Button from "../global/Button";

function NoteCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.date}>15/09/23</div>
        <div className={styles.buttons}>
          <Button type="ExpandButton" />
          <Button type="EditButton" />
          <Button type="DeleteButton" />
        </div>
      </div>
      <div className={styles.title}>Hidratação</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        repellat doloribus eos ab consequatur. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Expedita repellat doloribus eos ab
        consequatur.
      </div>
    </div>
  );
}

export default NoteCard;
