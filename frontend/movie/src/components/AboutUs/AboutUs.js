import React from "react";
import { Link } from "react-router-dom";

import "./AboutUs.css";

import Title from "../Style/Title";
import image from "../../assets/images/rose.png";

const AboutUs = () => {
  return (
    <div className="container">
      <Title name="About Us" />
      <div className="mt-3">
        <div className="row">
          <div className="col-lg-8 mt-3">
            <h5 className="text-center">Meet the developer</h5>
            <div className="row mt-3">
              <div className="col-lg-2 text-center">
                <img src={image} alt="Elisa" width="100" height="100" />
              </div>
              <div className="col">
                <p>
                  Hi! My name is Elisa Ng Li and I am currently a student from
                  Seneca College under the Database Application Developer
                  graduate certificate. <br />
                  This website is created for one of the courses where I get to
                  practice and develop a fully functional responsive website
                  using API, ReactJS and Springboard
                </p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="member d-flex justify-content-center">
              <Link
                to="/registration"
                role="button"
                className="btn btn-outline-dark"
              >
                Become a member
              </Link>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <p>
                Already a member? <Link to="/login">SIGN IN</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
