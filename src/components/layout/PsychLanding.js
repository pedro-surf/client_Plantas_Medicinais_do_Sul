import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Alert
} from "reactstrap";
import "./FoodLanding.css";
const foods = {
  MDMA: "Wachuma",
  Álcool: "Cannabis",
  Tabaco: "Kumbaya (tabaco é uma das colheitas onde mais se usa agrotóxicos!)",
  Ketamina: "Amanita Muscaria"
};

class PsychLanding extends Component {
  state = {
    hovering: false
  };
  render() {
    return (
      <div
        className="mt-1 border border-success food-app text-white"
        onMouseEnter={() => this.setState({ hovering: true })}
      >
        <div className="dark-overlay">
          <h2>Magic species</h2>
          <h5>
            Este app visa informar e esclarecer dúvidas à respeito de
            psicoativos!
          </h5>

          <div className="dark-overlay">
            <div>
              <Row>
                <Col>Drogas perigosas de origem duvidosa:</Col>
                <Col>Você poderia usar:</Col>
              </Row>
            </div>
            {Object.keys(foods).map(key => {
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
                      <Alert color="success">{foods[key]}</Alert>
                    )}
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PsychLanding;
