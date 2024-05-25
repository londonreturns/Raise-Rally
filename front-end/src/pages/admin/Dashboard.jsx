import React from 'react'; 
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'; 
import { CgProfile } from "react-icons/cg"; 
import { MdDashboard } from "react-icons/md";
import { MdHome } from "react-icons/md"; 
import { Link, Outlet, NavLink } from 'react-router-dom';
function Dashboard() {
  const email=localStorage.getItem("email") ;
  const user=localStorage.getItem("userType");

  return (
  
    <>
      <div className="row w-100 dashboard ">
        <div className='col-lg-2 sticky-lg-top top-0 d-block vh-100 border border-end border-1 border-dark-subtle'>
          <Sidebar className='d-inline '>
            <Menu>
              <div className='d-flex justify-content-center mt-3'>
                <div className='text-center'>
                  <div className=''><CgProfile size={45} /></div> {/* Profile icon */}
                  <div>{email}</div>
                  <hr />
                </div>
              </div>
              <NavLink to='/admin/dashboard' activeClassName="active"> {/* Link to dashboard */}
                <MenuItem icon={<MdDashboard size={20} />}>Dashboard</MenuItem>
              </NavLink>
              <SubMenu className='fw-seimbold' label="Profile"> {/* Profile submenu */}
                <NavLink to='/admin/dashboard/editprofile' activeClassName="active"> {/* Link to manage profile */}
                  <MenuItem className='text-dark'>Manage Profile</MenuItem>
                </NavLink>
              </SubMenu>
              <NavLink to="/admin/dashboard/editproduct" activeClassName="active"> {/* Link to edit products */}
                <MenuItem className='text-dark'>All products</MenuItem>
              </NavLink>
              <NavLink to="/admin/dashboard/editcompany" activeClassName="active"> {/* Link to manage companies */}
                <MenuItem className='text-dark'>Companys</MenuItem>
              </NavLink>
              <Link to='/' className='text-dark'> {/* Link to homepage */}
                <MenuItem icon={<MdHome size={20} />}>Homepage</MenuItem>
              </Link>
            </Menu>
          </Sidebar>
        </div>
        <div className='col-lg-10 d-block ms-lg-auto d-flex justify-content-center'> {/* Main content area */}
          <Outlet /> {/* Render matched child routes */}
        </div>
      </div>
     
    </>
  );
}

export default Dashboard; // Exporting the Dashboard component as default
