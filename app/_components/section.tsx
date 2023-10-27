import styles from "@styles/section.module.scss";

export default function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section aria-labelledby="sectionHeader" className={styles.section}>
      <div className={styles.header}>
        <h1 id="sectionHeader">{title}</h1>
      </div>
      {children}
    </section>
  );
}
