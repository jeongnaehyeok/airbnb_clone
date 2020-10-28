import React from "react";
import classNames from "classnames";
import "./Thumbnail.scss";

const Thumbnail = ({ width, src, title, content, color, girditem }) => {
  return (
    <div className={classNames("thumbnail", width, color, girditem)}>
      <img src={src} className="thumbnail__image" />
      <div className="thumbnail__text">
        <div className="thumbnail__text--title">{title}</div>
        <div className="thumbnail__text--content">{content}</div>
      </div>
    </div>
  );
};

Thumbnail.defaultProps = {
  color: "light",
  width: "full",
};

export default Thumbnail;
