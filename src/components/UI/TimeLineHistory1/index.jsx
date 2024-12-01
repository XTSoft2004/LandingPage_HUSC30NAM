import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import style from "./timeline.module.css";

const data = [
    {
        date: "13.12",
        year: "1994",
        description: (
            <>
                Bộ Giáo Dục và Đào Tạo ra quyết định{" "}
                <strong>thành lập Khoa Công nghệ thông tin</strong> tại Đại học Huế.
            </>
        )
    },
    {
        date: "01.06",
        year: "1995",
        description: (
            <>
                Chính thức đào tạo <strong>cử nhân ngành Công nghệ thông tin</strong>, trở thành 1 trong 6 Khoa Công nghệ thông tin trong điểm trên toàn quốc.
            </>
        )
    },
    {
        date: "Năm",
        year: "2000",
        description: (
            <>
                Đào tạo <strong>thạc sĩ chuyên ngành Khoa học máy tính</strong> được đưa vào hoạt động.
            </>
        )
    },
    {
        date: "Năm",
        year: "2010",
        description: (
            <>
                Khoa Công nghệ thông tin được giao trọng trách đào tạo <strong>tiến sĩ chuyên ngành Khoa học máy tính</strong>.
            </>
        )
    },
    {
        date: "Năm",
        year: "2018",
        description: (
            <>
                Mở ngành đào tạo <strong>Kỹ thuật phần mềm</strong> (cơ chế đặc thù).
            </>
        )
    },
    {
        date: "Năm",
        year: "2020",
        description: (
            <>
                Đào tạo <strong>Thạc sĩ ngành Quản lý công nghệ thông tin</strong>.
            </>
        )
    }
];


export default function TimeLineHistory1() {
    useEffect(() => {
        return () => {
        };
    }, []);
    return (
        <>
            <div className={`${style.bd} w-100`}>
                <div className={`${style.tl} w-75`}>
                    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                        <h2 className="neonText text-center text-md-left" style={{ width: "160px", fontSize: "40px"}}>Các Mốc Lịch Sử</h2>
                        <img src="/images/logo/Logo_Official.png" alt="Logo" className={`${style.logo} mt-3 mt-md-0`} />
                    </div>
                    <div className={`${style.bo}`}></div>
                    <Row>
                        {data.map((milestone, index) => (
                            <Col key={index} xs={12}>
                                <div className={style.timelineItem}>
                                    <div className={style.timelineDate}>
                                        <div>{milestone.date}</div>
                                        <div>{milestone.year}</div>
                                    </div>
                                    <div className={style.timelineContent}>
                                        <p>{milestone.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
}
