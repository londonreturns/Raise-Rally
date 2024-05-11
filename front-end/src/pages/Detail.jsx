import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
useEffect
import getAxios from '../hooks/getAxios'
import DetailCard from '../components/DetailCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Detail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("productId");
  const { data, error, loading } = getAxios(`http://localhost:8080/api/products/${productId}`);
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <Header/>
    <div className='h-auto pb-5'>
    {data && <DetailCard key={data.productId} {...data} />}
    </div>
    <Footer/>
    </>
  )
}

export default Detail
