import React from "react";
import classNames from "classnames";

import "./RoundButton.scss";

const RoundButton = ({ navAtcive, type, contents, url, color, onClick }) => {
  if (type == "button") {
    return (
      <button
        onClick={onClick}
        className={classNames("roundbutton", navAtcive, color)}
      >
        <div className="roundbutton--text">{contents}</div>
      </button>
    );
  } else if (type == "a") {
    return (
      <a className={classNames("roundbutton", navAtcive, color)} href={url}>
        <div className="roundbutton--text">{contents}</div>
      </a>
    );
  }
};

export default RoundButton;
