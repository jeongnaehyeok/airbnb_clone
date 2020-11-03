import React from "react";
import classNames from "classnames";

import "./ThumbnailArea.scss";

import Thumbnail from "@/components/utils/Thumbnail";

const ThumbnailList = [
  {
    id: 1,
    src:
      "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",
    title: "독특한 공간",
    content: "단순한 숙소 이상의 특별함이 담긴 공간",
  },
  {
    id: 2,
    src:
      "https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720",
    title: "온라인 체험",
    content: "모두가 함께 즐기는 세계 각지의 독특한 체험",
  },
  {
    id: 3,
    src:
      "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
    title: "집 전체",
    content:
      "일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.",
  },
];

const ThumbnailArea = () => {
  return (
    <div className={classNames("container", "slider")}>
      <div className="thumbnaillist">
        {ThumbnailList.map((item) => (
          <Thumbnail
            id={item.id}
            src={item.src}
            title={item.title}
            content={item.content}
            width="regular"
          />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailArea;
