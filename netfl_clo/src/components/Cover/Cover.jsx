import React, { useEffect, useState } from "react";
import backgroundImage from "/src/assets/background.jpg";
import axios from "axios";

const Cover = () => {
  const [cover, setCover] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/157336?api_key=679e8a0539ccc1652ee3c5d8791dec03`
      );
      setCover(response.data);
    } catch (error) {
      console.log(error);
      console.log(response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data", cover);

  return (
    <div
      className="h-[70vh] bg-blackColor flex-col items-center justify-center p-[10px] relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${cover.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-12 gap-4 mt-[80px] absolute">
        <div className="content col-span-6 flex flex-col justify-center items-centered text-white m-auto relative px-10 ">
          <h1 className="text-xl font-bold ">{cover.release_date}</h1>
          <h1 className="text-2xl font-bold ml-10 mb-2">{cover.title}</h1>
          <p className="text-lg font-bold mb-8 mt-10">{cover.tagline}</p>
          <div>
            <button className="bg-white rounded text-black px-4 py-2 m-4 ">
              Play
            </button>
            <button className="bg-greyColor border-0 border-black text-white px-4 py-2 m-4 ">
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
