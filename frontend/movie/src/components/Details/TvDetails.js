import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "./Details.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [tv, setTv] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //if trying with local change the link back to http://localhost:8000/tv
    fetch(`http://localhost:5001/tv/${id}`)
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
  }, [id]);

  if (isLoading) {
    return (
      <div className="container">
        <p>loading tv details</p>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 text-center">
            <img
              src={tv[0].poster_path}
              alt={tv[0].title}
              width="200"
              height="200"
            />
          </div>
          <div className="col-lg">
            <h3>{tv[0].title}</h3>
            <div className="row">
              <div className="col">
                <h6>{tv[0].genre}</h6>
              </div>
              <div className="col">
                <p>{tv[0].release_date}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                <ReactStars
                  count={5}
                  size={20}
                  isHalf={true}
                  edit={false}
                  value={tv[0].rating}
                  activeColor="#ffd700"
                />
              </div>
              <div className="col">
                <p>{tv[0].rating}</p>
              </div>
            </div>

            <p>{tv[0].overview}</p>
            <div className="text-center my-3">
              <button
                type="button"
                className="btn btn-outline-info mx-3"
                onClick={() => alert("Rent Click")}
              >
                Rent ${tv[0].rent}
              </button>
              <button
                type="button"
                className="btn btn-outline-info mx-3"
                onClick={() => alert("Buy Click")}
              >
                Buy ${tv[0].buy}
              </button>
            </div>
          </div>
          <div className="col-lg details-backdrop text-center">
            <img
              className="poster"
              src={tv[0].backdrop_path}
              alt={tv[0].title}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
