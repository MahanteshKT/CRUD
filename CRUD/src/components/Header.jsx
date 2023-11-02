import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        MyCompany
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/view">
              view <span class="sr-only"></span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signin">
              Sign In
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
