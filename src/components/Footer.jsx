import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      variant="dark"
      className="mt-5 pt-4"
    >
      <Container>
        <Row className="w-100 g-0">
          <Col className="text-center">
            <Navbar.Text>
              <p className="mb-0 text-white">
                © {currentYear} WeatherApp. All Rights Reserved.
              </p>
              <p>Designed for a better weather experience.</p>
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
