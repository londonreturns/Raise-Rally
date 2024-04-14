import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import getAxios from '../../getAxios';
function Public() {
  const url = "hello/api";
  const { data, error, loading } =  getAxios(url);
  
  return (
    <>
      <Header/>
      <Navbar/>
      {loading && <Loading/>}
      {error && <h1>Something went wrong</h1>}
      <Footer/>
    </>
  );
}

export default Public;