"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardBody, Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { data } from "../Common/data";
import Link from "next/link";
import Image from "next/image";
import Laugh from "../../../public/assets/Laugh.png";
import Grimmace from "../../../public/assets/Grimmace.png";
import EyesRoll from "../../../public/assets/EyesRoll.png";
import Angry from "../../../public/assets/Angry.png";
import MindBlown from "../../../public/assets/MindBlown.png";
import Crying from "../../../public/assets/Crying.png";
import Heart from "../../../public/assets/Herat.png";
import ThumbsUp from "../../../public/assets/ThumbsUp.png";
import ThumbsUpBg from "../../../public/assets/ThumbsUpBg.png";
import MindBlownBg from "../../../public/assets/MindBlownbg.png";

function Page() {
   const [visibleData, setVisibleData] = useState(data.slice(0, 3)); // Load first 3 items
   const [count, setCount] = useState(3); // Track number of loaded items
   const [isLoading, setIsLoading] = useState(false); // Loader state
   const observerRef = useRef(null);
   const [dropdowns, setDropdowns] = useState({});

   const toggleDropdown = (index) => {
      setDropdowns(prevState => ({
         ...prevState,
         [index]: !prevState[index]
      }));
   };

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            if (entries[0].isIntersecting && !isLoading) {
               loadMoreItems();
            }
         },
         { threshold: 1.0 }
      );

      if (observerRef.current) {
         observer.observe(observerRef.current);
      }

      return () => {
         if (observerRef.current) observer.unobserve(observerRef.current);
      };
   }, [count, isLoading]);

   const loadMoreItems = () => {
      if (count >= data.length) return; // Stop if all data is loaded

      setIsLoading(true); // Show loader
      setTimeout(() => {
         const newCount = count + 3;
         setVisibleData(data.slice(0, newCount));
         setCount(newCount);
         setIsLoading(false); // Hide loader after 1 sec
      }, 2000);
   };

   return (
      <Container fluid={true}>
         <Row className="gy-4">
            {visibleData.map((item, index) => {
               const dropdownOpen = dropdowns[index] || false;
               return (
                  <Col sm={6} md={4} key={index} className="d-flex flex-direction-column align-items-stretch">
                     <Card className="position-relative">
                        <CardBody className="w-100 position-absolute top-0 left-0">
                           <div className="p-3">
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex">
                                    {item.tags.map((category, i) => (
                                       <small key={i} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">
                                          {category}
                                       </small>
                                    ))}
                                 </div>
                                 {item.date && (
                                    <div>
                                       <small className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">
                                          {item.date}
                                       </small>
                                    </div>
                                 )}
                              </div>
                           </div>
                        </CardBody>
                        <Image className="mw-100 h-100" src={item.image} alt="..." />
                        <div className="w-100 position-absolute bottom-0 left-0">
                           <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                 <div className="d-flex px-2">
                                    <Image src={ThumbsUpBg} alt="ThumbsUpBg" style={{ width: '30px', height: '30px' }} className="mw-100 h-auto" />
                                    <Image src={MindBlownBg} alt="MindBlownBg" style={{ marginLeft: "-7px", width: '30px', height: '30px' }} className="mw-100 h-auto" />
                                 </div>
                                 <h4 className="text-white mb-0">{item.likes}</h4>
                                 <Dropdown direction="up" isOpen={dropdownOpen} toggle={() => toggleDropdown(index)}>
                                    <DropdownToggle className="d-flex btn bg-transparent border-0">
                                       <i className="bx bx-smile h3 mb-0"></i>
                                       <sup>
                                          <i className="bx bx-plus-circle"></i>
                                       </sup>
                                    </DropdownToggle>
                                    <DropdownMenu className="bottom-50 left-50 translate-middle rounded-pill">
                                       <div className="d-flex">
                                          {[Laugh, Grimmace, EyesRoll, MindBlown, Angry, Crying, Heart, ThumbsUp].map((emoji, i) => (
                                             <DropdownItem key={i} className="text-center" style={{ width: '70px', height: '70px' }}>
                                                <Image src={emoji} alt="emoji" className="w-100 h-auto" />
                                                <p>1</p>
                                             </DropdownItem>
                                          ))}
                                       </div>
                                    </DropdownMenu>
                                 </Dropdown>
                                 <i className="bx bxs-circle text-light small"></i>
                                 <Link href={item.link + "/" + item.id} className="d-flex h-100 btn border-0 text-light my-0">
                                    <i className="bx bx-message-alt h3 mb-0"></i>
                                 </Link>
                                 <h4 className="text-white mb-0">{item.comments}</h4>
                              </div>
                              <div>
                                 <Link href={item.link + "/" + item.id} className="py-0 px-1 me-2 text-white btn bg-secondary bg-opacity-50 backdrop-blur">
                                    READ MORE
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </Card>
                  </Col>
               );
            })}
         </Row>

         {/* Loader Section */}
         {isLoading && (
            <div className="text-center my-4">
               <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>
         )}

         {/* Scroll Observer */}
         <div ref={observerRef} style={{ height: 10 }}></div>
      </Container>
   );
}

export default Page;
