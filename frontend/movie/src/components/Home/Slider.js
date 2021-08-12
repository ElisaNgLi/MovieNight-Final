import React from "react";

import image from "../../assets/images/movie.jpg";

const Slider = () => {
  return (
    <div className="container mt-3 mb-3 d-flex justify-content-center">
      <div
        id="carouselExampleCaptions"
        className="carousel  slide w-75"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image} className="d-block w-100" alt="Some Disney Show" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Most Watch Disney Content</h5>
              <p>
                Explore some of the best Disney Tv Shows and Movies at Movie
                Night
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wwwimage-tve.cbsstatic.com/base/files/seo/lov_social_1200x627_25.jpg"
              className="d-block w-100"
              alt="Love Island"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Love Island</h5>
              <p>Watch the hottest dating show here</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ecbbb573a0fab4611f69e01589dae7feeb5ee48a86fe9748be7ff5d37912a501._V_SX1080_.jpg"
              className="d-block w-100"
              alt="The Tomorrow War"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>The Tomorrow War</h5>
              <p>This is hottest movie in the action genre</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.theartistree.fm/wp-content/uploads/2021/01/Euphoria.jpg"
              className="d-block w-100"
              alt="Euphoria"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Euphoria</h5>
              <p>Watch some teenagers getting crazy with life</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/10/best-tv-shows-to-binge-watch-social.png"
              className="d-block w-100"
              alt="Euphoria"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>What to Bing Wacth</h5>
              <p>Enjoy some of the best shows here in Movie Night</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
