import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlantsLanding from "./components/layout/PlantsLanding";
import FoodLanding from "./components/layout/FoodLanding";
import PsychLanding from "./components/layout/PsychLanding";
import AppLanding from "./components/layout/AppLanding";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="App">
            <Route exact path="/" component={AppLanding} />
            <Route exact path="/plants" component={PlantsLanding} />
            <Route exact path="/food" component={FoodLanding} />
            <Route exact path="/psychadelics" component={PsychLanding} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
