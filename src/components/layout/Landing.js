import React, { Component } from "react";
import AddPlant from "../AddPlant";
import Plants from "../Plants.js";
import { addPlant } from "../../actions/itemActions";
import Clock from "./Clock";

export default class Landing extends Component {
  state = {
    plants: []
  };

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-white text-center">
          App produzido com a MERN stack e baseado em estudos feitos na comunidade open source. <a className="text-white font-weight-bold" href="http://www.github.com/pedro-surf" target="_blank">Código disponível no meu GitHub (@pedro-surf)</a>. -- <a className="text-white"  href="http://www.linkedin.com/in/pedro-surf" target="_blank">Meu LinkedIn</a>
          <Clock />
          <p className=" card-form display-3 mb-4">
            O universo das plantas à sua volta.
          </p>
          <h5 className="text-center" style={{ padding: "0px" }}>
            Informações sobre o uso e identificação de espécies medicinais
            comuns.
          </h5>{" "}
          
          <AddPlant addPlant={addPlant} />
          <Plants plants={this.state.plants} />
        </div>
      </div>
    );
  }
}
