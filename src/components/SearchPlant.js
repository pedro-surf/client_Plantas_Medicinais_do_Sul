import React, { Component } from "react";
import { Button, Input } from "reactstrap";

class SearchPlant extends Component {
constructor(props) {
super(props);
this.state = { // Initial State
    plants: props.allPlants,
    received_query: false,
    queryname: "", // Search for plants with name related to this string's regex
    modal: false
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
    this.setState({ [event.target.name]: event.target.value, received_query: !this.state.received_query });
  }

 toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    const plants = this.props.allPlants;

    return (
<div>
      <Button onClick={this.toggle}>Buscar Plantas </Button>
 	<div>
	{this.state.modal &&
        <div>
        <Input onChange={this.handleChange} name="queryname" className="dark" placeholder="Procure uma espécie..." />
        </div>}
             
{this.state.received_query && (<div><ul>{plants.map(item => (<li>{item.name}</li>))}</ul></div>)
	}
	</div>
</div>
    );
  }
}

export default SearchPlant;
