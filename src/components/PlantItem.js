import React, { Component } from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PlantItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.stylePlantsBox = this.stylePlantsBox.bind(this);
    this.bye = this.bye.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState({ isHovering: true });
  }

  bye = () => {
    this.setState({ isHovering: false });
  };
  stylePlantsBox = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    var classes = ["green", "purple", "teal", "violet", "pink"];
    return classes[randomNumber];
  };

  render() {
    const { name, usage, key } = this.props;

    return (
      <Container>
        <div
          className="plantbox text-green card-title"
          onMouseOver={this.handleMouseHover}
          onMouseOut={this.bye}
          style={{ fontSize: "1.2rem" }}
        >
          <div>{name}</div>
          {key}

          {this.state.isHovering && (
            <div
              className="card card-body"
              style={{
                position: "absolute",
                top: "5rem",
                right: "0.1rem",
                marginTop: "0.3rem",
                display: "fit",
                paddingTop: "0.1rem",
                fontSize: "0.7rem",
                color: "darkolivegreen",
                backgroundColor: "white",
                opacity: "1"
              }}
            >
              <p>Usos médicos:</p>{" "}
              <ul>
                {usage
                  .split(",")

                  .map(item => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <Row>
          <Col className="text-center">
            {" "}
            <Button
              outline
              color="success"
              onClick={this.props.onDeleteClick}
              size="sm"
            >
              Apagar do MongoDB
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

PlantItem.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  usage: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(PlantItem);
