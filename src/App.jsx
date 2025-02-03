import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Customers from './pages/Customers';
import Notes from './pages/Notes';
import NewCustomer from './pages/NewCustomer';
import EditCustomer from './pages/editCustomer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/newCustomer" element={<NewCustomer />} />
            <Route path="/editCustomer" element={<EditCustomer />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
