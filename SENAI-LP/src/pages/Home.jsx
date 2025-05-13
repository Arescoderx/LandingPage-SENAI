import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="container my-5 grid-layout">
        <div className="text-content">
          <h1 className="mb-3">Prepare-se para o futuro com os cursos SENAI</h1>
          <p className="mb-4">
            Nossa missão é ajudar você a alcançar o sucesso no mercado de
            trabalho por meio de cursos de alta qualidade em diversas áreas,
            incluindo indústria, tecnologia e serviços. Com o SENAI, você está
            no caminho certo para uma carreira de sucesso.
          </p>
          <Button
            size="lg"
            className="mb-3 info_button"
            as={Link}
            to="/cadastro"
          >
            Agende uma Consultoria
          </Button>
        </div>
        <div className="image-content">
          <img
            src="/assets/img1.jpg"
            alt="Ilustração"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="container my-5">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <h2 className="fw-bold info_cursos me-3 mb-3 mb-md-0">Cursos</h2>
          <p className="mb-0">
            No SENAI, oferecemos uma variedade de cursos e programas de
            capacitação para ajudar você a crescer e ter sucesso no mercado de
            trabalho. <br />
            <span className="negrito">Nossos cursos incluem:</span>
          </p>
        </div>
        <div className="card-container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://hermes.dio.me/articles/cover/e43b602a-d5b1-40b8-a0b7-fcae39e1e060.png"
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>Programação</Card.Title>
                  <Card.Text>
                    Aprenda os fundamentos da programação, como lógica de
                    programação, estruturas de dados básicas e algoritmos.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/curso/1">
                    Ver mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZ69qD_iuDvp2cQP95JLWKoTdSRFFOfUuJw&s"
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>Design Gráfico</Card.Title>
                  <Card.Text>
                    Desenvolva habilidades criativas com o uso de ferramentas
                    como Adobe Photoshop e Illustrator.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/curso/2">
                    Ver mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://attsantos.com.br/blog/wp-content/uploads/2019/12/9-1140x760.jpg"
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>Redes e Infraestrutura</Card.Title>
                  <Card.Text>
                    Este curso foca em conceitos essenciais sobre redes de
                    computadores, infraestrutura de TI, configuração de
                    servidores.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/curso/3">
                    Ver mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div
            className={`row ${showMore ? "" : "d-none"} justify-content-center`}
          >
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c8/FANUC_R2000iB_AtWork.jpg"
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>Automação Industrial</Card.Title>
                  <Card.Text>
                    Aprenda sobre sistemas de automação, controle de processos
                    industriais e a implementação de tecnologias em fábricas e
                    indústrias.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/curso/4">
                    Ver mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://api-blog.rdstation.com/wp-content/uploads/2024/01/marketing-digital-2.jpg"
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>Marketing Digital</Card.Title>
                  <Card.Text>
                    Entenda as estratégias de marketing digital para promover
                    produtos e serviços online.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/curso/5">
                    Ver mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia1232/eletronica-basica-conhecimento-essencial-para-a-manutencao-de-equipamentos-de-informatica-cpt.jpg"
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>Eletrônica Básica</Card.Title>
                  <Card.Text>
                    O curso introduz conceitos fundamentais de eletrônica,
                    abordando circuitos elétricos, componentes eletrônicos,
                    soldagem e uso de multímetros.
                  </Card.Text>
                  <Button variant="primary" as={Link} to="/curso/6">
                    Ver mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button
            variant="link"
            onClick={() => setShowMore(!showMore)}
            className="mt-3"
          >
            {showMore ? "Ver menos" : "Ver mais"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;