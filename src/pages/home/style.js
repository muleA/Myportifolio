import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: orange;
  border-radius: 10px;
`;

export const Content = styled.div`
  overflow: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  cursor: pointer;
  font-size: 40px;
  background-color: orange;
  display: inline-block;
  border-radius: 100px;
  padding: 10px;
  cursor: pointer;
  color: black;
`;
