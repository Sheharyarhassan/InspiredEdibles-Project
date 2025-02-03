import Image from "next/image";
import donut from "../../../public/assets/dounut.png";
import { Col, Row, Container } from "reactstrap";

export default function ContactUs() {
  return (
    <>
      <Container fluid >
        <Row className="justify-content-between">
            <Col xl={3} lg={4} md={5}>
            <p className="fw-lighter mt-4">/ CONTACT</p>
            <h3 className="fw-light mt-4">We love working with on everything tell us your story</h3>
            <button className="w-100 btn btn-outline-dark rounded-pill mt-5">Connect with us!</button>
            </Col>
            
            <Image src={donut} className="col-4 mw-100 h-auto position-fixed bottom-0 start-50 translate-middle-x"/>
            
            <Col xl={4} lg={4} md={5}>
            <p className="fw-lighter mt-4">/ SOCIAL</p>
            <div className="d-flex">
              <button className="btn btn-outline-dark  rounded-pill-dotted">YOUTUBE</button>
              <button className="btn btn-outline-dark mx-3 rounded-pill-dotted">TWITTER/X</button>
              <button className="btn btn-outline-dark rounded-pill-dotted">DISCORD</button>
            </div>
            </Col>
        </Row>
      </Container>
    </>
  );
}
