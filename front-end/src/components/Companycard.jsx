import React, { useEffect } from "react";
import getAxios from "../hooks/getAxios";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useImageConverter from "../hooks/imageConverter";
function CompanyCard({ name, description, companyId, ticked }) {
  const verified = ticked;
  const shouldShowVerified = () => {
    return verified == true ? (
      <span>
        <VscVerifiedFilled size={22} />{" "}
      </span>
    ) : null;
  };

  return (
    <>
      <div className="d-block col-md-4 col-lg-3  d-flex justify-content-around pt-3 px-4 position-relative companycard mb-3">
        <div className=" bg-light rounded ps-3 ">
          <div>
            <div className="text-start text-uppercase pt-2 fw-semibold">
              <p style={{ fontSize: 18 }}>
                {name} {shouldShowVerified()}
              </p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 18 }}>{description}</p>
          </div>
        </div>
        <div
          className="btn btn-dark w-50 position-absolute  hide bottom-0 start-50 translate-middle-x"
          onClick={() => {
            navigate(`/company/products?companyId=${companyId}`);
          }}
        >
          <span className=" fs-6 text-uppercase">View Products</span>
        </div>
      </div>
    </>
  );
}

export default CompanyCard;
