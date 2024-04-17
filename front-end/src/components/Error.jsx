import React from "react";
import { MdReportGmailerrorred } from "react-icons/md";
import { Link } from "react-router-dom";
import "./error.css";
function Error() {
  return (
    <>
      {/* this page renders only if there is error in the server */}
      <div className="container-fluid d-flex justify-content-center fissy align-content-center text-center">
        <div className="row container">
          <div className="col-lg-10">
            <h1>500 </h1>
            <h3>Server Error</h3>
            <p>It's not you,it's me.</p>
          </div>
          <div className="col-lg-2">
            <MdReportGmailerrorred size={350} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
