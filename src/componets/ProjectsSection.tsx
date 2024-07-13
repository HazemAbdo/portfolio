import { Card, Col, Link, Row, Strip } from "@canonical/react-components";
import { projectData } from "../data/portfolioData";

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
