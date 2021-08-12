import React, { useState, useEffect } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";

import SubTitle from "../Style/SubTitle";

const FeatureTv = () => {
  const [tv, setTv] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //if trying with local change the link back to http://localhost:8000/tv
    fetch("http://localhost:5001/tv/feature?feature=true")
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

  const random = (max, tv) => {
    let result = [];
    let counter = 0;

    while (counter < max) {
      let rand = tv[Math.floor(Math.random() * tv.length)];
      if (!result.some((an) => an === rand)) {
        result.push(rand);
        counter++;
      }
    }
    return result;
  };

  if (isLoading) {
    return (
      <div className="container my-5 mx-5">
        <h4 className="text-center">Loading Tv Shows...</h4>
      </div>
    );
  } else {
    return (
      <div className="container my-3">
        <SubTitle name="Feature Tv Shows" />
        <ScrollMenu
          arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
          arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
          data={random(
            6,
            tv.map((data, index) => (
              <Link to={`/tv/${data.id}`} key={index.toString()}>
                <img
                  className="mx-2"
                  key={data.id}
                  src={data.poster_path}
                  alt={data.name}
                  width="200"
                  height="200"
                />
              </Link>
            ))
          )}
        />
      </div>
    );
  }
};

export default FeatureTv;
