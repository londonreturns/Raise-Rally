import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import getAxios from '../hooks/getAxios';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Catcard from '../components/Catcard';

function Cat({ categories }) {
    const { cat } = useParams();
    let catId;

    if (cat === "art") {
      catId = 1;
    } else if (cat === "crafts") {
      catId = 2;
    } else if (cat === "dance") {
      catId = 3;
    } else if (cat === "film") {
      catId = 4;
    } else if (cat === "music") {
      catId = 5;
    } else if (cat === "technology") {
      catId = 6;
    } else {
      catId = null; 
    }
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 500);
  
      return () => clearTimeout(timer); 
    }, []);
    let { data: productsData, error: productsError, loading: productsLoading } = getAxios(`http://localhost:8080/api/products/search/category/${catId}?query=${searchQuery}`);
    const navigate = useNavigate(); 
    useEffect(() => {
        // navigate to error page if not found
        if (!categories.includes(cat)) {
            navigate('/404'); // Navigate to the 404 page if category not found
        }
    }, [cat, categories, navigate]); // Trigger useEffect on changes to cat, categories, or navigate

    return (
        <>
            <Header onSearch={setSearchQuery} />

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
