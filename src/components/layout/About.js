import React from "react";
import "./Landings.css";
import { Col, Row } from "reactstrap";

export default function About() {
  return (
    <div className="about">
      <div className="dark-overlay">
        <Col>
          <div>
            <p className="lead pt-3 pl-5">
              {"  "}Greetings! I am Pedro Silveira, 22, from Brazil. I study
              Computering Engineering at UFSC, currently.
            </p>
            <p className="pl-4 pr-4 text-justify">
              I am focused on getting a developer job, targeting web development
              in general. I love the process and it's many parts, including the
              back and front-end.{" "}
            </p>
            <p className="lead">
              If you like what I've coded so far or would give me a shot by
              testing me, let's get in touch. Thanks!.
            </p>
          </div>

          <h5>FIELDS OF LATE STUDY:</h5>
          <h4>JAVASCRIPT & FULL-STACK WEB DEVELOPMENT</h4>
          <Row>
            <Col>
              <p className="mt-2"> Where’ve I been on?</p>
              <ul className="text-left pl-3">
                <li>
                  {" "}
                  <mark>MERN</mark> stack (Mongoose, Express, React, Node)
                  webapps
                </li>
                <li>TypeScript, ES6 features </li>
                <li>
                  Redux, Node Packages (Passport, JWT, Bcrypt, Axios, Jest...){" "}
                </li>
                <li>
                  SASS/LESS, SVG icons, Animate.CSS, Bootstrap, Materialize
                  <span className="small-info">
                    (Material UI based framework)
                  </span>
                </li>
                <li>D3.JS data visualization, jQuery, HTML5 accessibility </li>
                <li>
                  Git source control. Postman and devTools for testing (browser)
                </li>
                <li>Heroku, AWS, Netlify deployment & usage </li>
                <li>MySQL, Xampp</li>
                <li>
                  Elixir, Phoenix{" "}
                  <span className="small-info"> currently studying</span>
                </li>
                <li>Angular7 (intermediate) </li>
                <li>Vue.JS (basic) </li>
                <li>
                  Babel, Webpack{" "}
                  <span className="small-info"> basic, currently studying</span>
                </li>
                <li>PHP (basic) </li>
                <li>
                  GraphQL, Apollo, Meteor (basic)
                  <span className="small-info"> currently studying</span>
                </li>{" "}
              </ul>{" "}
            </Col>
            <Col>
              <h5 className="mt-2">
                Spoken Languages{" "}
                <span className="small-info">(love learning them)</span>
              </h5>{" "}
              <ul className="list-unstyled text-right">
                <li>
                  <span className="small-info">native</span> Portuguese
                </li>
                <li>
                  <span className="small-info">fluent</span> English, Spanish,
                  Czech
                </li>
                <li>
                  <span className="small-info">basic</span> Slovakian, Polish,
                  German
                </li>
              </ul>
              <p className="p-1 text-justify">
                Other subjects that I’ve at least watched tutorials, crash
                course and/or read, and intend to dive into deeper soon.::
              </p>{" "}
              <ul className="text-justify pl-3">
                <li>Ruby on Rails</li> <li>Django</li>{" "}
                <li>Gulp, Scrum, Docker</li> <li>Integrated Testing and TDD</li>{" "}
                <li>Laravel</li> <li>C development (for university mostly)</li>
              </ul>
              Recent projects:
              <p className="lead text-justify">
                My own projects: (this app with few different topics),a
                housecare app project which is still being studied (I made the
                client prototype), an e-commerce for local organic farmers in
                partnership with mates from uni. I’m following{" "}
                <a
                  href="https://www.udemy.com/mern-stack-front-to-back/"
                  rel="noopener noreferrer"
                  target="blank"
                  style={{ color: "white" }}
                >
                  <mark>this Udemy course</mark>
                </a>{" "}
                while learning. In 2018 made an e-commerce project for a local
                brand (Ciawax) which unfortunately wasn’t a keeper.
              </p>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}
