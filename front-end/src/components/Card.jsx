import React, { useEffect } from "react";
import getAxios from "../hooks/getAxios";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useImageConverter from "../hooks/imageConverter";
function Card({
  productName,
  productDescription,
  currentAmount,
  endDate,
  featured,
  companyId,
  productGoal,
  productId,
  active,
  categoryId,
  benefitIds
}) {
  if (!active) {
    return null;
  }

  const { data} = getAxios(`http://localhost:8080/api/companies/${companyId}`);

  const progressPercentage = (productGoal / currentAmount) * 100;
  const endDateMillis = new Date(endDate).getTime();
  const today = new Date().getTime();
  const dayInMillis = 1000 * 60 * 60 * 24;
  const diff = endDateMillis - today;
  const daysleft = Math.round(diff / dayInMillis);

  const navigate = useNavigate();

  const shouldShowHeart = () => {
    return featured == true ? <div className="btn btn-light disabled opacity-100"><FaHeart size={20}/> 
    </div>   : null;
  };
  const verified = data.ticked;
  const shouldShowVerified = () => {
    return verified == true ?  <div className="btn btn-warning  disabled opacity-100">
    <span><VscVerifiedFilled size={23}/> </span><span className=" fs-6 ">TRUST PROVEN</span>
</div>   : null;
  };
  const companyName = data.name;

  const { convertedFile, convertImage } = useImageConverter();

  useEffect(() => {
    // URL of the image to convert
    const imageUrl = `http://localhost:8080/api/images/${productId}_1.jpeg`;
    // Call the convertImage function when the component mounts
    convertImage(imageUrl);
  }, [convertImage]); // Run this effect only once after initial render

  // Function to get category name based on categoryId
  const getCategoryName = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "Art";
      case 2:
        return "Craft";
      case 3:
        return "Dance";
      case 4:
        return "Film";
      case 5:
        return "Music";
      case 6:
        return "Technology";
      default:
        return "Unknown";
    }
  };

  return (
  <>
      {/* dispaly-block  */}
      <div className="main-section  d-block col-md-4 col-lg-3 p-4 d-flex justify-content-around">
        {/* secondary section */}
        <div className="secondary-section  bg-body ">
          {/* image section  */}
         <div className="item">
          <div className="  me-3 pb-2 image position-relative">
              <div className=" text-white position-absolute absolute-hidden top-0 start-0 m-2  d-block ">
                {/* verified  */}
                {shouldShowVerified()}
              </div>
              <div className="text-white position-absolute absolute-hidden top-0 end-0 m-2">
                {/* featured  product */}
{shouldShowHeart()}
              </div>
              <div >

              {/* image inside here  */}
              {convertedFile && (
                <img src={URL.createObjectURL(convertedFile)} className="w-100 rounded photo" alt="..." />
              )}
                </div>
                <div className=" text-white position-absolute absolute-hidden bottom-0 start-50 translate-middle-x mb-5">
                {/* View project  */}
                <div className="btn btn-light w-100" onClick={() => {
                  
navigate(`/categories/${getCategoryName(categoryId).toLowerCase()}/detail?productId=${productId}`);
let allbenefits=JSON.stringify(benefitIds);
localStorage.setItem("allbenefits",allbenefits);

}}> 
                     <span className=" fs-6 text-uppercase">View campaign</span>
                </div>  
 
              </div>

              </div>

          {/* content section  */}
          <div className="content ">
            <div><h4 className="fs-6 text-secondary" style={{ fontSize: 20 }}>{getCategoryName(categoryId)}</h4></div>
            <div>
              <p style={{ fontSize: 18}}>
              {productName}
              </p>
              </div>
          </div>
          </div>
        </div>
      </div>
  
</>
  );
}

export default Card;
