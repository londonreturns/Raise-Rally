//Importing neccessary components
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Main functions as ProfileUpdate_backers
function ProfileUpdate_backers() {
  //State variable for form inputs, validations, and other necessary states
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordValidation, setNewPasswordValidation] = useState(null);
  const [formError, setFormError] = useState('');
  const [backer_id, setBackersId] = useState(null);
  const [loading, setLoading] = useState(true);
  const emailId = localStorage.getItem("email"); //Retrive email form local storage

  //Fetch backets details using email on component mount
  useEffect(() => {
    axios.get("http://localhost:8080/api/backers/email/" + emailId)
      .then(response => {
        //Destructure response data to get name and backer_id
        const { name, backer_id } = response.data;
        setUsername(name);
        setBackersId(backer_id);
        setLoading(false); //Set loading to dalse once data is fetched
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
        setLoading(false); //Set loading to false if there's an error
      });
  }, []);

  //Handle profile update form submissing and also using password validations
  const handleUpdateProfile = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
    if (!passwordRegex.test(newPassword)) {
      setNewPasswordValidation(false);
      return;
    }

  //Prepare data for API request
    const data = {
      name :username,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    console.log(data);
    // Send PATCH request to update backer profile
    axios.patch(`http://localhost:8080/api/backers/${backer_id}`, data) 
      .then(response => {
        console.log('Profile updated successfully');
        setFormError(''); //Clear any previous form erros
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        setFormError('Error updating profile. Please try again later.');
      });
  };

  //JSX for the component
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Update Profile</div>
            <div className="card-body">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="username" value={username} readOnly />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">Old Password:</label>
                    <input type="password" className="form-control" id="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password:</label>
                    <input type="password" className={`form-control ${newPasswordValidation === false ? 'is-invalid' : ''}`} id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    {newPasswordValidation === false && <div className="invalid-feedback">Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be between 8 and 15 characters long</div>}
                  </div>
                  <div className="mb-3">
                    <button type="button" className="btn btn-primary" onClick={handleUpdateProfile}>Update Profile</button>
                  </div>
                  {formError && <div className="alert alert-danger mt-3">{formError}</div>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate_backers;