import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Title from "../Style/Title";
import "./ResetPassword.css";

const ResetPassword = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateOldPassword, setValidOldPassword] = useState();
  const [validateNewPassword, setValidNewPassword] = useState();
  const [validateConfirmPassword, setValidConfirmPassword] = useState();

  const handleOldPassword = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleValidOldPassword = () => {
    setValidOldPassword(oldPassword.trim().length >= 8 ? true : false);
  };

  const handleValidNewPassword = () => {
    setValidNewPassword(newPassword.trim().length >= 8 ? true : false);
  };

  const handleValidConfirmPassword = () => {
    setValidConfirmPassword(confirmPassword === newPassword ? true : false);
  };

  return (
    <div className="container">
      <Title name="My Account" />
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="true" to="/myaccount">
                Profile
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/resetpassword">
                Reset Password
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <form className="row g-3 mt-3">
            <div className="form-group">
              <div
                className={`invalid-field ${
                  validateOldPassword === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="oldPassword" className="form-label">
                  Current Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={handleOldPassword}
                  onBlur={handleValidOldPassword}
                  autoFocus
                  required
                />
                {validateOldPassword === false && (
                  <p>Please enter your current password</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <div
                className={`invalid-field ${
                  validateNewPassword === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="text"
                  id="newPassword"
                  className="form-control"
                  value={newPassword}
                  onChange={handleNewPassword}
                  onBlur={handleValidNewPassword}
                  required
                />
                {validateNewPassword === false && (
                  <p>Password must be at least 8 characters long</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <div
                className={`invalid-field ${
                  validateConfirmPassword === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  onBlur={handleValidConfirmPassword}
                  required
                />
                {validateConfirmPassword === false && (
                  <p>Password does not match</p>
                )}
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn savepw btn-md">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
