"use client";

import React, { useEffect, useState } from "react";
import styles from "@/_styles/hero.module.scss";
import { useElementSize } from "@/_hooks";
import { renderBackground, onResize } from "./three";
import { ArrayCamera, WebGLRenderer } from "three";
import { Colors } from "@/_typescript/interfaces";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLElement>(null);
  const dimensions = useElementSize(ref);
  const [camera, setCamera] = useState<ArrayCamera | null>(null);
  const [renderer, setRenderer] = useState<WebGLRenderer | null>(null);
  const [colors, setColors] = useState<Colors>({
    title: "#2D2F32",
    bg: "#DEDFE1",
  });

  console.log(colors);
  useEffect(() => {
    if (!ref.current || !dimensions.width) return;
    const { renderer, camera } = renderBackground(ref, dimensions, setColors);
    setCamera(camera);
    setRenderer(renderer);
  }, [ref.current]);

  useEffect(() => {
    if (!camera || !renderer) return;
    onResize(dimensions, renderer, camera);
  }, [dimensions]);

  return (
    <section
      id="hero__bg"
      aria-label="hero section background"
      className={styles.section}
      ref={ref}
    >
      <div
        style={{
          height: "100vh",
          width: "100",
          background: `${colors.bg}`,
          opacity: 0.15,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      ></div>
      {children}

      <div className={styles.title}>
        <h1 style={{ color: `${colors.title}` }}>Jeremy Buist</h1>
        <h2 style={{ color: `${colors.title}` }}>
          Full Stack Developer
        </h2>
      </div>
    </section>
  );
}
