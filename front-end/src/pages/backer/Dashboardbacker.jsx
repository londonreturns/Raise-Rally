import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"; 
import { CgProfile } from "react-icons/cg"; 
import { MdDashboard } from "react-icons/md"; 
import { MdHome } from "react-icons/md"; 
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom"; 
import { RiLogoutBoxLine } from "react-icons/ri";
function Dashboardbacker() {
  const navigate=useNavigate();
  const email = localStorage.getItem("email"); 
  
  // JSX for the component
  return (
    <>
      <div className="row w-100 dashboard">
        <div className="col-lg-2 sticky-lg-top top-0 d-block vh-100">
          <Sidebar className="d-inline">
            <Menu>
              <div className="d-flex justify-content-center">
                <div className="text-center">
                  <div className="">
                    <CgProfile size={45} />
                  </div>{" "}
                  {/* Display Profile icon */}
                  <div>{email}</div>
                  <hr />
                </div>
              </div>
              <NavLink to="/backer/dashboard" activeClassName="active">
                <MenuItem icon={<MdDashboard size={20} />}>Dashboard</MenuItem>
              </NavLink>

              <NavLink
                to="/backer/dashboard/editprofile"
                activeClassName="active"
              >
                <MenuItem className="text-dark">Manage Profile</MenuItem>
              </NavLink>
              <Link>
                <MenuItem
                  className="text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <RiLogoutBoxLine size={20} />
                  Logout
                </MenuItem>
              </Link>
            </Menu>
          </Sidebar>
        </div>
        <div className="col-lg-10 d-block ms-lg-auto d-flex justify-content-center">
          <Outlet />
        </div>
      </div>
      <div>
        {/* Modal */}
        <div
          className="modal fade w-50"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog w-50">
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
                <Link to='/'>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={()=>{
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

export default Dashboardbacker;
