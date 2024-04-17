import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import postAxios from "../hooks/postAxios";

function Rewardadd() {
  const { data, postData } = postAxios("http://localhost:8080/api/products");
  const post = () => {
    console.log(data);
    var productData = localStorage.getItem("Addproduct");
    var parsedData = JSON.parse(productData);
    // sending to the database
    // Constructing the data object

    postData({
      productName: parsedData.productName,
      productDescription: parsedData.productDescription,
      productGoal: parsedData.productGoal,
      startDate: parsedData.startDate,
      endDate: parsedData.endDate,
      benefits: [
        {
          benefitName: benefit1,
          benefitDescription: benefit1Description,
          price: {
            amount: benefit1Amount,
          },
        },
        {
          benefitName: benefit2,
          benefitDescription: benefit2Description,
          price: {
            amount: benefit2Amount,
          },
        },
        {
          benefitName: benefit3,
          benefitDescription: benefit3Description,
          price: {
            amount: benefit3Amount,
          },
        },
      ],
      category: {
        categoryId: parsedData.categoryId,
      },
      company: {
        // keeping company id static for try
        companyId: 1,
      },
    });
    localStorage.removeItem("Addproduct");
  };
  const navigateTo = useNavigate();

  const [benefit1, setBenefit1] = useState("");
  const [benefit1Description, setBenefit1Description] = useState("");
  const [benefit1Amount, setBenefit1Amount] = useState("");

  const [benefit2, setBenefit2] = useState("");
  const [benefit2Description, setBenefit2Description] = useState("");
  const [benefit2Amount, setBenefit2Amount] = useState("");

  const [benefit3, setBenefit3] = useState("");
  const [benefit3Description, setBenefit3Description] = useState("");
  const [benefit3Amount, setBenefit3Amount] = useState("");
  const handleAmount1 = (value) => {
    if (value < 0) {
      setBenefit1Amount(0);
    } else {
      setBenefit1Amount(value);
    }
  };
  const handleAmount2 = (value) => {
    if (value < 0) {
      setBenefit2Amount(0);
    } else {
      setBenefit2Amount(value);
    }
  };
  const handleAmount3 = (value) => {
    if (value < 0) {
      setBenefit3Amount(0);
    } else {
      setBenefit3Amount(value);
    }
  };

  function handleNext() {
    if (
      benefit1 !== "" &&
      benefit1Description !== "" &&
      benefit1Amount !== "" &&
      benefit2 !== "" &&
      benefit2Description !== "" &&
      benefit2Amount !== "" &&
      benefit3 !== "" &&
      benefit3Description !== "" &&
      benefit3Amount !== ""
    ) {
      // Accessing product data from local storage
      post();
      console.log("Benefit 1:", benefit1);
      console.log("Benefit 1 Description:", benefit1Description);
      console.log("Benefit 1 Amount:", benefit1Amount);
      console.log("Benefit 2:", benefit2);
      console.log("Benefit 2 Description:", benefit2Description);
      console.log("Benefit 2 Amount:", benefit2Amount);
      console.log("Benefit 3:", benefit3);
      console.log("Benefit 3 Description:", benefit3Description);
      console.log("Benefit 3 Amount:", benefit3Amount);

      // navigateTo("/hello");
    } else {
      console.error("Please fill in all fields.");
    }
  }

  return (
    <>
      <div className="container pt-5 ">
        <div className="row ">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 bg-body-secondary rounded-2">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Add Product</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Benefits
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <label>Benefit 1:</label>
            <input
              type="text"
              className="form-control addproduct"
              value={benefit1}
              onChange={(e) => setBenefit1(e.target.value)}
            />
            <br />
            <label>Benefit 1 Description:</label>
            <textarea
              className="form-control addproduct"
              rows="4"
              value={benefit1Description}
              onChange={(e) => setBenefit1Description(e.target.value)}
            ></textarea>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <label>Benefit 1 Amount:</label>
                <input
                  type="number"
                  className="form-control no-arrows"
                  value={benefit1Amount}
                  onChange={(e) => handleAmount1(e.target.value)}
                />
              </div>
            </div>

            <br />
            <label>Benefit 2:</label>
            <input
              type="text"
              className="form-control no-arrows"
              value={benefit2}
              onChange={(e) => setBenefit2(e.target.value)}
            />
            <br />
            <label>Benefit 2 Description:</label>
            <textarea
              className="form-control addproduct"
              rows="4"
              value={benefit2Description}
              onChange={(e) => setBenefit2Description(e.target.value)}
            ></textarea>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <label>Benefit 2 Amount:</label>
                <input
                  type="number"
                  className="form-control no-arrows"
                  value={benefit2Amount}
                  onChange={(e) => handleAmount2(e.target.value)}
                />
              </div>
            </div>

            <br />
            <label>Benefit 3:</label>
            <input
              type="text"
              className="form-control addproduct"
              value={benefit3}
              onChange={(e) => setBenefit3(e.target.value)}
            />
            <br />
            <label>Benefit 3 Description:</label>
            <textarea
              className="form-control addproduct"
              rows="4"
              value={benefit3Description}
              onChange={(e) => setBenefit3Description(e.target.value)}
            ></textarea>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <label>Benefit 3 Amount:</label>
                <input
                  type="number"
                  className="form-control no-arrows"
                  value={benefit3Amount}
                  onChange={(e) => handleAmount3(e.target.value)}
                />
              </div>
            </div>

            <br />
            <br />
            <div className="row ">
              <div className="col-lg-4">
                <button className="btn  btn-secondary">Back</button>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4 text-end pb-4">
                <button
                  className="btn btn-primary text-white "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

      <div>
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-dark-subtle">
                <h1 className="modal-title fs-4" id="exampleModalLabel">
                  Confirm AddProduct
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-footer ">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    handleNext();
                  }}
                  {...(handleNext ? { "data-bs-dismiss": "modal" } : {})}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rewardadd;
