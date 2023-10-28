"use client";

import { debounce } from "@/_utils";
import { useEffect } from "react";

export default function UseCustomVh() {
  useEffect(() => {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty("--100vh", `${vh}px`);

    const handleResize = debounce(() => {
      let vh = window.innerHeight;
      document.documentElement.style.setProperty("--100vh", `${vh}px`);
    }, 200);

    if (window.document.body.getAttribute("resize-listener") !== "true") {
      window.addEventListener("resize", handleResize);
      window.document.body.setAttribute("resize-listener", "true");
    }
  }, []);

  return <></>;
}
