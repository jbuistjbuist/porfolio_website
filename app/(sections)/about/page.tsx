import Section from "@/_components/section";
import Image from "next/image";
import styles from "@styles/about.module.scss";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function About() {
  return (
    <Section title="About">
      <div className={styles.layout}>
        <Image
          src="/images/selfie.png"
          alt="selfie"
          width={400}
          height={400}
          className={styles.className}
        />
        <div className={styles.text}>
          <p>
            Hi! My name is Jeremy and I am a full stack web developer from
            Hamilton, Ontario, currently living in Montréal, Québec. I graduated
            from the <a href='https://www.lighthouselabs.ca'>Lighthouse Labs</a> Web Development Bootcamp in 2022, and
            previously graduated from McGill University with a Master&apos;s in
            Sociology, where I focused on sociological theory and methods. I was
            drawn to web development because I like to tackle complex problems
            in my work, and enjoy expressing my creativity through code.
          </p>
          <p>
            Since graduating from Lighthouse Labs, I found opportunities to code
            in my previous job by automating tasks with Python and Selenium,
            before entering a six-month contract with <a href="https://www.codebusters.ca">CodeBusters</a>. At
            CodeBusters, I gained experience working with a team of developers
            on large-scale projects, and used React, Next.js, Firebase, GraphQL
            and Google Cloud Console in my every day work. I also had the
            opportunity to research and develop AI solutions using ChatGPT, such
            as a support bot and blog generator.
          </p>
          <p>
            Currently, I am working as a freelance developer, and am open
            to new freelance and employment opportunities. If you would like to get in touch, please feel
            free to reach out to me on LinkedIn, or send me an email through the
            contact form!
          </p>
          <div className={styles.extLinks}>
            <a href="https://www.linkedin.com/in/jeremy-buist/" rel="noopener" target="_blank">
              LinkedIn <BsLinkedin />
            </a>
            <a href="https://github.com/jbuistjbuist" rel="noopener" target="_blank">
              GitHub <FaGithub />
            </a>
            <a href="https://resume.creddle.io/resume/dupdgag4i8p">
              Resume <HiOutlineDocumentText />
            </a>
        </div>
        </div>
      </div>
    </Section>
  );
}
