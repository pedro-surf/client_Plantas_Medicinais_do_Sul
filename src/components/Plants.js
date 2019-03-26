import React, { Component } from "react";
import PlantItem from "./PlantItem";
import PropTypes from "prop-types";

class Plants extends Component {
  render() {
    return this.props.plants.map(plant => (
      <PlantItem
        key={plant.id}
        name={plant.name}
        usage={plant.usage}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Plants.propTypes = {
  plants: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Plants;
