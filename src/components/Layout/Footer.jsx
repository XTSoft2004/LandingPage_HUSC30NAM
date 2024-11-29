import { Row, Col, Container, Image } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="p-2"
      style={{ backgroundColor: "#161B22", color: "#fff" }}
    >
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <Row className="mb-3">
              <div className="fs-2 fw-bold">
                Thông tin liên hệ
                <div
                  style={{
                    backgroundColor: "#fff",
                    height: "3px",
                    width: "40%",
                  }}
                ></div>
              </div>
            </Row>
            <Row className="mb-2">
              <div>
                <i className="bi bi bi-geo-alt-fill me-2"></i>
                77 Nguyễn Huệ, Thành phố Huế
              </div>
            </Row>

            <Row className="mb-2">
              <div>
                <i className="bi bi-telephone-fill me-2"></i>
                (84) (234) 3826767
              </div>
            </Row>
            <Row className="mb-2">
              <div>
                <i className="bi bi-envelope-fill me-2"></i>
                khoacntt@husc.edu.vn
              </div>
            </Row>
            <Row className="mb-2">
              <div>
                <i className="bi bi-globe me-2"></i>
                it.husc.edu.vn
              </div>
            </Row>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <Row>
              <Image
                className="w-75"
                src="/images/logo/Logo_Full_Light.png"
                alt="Logo Full HUSC"
              ></Image>
            </Row>
            <Row>
              <div>
                <iframe
                  className="w-100"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fithusc&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2894778310840377"
                  // width="300"
                  height="130"
                  style={{ border: "none", overflow: "hidden" }}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </Row>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <Row className="mb-3">
              <div className="fs-2 fw-bold">
                Liên kết
                <div
                  style={{
                    backgroundColor: "#fff",
                    height: "3px",
                    width: "40%",
                  }}
                ></div>
              </div>
            </Row>
            <Row className="mb-2">
              <Link href="https://www.facebook.com/ithusc">
                <i className="bi bi-chevron-right fw-bold me-2"></i>
                Khoa Công nghệ thông tin
              </Link>
            </Row>
            <Row className="mb-2">
              <Link href="https://www.facebook.com/ithusc">
                <i className="bi bi-chevron-right fw-bold me-2"></i>
                Đại học Huế
              </Link>
            </Row>
            <Row className="mb-2">
              <Link href="https://www.facebook.com/ithusc">
                <i className="bi bi-chevron-right fw-bold me-2"></i>
                Trường đại học Khoa học
              </Link>
            </Row>
            <Row className="mb-2">
              <Link href="https://www.facebook.com/ithusc">
                <i className="bi bi-chevron-right fw-bold me-2"></i>
                Trang thông tin đào tạo chính chỉ
              </Link>
            </Row>
          </Col>
        </Row>

        <Row className="mt-3">
          <div
            style={{
              backgroundColor: "#fff",
              height: "2px",
            }}
          ></div>
          <Row className="mt-2">
            Copyright © 2024, Trần Xuân Trường, Trương Đình Phúc, Lê Nguyễn Gia
            Hân
          </Row>
          <Row>
            Cuộc thi thiết kế landing page chào mừng 30 năm thành lập khoa Công
            nghệ thông tin, trường Đại học Khoa học, Đại học Huế.
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
