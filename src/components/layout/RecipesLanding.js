import React, { Component } from "react";
import { Row, Col, Alert, ListGroupItem } from "reactstrap";
import ReactToolTip from "react-tooltip";
import "./Landings.css";

class RecipesLanding extends Component {
  state = {
    recipes: []
  };

  render() {
    return (
      <div
        className="recipes text-white"
        onMouseEnter={() => this.setState({ hovering: true })}
      >
        <Col>
          <div className="dark-overlay p-2">
            <h2>Receitas naturais</h2>

            <div className="dark-overlay d-flex justify-content-center">
              <Row>
                <p>
                  Recipes works! TODO: make recipeItem component and connect to
                  Redux letting user add and look for recipes
                </p>
              </Row>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

export default RecipesLanding;
