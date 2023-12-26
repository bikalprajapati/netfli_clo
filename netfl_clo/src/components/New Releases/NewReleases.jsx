import React, { useEffect, useState } from "react";
import Moviecard from "../Moviecard";
import testImg1 from "../../assets/movie1.jpg";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel/Carousel";

const NewReleases = () => {
  const BASEURL = `https://api.themoviedb.org/3/movie/popular?api_key=679e8a0539ccc1652ee3c5d8791dec03`;
  const [newMovie, setNewMovie] = useState([]);
  console.log("new", newMovie);
  const getData = async () => {
    try {
      const result = await axios.get(`${BASEURL}`);
      console.log("12345", result.data.results);
      setNewMovie(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("123", newMovie);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0.2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <p className="bg-black text-white text-lg p-2 pt-3">New Releases</p>
      <div className="flex justify-between item-center bg-black flex-row">
        {" "}
        {newMovie.map((newa) => (
          <Moviecard image={testImg1} data={newa} />
        ))}
      </div>{" "}
    </div>
  );
};

export default NewReleases;
