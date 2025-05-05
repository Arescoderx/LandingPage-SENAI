import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "./FooterSenai.css";
import logo from "../assets/senai-165.png";
const FooterSenai = () => {
  return (
    <footer className="footer_senai text-center text-lg-start text-black">
      <section className="d-flex justify-content-center align-items-center p-4 border-top border-bottom">
        <div className="me-2 d-none d-lg-block">
          <span>Conecte-se conosco nas redes sociais:</span>
        </div>
        <div className="d-flex ">
          <a href="#" className="me-2 text-reset">
            <FaFacebookF />
          </a>
          <a href="#" className="me-2 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-2 text-reset">
            <FaInstagram />
          </a>
          <a href="#" className="me-2 text-reset">
            <FaLinkedin />
          </a>
        </div>
      </section>

      <section className="info_footer">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem"></i>SENAI Vitória
              </h6>
              <img src={logo} alt="" className="mb-2 imagem_footer"/>
              <p>
                Unidade do SENAI no Espírito Santo com foco em educação
                profissional e inovação para a indústria capixaba.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Cursos</h6>
              <p>
                <a href="#!" className="text-reset">
                  Aprendizagem Industrial
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Técnico
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Qualificação
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Especialização
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links úteis</h6>
              <p>
                <a href="#!" className="text-reset">
                  Portal do Aluno
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Trabalhe Conosco
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Fale Conosco
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Unidades SENAI
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <i className="fas fa-home"></i> Av. Nossa Sra. da Penha, 2053 -
                Santa Luíza, Vitória - ES
              </p>
              <p>
                <i className="fas fa-envelope"></i> atendimento@findes.org.br
              </p>
              <p>
                <i className="fas fa-phone"></i> (27) 3334-5600
              </p>
              <p>
                <i className="fas fa-globe"></i> www.es.senai.br
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(1, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} SENAI Vitória - Todos os direitos
        reservados
      </div>
    </footer>
  );
};

export default FooterSenai;
