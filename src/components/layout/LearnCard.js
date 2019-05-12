import React from "react";

const LearnCard = props => (
  <a
    href={props.href}
    style={{ textDecoration: "none", color: "black" }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      className="card"
      style={{ margin: "1rem", border: "1.5px solid black" }}
    >
      <img
        src={props.img}
        className="card-img-top d-block"
        style={{
          maxWidth: "120px",
          maxHeight: "120px",
          alignSelf: "center"
        }}
        alt="app's component"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <span className="small-info">Idiomas: {props.lan}</span>
      </div>
      <ul
        className="list-group list-group-flush"
        style={{ textAlign: "justify" }}
      >
        <li className="list-group-item">
          <span className="row small-info">Descrição:</span>

          {props.brief}
        </li>
        <li className="list-group-item">
          <span className="row small-info">Áreas:</span>

          {props.desc}
        </li>
      </ul>
    </div>
  </a>
);

export default LearnCard;
