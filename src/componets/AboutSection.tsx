import { Strip, Col, Row } from "@canonical/react-components";

const AboutSection = () => {
  return (
    <div id="about-me">
      <Strip
        background="https://assets.ubuntu.com/sites/ubuntu/latest/u/img/backgrounds/image-background-paper.png"
        includeCol={false}
        element="section"
        light
        rowClassName="u-vertically-center"
        type="image"
      >
        <Col size={8}>
          <h1>I am Hazem Abdo</h1>
          <p>
            I'm a T-shaped learner with product management and entrepreneurship
            on my x-axis and with software engineering on my y-axis, especially
            frontend. Sometimes I want to be on an isolated island with some
            coffee writing a piece of code, maybe in JavaScript or Python, or
            reading a book, and sometimes I want to be in charge of moderating a
            session with a large audience.
          </p>
        </Col>
        <Col size={4} className="u-hide--small u-align--center">
          <img src="src/assets/T-shaped.jpg" alt="T-shaped image" />
        </Col>
      </Strip>
      <Strip
        background="https://assets.ubuntu.com/v1/9b68976e-Aubergine_suru_background_2.png"
        dark
        includeCol={false}
        element="section"
        type="image"
      >
        <Row className="u-vertically-center">
          <Col size={8}>
            <h1>My experience</h1>
            <p>
              I am a junior front-end engineer with a background in computer
              engineering, and I am passionate about software development,
              particularly front-end engineering and product management. My
              dedication to SOLID principles and object-oriented programming
              drives me to produce clean, maintainable code and seek out
              environments that value these practices.
            </p>
            <p>
              Having led and collaborated with diverse teams, I possess strong
              soft skills and technical expertise. My experience spans various
              programming languages, from Assembly x86 to Python, allowing me to
              tackle diverse projects and challenges with ease.
            </p>
          </Col>
          <Col size={4} className="u-hide--small u-align--center">
            <img
              src="https://assets.ubuntu.com/v1/9c74eb2d-logo-canonical-white.svg"
              alt="Placeholder"
            />
          </Col>
        </Row>
      </Strip>
    </div>
  );
};

export default AboutSection;
