import { Strip, Col, Row } from "@canonical/react-components";

const BackgroundSection = () => {
  return (
    <Strip
      background="https://assets.ubuntu.com/v1/9b68976e-Aubergine_suru_background_2.png"
      dark
      includeCol={false}
      element="section"
      type="image"
      id="background"
    >
      <Row className="u-vertically-center">
        <Col size={8}>
          <h1>My background</h1>
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
        <Col size={4} className="u-hide--medium u-hide--small u-align--center">
          <img
            src="src/assets/background.jpg"
            alt="software engineer image"
            style={{
              borderRadius: "25%",
            }}
          />
        </Col>
      </Row>
    </Strip>
  );
};

export default BackgroundSection;
