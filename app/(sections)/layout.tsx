import Cube from '@/_components/cube';
import styles from '@/_styles/section.module.scss';

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.section}>
      <Cube />
      {children}
    </div>
  );
}