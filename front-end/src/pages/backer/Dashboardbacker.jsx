import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'; //Importing necessary components from react-pro-sidebar 
import { CgProfile } from "react-icons/cg"; //Importing proifle icon from react-icons
import { MdDashboard } from "react-icons/md"; //Importing dashboard icon from react-icons
import { MdHome } from "react-icons/md"; //Importing home icon from react-icons
import { Link, Outlet, NavLink } from 'react-router-dom'; //Importing Link, Outlet, and NavLink from react-router-dom for navigation

function Dashboardbacker() {
    const email=localStorage.getItem("email") //Retrive email from local-Storage

    // JSX for the component
  return (
    <>
      <div className="row w-100 dashboard">
        <div className='col-lg-2 sticky-lg-top top-0 d-block vh-100'>
          <Sidebar className='d-inline'>
            <Menu>
              <div className='d-flex justify-content-center'>
                <div className='text-center'>
                  <div className=''><CgProfile size={45} /></div> {/* Display Profile icon */}
                  <div>{email}</div>
                  <hr />
                </div>
              </div>
              <NavLink to='/backer/dashboard' activeClassName="active">
                <MenuItem icon={<MdDashboard size={20} />}>Dashboard</MenuItem>
              </NavLink>
              <SubMenu className='fw-seimbold' label="Profile">
                <NavLink to='/backer/dashboard/editprofile' activeClassName="active">
                  <MenuItem className='text-dark'>Manage Profile</MenuItem>
                </NavLink>
              </SubMenu>
              <Link to='/' className='text-dark'>
                <MenuItem icon={<MdHome size={20} />}>Homepage</MenuItem>
              </Link>
            </Menu>
          </Sidebar>
        </div>
        <div className='col-lg-10 d-block ms-lg-auto d-flex justify-content-center'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboardbacker;
