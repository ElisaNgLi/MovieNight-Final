import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center text-lg-start">
      <div className="footer row mt-3">
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Watch</h6>
          <p>
            <Link id="footer-link" to="/movies" className="text-reset">
              Movies
            </Link>
          </p>
          <p>
            <Link id="footer-link" to="/tv" className="text-reset">
              TV
            </Link>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">My Account</h6>
          <p>
            <Link id="footer-link" to="/" className="text-reset">
              My Movie Night
            </Link>
          </p>
          <p>
            <Link id="footer-link" to="/myaccount" className="text-reset">
              Account
            </Link>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Help</h6>
          <p>
            <Link id="footer-link" to="/about" className="text-reset">
              About Us
            </Link>
          </p>
          <p>
            <Link id="footer-link" to="/terms" className="text-reset">
              Terms and Condition
            </Link>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
          <p>
            <a
              id="footer-link"
              href="https://www.facebook.com/netflixcanada/?brand_redir=475822799216240"
              className="text-reset"
            >
              <FacebookIcon />
              Facebook
            </a>
          </p>
          <p>
            <a
              id="footer-link"
              href="https://www.instagram.com/netflixca/"
              className="text-reset"
            >
              <InstagramIcon />
              Instagram
            </a>
          </p>
          <p>
            <a
              id="footer-link"
              href="https://twitter.com/netflix"
              className="text-reset"
            >
              <TwitterIcon />
              Twitter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
