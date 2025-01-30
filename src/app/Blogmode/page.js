import React from 'react';
import {Card, CardBody, CardText, Col, Container, Row} from "reactstrap";
import {data} from "../Common/data";
import Link from "next/link";
import Image from "next/image";
import reaction from "../../../public/assets/reaction.png"

function Page() {
   return (
      <div>
         <Container fluid={true}>
            <Row className="gy-4">
               {data.map((item, index) => {
                  if(item.isFeatured){
                     return (
                        <Col sm={6} md={4} key={index} className="d-flex flex-direction-column align-items-stretch">
                           <Card className="position-relative">
                              <CardBody className="w-100 position-absolute top-0 left-0">
                                 <CardText className="p-3">
                                    <div className="d-flex justify-content-between">
                                       <div className="d-flex">
                                          {item.categories.map((category, index) => {
                                             return (
                                                <small key={index} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">{category}</small>
                                             )
                                          })}
                                       </div>
                                       <div>
                                          <small key={index} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">{item.date}</small>
                                       </div>

                                    </div>
                                 </CardText>
                              </CardBody>
                              <Image className="mw-100 h-100" src={item.image} alt="..." />
                              <CardBody className="w-100 position-absolute bottom-0 left-0">
                                 <CardText className="bg-light p-3">
                                    <h5 className="fw-bold text-uppercase border-bottom border-1 border-dark">
                                       {item.title}
                                    </h5>
                                    <small className="lh-base">{item.description}</small>
                                    <div className="text-center border-top border-1 border-dark pt-2">
                                       <Link className="btn btn-outline-dark py-0" href={item.link + "/" + item.id}>Finish Reading</Link>
                                    </div>

                                 </CardText>
                              </CardBody>
                           </Card>
                        </Col>
                     );
                  }
                  else{
                     return (
                        <Col sm={6} md={4} key={index} className="d-flex flex-direction-column align-items-stretch">
                           <Card className="position-relative">
                              <CardBody className="w-100 position-absolute top-0 left-0">
                                 <CardText className="p-3">
                                    <div className="d-flex justify-content-between">
                                       <div className="d-flex">
                                          {item.categories.map((category, index) => {
                                             return (
                                                <small key={index} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">{category}</small>
                                             )
                                          })}
                                       </div>
                                       {item.date &&
                                       <div>
                                          <small key={index} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">{item.date}</small>
                                       </div>
                                       }
                                    </div>
                                 </CardText>
                              </CardBody>
                              <Image className="mw-100 h-100" src={item.image} alt="..." />
                              <CardBody className="w-100 position-absolute bottom-0 left-0">
                                 <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                       <Image src={reaction} alt="Reaction" className="mw-100 h-auto"/>
                                       <h4 className="text-white mb-0">{item.likes}</h4>
                                       <button className="d-flex btn text-light my-0">
                                          <i className="bx bx-smile h3 mb-0"></i>
                                          <sup>
                                             <i className="bx bx-plus-circle"></i>
                                          </sup></button>
                                       <i className="bx bxs-circle text-light small"></i>
                                       <button className="d-flex h-100 btn text-light my-0 ">
                                          <i className="bx bx-message-alt h3 mb-0"></i>
                                       </button>
                                       <h4 className="text-white mb-0">{item.comments}</h4>
                                    </div>
                                    <div>
                                       <Link href={item.link + "/" + item.id} key={index} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">READ MORE</Link>
                                    </div>
                                 </div>
                              </CardBody>
                           </Card>
                        </Col>
                     )
                  }
               })}

            </Row>
         </Container>
      </div>
   );
}

export default Page;