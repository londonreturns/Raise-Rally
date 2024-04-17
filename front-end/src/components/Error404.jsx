import React from 'react'
import { MdReportGmailerrorred } from "react-icons/md";
import { Link } from 'react-router-dom';
import './error.css'
import Header from './Header';
import Footer from './Footer';
function Error404() {
  return (
    <>
    <Header/>
    {/* error page if user try to access the page that doesn't exist */}
        <div className='container-fluid d-flex justify-content-center fissy align-content-center text-center'>
     <div className='row container'>
        <div className='col-lg-10'>
        <h1>404 </h1>
       <h3>Look like you're lost</h3>
       <h2>the page you are looking for not avaible!</h2>

        </div>
        <div className="col-lg-2">
           <MdReportGmailerrorred size={350}/> 
        </div>
      <Link to="/">
       <div className="btn continueBtn  text-white  text-center pb-4 ">
        Home
       </div>
       </Link>
     </div>
    </div>
    <Footer/>
    </>
  )
}

export default Error404
