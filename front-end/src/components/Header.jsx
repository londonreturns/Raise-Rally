import React from "react";
import raiserallyLogo from "../assets/raiserally-logo.png";
import { Link,NavLink } from "react-router-dom";
import Navbar from "./Navbar";
function Header() {
  return (
    <>
      <div className="mb-3  bug container-fluid"></div>

      <nav
        className="navbar navbar-expand-lg fixed-top px-lg-5 container-fluid "
        style={{ backgroundColor: "#40B3A2" }}
      >
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarButtonsExample"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand" href="#">
            <img src={raiserallyLogo} className=" logo " alt="Raise Rally" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <div className="d-flex align-items-center ms-auto">
              <button type="button" className=" btn btn-outline-dark px-3 me-2">
                Login
              </button>
              <button
                type="button"
                className="text-white btn btn-danger   me-3 "
              >
                Sign up for free
              </button>
              <a
                className="btn btn-subtle px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
