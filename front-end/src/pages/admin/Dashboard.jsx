import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (


    <>
    <div className="row w-100">
    <div className='col-lg-2 position-lg-fixed d-block  vh-100 '>
  <Sidebar className='d-inline'>
  <Menu >
  <div className='d-flex justify-content-center '>
    <div className='text-center'>
      <div className=''><CgProfile size={45}/></div>
      <div>eishworachara@gmail.com</div>
    <hr />
    </div>

  
  </div>
    <MenuItem icon={<MdDashboard size={20}/>}>  Dashboard </MenuItem>
    <MenuItem icon={<MdHome size={20} />} >Homepage</MenuItem>
    <SubMenu className='fw-seimbold' label="Profile">
      <MenuItem > Manage Profile</MenuItem>
    </SubMenu>
    <MenuItem > All products </MenuItem>
    <MenuItem   > Companys </MenuItem>
    <MenuItem > Backers</MenuItem>
   
  </Menu>

</Sidebar>

</div>
<div className='col-lg-10 d-flex justify-content-center'>
  <Outlet/>
  
</div>
</div>
    </>
  );
}

export default Dashboard;
