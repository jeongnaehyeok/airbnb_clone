import React from "react";
import classNames from "classnames";

import "./ThemeContentsArea.scss";

import BorderButton from "@/components/utils/BorderButton";
import Thumbnail from "@/components/utils/Thumbnail";

const ThumbnailList = [
  {
    id: 1,
    src:
      "https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg?im_w=720",
    content: "상하이 샤오룽바오 만드는 법 배우기",
  },
  {
    id: 2,
    src:
      "https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg?im_w=720",
    content: "그라피티와 거리 예술에 반영된 여성상 탐구",
  },
  {
    id: 3,
    src:
      "https://a0.muscache.com/im/pictures/1793b6aa-4c3c-4193-a65a-09b440b2ca2c.jpg?im_w=720",
    content: "뉴욕 마술사와 백스테이지 구경하기",
  },
  {
    id: 4,
    src:
      "https://a0.muscache.com/im/pictures/925f99bb-c5bc-4d82-9803-518abeef7e2e.jpg?im_w=720",
    content: "수제 칵테일을 마시며 젠더에 관해 토론하기",
  },
];

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
      <div className={classNames("container", "gridslider")}>
        <div className="gridframe">
          {ThumbnailList.map((item) => (
            <Thumbnail
              id={item.id}
              src={item.src}
              content={item.content}
              color="dark"
              girditem="girditem"
            />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="themecontents__bottom">
          <BorderButton color="black" url="/" text="모두 둘러보기" />
        </div>
      </div>
    </div>
  );
};

export default ThemeContentsArea;
