import React, { useState, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios'; // Import Axios

function ProductDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  // Placeholder raw data for products
  const rawData = [
    { id: 1, productName: 'Product 1', company: 'Company A', description: 'Description A', amountFeatures: 5, amountNotFeatured: 2, active: true },
    { id: 2, productName: 'Product 2', company: 'Company B', description: 'Description B', amountFeatures: 3, amountNotFeatured: 1, active: false },
    { id: 3, productName: 'Product 3', company: 'Company C', description: 'Description C', amountFeatures: 7, amountNotFeatured: 0, active: true },
    { id: 4, productName: 'Product 4', company: 'Company D', description: 'Description D', amountFeatures: 2, amountNotFeatured: 4, active: false },
  ];

  useEffect(() => {
    // Set products data with placeholder raw data
    setProducts(rawData);
  }, []); // Empty dependency array to fetch data only once on component mount

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`YOUR_API_ENDPOINT?search=${searchTerm}`);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can implement actual search functionality here
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-secondary" type="button">
              <RiSearchLine />
              <span className="ms-1">Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h1>Products</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Company</th>
                <th>Company Description</th>
                <th>Amount Features</th>
                <th>Amount Not Featured</th>
                <th>Status</th> {/* New column for status */}
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.company}</td>
                  <td>{truncateDescription(product.description, 50)}</td>
                  <td>{product.amountFeatures}</td>
                  <td>{product.amountNotFeatured}</td>
                  <td>{product.active ? 'Active' : 'Inactive'}</td> {/* Conditional rendering for status */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductDashboard;
