import styled from "styled-components";

export const Content = styled.div`
  padding: 10px;
  position: absolute;
  top: 50vh;
  left: 50%;
`;

export const Button = styled.button`
  background: transparent;
  height: 32px;
  width: 32px;
  font-size: 8px;
  border: none;
  border: 1px solid ${(props) => (props.light ? "#0f0" : "#f00")};
  color: ${(props) => (props.light ? "#0f0" : "#f00")};
  border-radius: 50%;
  padding: 10px 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`;
