import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAxios from '../hooks/getAxios';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Catcard from '../components/Catcard';

function Cat({ categories }) {
    const { cat } = useParams(); // Get the category parameter using useParams
    console.log(cat)
    const [searchQuery, setSearchQuery] = useState("");
    const { data: productsData, error: productsError, loading: productsLoading } = getAxios(`http://localhost:8080/api/products/search?query=${searchQuery}`);
    const navigate = useNavigate(); // Get navigate function for navigation
  

    useEffect(() => {
        // navigate to error page if not found
        if (!categories.includes(cat)) {
            navigate('/404'); // Navigate to the 404 page if category not found
        }
    }, [cat, categories, navigate]); // Trigger useEffect on changes to cat, categories, or navigate

    return (
        <>
            <Header onSearch={setSearchQuery} />
            {productsLoading && <Loading />}
            {productsError && <Error />}
            <div className="row gx-0">
                {productsData.map((productData) => (
                    <Catcard
                        key={productData.productId}
                        currentCategory={cat}
                        {...productData}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Cat;
