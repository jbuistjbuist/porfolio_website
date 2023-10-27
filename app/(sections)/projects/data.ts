export const projectsList = [
  {
    title: "Portfolio Website",
    href: "/projects/portfolio",
    shortDescription: "The website you are on right now!",
    longDescription: [
      "This website was built with NextJS, Typescript, and SASS. It is hosted on Vercel and uses CircleCI for continuous integration.",
      "The 3D background was built with Three.js and is fully interactive. The website is fully responsive and features the ability to generate a randomized color scheme for the pages which populates throughout the website (try by clicking the cube). The website is also fully accessible.",
      "For this project, I wanted to showcase my personal style and creativity while demonstrating my ability to build a fully functional and responsive website. I wanted to use as few libraries as possible to demonstrate my ability to build components and styles from scratch. This project was also my first experience using Typescript.",
    ],
    techStack: [
      "React",
      "NextJS",
      "Three.js",
      "SASS",
      "CircleCI",
      "Jest",
      "Sendgrid",
      "Typescript",
      "Vercel",
    ],
    githubLink: "https://github.com/jbuistjbuist/portfolio_website_",
    smallPhoto: "/images/projects/portfolio-small.jpg",
    largePhoto: "/images/projects/portfolio-large.png",
  },
  {
    title: "Titan Exercise",
    href: "/projects/titan-exercise",
    shortDescription: "React app to create and track your workouts",
    longDescription: [
      "Titan is a mobile-first app that lets you build, customize and share workout plans.",
      "The user can choose exercises from the database, or make their own, and share their completed workout with other users. Once a user has a workout, they can click play to walk through the exercises in the workout, guided by text-to-speach instructions and a handy timer. To keep eachother accountable and motivated, users can check the stats for a workout to see how often others are completing the workout.",
      "The app was built as a final project for the lighthouse Labs Web Development Diploma Program by Jill Aubrey, Michael Davis and Jeremy Buist. The front-end of the app was built with React and almost entirely custom CSS, and the back-end was built with a Ruby on Rails API server",
    ],
    techStack: [
      "React",
      "Ruby",
      "Rails",
      "PostgreSQL",
      "react-spring",
      "Storybook",
      "Jest",
      "Heroku",
    ],
    githubLink: "https://github.com/jbuistjbuist/Titan-Exercise",
    liveLink: "https://titan-exercise.netlify.app",
    smallPhoto: "/images/projects/titan-small.png",
    largePhoto: "/images/projects/titan-large.gif",
  },
  {
    title: "Basic Checks",
    href: "/projects/basic-checks",
    shortDescription:
      "Python script with Selenium and Google Sheets API to automate workflows",
    longDescription: [
      "This script was written in order to help with risk assessment workflows at my previous job.",
      "The script uses Selenium to navigate between multiple websites, log in, and perform a series of checks. It then uses the Google Sheets API to update a Google Sheet with the results of the checks. Previously, these checks were done manually, and took several minutes to complete. With this script, the checks can be completed in a matter of seconds and the results are ready for agents to use.",
    ],
    techStack: ["Python", "Selenium", "Google Cloud Platform", "Zendesk API"],
    githubLink: "https://github.com/jbuistjbuist/basic_checks_script",
    smallPhoto: "/images/projects/basic-checks-small.png",
    largePhoto: "/images/projects/basic-checks-large.png",
  },
  {
    title: "Quizzer App",
    href: "/projects/quizzer-app",
    shortDescription:
      "App built with jQuery and EJS for creating, taking, and sharing quizzes",
    longDescription: [
      "Quizzer is a full stack web application that allows users to create, take and share multiple choice quizzes. It is built using Javascript, jQuery, EJS, Node.js and SASS.",
      "Quizzer was completed by Jeremy Buist and Jillian Aubrey as a part of our learning at Lighthouse Labs. We carried out the complete back and front-end development of the application, given some client specifications. This app was built in 5 intense days, and was a great learning experience for both of us.",
    ],
    techStack: ["Javascript", "SASS", "EJS", "Node.js"],
    githubLink: "https://github.com/jbuistjbuist/Quizzer-App",
    smallPhoto: "/images/projects/quizzer-small.png",
    largePhoto: "/images/projects/quizzer-large.png",
  },
  {
    title: "Form Cache",
    href: "/projects/form-cache",
    shortDescription:
      "Chrome extension for temporarily caching form data in case of reload/navigation",
    longDescription: [
      "This is a Chrome extension that I built to solve a problem I was having while applying for jobs online.",
      "I was filling out long application forms multiple times a day, and would often accidentally reload the page or navigate away from it, losing all of my progress. This extension solves that problem by saving form data to local storage when the user types in an input. The form data is then automatically restored when the user returns to the page, by remembering the layout of the page based on its URL, and returning the data. This personal project was a great way to learn more about Chrome APIs and event listeners",
    ],
    techStack: ["Javascript", "CSS3", "HTML5", "Chrome APIs"],
    githubLink: "https://github.com/jbuistjbuist/form-saver",
    liveLink:
      "https://chrome.google.com/webstore/detail/form-cache/boipndakjadokbbceajjkdfnaadhgdck",
    smallPhoto: "/images/projects/form-cache-small.png",
    largePhoto: "/images/projects/form-cache-large.jpeg",
  },
];
