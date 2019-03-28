import React, { Component } from "react";
import Landing from "./components/layout/Landing";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Landing />
        </div>
      </Provider>
    );
  }
}

export default App;
