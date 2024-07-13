import { Card, Chip, Col, Link, Row, Strip } from "@canonical/react-components";
import { IExperience } from "../types/portfolio-types";

const experienceData: IExperience[] = [
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
    technologies: ["React.js", "Typescript", "Tailwind CSS"],
  },
];

const ExperiencesSection = () => {
  return (
    <Strip
      background="https://assets.ubuntu.com/sites/ubuntu/latest/u/img/backgrounds/image-background-paper.png"
      includeCol={false}
      element="section"
      light
      rowClassName="u-vertically-center"
      type="image"
      id="experience"
    >
      <h1>My Experiences</h1>
      <Row>
        {experienceData.map((experience, index) => (
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
                <Link
                  href={experience.companySite}
                  target="_blank"
                >{`${experience.company}, ${experience.position}`}</Link>
              }
              style={{
                height: "100%",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>{experience.date}</div>

              {experience.description}
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {experience.technologies.map((technology, index) => (
                  <Chip key={index} value={technology} />
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Strip>
  );
};

export default ExperiencesSection;
