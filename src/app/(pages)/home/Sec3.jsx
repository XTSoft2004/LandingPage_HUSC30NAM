import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
// import bg from "@p/images/background";
import "../../../styles/sec2.css";
const BorderLight = () => {
  return (
    <div
      className="bg-white mx-3 bd-light-doc"
      style={{ width: "5px", height: "180px" }}
    ></div>
  );
};

import jsonNhungConSo from "@/data/nhungconsonoibat.json"; // Import the data if it's in a separate JSON file

const ItemFace = ({ number, name, lst, showBorderLight }) => {
  return (
    <>
      <div className="item-face text-center">
        <div className="face-1">
          <h1
            style={{
              fontSize: "7rem",
            }}
            className="fw-bold m-0 display-1"
          >
            {number}
          </h1>
          <p className="text-uppercase fw-bold m-0 fs-4">{name}</p>
        </div>
        <div className="face-2">
          <div className="text-center fs-3">
            {lst.map((item, index) => (
              <p key={index}>
                <b>{item.number || ""} </b>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      {showBorderLight && <BorderLight />}
      <div
        className="d-none align-self-center glow-div my-3 bd-light-ngang"
        style={{ backgroundColor: "#fff", height: "4px", width: "27%" }}
      ></div>
    </>
  );
};
export default function Sec1() {
  return (
    <div id="tong-quan" className="w-100 bg-sec2 py-3">
      <Container>
        <Row>
          <h1
            data-aos="fade-up"
            data-aos-duration="3000"
            className="fw-bold overlay-text text-center text-white my-5 home__title text-uppercase"
          >
            Tổng quan
          </h1>
        </Row>
        <Row data-aos="fade-up">
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
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="w-100 h-100"
            style={{ borderRadius: "50px", objectFit: "cover" }}
            src="images/background/CacThayCo.png"
            alt="Faculty Image"
          />
        </Row>
        <Row>
          <div data-aos="fade-up" className="d-flex my-4">
            <div
              className="d-none d-md-block align-self-center"
              style={{ backgroundColor: "#fff", height: "4px", width: "27%" }}
            ></div>
            <p
              data-aos-duration="3000"
              className="text-white fw-bold text-center mx-5 fs-2"
            >
              NHỮNG CON SỐ NỔI BẬT
            </p>
            <div
              className="d-none d-md-block align-self-center"
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
            overflow: "hidden",
          }}
        >
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            className="d-none d-md-block position-absolute w-100 h-100 rounded-5"
            style={{ objectFit: "cover" }}
            src="images/background/BG_NhungConSo.jpg"
            alt="Background"
          />
          <div
            className="info-husc align-self-center position-absolute top-50 start-50 translate-middle d-flex justify-content-evenly align-items-center w-100 text-white"
            // style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
          >
            {jsonNhungConSo.map((item, index) => (
              <ItemFace
                key={index}
                number={item.number}
                name={item.name}
                lst={item.lst}
                showBorderLight={index !== jsonNhungConSo.length - 1}
              />
            ))}
          </div>
        </Row>

        <Row>
          <button
            data-aos="zoom-in"
            className="mx-auto w-25 btn-gold text-uppercase rounded-pill fs-4 mb-5 mt-2"
          >
            <a href="https://it.husc.edu.vn/">Tìm hiểu thêm</a>
          </button>
        </Row>
      </Container>
    </div>
  );
}
