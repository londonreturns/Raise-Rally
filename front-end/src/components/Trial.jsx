import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
function Trial() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center ">
      {/* dispaly-block  */}
      <div className="main-section bg-dark  d-block ">
        {/* secondary section */}
        <div className="secondary-section  bg-body ">
          {/* image section  */}
         <div className="item">
          <div className="  me-3 pb-2 image position-relative">
              <div className=" text-white position-absolute absolute-hidden top-0 start-0 m-2  d-block ">
                {/* verified  */}
                <div className="btn btn-warning  disabled opacity-100">
                     <span><VscVerifiedFilled size={23}/> </span><span className=" fs-6 ">TRUST PROVEN</span>
                </div>  
              </div>
              <div className="text-white position-absolute absolute-hidden top-0 end-0 m-2">
                {/* featured  product */}
                <div className="btn btn-light disabled opacity-100"><FaHeart size={20}/> 
                </div>  
              </div>
              <div >

              {/* image inside here  */}
              <img
                src="https://images.pexels.com/photos/21972309/pexels-photo-21972309/free-photo-of-a-girl-with-red-hair-and-a-guitar-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-100 rounded photo"
                alt=""
                srcset=""
                />
                </div>
                <div className=" text-white position-absolute absolute-hidden bottom-0 start-50 translate-middle-x mb-5">
                {/* View project  */}
                <div className="btn btn-light w-100">
                     <span className=" fs-6 text-uppercase">View campaign</span>
                </div>  
 
              </div>

              </div>

          {/* content section  */}
          <div className="content ">
            <div><h4 className="fs-6 text-secondary" style={{ fontSize: 20 }}>TRANSPORTATION</h4></div>
            <div>
              <p style={{ fontSize: 18}}>
              Voyager 1: World-class Hyper E-Bike for Aesthetes
              </p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trial;
