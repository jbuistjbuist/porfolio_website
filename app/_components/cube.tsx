"use client";

import styles from "@styles/cube.module.scss";
import { useColors } from "@/_hooks";
import { useEffect, useRef, useState } from "react";
import { useElementSize } from "@/_hooks";
import { renderCube } from "@/_utils";
import { PerspectiveCamera, WebGLRenderer } from "three";

export default function Cube() {
  const { title, bg, setColors } = useColors();
  const ref = useRef<HTMLDivElement>(null);
  const dimensions = useElementSize(ref);
  const [camera, setCamera] = useState<PerspectiveCamera | null>(null);
  const [renderer, setRenderer] = useState<WebGLRenderer | null>(null);

  useEffect(() => {
    if (!ref.current || !dimensions.width) return;
    if (camera || renderer) return;

    try {
      const { initCamera, initRenderer } = renderCube(
        ref,
        dimensions,
        { title, bg },
        setColors
      );
      setCamera(initCamera);
      setRenderer(initRenderer);
    } catch (err) {
      console.error(err);
    }
  }, [ref.current, dimensions, camera, renderer, title, bg, setColors]);

  return (
    <>
      <div className={styles.cube} ref={ref}></div>
    </>
  );
}
