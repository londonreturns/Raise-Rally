import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import postAxios from "../hooks/postAxios";

function Rewardadd() {
  const { makeRequest, isLoading, error, data } = postAxios("http://localhost:8080/api/products");
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


  var productData = localStorage.getItem("product");
  var parsedData = JSON.parse(productData);
  const productName=parsedData.productName;
  const productDescription= parsedData.productDescription;
  const goal=parseInt(parsedData.goal);
  const startDate= parsedData.startDate;
  const endDate=parsedData.endDate;
  const companyId=parsedData.companyId;
  const categoryId=parseInt(parsedData.selectedCategory);
//   console.log("productName:", productName);
// console.log("Type of productName:", typeof productName);

// console.log("productDescription:", productDescription);
// console.log("Type of productDescription:", typeof productDescription);

// console.log("goal:", goal);
// console.log("Type of goal:", typeof goal);

// console.log("startDate:", startDate);
// console.log("Type of startDate:", typeof startDate);

// console.log("endDate:", endDate);
// console.log("Type of endDate:", typeof endDate);

// console.log("companyId:", companyId);
// console.log("Type of companyId:", typeof companyId);

// console.log("categoryId:", categoryId);
// console.log("Type of categoryId:", typeof categoryId);

// console.log("benefit1:", benefit1);
// console.log("Type of benefit1:", typeof benefit1);

// console.log("benefit1Description:", benefit1Description);
// console.log("Type of benefit1Description:", typeof benefit1Description);

// console.log("benefit1Amount:", benefit1Amount);
// console.log("Type of benefit1Amount:", typeof parseInt(benefit1Amount));

// console.log("benefit2:", benefit2);
// console.log("Type of benefit2:", typeof benefit2);

// console.log("benefit2Description:", benefit2Description);
// console.log("Type of benefit2Description:", typeof benefit2Description);

// console.log("benefit2Amount:", benefit2Amount);
// console.log("Type of benefit2Amount:", typeof parseInt(benefit2Amount));

// console.log("benefit3:", benefit3);
// console.log("Type of benefit3:", typeof benefit3);

// console.log("benefit3Description:", benefit3Description);
// console.log("Type of benefit3Description:", typeof benefit3Description);

// console.log("benefit3Amount:", parseInt(benefit3Amount));
// console.log("Type of benefit3Amount:", typeof parseInt(benefit3Amount));

const postData = {
      productName: productName,
      productDescription: productDescription,
      productGoal: goal,
      startDate: startDate,
      endDate: endDate,
      benefits: [
        {
          benefitName: benefit1,
          benefitDescription: benefit1Description,
          price: {
            amount: parseInt(benefit1Amount)
          }
        },
        {
          benefitName: benefit2,
          benefitDescription: benefit2Description,
          price: {
            amount: parseInt(benefit2Amount)
          }
        },
        {
          benefitName: benefit3,
          benefitDescription: benefit3Description,
          price: {
            amount: parseInt(benefit3Amount)
          }
        },
      ],
      category: {
        categoryId: categoryId
      },
      company: {
        companyId: companyId
      }
    };
    


  // Function to handle form submission
  const handleNext = () => {
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
      console.log("Request Payload:", postData); // Log the postData object before making the request
      makeRequest(postData);
    } else {
      console.error("Please fill in all fields.");
    }
  };

  const handleAmount1 = (amount) => {
    if (amount < 0) {
      setBenefit1Amount(0);
    } else {
      setBenefit1Amount(amount);
    }
  };
  const handleAmount2 = (amount) => {
    if (amount < 0) {
      setBenefit2Amount(0);
    } else {
      setBenefit2Amount(amount);
    }
  };
  const handleAmount3 = (amount) => {
    if (amount < 0) {
      setBenefit3Amount(0);
    } else {
      setBenefit3Amount(amount);
    }
  };

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
                <button className="btn  btn-secondary" onClick={()=>{
                  navigateTo('/company/addproduct')
                }}>Back</button>
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
                  onClick={handleNext}
                  data-bs-dismiss="modal"
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

