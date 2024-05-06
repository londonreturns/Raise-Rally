// Importing all necessary files, react and useState hook
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import raiserallyLogo from "../assets/raiserally-logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// Function for login
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for displaying error message
  const [validationErrors, setValidationErrors] = useState({
    // State for validation
    email: "",
    password: "",
  });
  const [userType, setUserType] = useState("company"); // State for user type

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const errors = {};

    // Email Format Validation and white space strip
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Password Presence Validation
    if (!password.trim()) {
      errors.password = "Please enter a password.";
    } else {
      // Password Length Validation
      if (password.length < 8 || password.length > 15) {
        errors.password = "Password must be between 8 and 15 characters long.";
      }

      // Password Complexity Validation
      if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}/.test(
          password
        )
      ) {
        errors.password =
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.";
      }
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Check if there are no validation errors
      let emailId;
      try {
        let response;
        if (userType === "company") {
          // User type check
          emailId = email.trim(); // Strip whitespace from email
          response = await axios.get(
            "http://localhost:8080/api/companies/email/" + emailId
          );
        } else if (userType === "backers") {
          emailId = email.trim(); // Strip whitespace from email
          response = await axios.get(
            "http://localhost:8080/api/backers/email/" + emailId
          );
        } else if (userType === "admin") {
          emailId = email.trim(); // Strip whitespace from email
          response = await axios.get(
            "http://localhost:8080/api/admin/email/" + emailId
          );
        }

        // Set email and user type in local storage
        localStorage.setItem("email", emailId);
        localStorage.setItem("userType", userType);

        console.log("Login response:", response.data);

        navigate("/", { state: { loggedIn: true } });
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred. Please try again later.");
      }
    }
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationErrors({ ...validationErrors, email: "" });
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidationErrors({ ...validationErrors, password: "" });
  };

  // Function to handle user type change
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    if (error) {
      window.location.reload(); // Reload page if there is an error
    }
  };
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center shadow" id="login">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-6 col-sm-12 col-12">
          <div className="card shadow w-100 h-100 bg-body-tertiary">
            <div className="card-body px-3">
              <div className="d-flex justify-content-center ps-5">
                <img src={raiserallyLogo} className=" logo " alt="Raise Rally" style={{ width: 100,height:80 }} />
              </div>
              <h2 className="text-center mb-4">Sign into your account</h2>
              {error && <div className="alert alert-danger mb-4">{error}</div>}
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <MdOutlineMailOutline /> Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${validationErrors.email && "is-invalid"}`}
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <div className="invalid-feedback">{validationErrors.email}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <RiLockPasswordLine /> Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${validationErrors.password && "is-invalid"}`}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <div className="invalid-feedback">{validationErrors.password}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">User Type</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="company"
                        value="company"
                        checked={userType === "company"}
                        onChange={handleUserTypeChange}
                      />
                      <label className="form-check-label" htmlFor="company">
                        Company
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="backers"
                        value="backers"
                        checked={userType === "backers"}
                        onChange={handleUserTypeChange}
                      />
                      <label className="form-check-label" htmlFor="backers">
                        Backers
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="admin"
                        value="admin"
                        checked={userType === "admin"}
                        onChange={handleUserTypeChange}
                      />
                      <label className="form-check-label" htmlFor="admin">
                        Admin
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary btn-block" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
  
              <p className="mt-4 text-center">
                Don't have an account?
                <Link to="/signup"> Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default Login;