import React from "react";
import classNames from "classnames";
import "./BorderButton.scss";

const BorderButton = ({ color, text, url }) => {
  return (
    <a className={classNames("border__button", color)} src={url}>
      {text}
    </a>
  );
};

BorderButton.defaultProps = {
  color: "white",
};

export default BorderButton;
