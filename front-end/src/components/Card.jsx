import React, { useEffect } from "react";
import getAxios from "../hooks/getAxios";
import { MdVerified } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
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
  
}) {
  if (!active) {
    return null;
  }
  const { data } = getAxios(`http://localhost:8080/api/companies/${companyId}`);

  const progressPercentage = (productGoal / currentAmount) * 100;
  const endDateMillis = new Date(endDate).getTime();
  const today = new Date().getTime();
  const dayInMillis = 1000 * 60 * 60 * 24;
  const diff = endDateMillis - today;
  const daysleft = Math.round(diff / dayInMillis);

  const navigate = useNavigate();

  const shouldShowHeart = () => {
    return featured == true ? <FaHeart size={20} /> : null;
  };
  const verified = data.ticked;
  const shouldShowVerified = () => {
    return verified == true ? <MdVerified size={25} /> : null;
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
    <div
      className="col-md-4 col-lg-3 p-4 d-flex justify-content-around"
      onClick={() => {
        navigate(`/categories/${getCategoryName(categoryId).toLowerCase()}/detail?productId=${productId}`);

      }}
    >
      <div className="card">
        {convertedFile && (
          <img src={URL.createObjectURL(convertedFile)} className="card-img-top border border-bottom  img-100" alt="..." />
        )}
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <h5 className="card-title preview1-text">{productName}</h5>
            </div>
            <div className="col-2">{shouldShowHeart()}</div>
          </div>
          <div className="row ">
            <div className="d-flex justify-content-between text-center">
              <div>
                <p className="fs-6 text-body-secondary fw-semibold">{companyName}</p>
              </div>
              <div>{shouldShowVerified()}</div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <p className="card-text preview-text">{productDescription}</p>
            </div>

            <div className="row py-1">
              <div className="d-flex justify-content-start text-center">
                <div className="pe-2">
                  <h5>रू{currentAmount}</h5>
                </div>
                <div>NPR Raised</div>
                <div className="ms-auto mb-2 ">
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 btn btn-secondary disabled ">
                      {getCategoryName(categoryId)}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="progress progress-length  "
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-color "
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <small className="text-body-secondary">
                <div className="d-flex justify-content-start align-content-center">
                  <div>
                    <IoIosTime size={25} />
                  </div>
                  <div className="ps-2 fs-6">{daysleft} days left</div>
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
