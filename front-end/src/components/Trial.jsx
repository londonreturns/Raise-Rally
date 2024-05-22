import React, { useEffect } from 'react';
import postAxios from '../hooks/postAxios';

function Trial() {
  const { makeRequest, data } = postAxios("http://localhost:8080/api/payment/savePayment");
  const payload = {
    actualPaidPrice: 111,
    backerId: 25,
    benefitId: 25,
  };

  const post = () => {
    makeRequest(payload);
  };

  // Use useEffect to log data when it changes
  useEffect(() => {
    if (data !== null) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <div className="btn btn-success" onClick={post}>
        Submit Payment
      </div>
    </>
  );
}

export default Trial;
