import React from 'react'
import { Navigate } from 'react-router-dom';
function Privaterouter({ children, userTypeRequired }) {
      const userType = localStorage.getItem('userType');
    
      if (userType !== userTypeRequired) {
        return <Navigate to="/" />;
      }
    
      return children;
    
}

export default Privaterouter
