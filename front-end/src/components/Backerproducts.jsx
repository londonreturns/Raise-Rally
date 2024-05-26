import React from 'react'
import { useEffect} from 'react';
import getAxios from '../hooks/getAxios';
import useImageConverter from "../hooks/imageConverter";
//product photo
//productName
//benefit Name 
//goal amount
//paid amount
//payment date
function Backerproducts(
  {
    paymentDate,
    actualPaidPrice,
    benefitId,
    backerId
  }
) {

  
 
  const {data:product}=getAxios(`http://localhost:8080/api/benefits/${benefitId}/product`);
  const { data: benefit } = getAxios(
    `http://localhost:8080/api/benefits/${benefitId}`
  );
  const { convertedFile, convertImage } = useImageConverter();

  useEffect(() => {
    // URL of the image to convert
    const imageUrl = `http://localhost:8080/api/images/${1}_2.jpeg`;
    // Call the convertImage function when the component mounts
    convertImage(imageUrl);
  }, [convertImage]); // Run this effect only once after initial render

  return (
    <>

<div className=" col-lg-3 bg-success-subtle rounded ">
      {convertedFile && (
                  <img 
                  src={URL.createObjectURL(convertedFile)}
                 
                  className=" card-img-top pt-3 rounded" 
                  alt="..."
                  style={{width:"320px",height: "auto"}}
              />
                )}
      
      <div >
        <p ><strong>Product Name:</strong> {product.productName}</p>
        <p ><strong>Benefit Name:</strong> {benefit.benefitName}</p>
        <p className="card-text"><strong>Goal Amount:</strong> {product.productGoal}</p>
        <p ><strong>Paid Amount:</strong> {actualPaidPrice}</p>
        <p ><strong>Payment Date:</strong> {paymentDate}</p>
      </div>
    </div>

   
    </>
  )
}

export default Backerproducts
