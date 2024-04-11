import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './registration.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [userType, setUserType] = useState('company');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [companyDescription, setCompanyDescription] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('registration_username');
    const storedEmail = localStorage.getItem('registration_email');
    const storedPassword = localStorage.getItem('registration_password');

    if (storedUsername) setUsername(storedUsername);
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    // Username Presence Validation
    if (!username.trim()) {
      errors.username = 'Please enter a username.';
    }

    // Email Format Validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Password Presence Validation
    if (!password.trim()) {
      errors.password = 'Please enter a password.';
    }

    // Password Length Validation
    if (password.length < 8 || password.length > 15) {
      errors.password = 'Password must be between 8 and 15 characters long.';
    }

    // Password Complexity Validation
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.';
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    setValidationErrors(errors);

    try {
      if (Object.keys(errors).length === 0 && termsAccepted) {
        let response;
        if (userType === 'company') {
          response = await axios.post('http://localhost:8080/api/companies', {
            name: username,
            email: email,
            password: password,
            description: companyDescription 
          });
        } else if (userType === 'backers') {
          response = await axios.post('http://localhost:8080/api/backers', {
            name: username,
            email: email,
            password: password
          });
        } else if (userType === 'admin') {
          response = await axios.post('http://localhost:8080/api/admins', {
            name: username,
            email: email,
            password: password
          });
        }

        // Store username, email, and password in local storage upon successful registration
        localStorage.setItem('registration_username', username);
        localStorage.setItem('registration_email', email);
        localStorage.setItem('registration_password', password);

        console.log('Registration response:', response.data);

        setTimeout(() => {
          console.log('Registration successful');
        }, 1000);
      } else {
        setError('Please correct the errors and accept the terms and conditions.');
      }

    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setValidationErrors({ ...validationErrors, username: '' });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationErrors({ ...validationErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
    setValidationErrors({ ...validationErrors, password: '' });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value.trim());
    setValidationErrors({ ...validationErrors, confirmPassword: '' });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
        if (error) {
      window.location.reload();
    }

  };

  const handleCompanyDescriptionChange = (e) => {
    setCompanyDescription(e.target.value);
  };


  return (
    <div className="container-fluid vh-50 d-flex justify-content-center align-items-center bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Create your Raise Rally Account</h2>
              {error && <div className="alert alert-danger mb-4">{error}</div>}
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Name</label>
                  <input type="text" id="username" className={`form-control ${validationErrors.username && 'is-invalid'}`} value={username} onChange={handleUsernameChange} required />
                  <div className="invalid-feedback">{validationErrors.username}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" id="email" className={`form-control ${validationErrors.email && 'is-invalid'}`} value={email} onChange={handleEmailChange} required />
                  <div className="invalid-feedback">{validationErrors.email}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className={`form-control ${validationErrors.password && 'is-invalid'}`} value={password} onChange={handlePasswordChange} required />
                  <div className="form-text mb-2">
                  </div>
                  <div className="invalid-feedback">{validationErrors.password}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" id="confirmPassword" className={`form-control ${validationErrors.confirmPassword && 'is-invalid'}`} value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                  <div className="invalid-feedback">{validationErrors.confirmPassword}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">User Type</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="userType" id="company" value="company" checked={userType === 'company'} onChange={handleUserTypeChange} />
                      <label className="form-check-label" htmlFor="company">Company</label>
                      {userType === 'company' && (
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Enter company description"
                          value={companyDescription}
                          onChange={handleCompanyDescriptionChange}
                        />
                      )}
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="userType" id="backers" value="backers" checked={userType === 'backers'} onChange={handleUserTypeChange} />
                      <label className="form-check-label" htmlFor="backers">Backers</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="userType" id="admin" value="admin" checked={userType === 'admin'} onChange={handleUserTypeChange} />
                      <label className="form-check-label" htmlFor="admin">Admin</label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                </div>
              </form>
              <p className="mt-4 text-center">Already have an account? <a href="#!" className="text-decoration-none">Sign In</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
