import React from 'react';
import { data } from "../../Common/data"; // Your data source
import { Col, Container, Row, Table } from "reactstrap";
import Link from "next/link";

// This function is used for static generation of paths in Next.js
export function generateStaticParams() {
   return data.map((item) => ({
      productId: item.productId.toString(),
   }));
}

export default function Page({ params }) {
   const { productId } = params;

   // Find the product by productId
   const item = data.find((product) => product.productId.toString() === productId);

   if (!item) {
      return <div>Product not found!</div>;
   }

   return (
      <div>
         <div style={{ height: '55vh', backgroundImage: `url(${item.innerImage.src})`, backgroundPosition: "center center", backgroundSize: 'cover' }}></div>
         <Container fluid>
            <div className="border-bottom border-2 border-dark">
               <Row className="mt-4 gy-4">
                  <Col md={12} lg={4}>
                     <h6 className="border-bottom border-dark pb-2">/ METADATA</h6>
                     <Table>
                        <tbody>
                        <tr>
                           <td className="text-uppercase">Date:</td>
                           <td className="text-uppercase">{item.date}</td>
                        </tr>
                        <tr>
                           <td className="text-uppercase">Concept:</td>
                           <td className="text-uppercase">{item.concept}</td>
                        </tr>
                        <tr>
                           <td className="text-uppercase">Reading Time:</td>
                           <td className="text-uppercase">{item.readingTime}</td>
                        </tr>
                        <tr>
                           <td className="text-uppercase">Tags:</td>
                           <td className="text-uppercase">
                              {item.tags.map((category, tagIndex) => (
                                 <button key={tagIndex} className="btn btn-outline-dark me-2 py-0 px-1">{category}</button>
                              ))}
                           </td>
                        </tr>
                        </tbody>
                     </Table>
                     <div>
                        <h6 className="text-uppercase">Share:</h6>
                        <div className="d-flex">
                           <button className="w-50 rounded-pill btn btn-outline-dark me-2">Twitter/X</button>
                           <button className="w-50 rounded-pill btn btn-outline-dark me-2">Link</button>
                        </div>
                     </div>
                  </Col>
                  <Col md={12} lg={8}>
                     <h6 className="border-bottom border-dark pb-2">/ EVERYTHING</h6>
                     <p className="col-md-12 col-lg-8">
                        {item.description.split("\n").map((line, lineIndex) => (
                           <React.Fragment key={lineIndex}>
                              {line}
                              <br />
                           </React.Fragment>
                        ))}
                     </p>
                  </Col>
               </Row>
            </div>
            <Row className="mt-4 gx-5 gy-4">
               <div className="d-flex">
                  <h1 className="display-2 text-uppercase">Read More?</h1>
                  <sup>(4)</sup>
               </div>
               {data.map((items, i) => {
                  if (i >= 2 && i <= 5) {
                     const formattedTitle = items.title
                        .replace(/\[b\](.*?)\[\/b\]/g, "<strong>$1</strong>");
                     return (
                        <Col key={i} md={12} lg={6}>
                           <h6 className="border-bottom border-dark pb-2 text-uppercase fw-normal">
                              {i === 2 ? "/ Latest & The Greatest" :
                                 i === 3 ? "/ Brand New Concept" :
                                    i === 4 ? "/ Crazy Good News" :
                                       "/ Wowww"
                              }
                           </h6>
                           <div className="border-bottom">
                              <h2 className="col-9 py-3 fw-light" dangerouslySetInnerHTML={{ __html: formattedTitle }} />
                              <p className="text-uppercase">
                                 <i className="small bx bxs-square"></i> Example:
                                 {i === 2 ? (
                                    <>
                                       How can I
                                       <i className="small bx bxs-square"></i>
                                       <i className="small bx bxs-square"></i>
                                       <i className="small bx bxs-square"></i>
                                    </>
                                 ) : null}
                              </p>
                           </div>
                           <Link href={items.link + "/" + items.id} className="mt-4 mb-3 py-2 fw-medium btn btn-outline-dark rounded-pill w-100">READ</Link>
                        </Col>
                     );
                  }
                  return null;
               })}
            </Row>
         </Container>
      </div>
   );
}
