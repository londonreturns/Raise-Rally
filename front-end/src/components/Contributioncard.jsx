import React from "react";
import { useState } from "react";
import getAxios from "../hooks/getAxios";
//takes props from it's parent inside function contributioncard
function Contributioncard({productId}) {
  const {data}=getAxios(`http://localhost:8080/api/products/${productId}`)
  return (
    <>
      {/* rendering data from the props to the Contributioncard */}
      <div className="contribution m-3 bg-primary-subtle rounded">
        <div className="row pt-3 fs-5 ">
          <h4>Pledge रू{amount}</h4>
        </div>
        <div className="row">
          <h4 className="fs-5 fw-semibold">Access to pledge manager</h4>
        </div>
        <div className="row">
          <p>{rewardDescription}</p>
        </div>
        <div className="row">
         
          <div className="col-lg-3 pb-3">
          </div>
        </div>
      </div>
      <div className="contribution m-3 bg-primary-subtle rounded">
        <div className="row pt-3 fs-5 ">
          <h4>Pledge रू{amount}</h4>
        </div>
        <div className="row">
          <h4 className="fs-5 fw-semibold">Access to pledge manager</h4>
        </div>
        <div className="row">
          <p>{rewardDescription}</p>
        </div>
        <div className="row">
         
          <div className="col-lg-3 pb-3">
          </div>
        </div>
      </div>
      <div className="contribution m-3 bg-primary-subtle rounded">
        <div className="row pt-3 fs-5 ">
          <h4>Pledge रू{amount}</h4>
        </div>
        <div className="row">
          <h4 className="fs-5 fw-semibold">Access to pledge manager</h4>
        </div>
        <div className="row">
          <p>{rewardDescription}</p>
        </div>
        <div className="row">
         
          <div className="col-lg-3 pb-3">
          </div>
        </div>
      </div>
    </>
  );
}

export default Contributioncard;
