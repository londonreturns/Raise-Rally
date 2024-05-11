import React, { useState, useEffect } from "react";
import getAxios from "../hooks/getAxios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: productsData, error: productsError, loading: productsLoading } = getAxios(`http://localhost:8080/api/products/search?query=${searchQuery}`);


  return (
    <div>
      <Header onSearch={setSearchQuery} />
      {productsLoading && <Loading />}
      {productsError && <Error />}
      <div className="row gx-0">
        {productsData.map((productData) => (
          <Card
            key={productData.productId}
            {...productData}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
