import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
useEffect
import getAxios from '../hooks/getAxios'
import DetailCard from '../components/DetailCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Detailloading from '../components/Detailloading';
function Detail() {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("productId");
  const { data} = getAxios(`http://localhost:8080/api/products/${productId}`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [productId]); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []); 



  return (
    <>
    <Header/>
    {loading && <Detailloading/>}
    <div className='h-auto pb-5'>
    {data && <DetailCard key={data.productId} {...data} />}
    </div>
    <Footer/>
    </>
  )
}

export default Detail
