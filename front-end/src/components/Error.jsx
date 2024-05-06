import React from 'react'
import error from ".././assets/404error.png";
import './error.css'
import Header from './Header';
import Footer from './Footer';
function Error404() {
  return (
    <>
   
    {/* error page if user try to access the page that doesn't exist */}
        <div className='container-fluid error404 vh-100 pt-5 text-black'>
          <div className="row pt-5"></div>
          <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                <h1 className='fw-bold'>500</h1>
                <h2>Sorry</h2>
                <p>Unexpected error</p>
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
