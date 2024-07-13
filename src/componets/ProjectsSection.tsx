import { Card, Col, Link, Row, Strip } from "@canonical/react-components";
import { IProject } from "../types/portfolio-types";

const projectData: IProject[] = [
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

const ProjectsSection = () => {
  return (
    <Strip
      background="https://assets.ubuntu.com/v1/9b68976e-Aubergine_suru_background_2.png"
      dark
      includeCol={false}
      element="section"
      type="image"
      id="projects"
    >
      <h1>My Projects</h1>
      <Row
        style={{
          marginBottom: "2rem",
        }}
      >
        {projectData.map((project, index) => (
          <Col
            key={index}
            size={4}
            style={{
              marginBottom: "2rem",
            }}
          >
            <Card
              overlay
              title={
                project.link ? (
                  <Link href={project.link} target="_blank">
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )
              }
              style={{
                height: "100%",
              }}
            >
              {project.description}
            </Card>
          </Col>
        ))}
      </Row>
    </Strip>
  );
};

export default ProjectsSection;
