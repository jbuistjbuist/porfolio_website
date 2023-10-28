import { debounce } from "@/_utils";

export default function useCustomVh() {
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
}
