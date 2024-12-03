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

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight;
          const offsetPosition = targetElement.offsetTop - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", null);
      });
    };
  }, []);

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
              <Image
                style={{ objectFit: "cover" }}
                src="/images/logo/logokhoa-trang.webp"
              ></Image>
            </div>
            <div
              className="d-none d-lg-block ms-2 h-75 align-self-center"
              style={{
                borderLeft: "2px solid #fff", // Thêm đường viền trắng 2px
                // backgroundColor: "#fff", // Màu nền trắng
                color: "transparent",
              }}
            >
              a
            </div>
            <Image
              className="d-none d-lg-block"
              style={{ width: 90, height: 70, objectFit: "cover" }}
              src="/images/logo/Logo_CNTT.png"
            ></Image>
          </Navbar.Brand>

          <Navbar.Collapse
            className="d-none d-lg-block"
            id="basic-navbar-nav"
            style={{ flexGrow: 0 }}
          >
            <Nav
              className="d-none d-md-block d-lg-flex w-100 justify-content-end rounded-pill"
              style={{ border: "3px solid #fff" }}
            >
              <Nav>
                <Nav.Link
                  className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                    activeSection.toString() === "tong-quan"
                      ? "navbar-active"
                      : ""
                  }`}
                  href="#tong-quan"
                >
                  Tổng quan
                </Nav.Link>

                <Nav.Link
                  className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                    activeSection.toString() === "cac-moc-lich-su"
                      ? "navbar-active"
                      : ""
                  }`}
                  href="#cac-moc-lich-su"
                >
                  Các mốc lịch sử
                </Nav.Link>

                <Nav.Link
                  className={`fs-3 px-3 fw-bold text-light rounded-pill ${
                    activeSection.toString() === "lich-trinh"
                      ? "navbar-active"
                      : ""
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
