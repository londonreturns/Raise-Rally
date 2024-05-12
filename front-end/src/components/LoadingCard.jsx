import React from "react";

function LoadingCard() {
  return (
    <div className=" d-flex justify-content-center align-content-center placeholder-glow">
      <div className="card laceholder-glow" aria-hidden="true">
        <div
          className="card-img-top border border-bottom  img-100 bg-secondary-subtle placeholder-glow"
          alt="..."
        ></div>
        <div className="card-body">
          <div className="row ">
            <div className="col-10">
              <h5 className="card-title preview1-text ">
                <span class="placeholder col-6"></span>
              </h5>
              <h5 className="card-title preview1-text ">
                <span class="placeholder col-9"></span>
              </h5>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row ">
            <div className="d-flex justify-content-between text-center">
              <div>
                <span class="placeholder col-7"></span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <span class="placeholder col-9 rounded-pill"></span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="row">
        <small className="text-body-secondary"></small>
      </div>
    </div>
  );
}

export default LoadingCard;