import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Account.css";
import Title from "../Style/Title";

const Account = () => {
  const [user, setUser] = useState({});
  const [validateFirstName, setValidFirstName] = useState(true);
  const [validateLastName, setValidLastName] = useState(true);
  const [validateEmail, setValidEmail] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5001/users/${localStorage.getItem("userInfo")}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data.body[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleValidFirstName = () => {
    setValidFirstName(user.firstName.trim().length >= 2 ? true : false);
  };

  const handleValidLastName = () => {
    setValidLastName(user.lastName.trim().length >= 2 ? true : false);
  };

  const handleValidEmail = () => {
    setValidEmail(user.email.includes("@"));
  };

  const handleEdit = () => {
    alert("Edit Click");
    document.getElementById("firstName").disabled = false;
    document.getElementById("lastName").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("edit").style.display = "none";
    document.getElementById("save").style.display = "inline";
    document.getElementById("cancel").style.display = "inline";
  };

  const handleSave = () => {
    alert("Save Click");
    if (validateFirstName === true && validateLastName === true) {
      document.getElementById("firstName").disabled = true;
      document.getElementById("lastName").disabled = true;
      document.getElementById("email").disabled = true;
      document.getElementById("edit").style.display = "inline";
      document.getElementById("save").style.display = "none";
      document.getElementById("cancel").style.display = "none";
    }
  };

  const handleCancel = () => {
    alert("Cancel Click");
    document.getElementById("firstName").disabled = true;
    document.getElementById("lastName").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("edit").style.display = "inline";
    document.getElementById("save").style.display = "none";
    document.getElementById("cancel").style.display = "none";
  };

  return (
    <div className="container">
      <Title name="My Account" />
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/myaccount"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resetpassword">
                Reset Password
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <form className="row g-3 mt-3">
            <div className="col-md-6">
              <div
                className={`invalid-field ${
                  validateFirstName === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="firstName"
                  value={user.firstName}
                  onBlur={handleValidFirstName}
                  autoFocus
                  disabled
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
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  id="lastName"
                  value={user.lastName}
                  onBlur={handleValidLastName}
                  disabled
                />
                {validateLastName === false && (
                  <p>Please enter your last name</p>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={user.username}
                disabled
              />
            </div>
            <div className="col-md-6">
              <div
                className={`invalid-field ${
                  validateEmail === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={user.email}
                  onBlur={handleValidEmail}
                  disabled
                />
                {validateEmail === false && <p>Please enter your email</p>}
              </div>
            </div>
            <div className="text-center">
              <button
                id="edit"
                type="button"
                className="btn edit btn-mb"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                id="save"
                type="button"
                className="btn save btn-mb"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                id="cancel"
                type="button"
                className="btn cancel btn-mb"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
