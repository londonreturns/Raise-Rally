import React from "react";

function LoadingCard() {
  return (
    <div className=" d-flex justify-content-center align-content-center placeholder-glow">
      <div className="item laceholder-glow " aria-hidden="true">
        <div
          className="rounded border border-bottom  img-100 bg-secondary-subtle placeholder-glow"
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
            </div>
            </div>
      </div>
    </div>
  );
}

export default LoadingCard;
