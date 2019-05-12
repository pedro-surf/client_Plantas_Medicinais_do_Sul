import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addPlant } from "../actions/itemActions";
import CheckBox from "./CheckBox";
import checkboxes from "../objects/usagecheckboxes";

class AddPlant extends Component {
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
    this.toggle(); // Close modal
    this.setState({ name: "", usage: "" }); // Clear State
  };

  onNameChange = e => this.setState({ name: e.target.value });
  onUsageChange = e => {
    this.setState({
      usage: this.state.usage.concat(",", e.target.value)
    });
  };
  onCheck = item => {
    this.setState(prevState => ({
      usage: prevState.usage.concat(item.label, ",")
    }));
  };

  render() {
    return (
      <div style={{ fontSize: "0.5rem" }}>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Adicionar Planta
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Cadastrar nova espécie medicinal
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Nome da planta"
                  onChange={this.onNameChange}
                />
                <p
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    paddingTop: "0.8rem"
                  }}
                >
                  Adicione ao menos um uso dentre as opções:
                </p>
                {checkboxes.map(item => (
                  <div className="d-inline-block w-50 p">
                    <CheckBox
                      name={item.name}
                      onChange={this.onCheck.bind(this, item)}
                      checked={this.state.usage.includes(item.label)}
                    />
                    <label key={item.key}>{item.label}</label>
                  </div>
                ))}

                <p>
                  <label for="usage">Outros usos:</label>
                </p>
                <Input
                  style={{ marginBottom: "0.8rem" }}
                  type="text"
                  name="usage"
                  id="usage"
                  placeholder="Add usos, separados por virgula e espaço (ex: sono, febre)"
                  onChange={this.onUsageChange}
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

const mapStateToProps = (state, ownProps) => {
  return {
    plant: state.prop
  };
};

export default connect(
  mapStateToProps,
  { addPlant }
)(AddPlant);
