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
const Index = () => {
  const pathname = usePathname(); // Call usePathname at the top level
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(pathname);
  }, [pathname]);

  return (
    <>
      <Navbar style={{ backgroundColor: "#07002B" }}>
        <Container>
          <Navbar.Brand
            className="d-flex justify-content-center logo-nav"
            href="/"
          >
            <div>
              <Image src="/images/logo/logokhoa-trang.webp"></Image>
            </div>
            <div
              className="ms-2 h-75 align-self-center"
              style={{
                borderLeft: "2px solid #fff", // Thêm đường viền trắng 2px
                // backgroundColor: "#fff", // Màu nền trắng
                color: "transparent",
              }}
            >
              a
            </div>
            <Image
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
                  className="fs-3 px-3 fw-bold text-light rounded-pill navbar-active"
                  href="#tong-quan"
                >
                  Tổng quan
                </Nav.Link>

                <Nav.Link
                  className="fs-3 px-3 ps-3 fw-bold text-light rounded-pill navbar-active"
                  href="#cac-moc-lich-su"
                >
                  Các mốc lịch sử
                </Nav.Link>

                <Nav.Link
                  className="fs-3 px-3 ps-3 fw-bold text-light rounded-pill navbar-active"
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
