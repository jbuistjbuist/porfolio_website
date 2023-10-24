import React from "react";
import styles from "@styles/page.module.scss";
import { useColors } from "../_hooks";

const navItems = ["Home", "AI", "Projects", "Contact", "About"];

export default function Nav() {
  let { title } = useColors();

  console.log(title)

  return (
    <>
    <nav className={styles.nav}>
      {navItems.map((item, i) => (
        <a
          key={item}
          href={item !== 'Home' ? `/${item.toLowerCase()}` : '/'}
          style={{ color: `${title}` }}
        >
          {item}
        </a>
      ))}
    </nav>
    </>
  );
}
