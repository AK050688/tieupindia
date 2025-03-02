import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import img1 from '../assets/images/room1.jpg';
import img2 from '../assets/images/room2.jpg';
import img3 from '../assets/images/room3.jpg';
import img4 from '../assets/images/rooms.jpg';

const Hero = () => {
  return (
    <Container fluid className="py-5">
      <Row className="align-items-center">
        {/* Left Column: Carousel */}
        <Col md={7}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Slide 3"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* Right Column: Two Rows of Images */}
        <Col md={5}>
          <Row>
            <Col>
              <Image
                src={img4}
                fluid
                rounded
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Image
                src={img1}
                fluid
                rounded
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
