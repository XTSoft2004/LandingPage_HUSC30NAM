import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import bg from "../../../../public/images/background/BG_HUSC.jpg";
import "../../../styles/sec2.css";
const BorderLight = () => {
  return (
    <div
      className="bg-white mx-3 glow-div"
      style={{ width: "5px", height: "180px" }}
    ></div>
  );
};
export default function Sec1() {
  return (
    <div id="sec-2" className="w-100 bg-sec2 py-3">
      <Container>
        <Row>
          <h1 className="fw-bold overlay-text text-center text-white my-5 home__title">
            Tổng quan
          </h1>
        </Row>
        <Row>
          <Row>
            <div className="text-white fs-3 text-start title-center">
              Ngày 13/12/1994, Bộ Giáo dục và Đào tạo ký quyết định thành lập{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--bg-yellow-base)" }}
              >
                khoa Công nghệ thông tin
              </span>{" "}
              (CNTT) thuộc trường Đại học Khoa học - Đại học Huế, một trong sáu
              khoa CNTT trọng điểm trên toàn quốc. Tuy nhiên, khoa CNTT chính
              thức hoạt động từ ngày{" "}
              <span
                className="fw-bold"
                style={{ color: "var(--bg-yellow-base)" }}
              >
                01/06/1995
              </span>{" "}
              với 6 thành viên chuyển từ Bộ môn Toán Ứng dụng của Khoa Toán – Cơ
              – Tin học.
            </div>
          </Row>
          <Row>
            <div className="text-white fs-3 mt-3">
              Với bề dày 30 năm xây dựng và phát triển, khoa đã đào tạo được số
              lượng lớn các cử nhân, thạc sĩ, tiến sĩ đang công tác trên mọi
              miền tổ quốc và thế giới, hướng tới đóng góp cho sự phát triển của
              đất nước và hội nhập quốc tế tích cực, sâu rộng.
            </div>
          </Row>
        </Row>
        <Row className="my-5">
          <img
            style={{ borderRadius: "50px" }}
            src="images/background/CacThayCo.png"
            alt="Faculty Image"
          />
        </Row>
        <Row>
          <div className="d-flex my-4">
            <div
              className="d-none d-md-block align-self-center glow-div"
              style={{ backgroundColor: "#fff", height: "4px", width: "27%" }}
            ></div>
            <h1 className="text-white fw-bold text-center mx-5">
              NHỮNG CON SỐ NỔI BẬT
            </h1>
            <div
              className="d-none d-md-block align-self-center glow-div"
              style={{ backgroundColor: "#fff", height: "4px", width: "27%" }}
            ></div>
          </div>
        </Row>

        <Row
          className="relative my-3"
          style={{
            position: "relative",
            textAlign: "center",
            minHeight: "50vh", // Sử dụng minHeight để ảnh có thể dài ra khi cần thiết
            borderRadius: "50px",
            overflow: "hidden",
          }}
        >
          <img
            className="d-none d-md-block position-absolute w-100 h-100"
            style={{ objectFit: "cover" }} // Mặc định là cover trên các màn hình lớn
            src="images/background/BG_NhungConSo.png"
            alt="Background"
          />
          <div
            className="info-husc align-self-center position-absolute top-50 start-50 translate-middle d-flex justify-content-evenly align-items-center w-100 text-white"
            style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
          >
            <div className="text-center">
              <h1
                style={{
                  fontSize: "7rem",
                }}
                className="fw-bold m-0 display-1"
              >
                26
              </h1>
              <p className="text-uppercase fw-bold m-0 fs-4">
                Viên chức & người lao động
              </p>
            </div>

            <BorderLight />

            <div className="text-center">
              <h1
                style={{
                  fontSize: "7rem",
                }}
                className="fw-bold m-0 display-1"
              >
                03
              </h1>
              <p className="text-uppercase fw-bold m-0 fs-4">
                bộ môn chuyên ngành
              </p>
            </div>

            <BorderLight />

            <div className="text-center">
              <h1
                style={{
                  fontSize: "7rem",
                }}
                className="fw-bold m-0 display-1"
              >
                02
              </h1>
              <p className="text-uppercase fw-bold m-0 fs-4">
                ngành đào tạo Đại học
              </p>
            </div>

            <BorderLight />

            <div className="text-center">
              <h1
                style={{
                  fontSize: "7rem",
                }}
                className="fw-bold m-0 display-1"
              >
                02
              </h1>
              <p className="text-uppercase fw-bold m-0 fs-4">
                ngành đào tạo Thạc sĩ
              </p>
            </div>

            <BorderLight />

            <div className="text-center">
              <h1
                style={{
                  fontSize: "7rem",
                }}
                className="fw-bold m-0 display-1"
              >
                01
              </h1>
              <p className="text-uppercase fw-bold m-0 fs-4">
                ngành đào tạo Tiến sĩ
              </p>
            </div>
          </div>
        </Row>

        <Row
          className="relative my-3"
          style={{
            position: "relative",
            textAlign: "center",
            minHeight: "50vh", // Sử dụng minHeight để ảnh có thể dài ra khi cần thiết
            borderRadius: "50px",
            overflow: "hidden",
          }}
        >
          <img
            className="d-none d-md-block position-absolute w-100 h-100"
            style={{ objectFit: "cover" }} // Mặc định là cover trên các màn hình lớn
            src="images/background/BG_NhungConSo.png"
            alt="Background"
          />
          <div
            className="px-5 fw-bold data-husc align-self-center position-absolute top-50 start-50 translate-middle d-flex justify-content-evenly align-items-center w-100 text-white"
            style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
          >
            <ul className="text-center fs-3">
              <li>06 phó giáo sư tiến sĩ</li>
              <li>09 tiến sĩ</li>
              <li>10 thạc sĩ</li>
              <li>02 trợ giảng</li>
              <li>01 văn thư</li>
            </ul>

            <BorderLight />

            <ul className="text-center fs-3">
              <li>Công nghệ phần mềm</li>
              <li>Khoa học máy tính</li>
              <li>Mạng máy tính</li>
            </ul>

            <BorderLight />

            <ul className="text-center fs-4">
              <li>Công nghệ thông tin</li>
              <li>Kỹ thuật phần mềm</li>
            </ul>

            <BorderLight />

            <ul className="text-center fs-3">
              <li>Khoa học máy tính</li>
              <li>Quản lí công nghệ thông tin</li>
            </ul>

            <BorderLight />

            <ul className="text-center fs-3">
              <li>Khoa học máy tính</li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
}
