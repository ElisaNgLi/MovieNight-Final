import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "./SocialButton.css";

const SocialButton = () => {
  return (
    <div className="d-flex justify-content-center my-3">
      <div className="row">
        <div className="col">
          <button
            type="submit"
            className="btn social btn-primary"
            onClick={() => alert("Facebook click")}
          >
            <FacebookIcon />
            Facebook
          </button>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn social btn-info"
            onClick={() => alert("Google click")}
          >
            <MailOutlineIcon />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialButton;
