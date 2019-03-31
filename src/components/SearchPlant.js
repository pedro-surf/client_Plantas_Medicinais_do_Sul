import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, Input } from "reactstrap";
import checkboxes from "../objects/usagecheckboxes";
import SelectListGroup from "./SelectListGroup";
import searchItem from "../actions/itemActions";

class SearchPlant extends Component {
  state = {
    selectedusage: "",
    showingresults: false
  };

  searchPlant = state => {
    return searchItem(this.state.selectedusage);
  };

  handleSelectChange = event => {
    this.setState({ selectedusage: event.target.label });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
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
      <div className="r-50 col-4 text-center" style={{ fontSize: "0.5rem" }}>
        Procurar plantas de acordo com uso desejado
        <SelectListGroup
          onChange={this.handleSelectChange}
          className="btn btn-dark"
          placeholder="Selecione o Uso:"
          options={options}
          style={{ maxHeight: "40%", maxWidth: "40%" }}
        />
        {this.state.showingresults && <div>{}</div>}
      </div>
    );
  }
}

export default SearchPlant;
