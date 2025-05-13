import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/dash");
    } else {
      alert("Por favor, preencha os campos.");
    }
  };

  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center py-5">
        <Row className="justify-content-center align-self-center w-100">
          <Col xs={10} sm={8} md={6} lg={4}>
            <Form
              className="border border-1 rounded p-4 shadow-sm"
              onSubmit={handleSubmit}
            >
              <h1 className="mb-5 text-center">Login</h1>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
              <Button
                variant="primary"
                type="submit"
                className="mb-5 justify-content-center w-100"
                size="lg"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
