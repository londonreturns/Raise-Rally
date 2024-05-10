import React from "react";
import { MdVerified } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import getAxios from "../hooks/getAxios";
//Card takes Props from it's parent component
function Card({
  imageSrc,
  title,
  description,
  companyName,
  price,
  daysLeft,
  progressPercentage,
  companyVerified,
  productVerified,
}) {
  const navigate=useNavigate();
  // Renders heart icon if company is verified
  const shouldShowApproval = () => {
    const love = companyVerified;
    return love === 1 ? <FaHeart size={20} /> : null;
  };

  const shouldShowHeart = () => {
    const verified = productVerified;
    return verified === 1 ? <MdVerified size={25} /> : null;
  };

  return (
    <div className="col-md-4 col-lg-3 p-4 d-flex justify-content-around" onClick={()=>{
      navigate("/detail");
    }}>
      {/* <div className="d-flex justify-content-center pt-4"> */}
      <div className="card">
        <img src={imageSrc} className="card-img-top  img-100" alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <h5 className="card-title preview1-text">{title}</h5>
            </div>
            <div className="col-2">
              {/* Only shows up if the product is verified */}
              {shouldShowApproval()}
            </div>
          </div>
          <div className="row ">
            <div className="d-flex justify-content-between text-center">
              <div>
                <p className="fs-6 text-body-secondary fw-semibold">
                  {companyName}
                </p>
              </div>
              <div>{shouldShowHeart()}</div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <p className="card-text preview-text">{description}</p>
            </div>

            <div className="row py-1">
              <div className="d-flex justify-content-start text-center">
                <div className="pe-2">
                  <h5>रू{price}</h5>
                </div>
                <div>NPR Raised</div>
              </div>
              <div>
                <div
                  className="progress progress-length  "
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-color "
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <small className="text-body-secondary">
                <div className="d-flex justify-content-start align-content-center">
                  <div>
                    <IoIosTime size={25} />
                  </div>
                  <div className="ps-2 fs-6">{daysLeft} days left</div>
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Card;
