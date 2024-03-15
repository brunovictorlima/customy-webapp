import styles from "./Button.module.css";

function Button({type}) {
    return(
        <div className={styles[type]}>
        </div>
    )
}

export default Button;