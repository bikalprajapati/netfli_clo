import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel/Carousel"; // Import the Carousel component

const Popular = () => {
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=679e8a0539ccc1652ee3c5d8791dec03`;
  const [popularmovie, setPopular] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(`${URL}`);
      setPopular(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" mb-5 ">
      <p className="bg-black text-white p-2 text-lg pt-3">Popular</p>

      <Carousel movieData={popularmovie} slidesToShow={5} />
    </div>
  );
};

export default Popular;
