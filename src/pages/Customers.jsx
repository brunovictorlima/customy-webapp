import styles from "./Customers.module.css";
import Input from "../components/form/Input";
import SubmitButton from "../components/form/SubmitButton";
import Customer from "../components/customers_page/Customer";
import Container from "../components/layout/Container";

function Customers() {
    return (
        <Container>
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
                <Customer />
            </section>
        </Container>
    );
}

export default Customers;
