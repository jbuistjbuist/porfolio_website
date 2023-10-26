'use client';

import React from "react";
import styles from "@styles/nav.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = ["Home", "AI", "Projects", "Contact", "About"];

export default function Nav() {
  const path = usePathname();

  return (
    <>
    <nav className={styles.nav}>
      {navItems.map((item, i) => (
        <Link
          key={item}
          className={(path.includes(`/${item.toLowerCase()}`) || path === '/' &&  item === 'Home') ? styles.current : ''}
          href={item !== 'Home' ? `/${item.toLowerCase()}` : '/'}
        >
          {item}
        </Link>
      ))}
    </nav>
    </>
  );
}
