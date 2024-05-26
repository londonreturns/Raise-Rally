import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getAxios from "../hooks/getAxios";

function Editproduct() {
  const email = localStorage.getItem("email");
  const { data, error, loading } = getAxios(`http://localhost:8080/api/companies/email/${email}`);
  
  const companyId = data.companyId;
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const editProductData = JSON.parse(localStorage.getItem("editProductData"));
    
    if (editProductData) {
      setStartDate(editProductData.startDate || "");
      setSelectedCategory(editProductData.category || "");
      setProductName(editProductData.productName || "");
      setProductDescription(editProductData.productDescription || "");
      setGoal(editProductData.goal || "");
      setEndDate(editProductData.endDate || "");
      if (editProductData.category === 1) {
        setCategory("art") ;
      } else if (editProductData.category === 2) {
        setCategory("crafts") ;
      } else if (editProductData.category === 3) {
        setCategory("dance") ;
      } else if (editProductData.category === 4) {
        setCategory("film");
      } else if (editProductData.category === 5) {
        setCategory("music");
      } else if (editProductData.category === 6) {
        setCategory("technology");
      }
    }
  }, []);

  function onStartChange(e) {
    const selectedDate = e.target.value;
    setStartDate(selectedDate);
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
      if (goal >= 1000 && goal <= 1000000) {
        const product = {
          selectedCategory,
          productName,
          productDescription,
          startDate,
          endDate,
          goal,
          companyId
        };

        // Convert object to a string
        const productString = JSON.stringify(product);

        // Save in local storage
        localStorage.setItem("product", productString);

        navigate("/company/dashboard/editbenefit");
      } else {
        window.alert("Goal should be from 1000 to 1000000");
      }
    } else {
      window.alert("Please fill all fields and select a category.");
    }
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 bg-body-secondary rounded-2">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      Edit Product
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <label> Category:</label>
          <input
            type="text"
            className="form-control addproduct"
           
            value={category}
            readOnly 
          />
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
            readOnly 
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
          <div className="row">
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

export default Editproduct;
