import { Strip, Col } from "@canonical/react-components";

const AboutSection = () => {
  return (
    <Strip
      background="https://assets.ubuntu.com/sites/ubuntu/latest/u/img/backgrounds/image-background-paper.png"
      includeCol={false}
      element="section"
      light
      rowClassName="u-vertically-center"
      type="image"
      id="about"
    >
      <Col size={8}>
        <h1>I am Hazem Abdo</h1>
        <p>
          I'm a T-shaped learner with product management and entrepreneurship on
          my x-axis and with software engineering on my y-axis, especially
          frontend. Sometimes I want to be on an isolated island with some
          coffee writing a piece of code, maybe in JavaScript or Python, or
          reading a book, and sometimes I want to be in charge of moderating a
          session with a large audience.
        </p>
      </Col>
      <Col size={4} className="u-hide--medium u-hide--small u-align--center">
        <img
          src="src/assets/T-shaped.jpg"
          alt="T-shaped image"
          style={{
            borderRadius: "25%",
          }}
        />
      </Col>
    </Strip>
  );
};

export default AboutSection;
