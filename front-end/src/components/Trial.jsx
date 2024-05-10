import React, { useEffect } from 'react';
import axios from 'axios';

function Trial() {
  useEffect(() => {
    axios
      .post("http://localhost:8080/api/products", {
        "productName": "Sample Product",
        "productDescription": "Description",
        "productGoal": 2500,
        "startDate": "2024-05-15",
        "endDate": "2024-06-15",
        "benefits": [
          {
            "benefitName": "Benefit 1",
            "benefitDescription": "Benefit Description 1",
            "price": {
              "amount": 100
            }
          },
          {
            "benefitName": "Benefit 2",
            "benefitDescription": "Benefit Description 2",
            "price": {
              "amount": 150
            }
          }
        ],
        "category": {
          "categoryId": 1
        },
        "company": {
          "companyId": 1
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div></div>;
}

export default Trial;
