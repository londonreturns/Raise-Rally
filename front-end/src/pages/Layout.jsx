import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      
      <div className="col-lg-4">
      <ul>
        <li>Dashboard</li>
        <li>Backers</li>
        <li>Company</li>
        <li>Edit profile</li>
      </ul>
    </div>
    <div className='col-lg-8'> 
    <Outlet/>
    </div>
      
    </>
  )
}

export default Layout
