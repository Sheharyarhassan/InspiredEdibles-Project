import React from 'react';
import {Card, CardBody, CardText, Col, Row} from "reactstrap";
import {data} from "./data";
import Link from "next/link";
import Image from "next/image";

function Page(props) {
   return (
      <div>
         <Row>
            {data.map((item, index) => {
               if(item.isFeatured){
                  return (
                     <Col sm={6} md={4} key={index}>
                        <Link href={item.link + "/" + item.id}>
                           <Card>
                              <Image className="mw-100 h-auto" src={item.image} alt="..." />
                              <CardBody className="position-absolute bottom-0 bg-white">
                                 <CardText>
                                    <h5 className="fw-bold text-uppercase text-center">
                                       {item.title}
                                    </h5>
                                    <p>{item.description}</p>
                                    <Link className="btn btn-outline-dark py-0" href={item.link + "/" + item.id}>Read More</Link>
                                 </CardText>
                              </CardBody>
                           </Card>
                        </Link>
                     </Col>
                  );
               }
            })}
            {data.map((item, index) => {
               return (
                  <Col sm={6} md={4} key={index}>
                     <p>{item.id}</p>
                  </Col>
               );
            })}
         </Row>
      </div>
   );
}

export default Page;