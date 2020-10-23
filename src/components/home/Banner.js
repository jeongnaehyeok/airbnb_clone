import React from "react";
import BorderBtn from "../../utils/BorderBtn";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="inner__conatiner">
        <div className="banner__text__box">
          <div className="banner__title">이제, 여행은 가까운 곳에서.</div>
          <div className="banner__contents">
            새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를 보거나, 휴식할
            수 있는 가까운 숙소를 찾아보세요.
          </div>
          <BorderBtn primary url="/" text="가까운 여행지 둘러보기" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
