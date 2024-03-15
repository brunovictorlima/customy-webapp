import Button from "./Button";
import styles from "./Customer.module.css";

function Customer({name}) {
    return(
        <div className={styles.container_inline}>
            <div className={styles.bar}>
                <span>{name}</span>
                <div className={styles.buttons}>
                    <Button type="EditButton" />
                    <Button type="DeleteButton" />
                </div>
            </div>
        </div>
    )
}

export default Customer;