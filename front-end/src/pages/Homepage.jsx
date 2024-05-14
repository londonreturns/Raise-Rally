import React, { useState, useEffect } from "react";
import getAxios from "../hooks/getAxios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { IoSearchSharp } from "react-icons/io5";
import CompanyCard from "../components/Companycard";

function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 700);

    return () => clearTimeout(timer); 
  }, []);
  const { data: productsData, error: productsError, loading: productsLoading } = getAxios(`http://localhost:8080/api/products/search?query=${searchQuery}`);
  const {data:company}=getAxios( `http://localhost:8080/api/companies/search?query=${searchQuery}`)

  return (
    <div className="bg-white">
      <Header onSearch={setSearchQuery} />
      {loading && <Loading />}
      {productsError && <Error />}
      <div className="row gx-0">
      {productsData.length === 0 && 
            <> 
            <div className='d-flex justify-content-center p-5 mt-5 vh-100'>
              <div className='p-5 d-flex flex-column '>
                <div><h2 className='fs-1'>Sorry </h2></div>
            <div className='ps-5'><IoSearchSharp  size={30}/></div>
            
            <div> <p className='fs-4'> Item not found</p></div>
            
            </div>
            </div>
            </>}
            <h3 className="ps-5" style={{fontSize:33}}>All Campaigns</h3>
        {productsData.map((productData) => (
          <Card
            key={productData.productId}
            {...productData}
          />
        ))}
      </div>
      <div className="row container-fluid" style={{backgroundColor:"#F1F1F1"}}>
      <h3 className="ps-5" style={{fontSize:33}}> Companies</h3>
      {company.map((company) => (
        
          <CompanyCard
            key={company.companyId}
            {...company}
          />
        ))}
</div>
      <Footer />
    </div>
    
  );
}

export default Homepage;
