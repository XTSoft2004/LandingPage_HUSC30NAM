// components/Navbar.js
"use client";

import { useEffect } from "react";
import { Nav, Container, Navbar, Image } from "react-bootstrap";

const NavbarComponent = ({ activeSection }) => {
  useEffect(() => {
    console.log(`Active section: ${activeSection}`);
  }, [activeSection]);
  return (
    <Navbar sticky="top" style={{ backgroundColor: "#07002B" }}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            style={{ width: 90, height: 70 }}
            src="/images/logo/Logo_CNTT.png"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                activeSection === "sec1" ? "navbar-active" : ""
              }`}
              href="#section1"
            >
              Section 1
            </Nav.Link>
            <Nav.Link
              className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                activeSection === "sec2" ? "navbar-active" : ""
              }`}
              href="#section2"
            >
              Section 2
            </Nav.Link>
            <Nav.Link
              className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                activeSection === "sec3" ? "navbar-active" : ""
              }`}
              href="#section3"
            >
              Section 3
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
