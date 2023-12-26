import React, { useEffect, useState } from "react";
import Moviecard from "../Moviecard"; // Assuming you have a MovieCard component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = ({ movieData, slidesToShow = 5 }) => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 6,
  });

  return (
    <div>
      <Slider {...sliderSettings}>
        {movieData.map((movie) => (
          <div key={movie.title} className="flex justify-center text-white">
            <Moviecard image={movie.imageUrl} data={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
