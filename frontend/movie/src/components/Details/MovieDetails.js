import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "./Details.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //if trying with local change the link back to https://night-movie.herokuapp.com/movies/${id}
    fetch(`http://localhost:5001/movies/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.body);
        console.log(data);
        setMovies(data.body);
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
        <p>loading movie details</p>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 text-center">
            <img
              src={movies[0].poster_path}
              alt={movies[0].title}
              width="200"
              height="200"
            />
          </div>
          <div className="col-lg">
            <h3>{movies[0].title}</h3>
            <div className="row">
              <div className="col-lg">
                <h6>{movies[0].genre}</h6>
              </div>
              <div className="col-lg">
                <p>{movies[0].release_date}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                <ReactStars
                  count={5}
                  size={20}
                  isHalf={true}
                  edit={false}
                  value={movies[0].rating}
                  activeColor="#ffd700"
                />
              </div>
              <div className="col">
                <p>{movies[0].rating}</p>
              </div>
            </div>

            <p>{movies[0].overview}</p>
            <div className="text-center my-3">
              <button
                type="button"
                className="btn btn-outline-info mx-3"
                onClick={() => alert("Rent Click")}
              >
                Rent ${movies[0].rent}
              </button>
              <button
                type="button"
                className="btn btn-outline-info mx-3"
                onClick={() => alert("Buy Click")}
              >
                Buy ${movies[0].buy}
              </button>
            </div>
          </div>
          <div className="col-lg details-backdrop text-center">
            <img
              className="poster"
              src={movies[0].backdrop_path}
              alt={movies[0].title}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
