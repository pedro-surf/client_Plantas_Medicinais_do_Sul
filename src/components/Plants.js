import React, { Component } from "react";
import { Container } from "reactstrap";
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
        {items.map(({ _id, name, usage }) => (
          <div className="d-inline-block card text-green">
            <PlantItem
              name={name}
              key={_id}
              usage={usage}
              onDeleteClick={this.onDeleteClick.bind(this, _id)}
            />
          </div>
        ))}
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
