import React, { useState, useEffect } from "react";
import logo from "../assets/raiserally-logo.png";
import profile from "../assets/profile.webp";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (location.state?.loggedIn) {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });

      
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const renderSearchField = !isDetailPage && (
    <input
      type="search"
      id="form1"
      className="form-control w-50 border border-1 border-dark-subtle"
      placeholder="Search Company or Products"
      aria-label="Search"
      value={searchQuery}
      onChange={handleSearchInputChange}
    />
  );

 
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
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
          {renderSearchField}
          {localStorage.getItem("userType") === "admin" ? (
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
                  className="rounded-circle border border-1 border-dark-subtle"
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
                <li className="ps-3 d-flex justify-content-center gap-2 align-content-center px-5 border-bottom border-1 pb-2">
                  <div>
                    <img
                      src={profile}
                      className="rounded-circle border border-1 border-dark-subtle"
                      width="32"
                      height="32"
                      alt="..."
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span>{localStorage.getItem("email")}</span>
                  </div>
                </li>
                <li>
                  <Link to="/admin/dashboard" className="dropdown-item">
                    <MdDashboard size={26} className="pe-2" /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <RiLogoutBoxLine size={26} className="pe-2" /> Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : localStorage.getItem("userType") === "backers" ? (
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
                  className="rounded-circle border border-1 border-dark-subtle"
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
                <li className="ps-3 d-flex justify-content-center gap-2 align-content-center px-5 border-bottom border-1 pb-2">
                  <div>
                    <img
                      src={profile}
                      className="rounded-circle border border-1 border-dark-subtle"
                      width="32"
                      height="32"
                      alt="..."
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span>{localStorage.getItem("email")}</span>
                  </div>
                </li>
                <li>
                  <Link to="/backer/dashboard" className="dropdown-item">
                    <MdDashboard size={26} className="pe-2" /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <RiLogoutBoxLine size={26} className="pe-2" /> Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : localStorage.getItem("userType") === "company" ? (
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
                  className="rounded-circle border border-1 border-dark-subtle"
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
                <li className="ps-3 d-flex justify-content-center gap-2 align-content-center px-5 border-bottom border-1 pb-2">
                  <div>
                    <img
                      src={profile}
                      className="rounded-circle border border-1 border-dark-subtle"
                      width="32"
                      height="32"
                      alt="..."
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span>{localStorage.getItem("email")}</span>
                  </div>
                </li>
                <li>
                  <Link to="/company/dashboard" className="dropdown-item">
                    <MdDashboard size={26} className="pe-2" /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <RiLogoutBoxLine size={26} className="pe-2" /> Logout
                  </Link>
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
          )}
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav d-block d-md-none mb-2 ">
            <div className="pt-2 ">
              <ul>
                <Link>
                  {" "}
                  <li className="text-dark">Art</li>
                </Link>
                <Link>
                  {" "}
                  <li className="text-dark">Crafts</li>
                </Link>
                <Link>
                  {" "}
                  <li className="text-dark">Dance</li>
                </Link>
                <Link>
                  {" "}
                  <li className="text-dark">Film</li>
                </Link>
                <Link>
                  {" "}
                  <li className="text-dark">Music</li>
                </Link>
                <Link>
                  {" "}
                  <li className="text-dark">Technology</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="nbar pt-2 container-fluid d-none d-md-block ">
        <ul className="d-flex justify-content-around ">
          <li>
            <NavLink to="/categories/art">
              <h5 className="fs-5  ">Art</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/crafts">
              <h5 className="fs-5  ">Crafts</h5>
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
      <div>
        {/* Modal */}
        <div
          className="modal fade  "
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog position-sticky top-0 start-100 w-25">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <RiLogoutBoxLine />
                  Logout
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
