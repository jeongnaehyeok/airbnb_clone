import React from "react";
import classNames from "classnames";

import "./SearchBar.scss";

import TextButton from "@/components/utils/TextButton";

const SearchBar = ({ navAtcive }) => {
  return (
    <div className={classNames("searchbar", navAtcive)}>
      <TextButton active="active" type="button" text="숙소" />
      <TextButton type="button" text="체험" />
      <TextButton
        type="a"
        text="온라인 체험"
        href="https://www.airbnb.co.kr/s/experiences/online"
      />
    </div>
  );
};

export default SearchBar;
