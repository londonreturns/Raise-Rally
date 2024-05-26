import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"; //Importing necessary components from react-pro-sidebar
import { CgProfile } from "react-icons/cg"; //Importing proifle icon from react-icons
import { MdDashboard } from "react-icons/md"; //Importing dashboard icon from react-icons
import { MdHome } from "react-icons/md"; //Importing home icon from react-icons
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom"; //Importing Link, Outlet, and NavLink from react-router-dom for navigation
import { RiLogoutBoxLine } from "react-icons/ri";
function CompanyDashboard() {
  const navigate=useNavigate();
  const email = localStorage.getItem("email"); //Retrive email from local-Storage
  
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
              <NavLink to="/company/dashboard" activeClassName="active">
                <MenuItem ><MdDashboard size={20} className="me-1"/>Dashboard</MenuItem>
              </NavLink>
              <SubMenu className='fw-seimbold' label="Products"> 
              <NavLink
                to="/company/dashboard/editprofile"
                activeClassName="active"
              >
                <MenuItem className="text-dark">Manage Profile</MenuItem>
              </NavLink>
              <NavLink
                to="/company/dashboard/myproducts"
                activeClassName="active"
              >
                <MenuItem className="text-dark">My Products</MenuItem>
              </NavLink>
              <NavLink
                to="/company/dashboard/addproduct"
                activeClassName="active"
              >
                <MenuItem className="text-dark">Add Product</MenuItem>
              </NavLink>
              </SubMenu>
              <Link to='/' className='text-dark'> {/* Link to homepage */}
              <MenuItem > 
              <MdHome size={20} className="me-1"/>Homepage
              </MenuItem>
              </Link>
              <Link>
                <MenuItem
                  className="text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <RiLogoutBoxLine size={20} className="me-1"/>
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
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered  w-50">
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

export default CompanyDashboard;
