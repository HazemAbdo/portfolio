import { IExperience, IProject } from "../types/portfolio-types";

export const experienceData: IExperience[] = [
  {
    company: "Coformatique",
    companySite: "https://www.coformatique.com/",
    position: "Front-end Engineer",
    date: "Oct 2023 - Current",
    description:
      "I am currently developing the frontend of a platform using React and Material-UI that helps users identify the most suitable visa type.",
    technologies: [
      "React.js",
      "Typescript",
      "Material-UI",
      "Figma",
      "Jira",
      "Bitbucket",
      "Confluence",
    ],
  },
  {
    company: "Coformatique",
    companySite: "https://www.coformatique.com/",
    position: "Front-end Engineer Intern",
    date: "Aug 2023 - Sep 2023",
    description:
      "Working on creating UI components for an internal blog’s website project using Next.js, Tailwind CSS, and Auth0 Next SDK.",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Jira",
      "Bitbucket",
      "Confluence",
    ],
  },
  {
    company: "RadicalX",
    companySite: "https://lab.radicalai.app/",
    position: "Front-end Engineer Intern",
    date: "Sep 2022 - Nov 2022",
    description: `I led the front-end team in building an internship website using React, TypeScript,and Tailwind.`,
    technologies: ["React.js", "Typescript", "Tailwind CSS", "Click up"],
  },
];

export const projectData: IProject[] = [
  {
    title: "AVC",
    description: `I am currently developing the front end of a platform that assists users
    in identifying the most suitable visa type for their needs. It provides users with information
    about the chances of visa acceptance and offers recommendations on how to increase their
    chances of approval. This project is being developed using React and Material-UI.`,
  },
  {
    title: "Cofo Blogs",
    description: `Working on creating UI components for an internal blog’s website project using
    Next.js, Tailwind CSS, and Auth0 Next SDK.`,
  },
  {
    title: "RadicalX-Apprenticeship",
    description:
      "Working on building file structure, homepage, creation form, roles modal, merging other members' work, and integration with the backend. Using Typescript, React, and Tailwind.",
    link: "https://github.com/david-wagih/radicalx-apprenticeship-frontEnd-app",
  },
  {
    title: "CMPLR",
    description:
      "Team member at front-end team working on designing reset password, forgot password, settings, blogs settings, and ask pages. Building pages using Reactjs, SCSS, JS, Jest, and RTL for unit testing. Besides handling requests to servers using Axios.",
    link: "https://github.com/HazemAbdo/myWorkAtCmplrFrontEnd",
  },
  {
    title: "Match Reservation System",
    description:
      "Working on building the home, fan account, upcoming matches, and reserve tickets pages using React, Material UI, and Bootstrap.",
    link: "https://github.com/Match-Reservation-System/Frontend",
  },
  {
    title: "Shipment Tracker",
    description:
      "shipment tracker page that supports English and Arabic languages using React and Chakre UI and fetching data from Bosta APIs.",
    link: "https://github.com/HazemAbdo/shipment_tracker",
  },
];
