// src/components/Navbar.js
"use client"; // Chỉ thị này yêu cầu render phía client
import {
  Nav,
  Container,
  Navbar,
  Button,
  Offcanvas,
  NavDropdown,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
const Index = ({ activeSection }) => {
  const pathname = usePathname(); // Call usePathname at the top level
  const [url, setUrl] = useState("");
  const [nav, setnav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setnav(window.scrollY > 0);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log(nav);
  }, [nav]);

  return (
    <>
      <Navbar
        style={{
          background: "transparent",
          position: "fixed",
        }}
        className={`w-100 ${nav ? "aninav" : "none"} sticky-top`}
      >
        <Container>
          <Navbar.Brand
            className="d-flex justify-content-center logo-nav"
            href="/"
          >
            <div>
              <Image src="/images/logo/logokhoa-trang.webp"></Image>
            </div>
            <div
              className="d-none d-md-block ms-2 h-75 align-self-center"
              style={{
                borderLeft: "2px solid #fff", // Thêm đường viền trắng 2px
                // backgroundColor: "#fff", // Màu nền trắng
                color: "transparent",
              }}
            >
              a
            </div>
            <Image
              className="d-none d-md-block"
              style={{ width: 90, height: 70 }}
              src="/images/logo/Logo_CNTT.png"
            ></Image>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
            <Nav
              className="d-none d-lg-flex w-100 justify-content-end rounded-pill"
              style={{ border: "3px solid #fff" }}
            >
              <Nav>
                <Nav.Link
                  className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                    activeSection === "tong-quan" ? "navbar-active" : ""
                  }`}
                  href="#tong-quan"
                >
                  Tổng quan
                </Nav.Link>

                <Nav.Link
                  className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                    activeSection === "cac-moc-lich-su" ? "navbar-active" : ""
                  }`}
                  href="#cac-moc-lich-su"
                >
                  Các mốc lịch sử
                </Nav.Link>

                <Nav.Link
                  className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                    activeSection === "lich-trinh" ? "navbar-active" : ""
                  }`}
                  href="#lich-trinh"
                >
                  Lịch trình
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
