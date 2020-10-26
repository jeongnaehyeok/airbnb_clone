import React from "react";
import classNames from "classnames";
import "./Thumbnail.scss";

const thumbnail = ({ width, src, title, content }) => {
  return (
    <div className={classNames("thumbnail", width)}>
      <img src={src} className="thumbnail--image" />
      <div className="thumbnail__text">
        <div className="thumbnail__text--title">{title}</div>
        <div className="thumbnail__text--content">{content}</div>
      </div>
    </div>
  );
};

export default thumbnail;
