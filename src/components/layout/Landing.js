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
    const stylePlantsBox = () => {
      let randomNumber = Math.floor(Math.random() * 5);
      var classes = new Array("green", "purple", "teal", "violet", "pink");
      return classes[randomNumber];
    };

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-white text-center">
          Produzido baseado em open source. Código disponível no GitHub em
          breve. (@pedro-surf)
          <p className=" card-form display-3 mb-4">
            O universo das plantas à sua volta.
          </p>
          <h5 className="text-center" style={{ padding: "0px" }}>
            Informações sobre o uso e identificação de espécies medicinais
            comuns.
          </h5>{" "}
          <Clock />
          <AddPlant addPlant={addPlant} />
          <Plants plants={this.state.plants} />
        </div>
      </div>
    );
  }
}
