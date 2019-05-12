import React, { Component } from "react";
import { Row, Col, Alert } from "reactstrap";
import "./Landings.css";
const substances = {
  MDMA: "Wachuma Cactus",
  Álcool: "Cannabis Herb",
  Tabaco: "Kumbaya (tabaco é uma das colheitas onde mais se usa agrotóxicos!)",
  Ketamina: "Amanita Muscaria",
  Cocaína: "Psilocybe spp. & Ayahuasca",
  "Lança-perfume": "Rapé (orgânico)",
  LSD: "Argyreia nervosa"
};

class PsychLanding extends Component {
  state = {
    hovering: false
  };
  render() {
    return (
      <div
        className="forest text-white"
        onMouseEnter={() => this.setState({ hovering: true })}
      >
        <Col>
          <div className="pt-1 dark-overlay">
            <h2>Magic species</h2>
            <p className="p-2">
              Esta página visa informar, esclarecer e educar à respeito de
              psicoativos.
            </p>
            <h3>
              Não possui absolutamente nenhuma intenção de incentivar o uso de
              psicoativos(!)
            </h3>
            <p className="mt-4 pt-2">
              ...mas sim de evitar o uso indiscriminado de substâncias
              potencialmente perigosas e suas consequências e sequelas, que
              incluem danos severos à saúde, acidentes diversos e,
              possivelmente, podem levar à óbito.
            </p>
            <p className="lead">
              Os benefícios de uma vida saudável, com a práticas do esportes,
              intelecto, respeito, amor e compaixão são constantemente estudados
              e comprovados pela Ciência.
            </p>

            <div className="dark-overlay">
              <div>
                <Row>
                  <Col>Drogas perigosas de origem duvidosa:</Col>
                  <Col>
                    Alternativa natural análoga:: (PESQUISE ANTES DE MAIS NADA!)
                  </Col>
                </Row>
              </div>
              {Object.keys(substances).map(key => {
                return (
                  <Row>
                    <Col>
                      <Alert
                        color="warning"
                        name={key}
                        style={{ height: "2.3rem" }}
                      >
                        {key}
                      </Alert>
                    </Col>
                    <Col>
                      {this.state.hovering && (
                        <Alert color="success">{substances[key]}</Alert>
                      )}
                    </Col>
                  </Row>
                );
              })}
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default PsychLanding;
