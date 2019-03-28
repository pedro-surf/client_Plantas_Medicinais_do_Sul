import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { getPlants, deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PlantItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);

    this.bye = this.bye.bind(this);
    this.state = {
      isHovering: false
    };
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  handleMouseHover() {
    this.setState({ isHovering: true });
  }

  bye = event => {
    let el = event.target;
    el.className = "plantbox";
    this.setState({ isHovering: false });
  };

  render() {
    const { name, usage } = this.props;
    return (
      <Container style={this.displayRandomColor}>
        <div
          className="plantbox text-green card-title"
          onMouseOver={this.handleMouseHover}
          onMouseOut={this.bye}
          style={{
            padding: "0.8rem",
            margin: "0.2rem",
            border: "1px dotted",

            fontSize: "1.2rem"
          }}
        >
          {name}

          {this.state.isHovering && (
            <div
              className="card-text"
              style={{
                position: "absolute",
                top: "3.8rem",
                fontSize: "1.2rem",
                color: "darkolivegreen",
                border: "0.1rem",
                backgroundColor: "white",
                opacity: "0.9"
              }}
            >
              <p>Usos:</p>{" "}
              <ul>
                {usage
                  .split(", ")

                  .map(item => (
                    <li style={{ float: "right" }}>{item}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    );
  }
}

PlantItem.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  usage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps)(PlantItem);
