import React, { useState } from "react";
import qs from "query-string";

import "./LodgingBar.scss";
import SearchIcon from "@/assets/svg/Search_Icon";

const LodgingBar = () => {
  const query = qs.parse(window.location.search);
  const [inputData, setInputData] = useState({
    area: "",
    checkin: "",
    checkout: "",
    adults: "",
    ...query,
  });
  const appChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <form className="lodging__container" action="/result">
      <div className="lodging__filter">
        <div className="filter">
          <label for="area">위치</label>
          <input
            type="text"
            name="area"
            value={inputData.area}
            onChange={appChange}
          />
        </div>
      </div>
      <div className="lodging__line"></div>
      <div className="lodging__filter">
        <div className="filter">
          <label for="checkin">체크인</label>
          <input
            type="text"
            name="checkin"
            value={inputData.checkin}
            onChange={appChange}
          />
        </div>
      </div>
      <div className="lodging__line"></div>
      <div className="lodging__filter">
        <div className="filter">
          <label for="checkout">체크아웃</label>
          <input
            type="text"
            name="checkout"
            value={inputData.checkout}
            onChange={appChange}
          />
        </div>
      </div>
      <div className="lodging__line"></div>
      <div className="lodging__filter">
        <div className="filter">
          <label for="adults">인원</label>
          <input
            type="text"
            name="adults"
            value={inputData.adults}
            onChange={appChange}
          />
        </div>
      </div>
      <div className="lodging__button">
        <button className="lodging__button--submit" type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default LodgingBar;
