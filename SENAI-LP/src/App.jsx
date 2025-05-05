import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CursoDetalhes from './pages/CursoDetalhes';
import Cadastro from './pages/Cadastro';
import Historia from './pages/Historia';
import Login from './pages/Login';
import NavbarSenai from './components/NavbarSenai';
import FooterSenai from './components/FooterSenai';
function App() {
  return (
    <Router>
      <NavbarSenai />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso" element={<CursoDetalhes />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <FooterSenai />
    </Router>
  );
}

export default App;

