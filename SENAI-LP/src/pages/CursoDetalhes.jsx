import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/db.json";
import Carousel from "react-bootstrap/Carousel";
import "./CursoDetalhe.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CursoDetalhes() {
  const cursos = data.cursos;
  const { id } = useParams();
  const curso = cursos.find((curso) => curso.id === id);

  if (!curso) {
    return <h2 className="text-center">Curso não encontrado.</h2>;
  }

  return (
    <section>
      <h1 className="text-center">{curso.nome}</h1>
      <Carousel>
        {curso.carrossel.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              src={item.imagem}
              alt={item.titulo}
              className="d-block mx-auto img-fluid img_carrosel"
            />
            <Carousel.Caption className="text_carrosel">
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container mx-auto mt-5 mb-5">
        <h1 className="text-center">Detalhes do Curso</h1>
        <div className="row mt-5 mb-5">
          <div className="col-md-6 text-center">
            <h2>Descrição do Curso</h2>
            <p className="text-justify mt-3">{curso.descricao}</p>
          </div>
          <div className="col-md-6 text-center">
            <h2>Conteúdo Programático</h2>
            <ul className="list-unstyled mt-3">
              {curso.topicos.map((topico, index) => (
                <li key={index}>{topico}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="btn btn-primary col-md-3 py-1 fs-4" as={Link} to="/cadastro">
            Inscreva-se
          </Button>
          
        </div>
      </div>
    </section>
  );
}

export default CursoDetalhes;
