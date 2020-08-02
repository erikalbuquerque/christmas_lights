import styled from "styled-components";

export const Content = styled.div`
  padding: 10px;
  position: absolute;
  top: 50vh;
  left: 50%;
`;

export const Button = styled.button`
  background-color: #e21212;
  height: 32px;
  width: 32px;
  font-size: 8px;
  border: none;
  border-radius: 50%;
  padding: 10px 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`;
