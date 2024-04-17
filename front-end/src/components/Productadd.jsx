import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Productadd() {
  const Navigate=useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [goal, setGoal] = useState("");

  function onStartChange(e) {
    setStartDate(e.target.value);
  }

  function onEndChange(e) {
    setEndDate(e.target.value);
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }
  const handlegoal=(value)=>{
    if(value<0){
      setGoal(0);
    }
    else{
      setGoal(value);
    }
  }

  function handleNext() {
    if (
      selectedCategory &&
      productName &&
      productDescription &&
      startDate &&
      endDate &&
      goal
    ) {
      Navigate("/company/addreward")
      console.log("All fields are filled.");
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
            <option value="Cat1">Art</option>
            <option value="Cat2">Crafts</option>
            <option value="Cat3">Dance</option>
            <option value="Cat4">Film</option>
            <option value="Cat5">Music</option>
            <option value="Cat6">Technology</option>
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
          />
          <br />
          <div className="row">
            <div className="col-lg-4">
              <label>Goal:</label>
              <input
                type="number"
                className="form-control no-arrows"
                value={goal}
                onChange={(e) => handlegoal((e.target.value))}
              />
            </div>
          </div>

          <br />
          <div className="row ">
            <div className="col-lg-8"></div>
            <div className="col-lg-4 text-end pb-4">
              <button className="btn btn-danger" onClick={handleNext}>
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
