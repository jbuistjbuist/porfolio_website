import { Dimensions } from "@/_typescript/interfaces";
import { useEffect, useState } from "react";


export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Dimensions>({
    width: 0,
    height: 0,
    initial: true,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize(prev => {
        return {
        width: window.innerWidth,
        height: window.innerHeight,
        initial: (prev.width === 0 && prev.height === 0),
        };
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}