import React, { Component } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      <span className="p-4 nav-item font-weight-bold">
        Copyright &copy; {new Date().getFullYear()} Pedro Silveira
      </span>
      |
      <span className="p-4 nav-item font-weight-bold">
        <a
          href="http://www.github.com/pedro-surf"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>{" "}
      </span>
      |
      <span className="p-4 nav-item font-weight-bold">
        <a
          href="http://www.linkedin.com/in/pedro-surf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          LinkedIn Profile
        </a>{" "}
      </span>
    </footer>
  );
};
