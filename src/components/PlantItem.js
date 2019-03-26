import React, { Component } from "react";
import PropTypes from "prop-types";

export class PlantItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "6rem",
      border: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      maxWidth: "12rem",
      maxHeight: "20rem"
    };
  };

  render() {
    const { id, name, usage } = this.props.plant;
    return (
      <div style={this.getStyle()}>
        <div className="container text-center text-white">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          <h5>{name}</h5>
          <h5>{usage}</h5>
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </div>
      </div>
    );
  }
}

// PropTypes
PlantItem.propTypes = {
  plant: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default PlantItem;
