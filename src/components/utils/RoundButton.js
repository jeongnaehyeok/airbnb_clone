import React from "react";
import classNames from "classnames";

import "./RoundButton.scss";

const RoundButton = ({ navAtcive, type, contents, url, color, onClick }) => {
  switch (type) {
    case "button":
      return (
        <button
          onClick={onClick}
          className={classNames("roundbutton", navAtcive, color)}
        >
          <div className="roundbutton--text">{contents}</div>
        </button>
      );
    case "a": {
      return (
        <a className={classNames("roundbutton", navAtcive, color)} href={url}>
          <div className="roundbutton--text">{contents}</div>
        </a>
      );
    }
  }
};

export default RoundButton;
