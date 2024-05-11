import React, { useState, useEffect } from "react";
import Contributioncard from "../components/Contributioncard";
import { Link } from "react-router-dom";
import getAxios from "../hooks/getAxios";
import { IoChevronBackOutline } from "react-icons/io5";
import useImageConverter from "../hooks/imageConverter";

function DetailCard({
  productName,
  endDate,
  productDescription,
  productGoal,
  currentAmount,
  backer,
  productId,
  benefitIds,
}) {

  //backer by id 
  const {data:backerNo}=getAxios(`http://localhost:8080/api/products/numberofbackers-by-product/${productId}`);
  const progressPercentage = (currentAmount / productGoal) * 100;
  const endDateMillis = new Date(endDate).getTime();
  const today = new Date().getTime();
  const dayInMillis = 1000 * 60 * 60 * 24;
  const diff = endDateMillis - today;
  const daysLeft = Math.round(diff / dayInMillis);

  //for effect for perk 
   
  const [amount, setAmount] = useState("");
  const [pledge, setPledge] = useState("");
  const TotalAmount = (event) => {
    setAmount(event.target.value);
  };
  // useEffect(() => {
  //   // if amount from hook is empty skip
  //   if (amount === "") return;

  //   let pledgeAmount = "";
  //   for (let i = data.length - 1; i >= 0; i--) {
  //     if (data[i].amount <= amount) {
  //       pledgeAmount = data[i].amount;
  //       break;
  //     }
  //   }
  //   setPledge(pledgeAmount);
  // }, [amount, data]);
  // const openModal = () => {
  //   <></>;
  // };

  const { convertedFile: convertedFile1, convertImage: convertImage1 } =
    useImageConverter();
  const { convertedFile: convertedFile2, convertImage: convertImage2 } =
    useImageConverter();
  const { convertedFile: convertedFile3, convertImage: convertImage3 } =
    useImageConverter();

  useEffect(() => {
    // URL of the images to convert
    const imageUrl1 = `http://localhost:8080/api/images/${productId}_1.jpeg`;
    const imageUrl2 = `http://localhost:8080/api/images/${productId}_2.jpeg`;
    const imageUrl3 = `http://localhost:8080/api/images/${productId}_3.jpeg`;

    // Call the convertImage function for each image URL when the component mounts
    convertImage1(imageUrl1);
    convertImage2(imageUrl2);
    convertImage3(imageUrl3);
  }, [productId, convertImage1, convertImage2, convertImage3]);

  return (
    <>
      <Link to="/" className="text-decoration-none">
        <div className="ps-2 fw-semibold d-flex justify-content-start">
          <div>
            <IoChevronBackOutline />
          </div>
          <div>Back to homepage</div>
        </div>
      </Link>
      <div className="pt-5 pt-md-2">
        <div className="d-flex justify-content-center text-center">
          <div className="pt-5">
            <h3 className="fs-4 fw-semibold">{productName}</h3>
            <p className="px-5 fw-medium">{productDescription}</p>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-6">
              <div>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide w-75 mx-auto"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      {convertedFile1 && (
                        <img
                          src={URL.createObjectURL(convertedFile1)}
                          className="d-block detail-img w-100"
                          alt="..."
                        />
                      )}
                    </div>
                    <div className="carousel-item">
                      {convertedFile2 && (
                        <img
                          src={URL.createObjectURL(convertedFile2)}
                          className="d-block detail-img w-100"
                          alt="..."
                        />
                      )}
                    </div>
                    <div className="carousel-item">
                      {convertedFile3 && (
                        <img
                          src={URL.createObjectURL(convertedFile3)}
                          className="d-block detail-img w-100"
                          alt="..."
                        />
                      )}
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark"
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
            <div className="col-lg-6 box container bg-body-secondary pt-2">
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
                <div className="pt-2">
                  <div>
                    <span className="fs-2 fw-medium detailcolor">
                      NRPरु {currentAmount}
                    </span>
                    <p>pledged of NRPरु {productGoal} goal</p>
                  </div>
                </div>
                <div>
                  <span className="fs-2 fw-medium">{backerNo}</span>
                  <p>backers</p>
                </div>
                <div>
                  <span className="fs-2 fw-medium">{daysLeft}</span>
                  <p>days to go</p>
                </div>
                <div
                  className="btn backProject text-center pt-2 text-white fs-5"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <p>Back this Project</p>
                </div>
                <div className="pt-4">
                  <p>
                    This project will only be funded if it reaches its goal by{" "}
                    <span className="ps-2">{endDate}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
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
            <div className="modal-content">
              <div className="modal-header">
                <h3
                  className="modal-title text-center fs-3 fw-medium"
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
                          <p>Pledge {amount ? `रू${amount}` : ""}</p>
                        </div>
                      </div>
                      <div className="row">
                        <p>Perk {amount ? `रू${pledge}` : ""}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col container">
                    <div className="row container">
                      {/* <Contributioncard benefitId= {benefitIds}/> */}
                      {benefitIds && benefitIds.length > 0 && (
                        <>
                         <Contributioncard benefitId={benefitIds[0]} />
                         <Contributioncard benefitId={benefitIds[1]} />
                         <Contributioncard benefitId={benefitIds[2]} />
                        </>
                       
                      )}
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
