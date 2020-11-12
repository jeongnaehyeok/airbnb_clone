import React, { useState } from "react";
import classNames from "classnames";

import "./SearchBar.scss";

import LodgingBar from "@/components/navbar/search/LodgingBar";
import TextButton from "@/components/utils/TextButton";

const SearchBar = ({ navAtcive }) => {
  const [buttonAction, setButtonAction] = useState({
    lodging: "active",
    experience: "deactive",
  });
  const onLodgingClick = () =>
    setButtonAction({
      lodging: "active",
      experience: "deactive",
    });
  const onXPClick = () =>
    setButtonAction({
      lodging: "deactive",
      experience: "active",
    });
  return (
    <div className="searchbar">
      <div className="searchbar__button">
        <TextButton
          active={buttonAction.lodging}
          navAtcive={navAtcive == "active" ? "navactive" : ""}
          onClick={onLodgingClick}
          type="button"
          text="숙소"
        />
        <TextButton
          active={buttonAction.experience}
          navAtcive={navAtcive == "active" ? "navactive" : ""}
          onClick={onXPClick}
          type="button"
          text="체험"
        />
        <TextButton
          navAtcive={navAtcive == "active" ? "navactive" : ""}
          type="a"
          text="온라인 체험"
          href="https://www.airbnb.co.kr/s/experiences/online"
        />
      </div>
      <div className="search__box">
        {buttonAction.lodging == "active" ? <LodgingBar /> : ""}
      </div>
    </div>
  );
};

export default SearchBar;
