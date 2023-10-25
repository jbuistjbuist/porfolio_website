"use client";

import React, { useEffect, useState } from "react";
import styles from "@/_styles/home.module.scss";
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
        className={styles.overlay}
        style={{
          background: `${bg}`,
        }}
      ></div>

      {dimensions.width && <p className={styles.aside} style={{color: `${title}`}}>{dimensions.width > 600 ? '(click, scroll, drag)' : '(click for color scheme)'}</p>}

      <div className={styles.title}>
        <h1 style={{ color: `${title}` }}>Jeremy Buist</h1>
        <h2 style={{ color: `${title}` }}>Web Developer</h2>
      </div>
    </section>
  );
}
