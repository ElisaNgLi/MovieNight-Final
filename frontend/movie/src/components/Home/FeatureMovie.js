import React, { useEffect, useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";

import SubTitle from "../Style/SubTitle";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/movies/feature?feature=true")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.body);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  }, []);

  const random = (max, movies) => {
    let result = [];
    let counter = 0;

    while (counter < max) {
      let rand = movies[Math.floor(Math.random() * movies.length)];
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
        <h4 className="text-center">Loading Movies...</h4>
      </div>
    );
  } else {
    return (
      <div className="container my-3">
        <SubTitle name="Feature Movies" />
        <ScrollMenu
          arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
          arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
          data={random(
            6,
            movies.map((data, index) => (
              <Link to={`/movies/${data.id}`} key={index.toString()}>
                <img
                  className="mx-2"
                  key={data.id}
                  src={data.poster_path}
                  alt={data.title}
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

export default FeatureMovie;
