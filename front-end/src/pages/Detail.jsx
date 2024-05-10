import React from 'react'
import getAxios from '../hooks/getAxios'
import DetailCard from '../components/DetailCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Detail() {
    const { data, error, loading } = getAxios("http://localhost:3000/detail");
  return (
    <>
    <Header/>
    <div className='h-auto pb-5'>
    {data && data.map((item) => (
                                <DetailCard key={item.id} {...item} />
                            ))}
    </div>
    <Footer/>
    </>
  )
}

export default Detail
