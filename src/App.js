import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Light from "./components/Light";

import { Content } from "./styles/styles.js";

const App = () => {
  return (
    <Content>
      <GlobalStyle />
      <Light color="red" delay="1" />
      <Light color="orange" delay="2" />
      <Light color="yellow" delay="1" />
      <Light color="green" delay="2" />
      <Light color="cyan" delay="1" />
      <Light color="blue" delay="2" />
      <Light color="magenta" delay="1"/>
      <Light color="white" delay="2"/>
    </Content>
  );
};

export default App;
