import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

export default function Sec5() {
  return (
    <>
      <div className="bg-dark text-light py-5">
        <Container>
          <Row>
            <Row>
              <div
                className="mx-auto"
                style={{
                  width: "30%", // Điều chỉnh chiều dài border-top
                  borderTop: "3px solid #fff",
                }}
              ></div>
            </Row>

            <Row>
              <Col>
                <div
                  style={{
                    width: "30%", // Điều chỉnh chiều dài border-top
                    borderRight: "3px solid #fff",
                    marginBottom: "10px", // Tạo khoảng cách giữa border-top và nội dung
                  }}
                ></div>

                <p
                  className="fs-2 fw-bold neonText"
                  style={{ textAlign: "right" }}
                >
                  31/05/2025
                </p>
                <p
                  className="w-25"
                  style={{
                    textAlign: "right",
                    marginLeft: "auto", // Đẩy phần tử sang phải
                  }}
                >
                  - Thứ 7 -
                </p>
              </Col>
              <Col style={{ borderLeft: "3px solid #fff" }}>
                <div
                  style={{
                    width: "30%", // Điều chỉnh chiều dài border-top
                    borderRight: "3px solid #fff",
                    marginBottom: "10px", // Tạo khoảng cách giữa border-top và nội dung
                  }}
                ></div>

                <p
                  className="fs-2 fw-bold neonText"
                  style={{ textAlign: "left" }}
                >
                  01/06/2025
                </p>
                <p className="w-25" style={{ textAlign: "left" }}>
                  - Chủ nhật -
                </p>
              </Col>
            </Row>
          </Row>

          <Row>
            <Col>
              <div
                style={{
                  width: "30%", // Điều chỉnh chiều dài border-top
                  borderRight: "3px solid #fff",
                  marginBottom: "10px", // Tạo khoảng cách giữa border-top và nội dung
                }}
              ></div>

              <p
                className="fs-2 fw-bold neonText"
                style={{ textAlign: "right" }}
              >
                31/05/2025
              </p>
              <p
                className="w-25"
                style={{
                  textAlign: "right",
                  marginLeft: "auto", // Đẩy phần tử sang phải
                }}
              >
                - Thứ 7 -
              </p>
            </Col>
            <Col>
              <div
                style={{
                  width: "30%", // Điều chỉnh chiều dài border-top
                  borderRight: "3px solid #fff",
                  marginBottom: "10px", // Tạo khoảng cách giữa border-top và nội dung
                }}
              ></div>

              <p
                className="fs-2 fw-bold neonText"
                style={{ textAlign: "left" }}
              >
                01/06/2025
              </p>
              <p className="w-25" style={{ textAlign: "left" }}>
                - Chủ nhật -
              </p>
            </Col>
          </Row>

          <Row></Row>
          <Row></Row>
        </Container>
      </div>
    </>
  );
}
