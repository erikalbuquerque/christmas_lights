import React, { createContext, useContext, useState } from "react";

const LightContext = createContext();

export default function LightProvider({ children }) {
  const [light, setLight] = useState(false);
  return (
    <LightContext.Provider value={{ light, setLight }}>
      {children}
    </LightContext.Provider>
  );
}

export function useLight() {
  const context = useContext(LightContext);
  const { light, setLight } = context;
  return { light, setLight };
}
