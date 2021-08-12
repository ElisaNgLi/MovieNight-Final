import React from "react";

import "./Content.css";
import ContentImage from "./ContentImage";

const Content = () => {
  const actorImg = [
    {
      title: "Viola Davis",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Viola_Davis_by_Gage_Skidmore.jpg",
    },
    {
      title: "Henry Cavill",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Henry_Cavill_by_Gage_Skidmore_2.jpg",
    },
    {
      title: "Awkwafina",
      url: "https://m.media-amazon.com/images/M/MV5BMTU0NTUwNjkyN15BMl5BanBnXkFtZTgwMjM0NzEzMTI@._V1_.jpg",
    },
    {
      title: "Meryl Streep",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Meryl_Streep_December_2018.jpg",
    },
    {
      title: "Kevin Hart",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg",
    },
    {
      title: "Tom Hiddleston",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg",
    },
  ];
  return (
    <div className="container content my-5">
      <div className="row">
        <div className="col">
          <h3 className="my-3 text-white">ACTOR'S SPOTLIGHT</h3>
          <p className="text-white">Check out who are the hottes actor's</p>
        </div>
        {actorImg.map((data, index) => (
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
