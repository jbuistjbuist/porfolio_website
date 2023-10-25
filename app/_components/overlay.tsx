import { useColors } from "@/_hooks";
import styles from "@/_styles/overlay.module.scss";

export default function Overlay() {
  const { bg } = useColors();
  return <div className={styles.overlay} style={{background: `${bg}`}}></div>;
}
