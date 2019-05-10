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
  Margarina: "Óleo de coco, manteiga ou banha",
  "Farinha branca":
    "Trigo integral. Ou:: farinha de arroz, farinha de grão-de-bico, de milho, polvilho. ",
  "Glutamato monossódico":
    "Use temperos, pimenta e sal à gosto. Curry é prático. Glutamato é o pior. Pesquise.",
  "Óleo vegetal":
    "Óleo de coco, manteiga ou banha. Para fritar: oleo de coco ou banha"
};

class FoodLanding extends Component {
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
          <h2>Nutrição e comida saudável</h2>
          <h5>Comida de verdade é natural e saudável!</h5>
          <h3>
            Passe o mouse para conferir alternativas saudáveis para diversos
            males industrializados.
          </h3>

          <div className="dark-overlay">
            <div>
              <Row>
                <Col>Sua receita pede:</Col>
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

export default FoodLanding;
