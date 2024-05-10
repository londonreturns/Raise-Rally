import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileUpdate_company() {
  const [username, setUsername] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordValidation, setNewPasswordValidation] = useState(null);
  const [formError, setFormError] = useState('');
  const [editUsername, setEditUsername] = useState(false);
  const [editCompanyDescription, setEditCompanyDescription] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  useEffect(() => {
    // Fetch user details from local storage
    const userType = localStorage.getItem('userType');
    const email = localStorage.getItem('email');

    if (userType === 'company' && email) {
      // Fetch company details from API using email
      axios.get(`http://localhost:8080/api/companies/email/${email}`)
        .then(response => {
          const { name, description } = response.data;
          setUsername(name);
          setCompanyDescription(description);
        })
        .catch(error => {
          console.error('Error fetching company details:', error);
        });
    }
  }, []);

  const handleUpdateProfile = () => {
    // Validate new password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
    if (!passwordRegex.test(newPassword)) {
      setNewPasswordValidation(false);
      return;
    }

    // Construct the data object based on user's choices
    const data = {};
    if (editUsername) data.username = username;
    if (editCompanyDescription) data.companyDescription = companyDescription;
    if (editPassword) {
      data.oldPassword = oldPassword;
      data.newPassword = newPassword;
    }

    // Update profile through API
    axios.put('http://localhost:8080/api/companies/id', data)
      .then(response => {
        console.log('Profile updated successfully');
        setFormError('');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        setFormError('Error updating profile. Please try again later.');
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Update Profile</div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} readOnly={!editUsername} />
                  <button className="btn btn-primary" type="button" onClick={() => setEditUsername(!editUsername)}>Edit</button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="companyDescription" className="form-label">Company Description:</label>
                <div className="input-group">
                  <textarea className="form-control" id="companyDescription" value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} readOnly={!editCompanyDescription} rows="3" />
                  <button className="btn btn-primary" type="button" onClick={() => setEditCompanyDescription(!editCompanyDescription)}>Edit</button>
                </div>
              </div>
              {editPassword && (
                <>
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">Old Password:</label>
                    <input type="password" className="form-control" id="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password:</label>
                    <input type="password" className={`form-control ${newPasswordValidation === false ? 'is-invalid' : ''}`} id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    {newPasswordValidation === false && <div className="invalid-feedback">Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be between 8 and 15 characters long</div>}
                  </div>
                </>
              )}
              <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={() => setEditPassword(!editPassword)}>Change Password</button>
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={handleUpdateProfile}>Update Profile</button>
              </div>
              {formError && <div className="alert alert-danger mt-3">{formError}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate_company;