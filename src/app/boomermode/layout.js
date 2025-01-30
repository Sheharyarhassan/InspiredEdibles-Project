import { Col, Container, Row } from "reactstrap";
import loadingBackground from "../../../public/assets/loadingBackground.png";
import Image from "next/image";
export default function BoomerModeLayout({ children }) {
  const cardData = [
    {
      id: 1,
      backgroundColor: loadingBackground,
    },
    {
      id: 1,
      backgroundColor: loadingBackground,
    },
    {
      id: 1,
      backgroundColor: loadingBackground,
    },
  ];
  return (
    <>
      <Container fluid className="mt-3 ">
        <Row>
          <Col sm={12}>
            <div className="border-bottom border-2 border-secondary">
              <p className="mb-2">/ THE LATEST & GREATEST</p>
            </div>
          </Col>
          <Col sm={12}>
            <marquee className="mt-3">
              BREAD STREET! THE NEW STREET VENTURE AT | BREAD STREET! THE NEW
              STREET VENTURE AT | BREAD STREET! THE NEW STREET VENTURE AT |
              BREAD STREET! THE NEW STREET VENTURE AT | BREAD STREET! THE NEW
              STREET VENTURE AT BREAD STREET! THE NEW STREET VENTURE AT |BREAD
              STREET! THE NEW STREET VENTURE AT
            </marquee>
          </Col>
        </Row>
        <Row className="px-4 mt-5">
          {cardData.map((value, index) => {
            return (
              <Col md={4} key={index}>
                <div >
                  <Image
                    src={value.backgroundColor}
                    alt=""
                    className="w-100 h-auto"
                  />
                </div>
              </Col>
            );
          })}
        </Row>
        {children}
      </Container>
      
    </>
  );
}
