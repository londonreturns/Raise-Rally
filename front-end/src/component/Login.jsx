import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  });
  const [userType, setUserType] = useState('company');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

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

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      let emailId;
      try {
        let response;
        if (userType === 'company') {
          emailId =document.querySelector("#email").value
          response = await axios.get('http://localhost:8080/api/companies/login', {
          });
        } else if (userType === 'backers') {
          emailId = document.querySelector("#email").value
          console.log(emailId);
          response = await axios.get('http://localhost:8080/api/backers/email/' + emailId, {
    
          });
        } else if (userType === 'admin') {
          emailId =document.querySelector("#email").value
          response = await axios.get('http://localhost:8080/api/companies', {
          });
        }

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        console.log('Login response:', response.data);


      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationErrors({ ...validationErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
    setValidationErrors({ ...validationErrors, password: '' });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    if (error) {
      window.location.reload();
    }
  };

    
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-6 col-sm-12 col-12">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Sign into your account</h2>
              {error && <div className="alert alert-danger mb-4">{error}</div>}
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
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
                  <label className="form-label">User Type</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="userType" id="company" value="company" checked={userType === 'company'} onChange={handleUserTypeChange} />
                      <label className="form-check-label" htmlFor="company">Company</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="userType" id="backers" value="backers" checked={userType === 'backers'} onChange={handleUserTypeChange} />
                      <label className="form-check-label" htmlFor="backers">Backers</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="userType" id="backerAdmin" value="backerAdmin" checked={userType === 'backerAdmin'} onChange={handleUserTypeChange} />
                      <label className="form-check-label" htmlFor="backerAdmin">Admin</label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Sign In</button>
                </div>
              </form>
              <p className="mt-4 text-center">Don't have an account? <a href="#!" className="text-decoration-none">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
