"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "@/_styles/hero.module.scss";
import { Dimensions } from "@/_typescript/interfaces";
import * as three from "three";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  //get the dimensions of the element to use for the canvas
  const ref = useRef<HTMLElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    setDimensions({
      width: ref.current?.offsetWidth || 0,
      height: ref.current?.offsetHeight || 0,
    });
  }, []);

  useEffect(() => {
    if (!ref.current || !dimensions.width) return;

    const scene = new three.Scene();
    const camera = new three.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000
    );
    const renderer = new three.WebGLRenderer();
    renderer.setSize(dimensions.width, dimensions.height);
    ref.current.appendChild(renderer.domElement);

  }, [dimensions]);

  return (
    <section id="hero__bg" aria-label="hero section background" ref={ref} className={styles.section}>
      {`width: ${dimensions.width}px, height: ${dimensions.height}px`}
      {children}
    </section>
  );
}
