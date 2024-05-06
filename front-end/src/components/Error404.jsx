import React from 'react'
import error from ".././assets/404error.png";
import { Link } from 'react-router-dom';
import './error.css'
import Header from './Header';
import Footer from './Footer';
function Error404() {
  return (
    <>
   
    {/* error page if user try to access the page that doesn't exist */}
        <div className='container-fluid error404 vh-100 pt-5 text-black'>
          <div className="row h-25">

          </div>
          <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                <h1 className='fw-bold'>404</h1>
                <h2>Sorry</h2>
                <p>Page not found</p>
                <Link to="/">
                <div className="btn btn-secondary">
                  Back to Homepage
                </div>
                </Link>
                </div>
                <div className="col-lg-3">
                  <img src={error} alt="" srcset=""/>
                </div>
                <div className="col-lg-3"></div>
          </div>
         </div>
    </>
  )
}

export default Error404
