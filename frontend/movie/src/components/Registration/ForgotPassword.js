import React, { useState } from "react";

import "./ForgotPassword.css";
import Title from "../Style/Title";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validateEmail, setValidEmail] = useState();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleValidEmail = () => {
    setValidEmail(email.includes("@"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="card forgot mt-5 mb-5">
        <div className="card-body">
          <Title name="Forgot your password?" />
          <p className="card-subtitle text-center">
            Please enter the email you use to register below
          </p>
          <form className="row g-3 mt-3" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
              <div className="col-10">
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
                    autoFocus
                    required
                  />
                  {validateEmail === false && (
                    <p>Please provided a valid email</p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn send btn-md"
                onClick={() => alert("Email Send")}
              >
                Send email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
