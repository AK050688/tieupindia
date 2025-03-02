import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/CSS/Style.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Main Header - Sticks on Top & Covers Full Width */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Row className="w-100 align-items-center">
            
            {/* First Column: Logo & Toggle */}
            <Col xs={6} md={3} className="d-flex align-items-center">
              <Button variant="outline-dark" className="menu-toggle" onClick={() => setShowMenu(true)}>
                <FaBars />
              </Button>
              <Navbar.Brand as={Link} to="/" className="ms-2">
                <img src="/logo.png" alt="Logo" className="logo" />
              </Navbar.Brand>
            </Col>

            {/* Second Column: Dropdown & Search Bar */}
            <Col md={3} className="d-none d-md-flex align-items-center">
              <Dropdown className="me-2">
                <Dropdown.Toggle variant="light">Select City</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">New York</Dropdown.Item>
                  <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
                  <Dropdown.Item href="#">Chicago</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control type="search" placeholder="Search" className="search-bar" />
            </Col>

            {/* Third Column: Menu Items (Hidden in Mobile) */}
            <Col md={3} className="d-none d-md-flex justify-content-center">
              <Nav>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Col>

            {/* Fourth Column: Login, Signup & Dropdown */}
            <Col xs={6} md={3} className="d-flex justify-content-end align-items-center">
              <Button variant="outline-primary" as={Link} to="/login" className="me-2">Login</Button>
              <Button variant="primary" as={Link} to="/signup">Signup</Button>
              <Dropdown className="ms-2">
                <Dropdown.Toggle variant="light">More</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Profile</Dropdown.Item>
                  <Dropdown.Item href="#">Settings</Dropdown.Item>
                  <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Mobile Side Menu (Hidden Navigation with Close Button) */}
      <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
        <Button className="close-menu" onClick={() => setShowMenu(false)}>
          <FaTimes />
        </Button>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/home" onClick={() => setShowMenu(false)}>Home</Nav.Link>
          <Nav.Link as={Link} to="/services" onClick={() => setShowMenu(false)}>Services</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={() => setShowMenu(false)}>About</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => setShowMenu(false)}>Contact</Nav.Link>
        </Nav>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="bottom-nav d-md-none">
        <Nav className="d-flex justify-content-around">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Header;
