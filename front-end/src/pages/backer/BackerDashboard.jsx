
import React from "react";
import Trial from "../../components/Trial";
import getAxios from "../../hooks/getAxios";
import Backerproducts from "../../components/Backerproducts";

function BackerDashboard() {
  const backerEmail = localStorage.getItem("email");
  const { data: id } = getAxios(
    `http://localhost:8080/api/backers/email/${backerEmail}`
  );
  const backerid = parseInt(id.backer_id);
  const { data: contribution } = getAxios(
    `http://localhost:8080/api/contributions/backer/${backerid}`
  );


  return (
    <>
      <div className="container-fluid mt-4">
  <h1 className="text-start mb-4">My Funded Projects</h1>
      <div className="row  d-flex justify-content-lg-start gap-4">
         
        {contribution.map((contribution) => (
          <Backerproducts key={contribution.id} {...contribution} />
        ))}
      </div>
      </div>
    </>
  );
}

export default BackerDashboard;
