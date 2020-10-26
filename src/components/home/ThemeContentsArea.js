import React from "react";
import "./ThemeContentsArea.scss";

import BorderButton from "../utils/BorderButton";

const ThemeContentsArea = () => {
  return (
    <div className="themecontentsarea">
      <div className="container">
        <div className="themecontents">
          <div className="themecontents__text">
            <div className="themecontents__text--title">온라인 체험</div>
            <div className="themecontents__text--contents">
              세계 각지의 사람들을 만나 새로운 경험을 해보세요. 개성 있는
              호스트가 진행하는 실시간 영상 세션을 통해 이제 집에서도 안전하게
              체험을 즐기실 수 있습니다.
            </div>
          </div>
          <div className="themecontents__button">
            <BorderButton color="black" url="/" text="모두 둘러보기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeContentsArea;
