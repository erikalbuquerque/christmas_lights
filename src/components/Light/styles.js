import styled, { keyframes } from "styled-components";

const pulseLight = (shadow) => keyframes`
 to {
   box-shadow: -10px 10px 32px 3px ${shadow};
   opacity: 1;
 }
`;

export const Content = styled.div`
  background: ${(props) => props.color || "#563260"};
  width: 32px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 0 0 0 transparent;
  border-radius: 64px 0px;
  transform: rotate(-45deg);
  animation: ${(props) => pulseLight(props.color)} 1s infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0.2;

  &:after {
    content: "";
    height: 15px;
    width: 15px;
    padding: 2px;
    background: #222;
    position: absolute;
    transform: rotate(45deg);
    top: -6px;
    left: 18px;
    border-bottom: 2px solid #444;
  }
  &:before {
    position: absolute;
    content: "";
    transform: rotate(45deg);
    top: 0;
    left: 25px;
    position: absolute;
    width: 50px;
    height: 18px;
    border-bottom: solid #222 2px;
    border-radius: 50%;
  }
`;
