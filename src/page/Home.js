import React from "react";
import "./Home.css";
import Banner from "../components/home/Banner";
import ThumnailArea from "../components/home/ThumnailArea";

const Home = () => {
  return (
    <div className="page__container">
      <Banner />
      <ThumnailArea />
    </div>
  );
};

export default Home;
