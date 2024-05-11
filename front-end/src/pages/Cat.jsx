import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import getAxios from '../hooks/getAxios';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Catcard from '../components/Catcard';
import LoadingCard from '../components/LoadingCard';

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
            {loading && <Loading />}
            {productsError && <Error />}
            <div className="row gx-0">
            {productsData.length === 0 && 
            <> 
            <div className='d-flex justify-content-center p-5 mt-5'>
              <div className='p-5 d-flex flex-column '>
                <div><h2 className='fs-1 ps-3'>Sorry </h2></div>
            <div className='ps-5'><IoSearchSharp  size={30}/></div>
            
            <div> <p className='fs-4 pb-5'> Item not found</p></div>
            
            </div>
            </div>
            </>}
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
