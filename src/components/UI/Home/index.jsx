import { Row, Col, Container } from "react-bootstrap";
import style from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div
        className="w-100"
        style={{
          paddingTop: "100px",
        }}
      >
        <Container>
          <Row className="w-100 mx-auto">
            <Col
              data-aos="fade-right"
              xs={12}
              md={8}
              className="d-flex align-items-center justify-content-center flex-column tl"
            >
              <div style={{ color: "#fff" }}>
                <div
                  //   style={{ borderLeft: "solid #fff 4px" }}
                  className="d-flex py-3 mb-3 item-title"
                >
                  <div
                    className="glow-div me-4 line-chaomung"
                    style={{
                      backgroundColor: "#fff",
                      color: "transparent",
                      width: "4px",
                    }}
                  ></div>
                  <h2
                    className={`neonText ${style.title}`}
                    style={{ fontSize: "3.5rem" }}
                  >
                    CH
                    <span>
                      ÀO MỪNG KỈ NIỆM <br />
                      30 N
                    </span>
                    ĂM THÀNH LẬP
                  </h2>
                </div>
                <h3
                  className="py-2"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.6rem",
                    lineHeight: "1.5",
                  }}
                >
                  Khoa Công nghệ thông tin
                  <br />
                  Trường Đại học Khoa học, Đại học Huế
                </h3>
                <h4
                  className="d-none d-md-block pt-4"
                  style={{
                    color: "#ddb61a",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "2.0rem",
                  }}
                >
                  01/06/1995 - 01/06/2025
                </h4>
                <h4
                  className="d-md-none d-block mt-3"
                  style={{
                    color: "#ddb61a",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "2.0rem",
                    lineHeight: "0.9",
                  }}
                >
                  01/06/1995 <br /> - <br />
                  01/06/2025
                </h4>
              </div>
            </Col>

            <Col
              data-aos="zoom-in"
              xs={12}
              md={4}
              className="d-flex justify-content-start item-logo"
            >
              <img
                style={{ objectFit: "cover" }}
                src="/images/logo/Logo_CNTT_30Nam.png"
                alt="Logo30Nam"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
