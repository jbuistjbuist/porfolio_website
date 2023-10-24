'use client'

import React, { useEffect, useState } from "react";
import styles from "@/_styles/hero.module.scss";
import { useColors, useElementSize } from "@/_hooks";
import { renderBackground, onResize } from "./_utils";
import { ArrayCamera, WebGLRenderer } from "three";

export default function Home() {
  const ref = React.useRef<HTMLElement>(null);
  const dimensions = useElementSize(ref);
  const [camera, setCamera] = useState<ArrayCamera | null>(null);
  const [renderer, setRenderer] = useState<WebGLRenderer | null>(null);
  const { title, bg, setColors } = useColors();

  useEffect(() => {
    if (!ref.current || !dimensions.width) return;
    
    const { renderer, camera } = renderBackground(ref, dimensions, setColors);
    setCamera(camera);
    setRenderer(renderer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEffect(() => {
    if (!camera || !renderer) return;
    onResize(dimensions, renderer, camera);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions]);

  return (
    <section
      id="home"
      aria-label="hero section"
      className={styles.section}
      ref={ref}
    >
      <div
        style={{
          height: "100vh",
          width: "100",
          background: `${bg}`,
          opacity: 0.15,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      ></div>

      <div className={styles.title}>
        <h1 style={{ color: `${title}` }}>Jeremy Buist</h1>
        <h2 style={{ color: `${title}` }}>Full Stack Developer</h2>
      </div>
    </section>
  );
}
