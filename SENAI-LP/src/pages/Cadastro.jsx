import React from "react";
import Modal from "react-bootstrap/Modal";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { useState } from "react";

function Cadastro() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [data, setData] = React.useState({
    nome: "",
    email: "",
    telefone: "",
    curso: "",
    mensagem: "",
  });

  const valueInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/cadastros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        handleShow();
        setData({
          nome: "",
          email: "",
          telefone: "",
          curso: "",
          mensagem: "",
        });
      } else {
        alert("Erro ao enviar cadastro.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <h1 className="text-center mb-4">Entre em Contato</h1>
          <p className="text-center mb-4">
            Preencha o formulário abaixo para receber mais informações sobre os
            cursos do SENAI.
          </p>
          <Form onSubmit={addUser}>
            <FloatingLabel
              controlId="nome"
              label="Nome completo"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="nome"
                placeholder="Seu nome"
                onChange={valueInput}
                value={data.nome}
                required
              />
            </FloatingLabel>

            <FloatingLabel controlId="email" label="E-mail" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="nome@exemplo.com"
                onChange={valueInput}
                value={data.email}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="telefone"
              label="Telefone (opcional)"
              className="mb-3"
            >
              <Form.Control
                type="tel"
                name="telefone"
                placeholder="(XX) XXXXX-XXXX"
                onChange={valueInput}
                value={data.telefone}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="curso"
              label="Curso de interesse"
              className="mb-3"
            >
              <Form.Select
                name="curso"
                onChange={valueInput}
                value={data.curso}
                required
              >
                <option value="">Selecione um curso</option>
                <option>Eletrônica Básica</option>
                <option>Marketing Digital</option>
                <option>Automação Industrial</option>
                <option>Redes e Infraestrutura</option>
                <option>Design Gráfico</option>
                <option>Programação</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel
              controlId="mensagem"
              label="Mensagem (opcional)"
              className="mb-4"
            >
              <Form.Control
                as="textarea"
                name="mensagem"
                placeholder="Digite sua dúvida ou observação"
                style={{ height: "100px" }}
                onChange={valueInput}
                value={data.mensagem}
              />
            </FloatingLabel>

            <Button variant="primary" type="submit" className="w-100">
              Enviar
            </Button>
          </Form>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Formulário Enviado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Obrigado por entrar em contato.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default Cadastro;
