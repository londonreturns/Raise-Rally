import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Registration.css";
import raiserallyLogo from "../assets/raiserally-logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function Registration() {
  const nav=useNavigate();
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
  const [companyDescription, setCompanyDescription] = useState('');

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
    } else {
      // Password Length Validation
      if (password.length < 8 || password.length > 15) {
        errors.password = 'Password must be between 8 and 15 characters long.';
      }

      // Password Complexity Validation
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}/.test(password)) {
        errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.';
      }
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    setValidationErrors(errors);

    try {
      if (Object.keys(errors).length === 0) {
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
          response = await axios.post('http://localhost:8080/api/admin', {
            name: username,
            email: email,
            password: password
          });
        }

        console.log('Registration response:', response.data);
        nav("/login")
        setTimeout(() => {
          console.log('Registration successful');
        }, 1000);
      } else {
        setError('Please correct the errors.');
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
    setEmail(e.target.value.trim()); // Strip whitespace from email
    setValidationErrors({ ...validationErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim()); // Strip whitespace from password
    setValidationErrors({ ...validationErrors, password: '' });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value.trim()); // Strip whitespace from confirm password
    setValidationErrors({ ...validationErrors, confirmPassword: '' });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleCompanyDescriptionChange = (e) => {
      const inputText = e.target.value;
  const words = inputText.split(' '); // Split input text by spaces
  const maxWords = 20; // Define the maximum number of words

  if (words.length <= maxWords) {
    setCompanyDescription(inputText); // Update the state if within word limit
  } else {
    // If the number of words exceeds the limit, truncate the input
    setCompanyDescription(words.slice(0, maxWords).join(' '));
  }

  };
  

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="row">
        <div className="col-lg-12 col-md-6 col-sm-12 col-12 pt-3 d-flex justify-content-center">
          <div className="shadow w-100">
            <div className="card-body p-3">
              <div className="d-flex justify-content-center ps-5">
                <img src={raiserallyLogo} className="logo" alt="Raise Rally" style={{ width: 70 }} />
              </div>
              <h2 className="text-center mb-4">Create your Raise Rally Account</h2>
              {error && <div className="alert alert-danger mb-4">{error}</div>}
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label"><FaRegUserCircle /> Name</label>
                  <input type="text" id="username" className={`form-control ${validationErrors.username && 'is-invalid'}`} value={username} onChange={handleUsernameChange} required />
                  <div className="invalid-feedback">{validationErrors.username}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"> <MdOutlineMailOutline /> Email address</label>
                  <input type="email" id="email" className={`form-control ${validationErrors.email && 'is-invalid'}`} value={email} onChange={handleEmailChange} required />
                  <div className="invalid-feedback">{validationErrors.email}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"><RiLockPasswordLine /> Password</label>
                  <input type="password" id="password" className={`form-control ${validationErrors.password && 'is-invalid'}`} value={password} onChange={handlePasswordChange} required />
                  <div className="form-text mb-2">
                  </div>
                  <div className="invalid-feedback">{validationErrors.password}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label"><RiLockPasswordLine /> Confirm Password</label>
                  <input type="password" id="confirmPassword" className={`form-control ${validationErrors.confirmPassword && 'is-invalid'}`} value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                  <div className="invalid-feedback">{validationErrors.confirmPassword}</div>
                </div>
                <div className="mb-4">
                  <label className="form-label">User Type</label>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="userType" id="company" value="company" checked={userType === 'company'} onChange={handleUserTypeChange} />
                        <label className="form-check-label pb-3" htmlFor="company">Company</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="userType" id="backers" value="backers" checked={userType === 'backers'} onChange={handleUserTypeChange} />
                        <label className="form-check-label" htmlFor="backers">Backers</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="userType" id="admin" value="admin" checked={userType === 'admin'} onChange={handleUserTypeChange} />
                        <label className="form-check-label" htmlFor="admin">Admin</label>
                      </div>
                    </div>
                  </div>
                </div>
                {userType === 'company' && 
                <div className="mb-3">
                <textarea
                rows="4"
                id="companyDescription"
                className='form-control company-description' // Add a class for styling
                placeholder="Enter company description"
                value={companyDescription}
                onChange={handleCompanyDescriptionChange}                    
                ></textarea>
                </div>
                }
                <div className="text-center">
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                </div>
              </form>
              <p className="mt-4 text-center">Already have an account? <Link to='/login'>Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;