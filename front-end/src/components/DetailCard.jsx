import React from "react";
import { useState, useEffect } from "react";
import Contributioncard from "../components/Contributioncard";
import getAxios from "../hooks/getAxios";
function DetailCard({
  title,
  imageSrc,
  goal,
  description,
  progressPercentage,
  currentAmount,
  backer,
  dueDate,
}) {
  const { data, error, loading } = getAxios("http://localhost:3000/benefits");
  const [amount, setAmount] = useState("");
  const [pledge, setPledge] = useState("");
  const TotalAmount = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    // if amount from hook is empty skip
    if (amount === "") return;

    let pledgeAmount = "";
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].amount <= amount) {
        pledgeAmount = data[i].amount;
        break;
      }
    }
    setPledge(pledgeAmount);
  }, [amount, data]);
  const openModal = () => {
    <></>;
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <div className="pt-5">
        <div className="d-flex justify-content-center text-center">
          <div className="pt-5">
            <h3 className="fs-4 fw-semibold">{title}</h3>
            <p className="px-5 fw-medium">{description}</p>
          </div>
        </div>
        <div className="container">
          <div className="row text-center  ">
            <div className="col-lg-6 ">
              <div >
                
                <div id="carouselExampleIndicators" className="carousel slide w-75 mx-auto ">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="d-block detail-img w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="d-block detail-img w-100 "
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="d-block  detail-img w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark "
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 box container  bg-body-secondary pt-2">
              <div className="col-lg-12">
                <div
                  className="progress bg-dark-subtle"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-color"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
              <div className="d-flex flex-column text-start text-dark-emphasis">
                <div className=" pt-2">
                  <div>
                    <span className="fs-2 fw-medium detailcolor">
                      NRPरु {currentAmount}
                    </span>
                    <p>pledged of NRPरु {goal} goal</p>
                  </div>
                </div>
                <div>
                  <span className="fs-2 fw-medium">{backer}</span>
                  <p>backers</p>
                </div>
                <div>
                  <span className="fs-2 fw-medium ">43</span>
                  <p>hours to go</p>
                </div>
                {/* Button trigger modal */}
                <div
                  className="btn backProject text-center pt-2 text-white fs-5 "
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <p> Back this Project</p>
                </div>
                <div className="pt-4">
                  <p>
                    This project will only be funded if it reaches its goal by
                    {dueDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Modal */}
        <div
          className="modal fade modal-lg"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content ">
              <div className="modal-header">
                <h3
                  className="modal-title text-center  fs-3 fw-medium"
                  id="staticBackdropLabel"
                >
                  Select your reward
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="benefit">
                  <div className="contribution">
                    <div className="col p-2">
                      <div className="row">
                        <p>Select an option below</p>
                      </div>

                      {/* contributioncard is inserted here: */}
                      <div className="row container">
                        <div className="col-lg-8">
                          <div className="input-group mb-3">
                            <span className="input-group-text">रू</span>
                            <input
                              type="number"
                              className="form-control no-arrows"
                              onChange={TotalAmount}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 continueBtn text-center text-white pt-1">
                          <p> Pledge {amount ? `रू${amount}` : ""} </p>
                        </div>
                      </div>
                      <div className="row">
                        <p> Perk {amount ? `रू${pledge}` : ""} </p>
                      </div>
                    </div>
                  </div>
                  <div className="col container">
                    <div className="row container ">
                      {data.map((item) => (
                        <Contributioncard key={item.benefitId} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
