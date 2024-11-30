import { Card, Chip, Col, Link, Row, Strip } from "@canonical/react-components";
import { experienceData } from "../data/portfolioData";

export const ExperiencesSection = () => {
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
            size={12}
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
