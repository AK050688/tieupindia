import React from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import logo from "../assets/images/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-accent text-light py-4">
      <Container fluid>
        <Row>
          {/* Company Info */}
          <Col xs={12} md={4} lg={4} className="mb-3">
            <Image src={logo} alt="Company Logo" className="mb-3" width={120} />
            <p>
              We are a leading company dedicated to providing top-notch services and solutions.
              Our mission is to deliver excellence and innovation to our clients.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={6} md={2} lg={2} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/home" className="text-light text-decoration-none">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light text-decoration-none">About</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-light text-decoration-none">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light text-decoration-none">Contact</Nav.Link>
            </Nav>
          </Col>

          {/* Resources */}
          <Col xs={6} md={2} lg={2} className="mb-3">
            <h5>Resources</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/faq" className="text-light text-decoration-none">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/support" className="text-light text-decoration-none">Support</Nav.Link>
              <Nav.Link as={Link} to="/privacy" className="text-light text-decoration-none">Privacy Policy</Nav.Link>
              <Nav.Link as={Link} to="/terms" className="text-light text-decoration-none">Terms of Service</Nav.Link>
            </Nav>
          </Col>

          {/* Contact Us */}
          <Col xs={6} md={2} lg={2} className="mb-3">
            <h5>Contact Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="mailto:support@example.com" className="text-light text-decoration-none">
                <FaEnvelope className="me-2" /> support@example.com
              </Nav.Link>
              <Nav.Link href="tel:+919999929681" className="text-light text-decoration-none">
                <FaPhoneVolume className="me-2" /> +91 99999 29681
              </Nav.Link>
            </Nav>
          </Col>

          {/* Find Us */}
          <Col xs={12} md={2} lg={2} className="mb-3">
            <h5>Find Us</h5>
            <p className="mb-0">
              <FaLocationDot className="me-2" />
              Ivanka Sports, 3D-7, Near SBI Bank, NIT Faridabad, Haryana 121001
            </p>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} DreamViewer Infotech. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
