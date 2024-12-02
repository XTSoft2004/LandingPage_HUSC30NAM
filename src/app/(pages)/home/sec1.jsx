import { Row, Col, Container } from "react-bootstrap";

export default function Sec1() {
    return (
        <>
            <div className="w-100" style={{ backgroundColor: "#000" }}>
                <Container>
                    <Row className="w-100">
                        <Col xs={12} md={7} className="d-flex align-items-center justify-content-center flex-column tl">
                            <div style={{ color: "#fff" }}>
                                <div style={{ borderLeft: "solid #fff 4px" }} className="p-3 mb-3">
                                    <h1 className="neonText">CH<span>ÀO MỪNG KỈ NIỆM <br />
                                        30 N</span>ĂM THÀNH LẬP</h1>
                                </div>
                                <h4 style={{ fontWeight: "bold", fontSize: "1.6rem", lineHeight: "1.5" }}>
                                    Khoa Công nghệ thông tin
                                    <br />
                                    Trường Đại học Khoa học, Đại học Huế
                                </h4>
                                <h4 style={{ color: "#ddb61a", fontWeight: "bold", textAlign: "center" }}>
                                    01/06/1995 - 01/06/2025
                                </h4>
                            </div>
                        </Col>

                        <Col xs={12} md={3} className="d-flex align-items-center justify-content-center">
                            <img src="/images/logo/Logo_CNTT30Nam.png" alt="Logo30Nam" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}