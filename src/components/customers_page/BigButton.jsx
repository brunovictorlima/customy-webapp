import styles from "./BigButton.module.css";

function BigButton({type,name}) {
    return (
        <div className={styles.button}>
            <div className={styles[type]}></div>
            <span className={styles[name]}></span>
        </div>
    )
}

export default BigButton;