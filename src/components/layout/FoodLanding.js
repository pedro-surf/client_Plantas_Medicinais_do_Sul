import React, { Component } from "react";
import { Row, Col, Alert, ListGroupItem } from "reactstrap";
import ReactToolTip from "react-tooltip";
import "./Landings.css";
const foods = {
  Margarina: new Array("Óleo de coco", "manteiga", "banha"),
  "Farinha branca": [
    "Maisena",
    "Trigo integral",
    "Farinha de arroz",
    "Farinha de grão-de-bico",
    "de milho",
    "polvilho. "
  ],
  "Glutamato monossódico": [
    "Temperos",
    "pimenta",
    "sal à gosto",
    "Curry é prático",
    "(Glutamato é o pior. Pesquise.)"
  ],
  "Óleo vegetal": [
    "Azeite de oliva",
    "óleo de coco",
    "manteiga",
    "banha",
    "Para fritar: banha"
  ]
};

class FoodLanding extends Component {
  state = {
    hovering: false
  };

  render() {
    return (
      <div
        className="food-app text-white"
        onMouseEnter={() => this.setState({ hovering: true })}
      >
        <Col>
          <div className="dark-overlay p-2">
            <h2>Nutrição e comida saudável</h2>
            <h3>
              Passe o mouse para conferir alternativas saudáveis para diversos
              produtos industrializados que podem causar danos à saúde.
            </h3>

            <div className="dark-overlay d-flex justify-content-center">
              <Row>
                {Object.keys(foods).map(key => {
                  return (
                    <div className="p-2">
                      <button
                        className="m-3 btn btn-danger"
                        data-tip={foods[key].map(i => i)}
                      >
                        {key}
                      </button>

                      <ReactToolTip
                        className="btn bg-success d-flex justify-content-end"
                        place="bottom"
                        multiline="true"
                      />
                    </div>
                  );
                })}
              </Row>
            </div>
          </div>
          <h5 className="mt-5">Comida de verdade é natural e saudável!</h5>
        </Col>
      </div>
    );
  }
}

export default FoodLanding;
