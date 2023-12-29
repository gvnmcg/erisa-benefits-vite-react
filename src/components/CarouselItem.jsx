import React from "react";
import bannerImage from "../images/banner2.png"

export const CarouselItem = ({ item }) => {
  const gradientOverlay = {
    backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486), url(${bannerImage})`,
    // backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486), url(${item.image})`,
    backgroundSize: "cover",
    paddingLeft: "4px",
  };

  return (
    <div className='carousel-item' style={gradientOverlay}>
      <div></div>
      <div>
        <h4>{item.title}</h4>
        <div className='carousel-item-text'>{`${
          item.description ? item.description : ""
        }`}</div>
        {/* there could be multiple links, so this will need to be rendered with .map() to allow for that possibility */}
        <a href={item.link} className='btn news-btn'>
          Learn more
        </a>
      </div>
    </div>
  );
};
