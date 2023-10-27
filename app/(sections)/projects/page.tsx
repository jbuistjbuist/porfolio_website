import { projectsList } from "./data";
import Link from "next/link";
import Image from "next/image";
import Section from "@/_components/section";
import styles from "@styles/projects.module.scss";

export default function Projects() {
  return (
    <Section title="Projects">
      <div className={styles.layout}>
      {projectsList.map((project) => {
        const { title, shortDescription, href, techStack } = project;

        return (
          <Link href={href}>
            <Image alt="image" src="/images/Postgresql_elephant.svg.png" width={180} height={180} />
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            <div className={styles.techStack}>
              {techStack?.map((str) => {
                return <span>{str} </span>;
              })}
            </div>
          </Link>
        );
      })}
      </div>
    </Section>
  );
}
