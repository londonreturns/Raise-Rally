import React from "react";
import raiserallyLogo from "../assets/raiserally-logo.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
function Header() {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.loggedIn) {
      alert("Logged in successfully !");
      // Clear the state after showing the alert from login.jsx file
      navigate(location.loggedIn, { state: null });
    }
  }, [location]);
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-3  bug "></div>

      <nav
        className="navbar navbar-expand-lg fixed-top px-lg-5 bg-white border border-bottom-1 border-black-50 bg-dark-subtle"
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
            {localStorage.getItem("userType") ? (
              <>
                <div className="d-flex align-items-center ms-auto dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center"
                    href="#"
                    role="button"
                    id="navbarDropdownMenuAvatar"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="rounded-circle"
                      width="45"
                      height="45"
                      alt="..."
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {localStorage.getItem("email")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.clear();
                          navigate("/");
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex align-items-center ms-auto">
                  <Link to="/login">
                    <button
                      type="button"
                      className=" btn btn-outline-dark px-3 me-2"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      type="button"
                      className="text-white btn btn-primary  me-3 "
                    >
                      Sign up for free
                    </button>
                  </Link>
                  <a
                    className="btn btn-subtle px-3"
                    href="https://github.com/mdbootstrap/mdb-ui-kit"
                    role="button"
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
