'use client';

import Section from "./_components/section";
import styles from "@/_styles/404.module.scss";
export default function NotFound() {
  return (
    <Section title="404">
      <div className={styles.div}>
        <h3>This page could not be found</h3>
      </div>
    </Section>
  );
}