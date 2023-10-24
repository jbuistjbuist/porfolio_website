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
    title: "#C66330",
    bg: "#000000",
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
      <h1 style={{ color: `${colors.bg}` }}>Jeremy</h1>
      <h1 style={{ color: `${colors.title}` }}>Jeremy</h1>
      {children}
    </section>
  );
}
