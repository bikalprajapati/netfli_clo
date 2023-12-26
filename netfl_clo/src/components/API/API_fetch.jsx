import axios from "axios";

const BASEURL = "https://api.themoviedb.org/3";
export const getData = () => {
  const getData = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}/movie/157336?api_key=679e8a0539ccc1652ee3c5d8791dec03`
      );
      return response.a;
    } catch (error) {
      console.log(error);
    }
  };
};
