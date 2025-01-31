"use client";
import React from 'react';
import {Card, CardBody, CardText, Col, Container, Row,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {data} from "../Common/data";
import Link from "next/link";
import Image from "next/image";
import reaction from "../../../public/assets/reaction.png"
import Laugh from "../../../public/assets/Laugh.png"
import Grimmace from "../../../public/assets/Grimmace.png"
import EyesRoll from "../../../public/assets/EyesRoll.png"
import Angry from "../../../public/assets/Angry.png"
import MindBlown from "../../../public/assets/MindBlown.png"
import Crying from "../../../public/assets/Crying.png"
import Heart from "../../../public/assets/Herat.png"
import ThumbsUp from "../../../public/assets/ThumbsUp.png"

import ThumbsUpBg from "../../../public/assets/ThumbsUpBg.png"
import MindBlownBg from "../../../public/assets/MindBlownbg.png"

function Page() {
   const [dropdowns, setDropdowns] = React.useState({});

   const toggleDropdown = (index) => {
      setDropdowns(prevState => ({
         ...prevState,
         [index]: !prevState[index]
      }));
   };
   return (
      <div>
         <Container fluid={true}>
            <Row className="gy-4">
               {data.map((item, index) => {
                  const dropdownOpen = dropdowns[index] || false;
                  if(item.isFeatured){
                     return (
                        <Col sm={6} md={4} key={index} className="d-flex flex-direction-column align-items-stretch">
                           <Card className="position-relative">
                              <CardBody className="w-100 position-absolute top-0 left-0">
                                 <div className="p-3">
                                    <div className="d-flex justify-content-between">
                                       <div className="d-flex">
                                          {item.tags.map((category, index) => {
                                             return (
                                                <small key={index} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">{category}</small>
                                             )
                                          })}
                                       </div>
                                       <div>
                                          <small key={index} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">{item.date}</small>
                                       </div>

                                    </div>
                                 </div>
                              </CardBody>
                              <Image className="mw-100 h-100" src={item.image} alt="..." />
                              <CardBody className="w-100 position-absolute bottom-0 left-0">
                                 <div className="bg-light p-3">
                                    <h5 className="fw-bold text-uppercase border-bottom border-1 border-dark">
                                       {item.title}
                                    </h5>
                                    <small className="lh-base">{item.description}</small>
                                    <div className="text-center border-top border-1 border-dark pt-2">
                                       <Link className="btn btn-outline-dark py-0" href={item.link + "/" + item.id}>Finish Reading</Link>
                                    </div>

                                 </div>
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
                                 <div className="p-3">
                                    <div className="d-flex justify-content-between">
                                       <div className="d-flex">
                                          {item.tags.map((category, index) => {
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
                                 </div>
                              </CardBody>
                              <Image className="mw-100 h-100" src={item.image} alt="..." />
                              <div className="w-100 position-absolute bottom-0 left-0">
                                 <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                       <div className="d-flex px-2">
                                          <Image src={ThumbsUpBg} alt="ThumbsUpBg" style={{width:'30px',height:'30px'}} className="mw-100 h-auto"/>
                                          <Image src={MindBlownBg} alt="MindBlownBg" style={{marginLeft:"-7px",width:'30px',height:'30px'}} className="mw-100 h-auto"/>
                                       </div>
                                       <h4 className="text-white mb-0">{item.likes}</h4>
                                       <Dropdown direction="up" isOpen={dropdownOpen} toggle={() => toggleDropdown(index)}>
                                          <DropdownToggle className="d-flex btn bg-transparent border-0">
                                             <i className="bx bx-smile h3 mb-0"></i>
                                             <sup>
                                                <i className="bx bx-plus-circle"></i>
                                             </sup>
                                          </DropdownToggle>
                                          <DropdownMenu className="bottom-50 left-50 translate-middle">
                                             <div className="d-flex">
                                             <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                <Image src={Laugh} alt="Laugh" className="w-100 h-auto"/>
                                                <p>1</p>
                                             </DropdownItem>
                                             <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                <Image src={Grimmace} alt="Laugh" className="w-100 h-auto"/>
                                                <p>1</p>
                                             </DropdownItem>
                                             <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                <Image src={EyesRoll} alt="Laugh" className="w-100 h-auto"/>
                                                <p>1</p>
                                             </DropdownItem>
                                                <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                   <Image src={MindBlown} alt="Laugh" className="w-100 h-auto"/>
                                                   <p>1</p>
                                                </DropdownItem>
                                                <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                   <Image src={Angry} alt="Angry" className="w-100 h-auto"/>
                                                   <p>1</p>
                                                </DropdownItem>
                                                <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                   <Image src={Crying} alt="Cry" className="w-100 h-auto"/>
                                                   <p>1</p>
                                                </DropdownItem>
                                                <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                   <Image src={Heart} alt="Laugh" className="w-100 h-auto"/>
                                                   <p>1</p>
                                                </DropdownItem>
                                                <DropdownItem className="text-center" style={{width:'70px', height:'70px'}}>
                                                   <Image src={ThumbsUp} alt="Laugh" className="w-100 h-auto"/>
                                                   <p>1</p>
                                                </DropdownItem>
                                             </div>
                                          </DropdownMenu>
                                       </Dropdown>
                                       <i className="bx bxs-circle text-light small"></i>
                                       <Link href={item.link + "/" + item.id} className="d-flex h-100 btn border-0 text-light my-0 ">
                                          <i className="bx bx-message-alt h3 mb-0"></i>
                                       </Link>
                                       <h4 className="text-white mb-0">{item.comments}</h4>
                                    </div>
                                    <div>
                                       <Link href={item.link + "/" + item.id} key={index}
                                             className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">READ
                                          MORE</Link>
                                    </div>
                                 </div>
                              </div>
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