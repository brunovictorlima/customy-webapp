import styles from "./Customers.module.css";
import Input from "../components/form/Input";
import SubmitButton from "../components/form/SubmitButton";
import Customer from "../components/customers_page/Customer";
import Container from "../components/layout/Container";
import BigButton from "../components/customers_page/BigButton";

function Customers() {
    return (
        <Container>
            <div className={styles.SpaceBetween}>
                <div>
                    <section>
                        <h1>Clientes</h1>
                        <Input
                            type="text"
                            name="busca"
                            placeholder="Faça sua busca"
                        />
                        <SubmitButton text="BUSCAR" customClass="signup_btn" />
                    </section>
                    <section>
                        <Customer name="João" />
                        <Customer name="Maria" />
                        <Customer name="Matheus" />
                        <Customer name="Sara" />
                    </section>
                </div>
                <div>
                    <BigButton type="create" name="NOVO CLIENTE" />
                </div>
            </div>
        </Container>
    );
}

export default Customers;