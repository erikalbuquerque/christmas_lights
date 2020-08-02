import React from "react";
import { Content } from "./styles";

import { useLight } from "./../../context/toggleLights";

const Light = ({ color, duration }) => {
  const { light } = useLight();
  return <Content color={color} duration={duration} light={light}></Content>;
};

export default Light;
