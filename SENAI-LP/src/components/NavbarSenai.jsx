import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarSenai.css';
import logo from "/assets/logo_senai.png";;

const NavbarSenai = () => {
  return (
    <Navbar className="navbar_senai" bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="" className="navbar_logo "/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar_senai__nav me-3" as={Link} to="/">Página Inicial</Nav.Link>
            <Nav.Link className="navbar_senai__nav me-3" as={Link} to="/cadastro">Contato</Nav.Link>
            <Nav.Link className="navbar_senai__nav me-3" as={Link} to="/historia">História</Nav.Link>
            <Nav.Link className="navbar_senai__nav me-3" as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSenai;