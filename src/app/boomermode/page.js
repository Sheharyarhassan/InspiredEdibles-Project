"use client";
import { Form, Input, Row, Col, Table } from "reactstrap";
import CustomAccordians from "../Common/Components/Accordians";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useState } from "react";
export default function BoomerMode() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const items = [
    {
      id: 1,
      title: "Type",
      filters: [
        {
          id: "filter1",
          title: "Video",
        },
        {
          id: "filter2",
          title: "Blog",
        },
        {
          id: "filter3",
          title: "Community",
        },
        {
          id: "filter4",
          title: "List",
        },
      ],
    },
  ];
  const items2 = [
    {
      id: 1,
      title: "Type",
      filters: [
        {
          id: "filters1",
          title: "Kuwait",
        },
        {
          id: "filters2",
          title: "London",
        },
        {
          id: "filters3",
          title: "News",
        },
        {
          id: "filters4",
          title: "Developing Concepts",
        },
        {
          id: "filters5",
          title: "Rendo News",
        },
        {
          id: "filters6",
          title: "Hmm",
        },
        {
          id: "filters7",
          title: "Top Secret",
        },
        {
          id: "filters8",
          title: "Classified",
        },
        {
          id: "filters9",
          title: "Give Away",
        },
        {
          id: "filters10",
          title: "Dont Tell",
        },
      ],
    },
  ];

  return (
    <Row className="justify-content-between align-items-center mt-5 px-2">
      <Col sm={3}>
        <div className="d-flex">
          <h1 className="display-3 fw-bold">Archive</h1>
          <sup className="badge badge-secondary fs-4 px-0 fw-lighter text-dark">
            {"(11)"}
          </sup>
        </div>
      </Col>
      <Col sm={3}>
        <Form className="align-middle">
          <div className="border-bottom align-middle mb-0">
            <Input
              id="exampleEmail"
              name="search"
              placeholder="Search"
              type="text"
              className="border-0 align-middle"
            />
          </div>
        </Form>
      </Col>
      <Col sm={12}>
        <Row className="mb-4 mt-5 align-items-start">
          <Col lg={3} md={12}>
            <div className="d-flex border-bottom border-2 justify-content-between">
              <p className="mb-2 fw-lighter">/ FILTER</p>
              <p className="mb-2 fw-lighter">CLEAR FILTERS</p>
            </div>
            <div className="d-flex">
              <div className="w-50">
                <CustomAccordians items={items} />
              </div>
              <div className="w-50">
                <CustomAccordians items={items2} />
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="d-flex px-3 border-bottom border-2 justify-content-between">
              <p className="mb-2 fw-lighter col-2">/ DATE</p>
              <p className="mb-2 fw-lighter col-8">/ NAME</p>
              <p className="mb-2 fw-lighter col-2">/ TYPE</p>
            </div>

            <div>
              <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th>1-02-2025</th>
                          <th>
                            Bread Street! The New StreetVenture At JACC (Soon)
                          </th>
                          <th>Post</th>
                        </tr>
                      </thead>
                    </table>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <Table responsive className="w-100">
                      <tbody>
                        <tr>
                          <td >Summary</td>
                          <td className="text-justify">
                            <div> You can modify any of this with custom CSS or
                            overriding our default variables. Its also worth
                            noting that just about any HTML can go within the though the
                            You can modify any of this with custom CSS or
                            overriding our default variables. Its also worth
                            noting that just about any HTML can go within the though the
                            You can modify any of this with custom CSS or
                            overriding our default variables. Its also worth
                            noting that just about any HTML can go within the though the</div>
                          </td>
                          <td>Post</td>
                        </tr>
                      </tbody>
                    </Table>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Accordion Item 2
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <strong>
                      This is the second item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    Accordion Item 3
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <strong>
                      This is the third item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
