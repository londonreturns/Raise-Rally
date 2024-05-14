import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function BackerDashboard() {
    const [projects, setProjects] = useState([]);
    const [backerId, setBackerId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Retrieve user's email and type from local storage
            const userEmail = localStorage.getItem('email');
            const userType = localStorage.getItem('userType');

            console.log('User email from local storage:', userEmail);
            console.log('User type from local storage:', userType);

            if (!userEmail) {
                console.error('User email not found in local storage');
                return;
            }

            // Fetch data from the API to get backer details
            const backerResponse = await axios.get(`http://localhost:8080/api/backers/email/${userEmail}`);
            const backerData = backerResponse.data;

            if (backerData && backerData.backer_id) {
                setBackerId(backerData.backer_id);
            } else {
                console.error('Backer data not found');
                return;
            }
        } catch (error) {
            console.error('Error fetching backer data:', error);
        }
    };

    useEffect(() => {
        if (backerId) {
            fetchProjects();
        }
    }, [backerId]);

    const fetchProjects = async () => {
        try {
            // Fetch funded projects using backer ID
            const response = await axios.get(`http://localhost:8080/api/products/fundedproducts/${backerId}`);
            const responseData = response.data;

            if (!Array.isArray(responseData)) {
                console.error('Invalid response format:', responseData);
                return;
            }

            // Map the response data to the desired format
            const modifiedProjects = responseData.map(project => ({
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

            // Update state with the modified data
            setProjects(modifiedProjects);
        } catch (error) {
            console.error('Error fetching funded projects:', error);
        }
    };

    const handleViewDetails = (projectId) => {
        console.log('View details of project:', projectId);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">My Funded Projects</h1>
            <div className="row">
                {projects.map(project => (
                    <div key={project.productId} className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{project.productName}</h5>
                                <p className="card-text">Description: {project.productDescription}</p>
                                <p className="card-text">Goal: ${project.productGoal}</p>
                                <p className="card-text">Status: {project.active ? 'Active' : 'Inactive'}</p>
                                <p className="card-text">Featured: {project.featured ? 'Yes' : 'No'}</p>
                                <p className="card-text">Current Amount: ${project.currentAmount}</p>
                                <p className="card-text">Start Date: {project.startDate}</p>
                                <p className="card-text">End Date: {project.endDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BackerDashboard;
