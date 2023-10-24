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

  const value = { ...colors, setColors };

  return (
    // @ts-ignore
    <ColorsContext.Provider value={value}>
      {children}
    </ColorsContext.Provider>
  );
}


