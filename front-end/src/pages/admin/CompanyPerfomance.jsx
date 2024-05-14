import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { RiSearchLine } from 'react-icons/ri';

function CompanyPerformance() {
    const [products, setProducts] = useState([]);
    const [totalGoalAmount, setTotalGoalAmount] = useState(0);
    const [totalRaisedAmount, setTotalRaisedAmount] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/products');
            const extractedProducts = response.data.map(product => ({
                productId: product.productId,
                productName: product.productName,
                productDescription: product.productDescription,
                productGoal: product.productGoal,
                currentAmount: product.currentAmount,
                startDate: product.startDate,
                endDate: product.endDate
            }));
            setProducts(extractedProducts);
            calculateTotalGoalAmount(extractedProducts);
            calculateTotalRaisedAmount(extractedProducts);
            calculateTotalProducts(extractedProducts);
            setFilteredProducts(extractedProducts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const calculateTotalGoalAmount = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.productGoal;
        });
        setTotalGoalAmount(total);
    };

    const calculateTotalRaisedAmount = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.currentAmount;
        });
        setTotalRaisedAmount(total);
    };

    const calculateTotalProducts = (products) => {
        setTotalProducts(products.length);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterProducts(e.target.value);
    };

    const filterProducts = (searchTerm) => {
        const filtered = products.filter(product =>
            product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Company Performance</h1>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card toraise">
                        <div className="card-body text-dark  ">
                            <h2 className="card-title fw-semibold fs-4">Total Amount</h2>
                            <p className="card-text lead fw-semibold">Total: NPR {totalGoalAmount}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card raised">
                        <div className="card-body raise">
                            <h2 className="card-title fw-semibold fs-4">Total Raised Amount</h2>
                            <p className="card-text lead fw-semibold">Total: NPR {totalRaisedAmount}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card product">
                        <div className="card-body">
                            <h2 className="card-title fw-semibold fs-4">Total Products</h2>
                            <p className="card-text lead fw-semibold">Total: {totalProducts}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products..."
                            aria-label="Search products"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => filterProducts(searchTerm)}
                        >
                            <RiSearchLine />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead >
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Goal</th>
                                    <th>Raised Amount</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map(product => (
                                    <tr key={product.productId}>
                                        <td>{product.productId}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.productDescription}</td>
                                        <td>NPR {product.productGoal}</td>
                                        <td>NPR {product.currentAmount}</td>
                                        <td>{product.startDate}</td>
                                        <td>{product.endDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyPerformance;
