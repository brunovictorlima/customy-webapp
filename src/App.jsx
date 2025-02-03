//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "./components/layout/Container";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Customers from "./pages/Customers";
// import Notes from "./pages/Notes";

function App() {
  return (
    <>
      <Container>
        <Customers />
      </Container>
    </>
  );
}

export default App;
