import React from "react";
import classNames from "classnames";

import "./RoundButton.scss";

const RoundButton = ({ navAtive, type, contents, url }) => {
  if (type == "button") {
    return (
      <button className={classNames("roundbutton", navAtive)}>
        <div className="roundbutton--text">{contents}</div>
      </button>
    );
  } else if (type == "a") {
    return (
      <a className={classNames("roundbutton", navAtive)} href={url}>
        <div className="roundbutton--text">{contents}</div>
      </a>
    );
  }
};

export default RoundButton;
