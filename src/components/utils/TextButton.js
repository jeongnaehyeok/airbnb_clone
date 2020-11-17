import React from "react";
import classNames from "classnames";

import "./TextButton.scss";

const TextButton = ({ navAtcive, active, text, type, href, onClick }) => {
  const TypeButton = () => {
    switch (type) {
      case "a":
        return (
          <a
            className={classNames("textbutton__text", active, navAtcive)}
            href={href}
          >
            {text}
          </a>
        );
      case "button":
        return (
          <button
            className={classNames("textbutton__text", active, navAtcive)}
            onClick={onClick}
          >
            {text}
          </button>
        );
    }
  };
  return (
    <div className="textbutton">
      <TypeButton />
    </div>
  );
};

TextButton.defaultProps = {
  active: "deactive",
};

export default TextButton;
