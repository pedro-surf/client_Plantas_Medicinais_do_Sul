import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LearnCard from "./LearnCard";
import "./Landings.css";
import traversyImg from "./images/traversy.jpeg";

class ProgLearnLanding extends Component {
  state = {
    hovering: false
  };
  render() {
    const resources = [
      {
        name: "Traversy Media",
        lan: "Inglês",
        desc: "JavaScript, PHP, Web Development e programação em geral",
        brief:
          "Canal do YouTube super completo com diversos cursos introdutórios com 1h de duração",
        href: "https://www.youtube.com/user/TechGuyWeb",
        img: `${traversyImg}`
      },
      {
        name: "FreeCodeCamp",
        lan: "Inglês",
        desc: "HTML, CSS, JS, React.JS, Redux, D3.JS, Mocha e Chai",
        brief:
          "Plataforma que ensina a programar a web desde a base até React, Redux e Testes Integrados",
        href: "http://www.freecodecamp.org",
        img:
          "https://image.winudf.com/v2/image/Y29tLmZhaGFkZm95c2FsLmZyZWVjb2RlY2FtcF9pY29uXzE1MDU1MDU4MTdfMDI1/icon.png?w=170&fakeurl=1"
      },
      {
        name: "StackOverFlow",
        lan: "diversos",
        desc: "Todas.",
        brief:
          "O maior fórum de programação do mundo, com milhões de acessos diários. Fonte de conhecimento para aprendizes e sêniors",
        href: "http://www.stackoverflow.com",
        img: "http://blog.grio.com/wp-content/uploads/2012/09/stackoverflow.png"
      },
      {
        name: "FaztWeb",
        lan: "Espanhol",
        desc: "CRUD, JavaScript, PHP, Web Development em geral",
        brief:
          "Canal do YouTube completo com construção de apps full-stack à partir do zero",
        href: "https://www.youtube.com/user/FastwebIt",
        img:
          "https://yt3.ggpht.com/a/AGF-l7-BbILLNzL7u2WmxpqgltzNLW0YPEaA8lmqVw=s288-mo-c-c0xffffffff-rj-k-no"
      }
    ];

    return (
      <div
        className="prog-learning text-white"
        onMouseEnter={() => this.setState({ hovering: true })}
      >
        <Col>
          <div className="darker-overlay pt-1">
            <h2>Vídeo-Aulas e Plataformas para Aprender Programação</h2>
            <h5>
              Encontre aqui links para recursos gratuitos disponíveis para
              aprender novas tecnologias e linguagens
            </h5>

            <div className="dark-overlay">
              <Row>
                {resources.map(key => (
                  <Col>
                    <LearnCard
                      color="warning"
                      title={key.name}
                      brief={key.brief}
                      desc={key.desc}
                      img={key.img}
                      lan={key.lan}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default ProgLearnLanding;
