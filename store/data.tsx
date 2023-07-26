// Contacts Images
import Html from "../public/assets/skillsIcon/html.svg";
import Css from "../public/assets/skillsIcon/css.svg";
import Bootstrap from "../public/assets/skillsIcon/bootstrap.svg";
import Tailwind from "../public/assets/skillsIcon/tailwind.svg";
import JavaScript from "../public/assets/skillsIcon/javascript.svg";
import ReactLogo from "../public/assets/skillsIcon/react.svg";
import Git from "../public/assets/skillsIcon/git.svg";
import AntDesign from "../public/assets/skillsIcon/antdesign.svg";
import NEXTjs from "../public/assets/skillsIcon/nextjs.svg";
import GraphQL from "../public/assets/skillsIcon/graphql.svg";
import Postman from "../public/assets/skillsIcon/postman.svg";
import TypeScript from "../public/assets/skillsIcon/typescript.svg";
import Bitbucket from "../public/assets/skillsIcon/bitbucket.svg";
import Github from "../public/assets/skillsIcon/github.svg";
import Redux from "../public/assets/skillsIcon/redux.svg";
import Django from "../public/assets/skillsIcon/django.svg";
import Python from "../public/assets/skillsIcon/python.svg";
import MySQL from "../public/assets/skillsIcon/mysql.svg";
import VSCode from "../public/assets/skillsIcon/vscode.svg";

// Projects Images
import Surveillhanz from "../public/assets/projectsIcon/SurveillhanzLogo.svg";
import surveillhanzBackground from "../public/assets/projectsIcon/surveillhanzBackground.svg";
import Ppms from "../public/assets/projectsIcon/dasmaLogo.svg";
import PpmsBackground from "../public/assets/projectsIcon/ppmsBackground.svg";
import MargiesVeggiesLogo from "../public/assets/projectsIcon/margiesVeggiesLogo.svg";
import MargiesVeggiesImage from "../public/assets/projectsIcon/margiesVeggiesBackground.svg";

import { IProjects } from "../components/Projects/ProjectsItem";

export const SKILL_LOGOS = [
  { image: Html, imageLabel: "HTML" },
  { image: Css, imageLabel: "CSS" },
  { image: JavaScript, imageLabel: "JavaScript" },
  { image: TypeScript, imageLabel: "TypeScript" },
  { image: ReactLogo, imageLabel: "React" },
  { image: NEXTjs, imageLabel: "NEXT" },
  { image: Tailwind, imageLabel: "Tailwind" },
  { image: Bootstrap, imageLabel: "Bootstrap" },
  { image: AntDesign, imageLabel: "AntDesign" },
  { image: Redux, imageLabel: "Redux" },
  { image: GraphQL, imageLabel: "GraphQL" },
  { image: Python, imageLabel: "Python" },
  { image: Django, imageLabel: "Django" },
  { image: MySQL, imageLabel: "MySQL" },
  { image: Postman, imageLabel: "Postman" },
  { image: Git, imageLabel: "Git" },
  { image: Github, imageLabel: "Github" },
  { image: Bitbucket, imageLabel: "Bitbucket" },
  // { image: VSCode, imageLabel: "VSCode" },
];

export const PROJECTS: IProjects[] = [
  {
    projectLogo: Surveillhanz,
    projectImage: surveillhanzBackground,
    projectTitle: "Surveillhanz",
    projectDescription:
      "A compliance project for our embedded system subject in college. The link provided is only the frontend side of our object recognition application",
    projectTechstack: "HTML, CSS, NEXTjs, ReactJS",
    projectWebLink: "https://cpets-surveillhanz.vercel.app",
    projectGitLink: "https://github.com/Jcarloluna/Surveillhanz",
  },
  {
    projectLogo: Ppms,
    projectImage: PpmsBackground,
    projectTitle: "Preschooler Profiling and Monitoring System",
    projectDescription:
      "College capstone project, Monitors and Profiles nutritional status of preschoolers in Dasmariñas City ",
    projectTechstack: "HTML, CSS, JavaScript, Python, Django, MySQL",
    projectWebLink: "https://ppms.dasmacity.com",
  },
  {
    projectLogo: MargiesVeggiesLogo,
    projectImage: MargiesVeggiesImage,
    projectTitle: "Margies Veggies",
    projectDescription:
      "A compliance project for our software design subject in college. A desktop application for transaction and storage management system",
    projectTechstack: "PyQT5, Python, MySQL",
    projectGitLink: "https://github.com/Jcarloluna/MargiesVeggies",
  },
];
