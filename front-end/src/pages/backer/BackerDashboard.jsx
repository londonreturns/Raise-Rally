// import React, { useState, useEffect } from 'react'; // Importing necessary hooks from React
// import axios from 'axios'; // Importing axios for making HTTP requests
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap for styling

// function BackerDashboard() {
//     const [projects, setProjects] = useState([]);
//     const [backerId, setBackerId] = useState(null);

//     useEffect(() => {
//         fetchData(); // Fetch data on component mount
//     }, []); // Empty dependency array means this useEffect runs once when the component mounts

//     // Function to fetch the backer's details based on their email
//     const fetchData = async () => {
//         try {
//             // Retrieve user's email and type from local storage
//             const userEmail = localStorage.getItem('email');
//             const userType = localStorage.getItem('userType');

//             console.log('User email from local storage:', userEmail);
//             console.log('User type from local storage:', userType);

//             if (!userEmail) {
//                 console.error('User email not found in local storage');
//                 return; // Exit if email is not found
//             }

//             // Fetch data from the API to get backer details
//             const backerResponse = await axios.get(`http://localhost:8080/api/backers/email/${userEmail}`);
//             const backerData = backerResponse.data;

//             if (backerData && backerData.backer_id) {
//                 setBackerId(backerData.backer_id); // Set backer ID if data is valid
//             } else {
//                 console.error('Backer data not found');
//                 return; // Exit if backer data is not found
//             }
//         } catch (error) {
//             console.error('Error fetching backer data:', error); // Log any errors
//         }
//     };

//     useEffect(() => {
//         if (backerId) {
//             fetchProjects(); // Fetch projects if backer ID is available
//         }
//     }, [backerId]); // Dependency array includes backerId, so this useEffect runs whenever backerId changes

//     const fetchProjects = async () => {
//         try {
//             // Fetch funded projects using backer ID
//             const response = await axios.get(`http://localhost:8080/api/products/fundedproducts/${backerId}`);
//             const responseData = response.data;

//             if (!Array.isArray(responseData)) {
//                 console.error('Invalid response format:', responseData);
//                 return; // Exit if the response format is invalid
//             }

//             // Map the response data to the desired format
//             const modifiedProjects = responseData.map(project => ({
//                 productId: project.productId,
//                 productName: project.productName,
//                 productDescription: project.productDescription,
//                 productGoal: project.productGoal,
//                 active: project.active,
//                 featured: project.featured,
//                 currentAmount: project.currentAmount,
//                 startDate: project.startDate,
//                 endDate: project.endDate,
//                 benefitIds: project.benefitIds
//             }));

//             // Update state with the modified data
//             setProjects(modifiedProjects);
//         } catch (error) {
//             console.error('Error fetching funded projects:', error);
//         }
//     };

//     const handleViewDetails = (projectId) => {
//         console.log('View details of project:', projectId);
//     };

//     return (
//         <div className="container mt-4">
//             <h1 className="text-center mb-4">My Funded Projects</h1>
//             <div className="row">
//                 {projects.map(project => (
//                     <div key={project.productId} className="col-md-6">
//                         <div className="card mb-3">
//                             <div className="card-body">
//                                 <h5 className="card-title">{project.productName}</h5>
//                                 <p className="card-text">Description: {project.productDescription}</p>
//                                 <p className="card-text">Goal: ${project.productGoal}</p>
//                                 <p className="card-text">Status: {project.active ? 'Active' : 'Inactive'}</p>
//                                 <p className="card-text">Featured: {project.featured ? 'Yes' : 'No'}</p>
//                                 <p className="card-text">Current Amount: ${project.currentAmount}</p>
//                                 <p className="card-text">Start Date: {project.startDate}</p>
//                                 <p className="card-text">End Date: {project.endDate}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default BackerDashboard;
import React from "react";
import Trial from "../../components/Trial";
import getAxios from "../../hooks/getAxios";

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
          <Trial key={contribution.id} {...contribution} />
        ))}
      </div>
      </div>
    </>
  );
}

export default BackerDashboard;
