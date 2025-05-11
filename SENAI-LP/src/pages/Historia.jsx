import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Historia() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h1 className="mb-3">Nossa História</h1>
          <p>
            Fundado em 1942, o Serviço Nacional de Aprendizagem Industrial (SENAI) nasceu com a missão de formar profissionais qualificados para atender as demandas da indústria brasileira em constante crescimento.
            Ao longo das décadas, o SENAI tornou-se um dos maiores complexos de educação profissional do mundo.
          </p>
          <p>
            Com unidades espalhadas por todo o Brasil, o SENAI promove a inovação tecnológica, a qualificação de mão de obra e o desenvolvimento de soluções para a indústria. A instituição já formou milhões de alunos em cursos técnicos, de aprendizagem, graduação e pós-graduação.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col lg={10}>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/0b-R3XBbHug" // Vídeo institucional do SENAI (pode trocar)
              title="Vídeo Institucional SENAI"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h2 className="mb-3">Compromisso com o Futuro</h2>
          <p>
            O SENAI está sempre à frente, acompanhando as transformações do mundo do trabalho e investindo em tecnologias emergentes, como Indústria 4.0, automação, robótica e inteligência artificial. Com parcerias nacionais e internacionais, o SENAI oferece aos seus alunos uma educação conectada com o futuro.
          </p>
          <p>
            Acreditamos que a educação transforma vidas e fortalece a indústria. Por isso, o SENAI continua sendo sinônimo de excelência e inovação na formação profissional no Brasil.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Historia;