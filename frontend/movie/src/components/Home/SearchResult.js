import React from "react";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  const { id, type, poster_path, title } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md my-2 text-center" key={id}>
          <Link to={`/${type}/${id}`}>
            <img
              className="mx-2"
              src={poster_path}
              alt={title}
              width="200"
              height="200"
            />
          </Link>
          <h5 className="mt-2">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
