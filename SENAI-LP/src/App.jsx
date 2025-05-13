import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CursoDetalhes from "./pages/CursoDetalhes";
import Cadastro from "./pages/Cadastro";
import Historia from "./pages/Historia";
import Login from "./pages/Login";
import NavbarSenai from "./components/NavbarSenai";
import FooterSenai from "./components/FooterSenai";
import Dash from "./pages/Dash";
import "./App.css";
function App() {
  return (
    <Router>
      <NavbarSenai />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curso/:id" element={<CursoDetalhes />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </main>
      <FooterSenai />
    </Router>
  );
}

export default App;
