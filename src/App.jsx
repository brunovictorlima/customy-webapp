import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Customers from './pages/Customers';
import NewCustomer from './pages/NewCustomer';
import EditCustomer from './pages/EditCustomer';
import Notes from './pages/Notes';
import NewNote from './pages/NewNote';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/new" element={<NewCustomer />} />
            <Route path="/customers/edit/:id" element={<EditCustomer />} />
            <Route path="/notes/:id" element={<Notes />} />
            <Route path="/notes/new" element={<NewNote />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
