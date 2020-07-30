import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Light from "./components/Light";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Light />
      <h1>Christmas Lights</h1>
    </>
  );
};

export default App;
