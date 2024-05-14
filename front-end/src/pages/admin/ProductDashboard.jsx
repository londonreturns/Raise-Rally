import React, { useState, useEffect } from 'react';
import getAxios from '../../hooks/getAxios';

function BackerDashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [fundedProducts, setFundedProducts] = useState([]);

    const email = localStorage.getItem('email');

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAxios(`http://localhost:8080/api/backers/email/${email}`);
            const backerId = data.backerId;
            const { data: contributions } = await getAxios(`http://localhost:8080/api/contributions/backer/${backerId}`);
            const fundedProductsData = [];

            for (const contribution of contributions) {
                const { benefitId, actualPaidPrice, paymentDate } = contribution;
                const { data: product } = await getAxios(`http://localhost:8080/api/benefits/${benefitId}`);
                const { data: price } = await getAxios(`http://localhost:8080/api/price/${benefitId}`);
                const { data: productInfo } = await getAxios(`http://localhost:8080/api/products/${product.productId}`);

                fundedProductsData.push({
                    id: productInfo.productId,
                    productName: productInfo.productName,
                    benefitName: product.benefitName,
                    benefitAmount: price.amount,
                    actualPaidPrice,
                    paymentDate
                });
            }

            setFundedProducts(fundedProductsData);
        };

        fetchData();
    }, [email]);



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
                    <h1>Funded Products</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Benefit Name</th>
                                <th>Benefit Amount</th>
                                <th>Actual Paid Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fundedProducts.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.benefitName}</td>
                                    <td>{product.benefitAmount}</td>
                                    <td>{product.actualPaidPrice}</td>
                                    <td>{product.paymentDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BackerDashboard;
