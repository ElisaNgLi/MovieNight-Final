import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Registration.css";
import Title from "../Style/Title";
import SocialButton from "./SocialButton";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateFirstName, setValidFirstName] = useState();
  const [validateLastName, setValidLastName] = useState();
  const [validateUsername, setValidUsername] = useState();
  const [validateEmail, setValidEmail] = useState();
  const [validatePassword, setValidPassword] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleValidFirstName = () => {
    setValidFirstName(firstName.trim().length >= 2);
  };

  const handleValidLastName = () => {
    setValidLastName(lastName.trim().length >= 2);
  };

  const handleValidUsername = () => {
    setValidUsername(username.trim().length >= 2);
  };

  const handleValidEmail = () => {
    setValidEmail(email.includes("@"));
  };

  const handleValidPassword = () => {
    setValidPassword(password.trim().length >= 8);
  };

  useEffect(() => {
    setFormIsValid(
      firstName.trim().length >= 2 &&
        lastName.trim().length >= 2 &&
        username.trim().length >= 2 &&
        email.includes("@") &&
        password.trim().length >= 8
    );
  }, [firstName, lastName, username, email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        pasword: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User created succesfully.");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="card registration mt-5 mb-5">
      <div className="card-body">
        <div className="advertisement">
          <div className="row">
            <div className="col-3 mt-0 mb-0">
              <p>LIMITED TIME OFFER</p>
            </div>
            <div className="col mt-0 mb-0">
              <p>New user sign up offer</p>
              <h6>Rent it.Buy it. Get 30% off*</h6>
              <p>First purchase only*</p>
            </div>
            <div className="col-4 mt-0 mb-0">
              <h6>WATCH FOR FREE</h6>
              <p>10.000+ Movies + TV SHOWS</p>
            </div>
          </div>
        </div>
        <Title name="Welcome to Movie Night!" />
        <p className="card-subtitle text-center">
          Already have an account?
          <Link to="/login" className="card-link">
            {" "}
            Login Here
          </Link>
        </p>
        <form className="row g-3 mt-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <div
              className={`invalid-field ${
                validateFirstName === false ? "invalid" : ""
              }`}
            >
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}
                onBlur={handleValidFirstName}
                autoFocus
                required
              />
              {validateFirstName === false && (
                <p>Please enter your first name</p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`invalid-field ${
                validateLastName === false ? "invalid" : ""
              }`}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastName}
                onBlur={handleValidLastName}
                required
              />
              {validateLastName === false && <p>Please enter your last name</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`invalid-field ${
                validateUsername === false ? "invalid" : ""
              }`}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
                onBlur={handleValidUsername}
                required
              />
              {validateUsername === false && <p>Please provided a username</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`invalid-field ${
                validateEmail === false ? "invalid" : ""
              }`}
            >
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                onBlur={handleValidEmail}
                required
              />
              {validateEmail === false && <p>Please provided a valid email</p>}
            </div>
          </div>
          <div className="col-12">
            <div
              className={`invalid-field ${
                validatePassword === false ? "invalid" : ""
              }`}
            >
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                onBlur={handleValidPassword}
                required
              />
              {validatePassword === false && (
                <p>Password must be at least 8 characters long</p>
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn sign btn-md"
              disabled={!formIsValid}
            >
              Sign Up
            </button>
          </div>
        </form>
        <hr />
        <div className="mt-3">
          <h4>Or Sign Up with</h4>
          <SocialButton />
        </div>
      </div>
    </div>
  );
};

export default Registration;
