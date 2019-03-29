import React, { Component } from "react";
import { Container, Button, Col, Row } from "reactstrap";
import { deleteItem } from "../actions/itemActions";
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

  handleMouseHover() {
    this.setState({ isHovering: true });
  }

  bye = event => {
    let el = event.target;
    el.className = "plantbox";
    this.setState({ isHovering: false });
  };

  render() {
    const { name, usage, key } = this.props;
    var stylePlantsBox = () => {
      let randomNumber = Math.floor(Math.random() * 5);
      var classes = ["green", "purple", "teal", "violet", "pink"];
      return {color: classes[randomNumber]} ;
    };

    return (
      <Container>
        <div
          className="plantbox text-green card-title"
          onMouseOver={this.handleMouseHover}
          onMouseOut={this.bye}
          style={
            {
             
              fontSize: "1.2rem"
            }
          }
        >
          {name}
          {key}

          {this.state.isHovering && (
            <div
              className="card card-body"
              style={{
                position: "absolute",
                top: "3.8rem",
                paddingTop: "0.1rem",
                fontSize: "1.2rem",
                color: "darkolivegreen",
                backgroundColor: "white",
                opacity: "1"
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
        <Row>
          <Col className="text-center">
            {" "}
            <Button
              outline
              color="success"
              onClick={this.props.onDeleteClick}
              size="sm"
            >
              Apagar do Mongo
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
  usage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(PlantItem);
