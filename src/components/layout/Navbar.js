import React, { Component } from "react";
import Clock from "./Clock";
import "../../App.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-0 bg-dark d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {" "}
                  About
                </Link>
              </li>

              <li className="nav-item font-weight-bold">
                <a
                  href="http://www.github.com/pedro-surf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  GitHub
                </a>{" "}
              </li>
              <li className="nav-item font-weight-bold">
                <a
                  href="http://www.linkedin.com/in/pedro-surf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  LinkedIn Profile
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <Clock />
      </nav>
    );
  }
}
