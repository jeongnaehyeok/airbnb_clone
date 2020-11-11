import React from "react";

import "./LodgingBar.scss";
import SearchIcon from "@/assets/svg/Search_Icon";

const LodgingBar = () => {
  return (
    <form className="lodging__container" method="get">
      <div className="lodging__filter">
        <div className="filter">
          <label for="location">위치</label>
          <input type="text" name="location" />
        </div>
      </div>
      <div className="lodging__line"></div>
      <div className="lodging__filter">
        <div className="filter">
          <label for="checkin">체크인</label>
          <input type="text" name="checkin" />
        </div>
      </div>
      <div className="lodging__line"></div>
      <div className="lodging__filter">
        <div className="filter">
          <label for="checkout">체크아웃</label>
          <input type="text" name="checkout" />
        </div>
      </div>
      <div className="lodging__line"></div>
      <div className="lodging__filter">
        <div className="filter">
          <label for="location">인원</label>
          <input type="text" name="location" />
        </div>
      </div>
      <div className="lodging__button">
        <button className="lodging__button--submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default LodgingBar;
