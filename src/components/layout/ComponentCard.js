import React from "react";
import { Link } from "react-router-dom";
const ComponentCard = props => (
  <Link to={props.route} style={{ textDecoration: "none", color: "black" }}>
    <div
      className="card"
      style={{ width: "20rem", margin: "1rem", border: "1.5px solid black" }}
    >
      <img
        src={props.img}
        className="card-img-top d-block"
        style={{
          width: "19.9rem",
          height: "13rem",
          border: "1px solid purple"
        }}
        alt="app's component"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{ fontSize: "0.7rem" }}>
          Tools used:
        </li>
        <li className="list-group-item" style={{ border: "1px solid black" }}>
          {props.resources}
        </li>
      </ul>
    </div>
  </Link>
);

export default ComponentCard;
