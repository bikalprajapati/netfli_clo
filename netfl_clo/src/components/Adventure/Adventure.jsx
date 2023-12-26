import React, { useEffect, useState } from "react";
import axios from "axios";
import Moviecard from "../Moviecard";
import testImg2 from "../../assets/movie2.jpg";

const Adventure = () => {
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=679e8a0539ccc1652ee3c5d8791dec03&with_genres=12`;
  const [advent, setAdvent] = useState([]);
  console.log("adv", advent);
  const getData = async () => {
    try {
      const result = await axios.get(`${URL}`);
      setAdvent(result.data.results);
      console.log("000", result.data.results);
    } catch (error) {
      console.log(error);
    }
    console.log("adv1", data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p className="text-white mb-2 text-lg p-2">Adventure Movies</p>
      <div className="flex">
        {advent.map((adven) => (
          <Moviecard image={testImg2} data={adven} />
        ))}
      </div>
    </div>
  );
};

export default Adventure;
