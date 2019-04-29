import React, { Component } from "react";
import AddPlant from "../AddPlant";
import Plants from "../Plants.js";
import { addPlant } from "../../actions/itemActions";
import Clock from "./Clock";
import SearchPlant from "../SearchPlant";

export default class Landing extends Component {
  state = {
    plants: []
  };

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay text-white text-center">
          App produzido com a MERN stack e baseado em estudos feitos na
          comunidade open source.{" "}
          <a
            className="text-white font-weight-bold"
            href="http://www.github.com/pedro-surf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código disponível no meu GitHub (@pedro-surf)
          </a>
          . --{" "}
          <a
            className="text-white"
            href="http://www.linkedin.com/in/pedro-surf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu Profile LinkedIn
          </a>
          <Clock />
          <p className=" card-form display-3 mb-4">
            <strong>O universo dos chás à sua volta.</strong>
          </p>
          <h5 className="text-center" style={{ padding: "0px" }}>
            Informações sobre o uso de espécies medicinais comuns.
          </h5>{" "}
          <div className="row">
            {" "}
            <SearchPlant allPlants={this.state.plants} />
            <AddPlant addPlant={addPlant} />
          </div>
          <Plants plants={this.state.plants} />
        </div>
      </div>
    );
  }
}
