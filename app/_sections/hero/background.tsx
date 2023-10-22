"use client";

import React, { useEffect, useState } from "react";
import styles from "@/_styles/hero.module.scss";
import { useWindowSize } from "@/_hooks";
import * as three from "three";

interface ThreeInitialComponents {
  scene: three.Scene;
  camera: three.PerspectiveCamera;
  renderer: three.WebGLRenderer;
  cube: three.Mesh;
  firstRender?: boolean;
}

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width, height, initial } = useWindowSize();
  const [started, setStarted] = useState(false);

  let scene, camera, renderer, cube;

  useEffect(() => {
    if (!width || !height) return;

    if (!started) {
      scene = new three.Scene();
      camera = new three.PerspectiveCamera(75, width / height, 0.1, 1000);
      renderer = new three.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      document.body.appendChild(renderer.domElement);

      const geometry = new three.BoxGeometry();
      const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
      cube = new three.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;
      setStarted(true);
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }

    started && animate();

    function onResize() {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    onResize();
  }, [width, height, started]);

  return (
    <section
      id="hero__bg"
      aria-label="hero section background"
      className={styles.section}
    >
      {children}
    </section>
  );
}
