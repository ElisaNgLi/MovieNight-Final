import React from "react";

const ContentImage = ({ url, title }) => {
  return (
    <div>
      <img
        src={url}
        className="card-img"
        alt={title}
        width="200"
        height="200"
      />
    </div>
  );
};

export default ContentImage;
