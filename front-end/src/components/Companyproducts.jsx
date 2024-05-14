import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import getAxios from '../hooks/getAxios';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Catcard from '../components/Catcard';

function Companyproducts() {
    const { company } = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true); 
    }, [company]);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 200);
      return () => clearTimeout(timer); 
    }, [loading]);

    let { data: productsData, error: productsError, loading: productsLoading } = getAxios(`http://localhost:8080/api/products/company/${company}`);
    return (
        <>
            <Header />
            {loading && <Loading />}
            <div className="row gx-0 container-fluid min-vh-100">
           
                {productsData.map((productData) => (
                  
                    <Catcard
                        key={productData.productId}
                        {...productData}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Companyproducts;
