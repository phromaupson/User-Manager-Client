import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Manager
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {/* <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a> */}
          </li>
        </ul>
        <div className="nav-item">
          <Link to="/login" className="nav-link" style={{ color: "white" }}>
            Login
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/register" className="nav-link" style={{ color: "white" }}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
