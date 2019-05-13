import React, { Component } from "react";
import ComponentCard from "./ComponentCard";
import { Row, Col } from "reactstrap";
import "../../App.css";
import plantsImg from "./images/plants.jpeg";
import psychImg from "./images/psychedelics.jpeg";
import foodsImg from "./images/foods.jpeg";
import progImg from "./images/prog.jpg";
import recipesImg from "./images/recipes.jpg";

export default class PlantsLanding extends Component {
  state = {};

  render() {
    return (
      <div className="landing text-center">
        <Col>
          <h5 className="pt-3">This is an app for portfolio purposes.</h5>
          <h6>
            made with MERN stack and based on studies made within open-source
            community.
          </h6>
          <Row className="d-flex justify-content-center">
            <ComponentCard
              title="Plants"
              desc="South American plants guide & info"
              route="/plants"
              resources={"Redux (Thunk), RegExp, Filter, React.js"}
              img={plantsImg}
            />
            <ComponentCard
              title="Food & Nutrition"
              desc="Health and what to eat tips"
              route="/food"
              resources={"CSS, React.JS, Conditional Rendering"}
              img={foodsImg}
            />
            <ComponentCard
              title="Programming Learning"
              desc="My top resources for learn coding art"
              route="/learn"
              resources={"OOP, React.js, platforms shown"}
              img={progImg}
            />
            <ComponentCard
              title="Cool Recipes"
              desc="Cooking delicious recipes"
              route="/recipes"
              resources={"Redux [Thunk], Basic Reactive behavior"}
              img={recipesImg}
            />
            <ComponentCard
              title="Natural Magic"
              desc="Psychoactive species guide & info"
              route="/psychedelics"
              resources={
                "CSS Animations, Map and Filter, Basic Reactive behavior"
              }
              img={psychImg}
            />
          </Row>
          <Row className="d-flex justify-content-center" />
        </Col>
      </div>
    );
  }
}
