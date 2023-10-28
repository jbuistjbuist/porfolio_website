import styles from "@styles/section.module.scss";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Section({
  children,
  title,
  next,
  prev,
}: {
  children: React.ReactNode;
  title: string;
  next?: string;
  prev?: string;
}) {
  return (
    <section aria-labelledby="sectionHeader" className={styles.section}>
      <div className={styles.header}>
        {prev && (
          <Link href={prev} aria-label="previous project">
            <BsArrowLeft />
          </Link>
        )}
        <h1 id="sectionHeader">{title}</h1>
        {next && (
          <Link href={next} aria-label="next project">
            <BsArrowRight />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
