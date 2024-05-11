import React from 'react'
import getAxios from '../hooks/getAxios';

function trial() {
   let a=localStorage.getItem("benefitIds");
  // console.log(a);
   let b=a[0];
   let c=a[2];

  const {data:amount}=getAxios(`http://localhost:8080/api/price/${b}`);
  const {data:amount1}=getAxios(`http://localhost:8080/api/price/${c}`);
  return(
    
    <>
    </>
  )
  
}

export default trial
