import React from "react";

import "./Content.css";
import ContentImage from "./ContentImage";

const Content = () => {
  const movieImg = [
    {
      title: "Action",
      url: "https://movies.universalpictures.com/media/nob-theatrical-fight-split-1-ondemandnow-en-us-716x1075-jpg-6087358a2c598-1.jpg",
    },
    {
      title: "Horror",
      url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Separation_2021_Film_poster.png",
    },
    {
      title: "Adventure",
      url: "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg",
    },
    {
      title: "Comedy",
      url: "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
    },
    {
      title: "Thriller",
      url: "https://m.media-amazon.com/images/M/MV5BNTVkODdiMjAtNmQ5Yy00OThhLTg4MDItYTZlYTFmN2E0M2M1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    },
    {
      title: "Drama",
      url: "https://i.ytimg.com/vi/CQauPipThn8/movieposter_en.jpg",
    },
  ];
  return (
    <div className="container content my-5">
      <div className="row">
        <div className="col">
          <h3 className="text-white my-5">WHAT GENRE IS TRENDING THIS 2021</h3>
        </div>
        {movieImg.map((data, index) => (
          <div className="col-lg" key={index.toString()}>
            <ContentImage url={data.url} title={data.title} />
            <h6 className="text-center text-white mt-2">{data.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
