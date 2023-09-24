//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "./components/layout/Container";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Container>
        <Signup />
      </Container>
    </>
  );
}

export default App;
