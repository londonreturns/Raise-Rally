import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { Link, Outlet, NavLink } from 'react-router-dom';

function CompanyDashboard() {
    const email=localStorage.getItem("email")
  return (
    <>
      <div className="row w-100 dashboard">
        <div className='col-lg-2 sticky-lg-top top-0 d-block vh-100'>
          <Sidebar className='d-inline'>
            <Menu>
              <div className='d-flex justify-content-center'>
                <div className='text-center'>
                  <div className=''><CgProfile size={45} /></div>
                  <div>{email}</div>
                  <hr />
                </div>
              </div>
              <NavLink to='/company/dashboard' activeClassName="active">
                <MenuItem icon={<MdDashboard size={20} />}>Dashboard</MenuItem>
              </NavLink>
              <SubMenu className='fw-seimbold' label="Profile">
                <NavLink to='/backer/dashboard/editprofile' activeClassName="active">
                  <MenuItem className='text-dark'>Manage Profile</MenuItem>
                </NavLink>
                <NavLink to='/' activeClassName="active">
                  <MenuItem className='text-dark'>Logout</MenuItem>
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

export default CompanyDashboard;
