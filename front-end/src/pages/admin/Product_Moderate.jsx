import React, { useState, useEffect } from 'react'; // Importing React and necessary hooks from react
import { RiSearchLine } from 'react-icons/ri'; // Importing search icon from react-icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import axios from 'axios'; // Importing axios for making HTTP requests

function Product_Moderate() {
    // State variables for search term and products
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);

    // useEffect hook to fetch data when component mounts and when searchTerm changes
    useEffect(() => {
        fetchData();
    }, [searchTerm]);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            // Fetch all products from the API
            const response = await axios.get(`http://localhost:8080/api/products`);
            let fetchedProducts = response.data; // Get data from the response
    
            // Filter products based on search term
            if (searchTerm) {
                fetchedProducts = fetchedProducts.filter(product =>
                    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
    
            // Update products state with the filtered data
            setProducts(fetchedProducts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    // Handle search input change
    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update searchTerm state on input change
    };

    // Handle toggle active status of a product
    const handleToggleActive = async (id, active) => {
        try {
            const newActive = !active; // Toggle the active status
            await axios.patch(`http://localhost:8080/api/products/enable/${id}/${newActive}`);
            // Update the products state with the updated product details
            setProducts(prevProducts =>
                prevProducts.map(product => {
                    if (product.productId === id) {
                        return {
                            ...product,
                            active: newActive //// Update active status
                        };
                    }
                    return product;
                })
            );
        } catch (error) {
            console.error('Error toggling active status:', error);
        }
    };

    // Handle toggle featured status of a product
    const handleToggleVerified = async (id, featured) => {
        try {
            const newFeatured = !featured; // Toggle the featured status
            await axios.patch(`http://localhost:8080/api/products/feature/${id}/${newFeatured}`);
            // Update the products state with the updated product details
            setProducts(prevProducts =>
                prevProducts.map(product => {
                    if (product.productId === id) {
                        return {
                            ...product,
                            featured: newFeatured
                        };
                    }
                    return product;
                })
            );
        } catch (error) {
            console.error('Error toggling featured status:', error);
        }
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
                    <h1>All Products</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Active</th>
                                <th>Featured</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productDescription}</td>
                                    <td>
                                        <button
                                            className={`btn ${product.active ? 'btn-secondary' : 'btn-success'}`}
                                            onClick={() => handleToggleActive(product.productId, product.active)}
                                        >
                                            {product.active ? 'Disable' : 'Enable'}
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className={`btn ${product.featured ? 'btn-secondary' : 'btn-primary'}`}
                                            onClick={() => handleToggleVerified(product.productId, product.featured)}
                                        >
                                            {product.featured ? 'Undo' : 'Feature'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Product_Moderate;
