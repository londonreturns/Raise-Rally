import React from "react";
import getAxios from "../hooks/getAxios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Rewardadd from "../components/Rewardadd";
import Error from "../components/Error";
function Homepage() {
  const { data, error, loading } = getAxios(`http://localhost:3000/trial`);

  return (
    <div>
    
    {loading && <Loading/>}
    {error && <Error/>}
    <div className="row  gx-0">
                            {data && data.map((item) => (
                                <Card key={item.name} {...item} />
                            ))}
                          
             </div>

     
   
    </div>
  );
}

export default Homepage;
