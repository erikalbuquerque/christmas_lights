import React from "react";

import { useLight } from "./../../context/toggleLights";

import { Content, Button } from "./styles";

const Controls = () => {
  const { light, setLight } = useLight();
  function handleButton() {
    !light ? setLight(true) : setLight(false);
  }
  return (
    <Content>
      <Button onClick={() => handleButton()} light={light}>
        {!light ? "OFF" : "ON"}
      </Button>
    </Content>
  );
};

export default Controls;
