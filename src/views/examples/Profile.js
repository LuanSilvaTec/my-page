import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
              <Row className="justify-content-center">
                      <div className="card-profile-image" style={{padding:"2px 1em 0 1em"}}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/luan.JPEG")}
                          />
                        </a>
                      </div>
                </Row>       
                <div className="px-3">  
                <Row className="justify-content-center">
                
                  <div className="text-center mt-5" style={{padding:"150px 1em 0 1em"}}>
                    <span></span>
                    <h3>
                      Luan Silva{" "}
                      <span className="font-weight-light">, 23</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Marabá-PA, Brasil
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Developer & Research - Analista de Sistemas
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Universidade Federal do Sul e Sudeste do Pará - UNIFESSPA
                    </div>
                  </div>
                  </Row>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify">
                      <div >
                        <p style={{textAlign:"justify", padding:50}}>
                          Graduando em Bacharelado em Sistemas de Informação na Universidade Federal do Sul e Sudeste do Pará - UNIFESSPA. 
                          Associado a Sociedade Brasileira de Computação - SBC. Entusiasta e Pesquisador da área de Deep Learning, trabalhando 
                          com algoritmos supervisionados aplicados no reconhecimento de imagens de raio X. Já atuou como bolsista do Centro de
                          Registro e Controle Acadêmico - CRCA da Universidade Federal do Sul e Sudeste do Pará. Foi bolsista de Iniciação 
                          Científica no Laboratório de Computação Científica - LCC, trabalhando com Mineração de Dados e Inteligência Artificial. 
                          Possui certa experiência com programação, nas linguagens C, SQL, Java, Python, Javascript (React e Node.JS) e R. Possui
                          experiência com tratamento de Bases de Dados Públicos Abertos (Enem, DATASUS, CNES, SAEB, Censo Escolar e entre outros). 
                          Possui experiência em projetos de ensino e extensão, sendo monitor das disciplinas de Programação 1 e Programação 2 para
                          as turmas de Sistemas de Informação e Engenharia da Computação, além de instrutor no Programa de Inclusão Digital - PID 
                          UNIFESSPA e atualmente no Projeto de Ensino de Lógica de Programação nas Escolas Públicas e Infocentros de Marabá. 
                          Desenvolvedor Android.
                        </p>
                        
                      </div>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
