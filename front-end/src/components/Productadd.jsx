import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getAxios from "../hooks/getAxios";
function Productadd() {
  const email=localStorage.getItem("email");
  const { data, error, loading } = getAxios(`http://localhost:8080/api/companies/email/${email}`);
  const companyId=data.companyId;
  const Navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [goal, setGoal] = useState("");

  function onStartChange(e) {
    const selectedDate = e.target.value;
    setStartDate(selectedDate);
    // Reset end date if it's before the selected start date
    if (endDate < selectedDate) {
      setEndDate("");
    }
  }

  function onEndChange(e) {
    setEndDate(e.target.value);
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const handlegoal = (value) => {
    if (value < 0) {
      setGoal(0);
    } else {
      setGoal(value);
    }
  };

  function handleNext() {
    if (
      selectedCategory &&
      productName &&
      productDescription &&
      startDate &&
      endDate &&
      goal
    ) {
        const product = {
          selectedCategory,
          productName,
          productDescription,
          startDate,
          endDate,
          goal,
          companyId
          
        };
     // to  object to a string
    const productString = JSON.stringify(product);

    //saving in local storage in local storage
    localStorage.setItem("product", productString);
    
      Navigate("/company/addreward");
    } else {
      console.error("Please fill all fields and select a category.");
    }
  }

  return (
    <div className="container pt-5 ">
      <div className="row ">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 bg-body-secondary rounded-2">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      Add Product
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <label>Select Category:</label>
          <select
            className="form-control addproduct "
            onChange={(e) => handleCategorySelect(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">Art</option>
            <option value="2">Crafts</option>
            <option value="3">Dance</option>
            <option value="4">Film</option>
            <option value="5">Music</option>
            <option value="6">Technology</option>
          </select>
          <br />
          <label>Product Name:</label>
          <input
            type="text"
            className="form-control addproduct"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <br />
          <label>Product Description:</label>
          <textarea
            className="form-control addproduct"
            rows="4"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
          <br />
          <label>Start Date:</label>
          <input
            type="date"
            className="form-control addproduct"
            min={new Date().toISOString().split("T")[0]}
            value={startDate}
            onChange={onStartChange}
          />
          <br />
          <label>End Date:</label>
          <input
            type="date"
            className="form-control addproduct"
            value={endDate}
            onChange={onEndChange}
            min={startDate}
          />
          <br />
          <div className="row">
            <div className="col-lg-4">
              <label>Goal:</label>
              <input
                type="number"
                className="form-control no-arrows"
                value={goal}
                onChange={(e) => handlegoal(e.target.value)}
              />
            </div>
          </div>

          <br />
          <div className="row ">
            <div className="col-lg-8"></div>
            <div className="col-lg-4 text-end pb-4">
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default Productadd;
