import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import PropTypes from "prop-types";
import addPlant from "../actions/itemActions";

export class AddPlant extends Component {
  state = {
    modal: false,
    name: "",
    usage: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newPlant = {
      name: this.state.name,
      usage: this.state.usage
    };

    // Add item via addItem action
    this.props.addPlant(newPlant);
    // Close modal
    this.toggle();
    this.setState({ name: "", usage: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Adicionar Planta
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Cadastrar espécie</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add plant name"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="usage"
                  placeholder="Add plant usage"
                  onChange={this.onChange}
                />
                <Button className="btn btn-success" block>
                  Adicionar Planta
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// PropTypes
AddPlant.propTypes = {
  addPlant: PropTypes.func.isRequired
};

export default AddPlant;
