import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { getPlants, deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";
import PlantItem from "./PlantItem";
import PropTypes from "prop-types";

class Plants extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getPlants();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        {items.map(({ _id, name, usage }) =>
          name.toUpperCase().charAt(0) == "A" ? (
            <div className="d-inline-block card text-green">
              <PlantItem name={name} key={_id} usage={usage} />
            </div>
          ) : name.toUpperCase().charAt(0) == "E" ? (
            <div className="d-inline-block card text-green">
              <PlantItem name={name} key={_id} usage={usage} />
            </div>
          ) : (
            "NOt A nor E"
          )
        )}
      </Container>
    );
  }
}

Plants.propTypes = {
  getPlants: PropTypes.func.isRequired,
  addPlant: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getPlants, deleteItem }
)(Plants);
