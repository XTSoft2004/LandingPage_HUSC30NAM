import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import "@/styles/sec5.css";
const ThanhDocTable = () => {
  return (
    <>
      <Col
        xs={12}
        sm={6}
        lg={2}
        className="d-flex justify-content-center"
        style={{ width: "20px" }}
      >
        <div
          style={{
            height: "150px", // Chiều cao của thanh dọc
            borderLeft: "5px solid #fff", // Đường viền dọc
          }}
        ></div>
      </Col>
    </>
  );
};
export default function Sec5() {
  return (
    <>
      <div className="bg-dark text-light py-5">
        <Container>
          <Row className="d-flex">
            <div
              className="mx-auto"
              style={{
                width: "50%", // Điều chỉnh chiều dài border-top
                borderTop: "3px solid #fff",
              }}
            ></div>
          </Row>

          <Row
            className="d-flex align-items-center"
            style={{ paddingLeft: "13%" }}
          >
            <Col xs={12} sm={6} lg={5}>
              <p
                className="fs-2 fw-bold neonText"
                style={{ textAlign: "right" }}
              >
                31/05/2025
              </p>
              <p
                className="w-25 text-center"
                style={{
                  textAlign: "right",
                  marginLeft: "auto", // Đẩy phần tử sang phải
                }}
              >
                - Thứ 7 -
              </p>
            </Col>
            <ThanhDocTable />
            <Col xs={12} sm={6} lg={5}>
              <div
                style={{
                  width: "30%", // Điều chỉnh chiều dài border-top
                  borderRight: "3px solid #fff",
                }}
              ></div>
              <p
                className="fs-2 fw-bold neonText"
                style={{ textAlign: "left" }}
              >
                01/06/2025
              </p>
              <p className="w-25 text-center" style={{ textAlign: "left" }}>
                - Chủ nhật -
              </p>
            </Col>
          </Row>

          <Row className="d-flex" style={{ paddingLeft: "13%" }}>
            <Col xs={12} sm={6} lg={5}>
              <p
                className="fs-2 fw-bold neonText mb-0"
                style={{ textAlign: "right" }}
              >
                07:30
              </p>
              <p
                className="fs-4 w-75"
                style={{
                  textAlign: "right",
                  marginLeft: "auto", // Đẩy phần tử sang phải
                }}
              >
                Tổ chức hội thảo liên kết đào tạo và lễ ký kết
              </p>
            </Col>

            <ThanhDocTable />

            <Col xs={12} sm={6} lg={5}>
              <div className="item-lichtrinh">
                <div className="item-datetime">
                  <div
                    style={{ width: "30%", borderRight: "3px solid #fff" }}
                  ></div>
                  <p
                    className="fs-2 fw-bold neonText mb-0"
                    style={{ textAlign: "left" }}
                  >
                    07:30
                  </p>
                  <p className="fs-4 w-75" style={{ textAlign: "left" }}>
                    Lễ mít tinh kỷ niệm 30 năm thành lập Khoa
                  </p>
                </div>
                <div className="item-address fs-5 w-75">
                  <i className="bi bi-pin-map"></i>
                  <span>Sảnh A Trường Đại học Khoa học, Đại học Huế</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="d-flex" style={{ paddingLeft: "13%" }}>
            <Col xs={12} sm={6} lg={5}>
              <p
                className="fs-2 fw-bold neonText mb-0"
                style={{ textAlign: "right" }}
              >
                07:30
              </p>
              <p
                className="fs-4 w-75"
                style={{
                  textAlign: "right",
                  marginLeft: "auto", // Đẩy phần tử sang phải
                }}
              >
                Tổ chức hội thảo liên kết đào tạo và lễ ký kết
              </p>
            </Col>

            <ThanhDocTable />

            <Col xs={12} sm={6} lg={5}>
              <div className="item-lichtrinh">
                <div className="item-datetime">
                  <div
                    style={{ width: "30%", borderRight: "3px solid #fff" }}
                  ></div>
                  <p
                    className="fs-2 fw-bold neonText mb-0"
                    style={{ textAlign: "left" }}
                  >
                    07:30
                  </p>
                  <p className="fs-4 w-75" style={{ textAlign: "left" }}>
                    Lễ mít tinh kỷ niệm 30 năm thành lập Khoa
                  </p>
                </div>
                <div className="item-address fs-5 w-75">
                  <i className="bi bi-pin-map"></i>
                  <span>Sảnh A Trường Đại học Khoa học, Đại học Huế</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row></Row>
          <Row></Row>
        </Container>
      </div>
    </>
  );
}
