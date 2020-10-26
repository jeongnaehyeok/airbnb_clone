import React from "react";
import BorderButton from "../utils/BorderButton";

import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__text">
          <div className="banner__text--title">이제, 여행은 가까운 곳에서.</div>
          <div className="banner__text--content">
            새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를 보거나, 휴식할
            수 있는 가까운 숙소를 찾아보세요.
          </div>
          <BorderButton color="white" url="/" text="가까운 여행지 둘러보기" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
