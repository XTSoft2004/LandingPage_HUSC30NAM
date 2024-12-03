import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "@/styles/sec5.css";
const ThanhDocTable = ({ index, height = 0 }) => {
  return (
    <>
      <Col
        key={index}
        xs={12}
        sm={6}
        lg={2}
        className="d-flex justify-content-center"
        style={{ width: "20px" }}
      >
        <div
          className="d-none d-lg-block"
          style={{
            height: height == 0 ? "auto" : height, // Chiều cao của thanh dọc
            borderLeft: "5px solid #fff", // Đường viền dọc
          }}
        ></div>
      </Col>
    </>
  );
};

import jsonLichTrinh from "@/data/lichtrinh.json"; // Import the data if it's in a separate JSON file

const LichTrinhTable = ({ data }) => {
  return (
    <>
      {/* Phần đầu cố định */}
      <Row key="session-11" className="d-flex d-none d-lg-block">
        <div
          className="mx-auto rounded-pill"
          style={{
            width: "55%", // Điều chỉnh chiều dài border-top
            borderTop: "5px solid #fff",
          }}
        ></div>
      </Row>

      <Row
        key="session-12"
        className="d-flex align-items-center item-infodate"
        style={{ paddingLeft: "13%" }}
      >
        <Col xs={12} sm={6} lg={5} className="date-time-lichtrinh">
          <p
            className="fs-1 fw-bold neonText date"
            style={{ textAlign: "right" }}
          >
            31/05/2025
          </p>
          <div
            className="w-50 text-center fs-4 fw-bold time"
            style={{
              textAlign: "right",
              marginLeft: "auto",
            }}
          >
            <span> - </span>
            <span className="mx-5">Thứ 7</span>
            <span> - </span>
          </div>
        </Col>

        <ThanhDocTable height={120} />

        <Col xs={12} sm={6} lg={5} className="date-time-lichtrinh">
          <div
            className="d-none d-lg-block"
            style={{
              width: "30%", // Điều chỉnh chiều dài border-top
              borderRight: "3px solid #fff",
            }}
          ></div>
          <p className="fs-1 fw-bold neonText date">01/06/2025</p>

          <div className="w-50 text-center fs-4 fw-bold time">
            <span> - </span>
            <span className="mx-4">Chủ nhật</span>
            <span> - </span>
          </div>
        </Col>
      </Row>

      {/* Duyệt qua dữ liệu và tạo phần tử */}
      {data.map((session, index) => (
        <Row
          data-aos="flip-left"
          key={`session-${index}`}
          className="d-flex item-infodate lichtrinhtb"
          style={{ paddingLeft: "13%" }}
        >
          {session.map((event, eventIndex) => (
            <React.Fragment key={eventIndex}>
              <Col xs={12} sm={6} lg={5} className="date-time-lichtrinh">
                <div className="item-lichtrinh">
                  <div className="item-datetime">
                    <div
                      style={{ width: "30%", borderRight: "3px solid #fff" }}
                    ></div>
                    <p
                      className="fs-1 fw-bold mb-0 date"
                      style={{
                        textAlign: eventIndex % 2 === 0 ? "right" : "left",
                      }}
                    >
                      {event.time}
                    </p>
                    <p
                      className="fs-4 w-75 time"
                      style={{
                        textAlign: eventIndex % 2 === 0 ? "right" : "left",
                        marginLeft: eventIndex % 2 === 0 ? "auto" : "0",
                      }}
                    >
                      {event.name}
                    </p>
                  </div>
                  <div
                    className="item-address fs-5 w-75 address"
                    style={{
                      textAlign: eventIndex % 2 === 0 ? "right" : "left",
                      marginLeft: eventIndex % 2 === 0 ? "auto" : "0",
                      position: "absolute",
                      right: eventIndex % 2 === 0 ? "0" : "none",
                    }}
                  >
                    <i className="bi bi-pin-map"></i>
                    <span> {event.address}</span>
                  </div>
                </div>
              </Col>
              {eventIndex % 2 === 0 && <ThanhDocTable index={eventIndex} />}
            </React.Fragment>
          ))}
        </Row>
      ))}
    </>
  );
};

import jsonLichTrinhMobile from "@/data/lichtrinh-dao.json";
const EventSchedule = () => {
  return (
    <div>
      {jsonLichTrinhMobile.map((event, index) => (
        <div key={index}>
          <Row>
            <p className="fs-1 neonText">{event.date}</p>
            <div>
              <span>-</span>
              <span className="mx-5 fs-5">{event.name}</span>
              <span>-</span>
            </div>
          </Row>
          {event.lst.map((item, idx) => (
            <Row key={idx} className="my-4">
              <div className="item-lichtrinh">
                <div className="item-datetime">
                  <p className="fw-bold fs-2 date">{item.time}</p>
                  <p className="fs-4 time">{item.name}</p>
                </div>
                <p className="item-address address fs-5 pt-5">
                  <i className="bi bi-pin-map"></i> {item.address}
                </p>
              </div>
            </Row>
          ))}
        </div>
      ))}
    </div>
  );
};

const events = [
  {
    month: "Tháng 11",
    year: "2024",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="20"
        height="20"
      >
        <path
          fill="#001d5b"
          d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
        />
      </svg>
    ),
    description:
      "Cuộc thi thiết kế chào mừng 30 năm thành lập Khoa Công nghệ thông tin",
  },
  {
    month: "Tháng 3",
    year: "2025",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="20"
        height="20"
      >
        <path
          fill="#001d5b"
          d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6l59.2 0c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"
        />
      </svg>
    ),
    description: "Giải bóng đá sinh viên IT CUP 2025",
  },
  {
    month: "Tháng 4",
    year: "2025",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        width="20"
        height="20"
      >
        <path
          fill="#001d5b"
          d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
        />
      </svg>
    ),
    description: "Cuộc thi lập trình OLP/ICPC Khoa Công nghệ thông tin",
  },
];

export default function TimeLine1() {
  return (
    <div
      id="lich-trinh"
      className="bg-sec5"
      style={{ color: "white", padding: "20px" }}
    >
      <Container>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "5.0rem",
          }}
          className="neonText"
        >
          Lịch Trình
        </h2>

        <div
          data-aos="fade-up"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            lineHeight: "1",
            marginTop: "10px",
            fontSize: "1.5rem",
            marginBottom: "40px",
          }}
        >
          <p>Kỉ niệm 30 năm thành lập Khoa Công nghệ thông tin</p>
          <p>Trường Đại học Khoa học, Đại học Huế</p>
        </div>

        <div
          className="timeline-center"
          style={{ fontSize: "1.3rem", position: "relative" }}
        >
          {events.map((event, index) => (
            <div
              data-aos="fade-up"
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                // marginBottom: "20px",
              }}
            >
              <div
                className="fs-4"
                style={{
                  textAlign: "right",
                  paddingRight: "30px",
                  flexShrink: 0,
                  width: "150px",
                }}
              >
                <p style={{ margin: "0", fontWeight: "bold" }}>{event.month}</p>
                <p style={{ margin: "0", fontWeight: "bold" }}>{event.year}</p>
              </div>

              <div
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: "translateY(7px)",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    color: "#001d5b",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    marginBottom: "-1px",
                  }}
                >
                  {event.icon}
                </div>
                {index < events.length - 1 && (
                  <div
                    className="item-icon-doc"
                    style={{
                      width: "2px",
                      height: "50px",
                      backgroundColor: "white",
                    }}
                  ></div>
                )}
              </div>

              <div style={{ paddingLeft: "20px", flexGrow: 1 }}>
                <p style={{ margin: "0" }}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Web PC */}
        <div className="text-light py-5 d-none d-lg-block">
          <Container>
            <LichTrinhTable data={jsonLichTrinh}></LichTrinhTable>
          </Container>
        </div>

        {/* Mobile */}
        <div className="text-light py-5 d-lg-none d-block text-center my-5">
          <EventSchedule></EventSchedule>
        </div>
      </Container>
    </div>
  );
}
