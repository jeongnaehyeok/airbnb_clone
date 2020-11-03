import React from "react";
import Banner from "@/components/home/Banner";
import ThumbnailArea from "@/components/home/ThumbnailArea";
import ThemeContentsArea from "@/components/home/ThemeContentsArea";

const Home = () => {
  return (
    <div className="page">
      <Banner />
      <ThumbnailArea />
      <ThemeContentsArea />
    </div>
  );
};

export default Home;
