import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios library
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function BackerDashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Retrieve user's email or user ID from local storage
            const userEmail = localStorage.getItem('userEmail');
            const userId = localStorage.getItem('userId');

            // Check if user email or user ID exists in local storage
            if (!userEmail && !userId) {
                console.error('User email or user ID not found in local storage');
                return;
            }

            // Include user's email or user ID in the API request
            const response = await axios.get(`http://localhost:8080/api/products/fundedprojects/${userEmail || userId}`);
            const modifiedProjects = response.data.map(project => ({
                productId: project.productId,
                productName: project.productName,
                productDescription: project.productDescription,
                productGoal: project.productGoal,
                active: project.active,
                featured: project.featured,
                currentAmount: project.currentAmount,
                startDate: project.startDate,
                endDate: project.endDate,
                benefitIds: project.benefitIds
            }));
            setProjects(modifiedProjects);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleViewDetails = (projectId) => {
        // Implement functionality to show project details modal
        console.log('View details of project:', projectId);
    };

    return (
        <div className="container mt-4"> {/* Bootstrap container */}
            <h1 className="text-center mb-4">My Funded Projects</h1>
            <div className="row"> {/* Bootstrap row */}
                {projects.map(project => (
                    <div key={project.productId} className="col-md-6"> {/* Bootstrap column */}
                        <div className="card mb-3"> {/* Bootstrap card */}
                            {/* <img src={project.image} className="card-img-top" alt={project.title} /> */}
                            <div className="card-body">
                                <h5 className="card-title">{project.productName}</h5>
                                <p className="card-text">Description: {project.productDescription}</p>
                                <p className="card-text">Goal: ${project.productGoal}</p>
                                <p className="card-text">Status: {project.active ? 'Active' : 'Inactive'}</p>
                                <p className="card-text">Featured: {project.featured ? 'Yes' : 'No'}</p>
                                <p className="card-text">Current Amount: ${project.currentAmount}</p>
                                <p className="card-text">Start Date: {project.startDate}</p>
                                <p className="card-text">End Date: {project.endDate}</p>
                                {/* <button className="btn btn-primary" onClick={() => handleViewDetails(project.productId)}>View Details</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BackerDashboard;
