import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Slice } from "../../data/Slice";

import "./Carousel.scss";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <div className="container">
        <div className="carousel__content">
          <Slider {...settings} className="ff">
            {Slice.map((x) => (
              <img src={x.image} alt="" />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
