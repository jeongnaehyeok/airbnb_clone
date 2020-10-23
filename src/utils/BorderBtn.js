import React from "react";
import styled from "styled-components";

const BorderBtn = ({ text, url, primary }) => {
  const Button = styled.a`
    border: 1px solid white;
    padding: 8px 16px;
    color: ${(props) => (primary ? "black" : "white")};
    border-color: ${(props) => (primary ? "" : "white")};
    background: ${(props) => (primary ? "white" : "")};
    cursor: pointer;
    border-radius: 10px;
    &:hover {
      background: ${(props) => (primary ? "#f2f2f2" : "#666666")};
    }
    font-size: 14px;
    font-weight: 600;
  `;

  return (
    <Button primary src={url}>
      {text}
    </Button>
  );
};

export default BorderBtn;
