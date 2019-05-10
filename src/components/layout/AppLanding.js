import React, { Component } from "react";
import { Link } from "react-router-dom";
import ComponentCard from "./ComponentCard";
import Clock from "./Clock";
import { Row, Col } from "reactstrap";
import "../../App.css";
import plantsImg from "./images/plants.jpeg";
import psychImg from "./images/psychedelics.jpeg";
import foodsImg from "./images/foods.jpeg";

export default class PlantsLanding extends Component {
  state = {};

  render() {
    return (
      <div className="landing">
        <Col>
          <h5 style={{ textAlign: "center" }}>
            This is a portfolio app made with MERN stack and based on studies
            made within open-source community.
          </h5>

          <Row className="d-flex justify-content-center">
            <ComponentCard
              title="Plants"
              desc="South American plants guide & info"
              route="/plants"
              resources={"Redux (Thunk), JS higher-order functions"}
              img={plantsImg}
            />
            <ComponentCard
              title="Food & Nutrition"
              desc="Health and what to eat tips"
              route="/food"
              resources={"CSS,"}
              img={foodsImg}
            />
            <ComponentCard
              title="Natural Magic"
              desc="Psychedelic species guide & info"
              route="/psychadelics"
              resources={
                "CSS Animations, Map and Filter, Basic Reactive behavior"
              }
              img={psychImg}
            />
          </Row>
          <Row className="d-flex justify-content-center">
            <Clock />
          </Row>
        </Col>
      </div>
    );
  }
}
