import React, { useState, useEffect } from "react";
import getAxios from "../../hooks/getAxios";
import { useNavigate } from "react-router-dom";

function Myproducts() {
  const nav=useNavigate();
  const email = localStorage.getItem("email");
  const {
    data: company,
    loading: companyLoading,
    error: companyError,
  } = getAxios(`http://localhost:8080/api/companies/email/${email}`);
  const [id, setId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (company) {
      setId(parseInt(company.companyId));
    }
  }, [company]);

  const {
    data: productsData,
    error: productsError,
    loading: productsLoading,
  } = getAxios(`http://localhost:8080/api/products/company/${id}`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [company]);

  useEffect(() => {
    if (productsData) {
      setFilteredProducts(productsData);
    }
  }, [productsData]);

  useEffect(() => {
    if (productsData) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = productsData.filter(
        (product) =>
          product.productName.toLowerCase().includes(lowerCaseQuery) ||
          product.productDescription.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, productsData]);

  if (companyLoading || productsLoading) return <>Loading ....</>;
  if (companyError || productsError) return <div>Error loading data</div>;

  const handleEdit = (product) => {
    // Save the necessary data to localStorage
    localStorage.setItem("editProductData", JSON.stringify({
      productId:product.productId,
      startDate: product.startDate,
      benefitIds: product.benefitIds,
      category: product.categoryId,
      productName: product.productName,
      productDescription: product.productDescription,
      goal: product.productGoal,
      endDate: product.endDate
    }));

    nav("/company/dashboard/editproduct");
  };

  return (
    <div className="container-fluid min-vh-100">
      <h1 className="text-start my-4">My Products</h1>
      <div className="row mb-3">
        <div className="col-lg-5 pt-5">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Goal</th>
            <th>Active</th>
            <th>Featured</th>
            <th>Current Amount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts &&
            filteredProducts.map((productData) => (
              <tr key={productData.productId}>
                <td>{productData.productId}</td>
                <td>{productData.productName}</td>
                <td>{productData.productDescription}</td>
                <td>{productData.productGoal}</td>
                <td>{productData.active ? "Yes" : "No"}</td>
                <td>{productData.featured ? "Yes" : "No"}</td>
                <td>{productData.currentAmount}</td>
                <td>{productData.startDate}</td>
                <td>{productData.endDate}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(productData)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Myproducts;
