import { Strip, Col } from "@canonical/react-components";
import { aboutMe } from "../data/portfolioData";

export const AboutSection = () => {
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
        <p>{aboutMe}</p>
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
