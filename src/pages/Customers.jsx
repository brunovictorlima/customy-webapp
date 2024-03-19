import styles from "./Customers.module.css";
import Input from "../components/form/Input";
import SubmitButton from "../components/form/SubmitButton";
import Customer from "../components/customers_page/Customer";
import Container from "../components/layout/Container";
import BigButton from "../components/customers_page/BigButton";

function Customers() {
    return (
        <Container>
            <div>
                <div className={styles.top}>
                    <h1 className={styles.title}>Clientes</h1>
                    <Input
                        type="text"
                        name="busca"
                        placeholder="Faça sua busca"
                    />
                    <SubmitButton text="BUSCAR" customClass="signup_btn" />
                </div>
                <div className={styles.customersList}>
                    <Customer name="João" />
                    <Customer name="Maria" />
                    <Customer name="Matheus" />
                </div>
                <BigButton icon="newCostumer" name="NOVO CLIENTE" />
            </div>
        </Container>
    );
}

export default Customers;