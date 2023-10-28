"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "@/_styles/home.module.scss";
import { useColors, useElementSize } from "@/_hooks";
import { renderBackground, onResizeArray } from "./_utils";
import { ArrayCamera, WebGLRenderer } from "three";
import { UseCustomVh } from "@/_hooks";

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const dimensions = useElementSize(ref);
  const [camera, setCamera] = useState<ArrayCamera | null>(null);
  const [renderer, setRenderer] = useState<WebGLRenderer | null>(null);
  const { setColors, title, bg } = useColors();

  useEffect(() => {
    if (!ref.current || !dimensions.width) return;
    if (camera || renderer) return;
    try {
      const { initRenderer, initCamera } = renderBackground(
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
  }, [ref.current, dimensions, camera, renderer]);

  useEffect(() => {
    if (!camera || !renderer) return;
    try {
      onResizeArray(dimensions, renderer, camera);
    } catch (err) {
      console.error(err);
    }
  }, [dimensions, renderer, camera, title, bg, setColors]);

  return (
    <section
      id="home"
      aria-label="hero section"
      className={styles.section}
      ref={ref}
    >
      <UseCustomVh />
      {dimensions.width && (
        <p className={styles.aside}>(click, scroll, drag)</p>
      )}

      <div className={styles.title}>
        <h1>Jeremy Buist</h1>
        <h2>Web Developer</h2>
      </div>
    </section>
  );
}
