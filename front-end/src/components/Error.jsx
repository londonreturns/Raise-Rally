import React from 'react'
import { MdReportGmailerrorred } from "react-icons/md";
import './error.css'
function Error() {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center fissy align-content-center text-center'>
     <div className='row container'>
        <div className='col-lg-10'>
        <h1>500 </h1>
       <h3>Server Error</h3>
       <p>It's not you,it's me.</p>
        </div>
        <div className="col-lg-2">
           <MdReportGmailerrorred size={350}/> 
        </div>
       
       <div className="btn continueBtn  text-white  text-center pb-4 ">
        Home
       </div>
     </div>
    </div>
    </>
  )
}

export default Error
