'use client'

import { Dimensions } from "@/_typescript/interfaces";
import { RefObject, useEffect, useState } from "react";

//hook to get the size of an element as it changes
export default function useElementSize(element: RefObject<HTMLElement> | null) {
  const [elemSize, setElemSize] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!element?.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setElemSize({
        height: entries[0].contentRect.height,
        width: entries[0].contentRect.width,
      });
    });

    resizeObserver.observe(element.current);

    return () => resizeObserver.disconnect();
  }, [element]);

  return elemSize;
}
