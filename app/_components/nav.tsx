import React from "react";
import styles from "@styles/nav.module.scss";
import { usePathname } from "next/navigation";
import { useColors } from "../_hooks";
import Link from "next/link";

const navItems = ["Home", "AI", "Projects", "Contact", "About"];

export default function Nav() {
  let { title } = useColors();
  const path = usePathname();

  return (
    <>
    <nav className={styles.nav}>
      {navItems.map((item, i) => (
        <Link
          key={item}
          className={(path === `/${item.toLowerCase()}` || path === '/' &&  item === 'Home') ? styles.current : ''}
          href={item !== 'Home' ? `/${item.toLowerCase()}` : '/'}
          style={{ color: `${title}` }}
        >
          {item}
        </Link>
      ))}
    </nav>
    </>
  );
}
