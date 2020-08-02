import styled, { keyframes } from "styled-components";

const pulseLight = (shadow) => keyframes`
  0%,
  100% {
   box-shadow: -10px 10px 32px 3px ${shadow};
   opacity: 1;
 }
 50% {
  box-shadow: none;
  opacity: 0.2;
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
  animation: ${(props) => pulseLight(props.color)} ${(props) => props.duration}
    infinite;
  animation-delay: 0s;

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
