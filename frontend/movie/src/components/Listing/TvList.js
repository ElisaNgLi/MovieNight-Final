import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Title from "../Style/Title";
import FilterButton from "./FilterButton";

const TvList = () => {
  const [tv, setTv] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //if trying with local change the link back to http://localhost:8000/tv
    fetch("http://localhost:5001/tv")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTv(data.body);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container my-5 mx-5">
        <h1 className="text-center">Loading Tv Shows...</h1>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <Title name="Tv Shows" />
        <FilterButton />
        <div className="row">
          {tv.map((data) => (
            <div className="col-md my-2 text-center" key={data.id}>
              <Link to={`/tv/${data.id}`}>
                <img
                  className="mx-2"
                  src={data.poster_path}
                  alt={data.title}
                  width="200"
                  height="200"
                />
              </Link>

              <h5 className="mt-2">{data.title}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default TvList;
