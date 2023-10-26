'use client';

import React, { useContext, createContext, useState } from "react";
import { Colors } from "@/_typescript/interfaces";

interface ColorContext extends Colors {
  setColors: (colors: Colors) => void;
}

const ColorsContext = createContext<ColorContext>({
  title: "#2D2F32",
  bg: "#DEDFE1",
  setColors: () => {},
});

export const useColors = () => useContext(ColorsContext);


export function ColorsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colors, setColors] = useState<Colors>({
    title: "#2D2F32",
    bg: "#DEDFE1",
  });

  const handleSetColors = (colors: Colors) => {
    window.document.body.style.setProperty("--foreground", colors.title);
    window.document.body.style.setProperty("--background", colors.bg);
    setColors(colors);
  }
  const value = { ...colors, setColors: handleSetColors };

  return (
    // @ts-ignore
    <ColorsContext.Provider value={value}>
      {children}
    </ColorsContext.Provider>
  );
}


