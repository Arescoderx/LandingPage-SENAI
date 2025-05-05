import React from "react";
import "./CursoDetalhe.css";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/image2.png";
import { Button } from "react-bootstrap";
function CursoDetalhes() {
  return (
    <section>
      <h1 className="text-center titulo">Programação</h1>
      <Carousel>
        <Carousel.Item>
          <img
            src={ExampleCarouselImage}
            alt=""
            className="d-block  mx-auto img-fluid img_carrosel"
          />
          <Carousel.Caption className="text_carrosel">
            <h3>Aprenda Programação do Zero</h3>
            <p>
              Inicie sua jornada na tecnologia com fundamentos sólidos em
              lógica, algoritmos e pensamento computacional.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ExampleCarouselImage}
            alt=""
            className="d-block mx-auto img-fluid img_carrosel"
          />
          <Carousel.Caption>
            <h3>Desenvolva Projetos Reais</h3>
            <p>
              Pratique com exercícios e desafios do mundo real, criando soluções
              com linguagens como JavaScript e Python.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ExampleCarouselImage}
            alt=""
            className="d-block mx-auto img-fluid img_carrosel"
          />
          <Carousel.Caption>
            <h3>Prepare-se para o Mercado</h3>
            <p>
              Ganhe experiência prática e conhecimento técnico para começar sua
              carreira como programador ou analista.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container mx-auto mt-5 mb-5">
        <h1 className="text-center">Detalhes do Curso</h1>
        <div className="row mt-5 mb-5">
          <div className="col-md-6 text-center">
            <h2>Descrição do Curso</h2>
            <p className="text-justify mt-3">
              Este curso oferece uma introdução abrangente aos conceitos e
              práticas de programação. Os alunos aprenderão a escrever código
              eficiente e a resolver problemas complexos utilizando linguagens
              modernas e amplamente usadas no mercado. O curso abrange desde os
              fundamentos da lógica de programação, estruturas de controle e
              manipulação de dados, até conceitos mais avançados como funções,
              modularização, orientação a objetos e noções básicas de
              desenvolvimento web.
              <br />
              Além das aulas teóricas, os estudantes participarão de atividades
              práticas e projetos que simulam desafios reais do mercado de
              trabalho, incentivando o raciocínio lógico, a criatividade e o
              trabalho em equipe. Ao final do curso, o aluno estará preparado
              para dar os primeiros passos como programador em diferentes áreas
              da tecnologia, como desenvolvimento de sistemas, aplicativos e
              automações.
            </p>
          </div>
          <div className="col-md-6 text-center ">
            <h2>Conteúdo Programático</h2>
            <ul className="list-unstyled mt-3">
              <li>Introdução à Programação</li>
              <li>Estruturas de Dados</li>
              <li>Algoritmos</li>
              <li>Programação Orientada a Objetos</li>
              <li>Desenvolvimento Web</li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary col-md-3 py-1 fs-4">Inscreva-se</button>
        </div>
      </div>
    </section>
  );
}

export default CursoDetalhes;
