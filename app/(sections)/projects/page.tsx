import { projectsList } from "./data"
import styles from "@styles/section.module.scss"
import Link from "next/link";
import Image from "next/image";


export default function Projects() {


  return (
    <section id="projects" aria-label="projects section" className={styles.section}>
      <h1>Projects</h1>
      {projectsList.map((project) => {
        const {title, shortDescription, href, techStack} = project;

        return (
          <Link href={href}>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            <p>
              {
                techStack?.map((str) => {
                  return (
                    <span>{str}</span>
                  )
                })
              }
            </p>
          </Link>
        )
      })}
    </section>
  )
}