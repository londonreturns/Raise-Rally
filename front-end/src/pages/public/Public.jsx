import React from "react";
import getAxios from "../../hooks/getAxios";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Rewardadd from "../../components/Rewardadd";
import Error from "../../components/Error";
function Public() {
  const { data, error, loading } = getAxios(`http://localhost:3000/trial`);

  return (
    <>
      <Header/>
    <Navbar/>
    
    {loading && <Loading/>}
    {error && <Error/>}
    <div className="row gx-0">
                            {data && data.map((item) => (
                                <Card key={item.id} {...item} />
                            ))}
                          
             </div>

     
      <Footer/> 
   
    </>
  );
}

export default Public;
