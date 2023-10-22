"use client";

import React, { useEffect, useState } from "react";
import styles from "@/_styles/hero.module.scss";
import { useElementSize } from "@/_hooks";
import * as three from "three";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLElement>(null);
  const { width, height } = useElementSize(ref);
  const [camera, setCamera] = useState<three.PerspectiveCamera | null>(null);
  const [renderer, setRenderer] = useState<three.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scene = new three.Scene();
    const camera = new three.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new three.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    ref.current.appendChild(renderer.domElement);

    setCamera(camera);
    setRenderer(renderer);

    const geometry = new three.BoxGeometry();
    const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new three.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }

    animate();
  }, [ref.current]);

  useEffect(() => {
    if (!camera || !renderer) return;

    function onResize(
      camera: three.PerspectiveCamera,
      renderer: three.WebGLRenderer
    ) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    onResize(camera, renderer);
  }, [width, height]);

  return (
    <section
      id="hero__bg"
      aria-label="hero section background"
      className={styles.section}
      ref={ref}
    >
      {children}
    </section>
  );
}
