import React from "react";
import logo from "../assets/raiserally-logo.png";
import profile from "../assets/profile.webp";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
function Header() {
  const navigate = useNavigate();
  return (
    <>
            <nav className="navbar navbar-expand-lg fixed-top bg-white border border-bottom border-dark-50">
        <div className="container-fluid">
            
          <Link to="/" className="navbar-brand d-none d-md-block ">
            <img src={logo} alt="Raiserally Logo" width={62} height={47} />
          </Link>
          <button
            className="navbar-toggler d-block d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <input
              type="search"
              id="form1"
              class="form-control w-50 border border-1 border-dark-subtle"
              placeholder="Search Company or Products"
              aria-label="Search"
            />
            {localStorage.getItem("userType") ? (
            <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center"
              role="button"
              id="navbarDropdownMenuAvatar"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={profile}
                className="rounded-circle"
                width="43"
                height="43"
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
         ) : (
          <div>
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
              </div>
            )}         </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav d-block d-md-none mb-2 ">
              <div className="pt-2 ">
                <ul>
                <Link> <li className="text-dark">Art</li></Link>
                <Link> <li className="text-dark">Crafts</li></Link>
                <Link> <li className="text-dark">Dance</li></Link>
                <Link> <li className="text-dark">Film</li></Link>
                <Link> <li className="text-dark">Music</li></Link>
                <Link> <li className="text-dark">Technology</li></Link>
                </ul>
                
              </div>
            </div>
          </div>
      </nav>
      <div className=" nbar pt-2 container-fluid d-none d-md-block ">
        <ul className="d-flex justify-content-around ">
          <li>
            <NavLink to="/categories/art">
              <h5 className="fs-5  ">Art</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/crafts">
              <h5  className="fs-5  ">Crafts</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/dance">
              <h5 className="fs-5  ">Dance</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/film">
              <h5 className="fs-5  ">Film</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/music">
              <h5 className="fs-5  ">Music</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/technology">
              <h5 className="fs-5  fw-lighter">Technology</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
