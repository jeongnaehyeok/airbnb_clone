import React from "react";
import "./Home.css";
import Banner from "../components/home/Banner";
import ThumbnailArea from "../components/home/ThumbnailArea";

const Home = () => {
  return (
    <div className="page__container">
      <Banner />
      <ThumbnailArea />
    </div>
  );
};

export default Home;
