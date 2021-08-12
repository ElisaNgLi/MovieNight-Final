import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/movie-logo.png";

const Header = () => {
  const logout = () => {
    localStorage.clear("userInfo");
    localStorage.clear("userLogin");
    window.location.pathname = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Movie Night" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tv">
                TV Shows
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/account"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Movie Night
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/login">
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/registration">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {localStorage.getItem("userLogin") === "true" ? (
                  <li>
                    <NavLink className="dropdown-item" to="/myaccount">
                      My Account
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink className="dropdown-item" to="/forgotpassword">
                      Forgot Password
                    </NavLink>
                  </li>
                )}
                {localStorage.getItem("userLogin") === "true" ? (
                  <li>
                    <NavLink className="dropdown-item" to="/resetpassword">
                      Reset Password
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </li>
          </ul>
          {localStorage.getItem("userLogin") === "true" ? (
            <div id="logout" className="navbar-item" onClick={logout}>
              Logout
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
