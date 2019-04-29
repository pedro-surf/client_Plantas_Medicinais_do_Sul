import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, Input } from "reactstrap";
import checkboxes from "../objects/usagecheckboxes";
import SelectListGroup from "./SelectListGroup";


class SearchPlant extends Component {
constructor(props) {
super(props);
this.state = {
    plants: props.allPlants,
    showingresults: false,
    queryname: ""
  };
  this.searchPlant = this.searchPlant.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.toggle = this.toggle.bind(this);
}

searchPlant(plant) {
    	const { queryname } = this.state;
	this.setState({ plants: [...this.state.plants.filter(item => {
		let query = new RegExp(queryname, 'gi' );
		if (item.name.match(query)) {
		return item.name.match(query)
	} else { return null } })] })
}

handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

 toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

onSubmit(e) {
e.preventDefault();
    // Find requested usage
    this.searchPlant();
    // Close modal
    //
    this.setState({ showingresults: true });
  };

  render() {
    const { items } = this.props.plants;
    // Select options for status
    const options = checkboxes;

    return (
      <div className="text-center" >
              <Input
          onChange={this.handleChange}
          name="queryname"
          className="btn btn-dark"
          placeholder="Procure uma espécie..."
        />
        {this.state.showingresults && <div>{}</div>}
      </div>
    );
  }
}

export default SearchPlant;
