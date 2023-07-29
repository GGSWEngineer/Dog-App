import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar(props) {
  // You can use the "props" argument to access data passed to the component
  const dogLinks = props.dogs.map((dog) => (
    <li className="nav-item" key={dog.name}>
      <NavLink to={`/dogs/${dog.name}`} className="nav-link" key={dog.name}>
        {dog.name}
      </NavLink>
    </li>
  ));

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand Navbar-logo" to="/dogs">
        Dog App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expander="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dogs">
              Home
            </Link>
          </li>
          {dogLinks}
          <li className="nav-item">Back</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
