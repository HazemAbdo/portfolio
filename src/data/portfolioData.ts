import { IExperience, IProject } from "../types/portfolio-types";

export const aboutMe = `Dedicated software engineer with almost 2 years of experience and a T-shaped skill set, encompassing product
management and entrepreneurship on one axis and a strong foundation in software engineering, particularly in
front-end development, on the other. Proficient in modern web development technologies, I thrive in both
collaborative and independent environments. I am passionate about creating innovative solutions and improving
user experiences. Additionally, I have experience in leading teams, discussions, and presentations, demonstrating
strong communication skills, analytical skills, and leadership abilities.`;

export const myBackground = `I am a front-end engineer with a background in computer engineering. 
I am passionate about software development, particularly front-end engineering and product management. 
My dedication to solid principles and object-oriented programming drives me to produce clean, maintainable code
and seek out environments that value these practices. Having led and collaborated with diverse teams,
I possess strong soft skills and technical expertise. My experience spans various programming languages,
from Assembly x86 to Javascript, allowing me to tackle diverse projects and challenges with ease.`;

export const experienceData: IExperience[] = [
  {
    company: "Coformatique",
    companySite: "https://www.coformatique.com/",
    position: "Front-end Engineer",
    date: "Aug 2023 - Current",
    description:
      "As a Frontend Engineer at Coformatique, I contributed to diverse projects, showcasing expertise in React, Tailwind, MUI, and Refine. Highlights include architecting scalable solutions for Wakeb Cloud, enhancing performance with caching, lazy loading, and asset optimization, and building features like invoice issuance and marketplace items. For UVC, I developed over 70% of the UI, improved core web vitals by 50%, ensured accessibility and SEO compliance, and led state management and cross-browser compatibility efforts. On the Wakeb Big Data Portal, I structured both frontend and backend projects, integrating tools like Airflow. Additionally, I tackled internationalization for Onleat and built components for internal systems like Cofo Blogs.",
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Refine",
      "JavaScript",
      "Typescript",
      "Material-UI",
      "Tailwind CSS",
      "ShadCn",
      "Axios",
      "React Query",
      "i18n",
      "Posthog",
      "Figma",
      "Jira",
      "Bitbucket",
      "Confluence",
      "Vite",
      "AWS S3",
      "Docker",
    ],
  },
  {
    company: "RadicalX",
    companySite: "https://lab.radicalai.app/",
    position: "Front-end Engineer Intern",
    date: "Sep 2022 - Nov 2022",
    description: `As a Frontend Engineer Intern at RadicalX, I led a multicultural team in developing an internship website using React and Tailwind. I organized the project’s file structure, designed the homepage, built forms and role modals, and integrated the frontend with the backend. I established workflows, performed code reviews, resolved merge conflicts, and ensured Agile compliance. Additionally, I collaborated with the backend team to define API contracts and acted as a liaison with project managers to align technical work with project objectives and deadlines.`,
    technologies: ["React.js", "Typescript", "Tailwind CSS", "Click up"],
  },
];

export const projectData: IProject[] = [
  {
    title: "Wakeb Cloud",
    description: `Developed a cloud provider platform similar to AWS using Refine, Tailwind, and MUI. Built key features like invoice issuance, settings management, and blueprints while ensuring responsive design, scalable architecture, and clean code practices.`,
    link: "https://wakeb.tech/",
  },
  {
    title: "UVC",
    description: `Built over 70% of a visa recommendation platform's UI using React and MUI. Enhanced performance by 50% with caching, lazy loading, and SEO optimization. Ensured accessibility, cross-browser compatibility, and a responsive design.`,
    link: "https://www.unitedstatesvisacenter.com/",
  },
  {
    title: "Wakeb Big Data Portal",
    description: `Created a web app integrating big data tools like Airflow and Nifi using React and Shadcn. Designed frontend and backend structures with a focus on responsive design and MVC patterns.`,
    link: "https://wakeb.tech/",
  },
  {
    title: "Cofo Blogs",
    description: `Built UI layouts for an internal blog system using Next.js and Tailwind. Integrated TinyMCE for rich text editing, Auth0 for authentication, and S3 for media storage.`,
    link: "https://github.com/HazemAbdo/cofo-blogs-frontend",
  },
  {
    title: "Onleat",
    description: `Developed shared components for a restaurant reservation app using React Native. Addressed internationalization and ensured consistent cross-platform styles for iOS and Android.`,
    link: "https://onleat.com/",
  },
  {
    title: "CMPLR",
    description: `Contributed to a Tumblr clone as part of a 20+ member Agile team. Developed key pages such as reset password, settings, and blog settings using React.js and SCSS, employing advanced SCSS techniques and Axios for server requests.`,
    link: "https://github.com/HazemAbdo/myWorkAtCmplrFrontEnd",
  },
  {
    title: "Designoder",
    description: `Led the development of a web tool to convert wireframes into functioning web pages using Python, Selenium, and Scikit-Learn. Built NLP-based topic classifiers, container classifiers, and datasets while organizing the year-long project and leading presentations.`,
    link: "https://drive.google.com/file/d/1qarPCL7Uvu_hqYMd4MR2fptBeI6qQTMD/view?usp=sharing",
  },
];
