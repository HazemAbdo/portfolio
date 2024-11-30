import { Strip, Col, Row } from "@canonical/react-components";
import { myBackground } from "../data/portfolioData";

export const BackgroundSection = () => {
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
          <p>{myBackground}</p>
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

