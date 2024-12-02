import React, { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import style from "./timeline.module.css";

const data = [
  {
    date: "13/12",
    year: "1994",
    description: (
      <>
        Bộ Giáo Dục và Đào Tạo ra quyết định{" "}
        <strong>thành lập Khoa Công nghệ thông tin</strong> tại Đại học Huế.
      </>
    ),
  },
  {
    date: "01/06",
    year: "1995",
    description: (
      <>
        Chính thức đào tạo <strong>cử nhân ngành Công nghệ thông tin</strong>,
        trở thành 1 trong 6 Khoa Công nghệ thông tin trong điểm trên toàn quốc.
      </>
    ),
  },
  {
    date: "Năm",
    year: "2000",
    description: (
      <>
        Đào tạo <strong>thạc sĩ chuyên ngành Khoa học máy tính</strong> được đưa
        vào hoạt động.
      </>
    ),
  },
  {
    date: "Năm",
    year: "2010",
    description: (
      <>
        Khoa Công nghệ thông tin được giao trọng trách đào tạo{" "}
        <strong>tiến sĩ chuyên ngành Khoa học máy tính</strong>.
      </>
    ),
  },
  {
    date: "Năm",
    year: "2018",
    description: (
      <>
        Mở ngành đào tạo <strong>Kỹ thuật phần mềm</strong> (cơ chế đặc thù).
      </>
    ),
  },
  {
    date: "Năm",
    year: "2020",
    description: (
      <>
        Đào tạo <strong>Thạc sĩ ngành Quản lý công nghệ thông tin</strong>.
      </>
    ),
  },
];

export default function TimeLineHistory() {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div className={`${style.bd} w-100 bg-sec4 py-5`}>
        <div className={`${style.tl} w-75`}>
          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
            <h1
              className="neonText text-center text-md-left text-uppercase"
              // style={{ width: "160px", fontSize: "40px" }}
            >
              Các Mốc Lịch Sử
            </h1>
            <img
              src="/images/logo/Logo_Official.png"
              alt="Logo"
              className={`${style.logo} mt-3 mt-md-0 d-none d-lg-block`}
            />
          </div>
          <div className={`${style.bo} glow-div`}></div>
          <Row>
            {data.map((milestone, index) => (
              <Col key={index} xs={12}>
                <div className={style.timelineItem}>
                  <div
                    className={`${style.timelineDate} fw-bold text-uppercase`}
                  >
                    <p style={{ textAlign: "left" }} className="fs-1 my-0">
                      {milestone.date}
                    </p>
                    <p style={{ textAlign: "left" }} className="fs-1 my-0">
                      {milestone.year}
                    </p>
                  </div>
                  <div
                    className={`${style.timelineContent} fs-3 mt-1 align-self-center`}
                  >
                    {milestone.description}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="d-flex flex-md-row flex-column">
            <Col>
              <Image
                className="d-none d-md-block w-25 align-self-center py-4"
                src="/images/background/flag.png"
              ></Image>
              <Image
                className="d-md-none d-block w-100 align-self-center py-4"
                src="/images/background/flag.png"
              ></Image>
            </Col>
            <Col>
              <div
                className={`${style.text} py-3`}
                style={{
                  textAlign: "right",
                  fontSize: "3.3rem",
                  lineHeight: "0.7",
                  letterSpacing: "0.7rem",
                }}
              >
                <p className={`neonText d-none d-md-block`}>ITHUSC</p>
                <p className={`neonText d-md-none d-block text-center py-4`}>
                  ITHUSC
                </p>
                <p className={`neonText d-none d-md-block`}>1995 - 2025</p>
                <p
                  className={`neonText d-md-none d-block text-center`}
                  style={{ lineHeight: "0.9" }}
                >
                  1995 <br /> - <br /> 2025
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
