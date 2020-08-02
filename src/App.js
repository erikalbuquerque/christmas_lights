import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Light from "./components/Light";
import Controls from "./components/Controls";

import LightProvider from "./context/toggleLights";

import { ContentLights, Content } from "./styles/styles.js";

const App = () => {
  return (
    <LightProvider>
      <Content>
        <ContentLights>
          <Light color="red" duration="2s" />
          <Light color="orange" duration="3s" />
          <Light color="yellow" duration="2s" />
          <Light color="#01D001" duration="3s" />
          <Light color="cyan" duration="2s" />
          <Light color="blue" duration="3s" />
          <Light color="magenta" duration="2s" />
        </ContentLights>

        <Controls />

        <GlobalStyle />
      </Content>
    </LightProvider>
  );
};

export default App;
