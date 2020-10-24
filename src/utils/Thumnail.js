import React from "react";
import styled from "styled-components";

const thumnail = ({ width, src, title, content }) => {
  const Box = styled.div`
    width: ${width ? width : "30%"};
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  `;
  const Img = styled.img`
    border-radius: 16px 16px 0 0;
    width: 100%;
  `;
  const TextBox = styled.div`
    padding: 12px 16px 16px;
  `;
  const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  `;
  const Content = styled.div`
    font-size: 14px;
  `;
  return (
    <Box>
      <Img src={src} />
      <TextBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </TextBox>
    </Box>
  );
};

export default thumnail;
