import React from "react";
import { useState } from "react";
//takes props from it's parent inside function contributioncard
function Contributioncard({
  amount,
  rewardDescription,
  daysLeft,
  backersCount,
}) {
  return (
    <>
      {/* rendering data from the props to the Contributioncard */}
      <div className="contribution m-3 bg-body-secondary rounded">
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
            <button
              type="button"
              className="btn btn-secondary text-center"
              disabled
            >
              <span>{daysLeft} days to go</span>
            </button>
          </div>
          <div className="col-lg-3 pb-3">
            <button
              type="button"
              className="btn btn-secondary text-center"
              disabled
            >
              <span>{backersCount} backers</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contributioncard;
