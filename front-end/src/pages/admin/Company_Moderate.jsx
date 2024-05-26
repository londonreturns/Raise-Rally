import React, { useState, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import axios from 'axios';

function Company_Moderate() {
    const [searchTerm, setSearchTerm] = useState('');
    const [companies, setCompanies] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [searchTerm]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 800);
      return () => clearTimeout(timer); 
    }, []);
    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/companies/search?query=${searchTerm}`);
            setCompanies(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleToggleActive = async (id, active) => {
      try {
          const newActive = !active; // Toggle the active status
          await axios.patch(`http://localhost:8080/api/companies/enable/${id}/${newActive}`);
          
          // Update the companies state with the updated company details
          setCompanies(prevCompanies => prevCompanies.map(company => {
              if (company.companyId === id) {
                  return {
                      ...company,
                      active: newActive
                  };
              }
              return company;
          }));
      } catch (error) {
          console.error('Error toggling active status:', error);
      }
  };
  

  const handleToggleVerified = async (id, ticked) => {
    try {
        const newTicked = !ticked; // Toggle the verified status
        await axios.patch(`http://localhost:8080/api/companies/verify/${id}/${newTicked}`);
        
        // Update the companies state with the updated company details
        setCompanies(prevCompanies => prevCompanies.map(company => {
            if (company.companyId === id) {
                return {
                    ...company,
                    ticked: newTicked
                };
            }
            return company;
        }));
    } catch (error) {
        console.error('Error toggling verified status:', error);
    }
};


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <button className="btn btn-outline-secondary" type="button">
                            <RiSearchLine />
                            <span className="ms-1">Search</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <h1>All Company</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Company Name</th>
                                <th>Description</th>
                                <th>Active</th>
                                <th>Verified</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map(company => (
                                <tr key={company.companyId}>
                                    <td>{company.companyId}</td>
                                    <td>{company.name}</td>
                                    <td>{company.description}</td>
                                    <td>
                                        <button
                                            className={`btn ${company.active ? 'btn-secondary' : 'btn-success'}`}
                                            onClick={() => handleToggleActive(company.companyId, company.active)}
                                        >
                                            {company.active ? 'Disable' : 'Enable'}
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className={`btn ${company.ticked ? 'btn-secondary' : 'btn-success'}`}
                                            onClick={() => handleToggleVerified(company.companyId, company.ticked)}
                                        >
                                            {company.ticked ? 'Unverify' : 'Verify'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Company_Moderate;
