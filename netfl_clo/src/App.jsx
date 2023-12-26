import React from "react";
import Header from "./components/Header/Header";
import Cover from "./components/Cover/Cover";
import NewReleases from "./components/New Releases/NewReleases";
import Popular from "./components/Popular/Popular";
import Footer from "./components/Footer/Footer";
import Adventure from "./components/Adventure/Adventure";

const App = () => {
  //for new Releases
  const movieData = [
    {
      title: "Movie 1",
      description: "Description of Movie 1",
      imageUrl: "/assets/movie1.jpg",
    },
    {
      title: "Movie 2",
      description: "Description of Movie 2",
      imageUrl: "/src/assets/movie2.jpg",
    },
    // Add more movie data as needed
  ];

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  // };
  return (
    <div className=" bg-black">
      <Header />
      <Cover />
      <NewReleases />

      <Popular />
      <Adventure />
      <Footer />
    </div>
  );
};

export default App;
