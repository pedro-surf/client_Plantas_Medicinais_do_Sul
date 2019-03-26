import React, { Component } from "react";
import AddPlant from "../AddPlant";
import axios from "axios";
import Plants from "../Plants.js";
import { addPlant } from "../../actions/itemActions";
import Clock from "./Clock";

export default class Landing extends Component {
  state = {
    plants: []
  };

  // Toggle Complete
  markComplete = id => {
    this.setState({
      plants: this.state.plants.map(plant => {
        if (plant.id === id) {
          plant.completed = !plant.completed;
        }
        return plant;
      })
    });
  };

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-white text-center">
          <h2 className=" card-form display-3 mb-4">
            Descubra o universo das plantas à sua volta.
          </h2>
          <h3>
            Informações sobre o uso e identificação de espécies medicinais
            comuns.
          </h3>{" "}
          <Clock />
          Produzido por Pedro Silveira. Código disponível no GitHub em breve.
          (@pedro-surf)
          <hr />
          <Plants plants={this.state.plants} />
          <AddPlant addPlant={addPlant} />
        </div>
      </div>
    );
  }
}
