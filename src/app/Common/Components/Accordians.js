import { useState, useEffect } from "react";
import { Col, Input } from "reactstrap";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS
import styled from "styled-components"; // Import styled-components

// Styled component for accordion content
const AccordionContent = styled.div`
  max-height: ${(props) => (props.open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  display: ${(props) => (props.open ? "block" : "none")}; 
`;

// Styled component for accordion button
const AccordionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  padding: 0.5rem;
  font-weight: bold;
  color: #333;
`;

// Styled list for filters
const FilterList = styled.ul`
  list-style-type: none;
  padding-left: 30px;
  margin: 0;
`;

// Styled filter item
const FilterItem = styled.li`
  font-size: 1rem;
  font-weight: normal;
  color: #555;
  padding: 0.1rem 0;
  display: flex;
  align-items: center;
`;

// Styled label for checkbox
const CheckboxLabel = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

export default function CustomAccordion({ items }) {
  const [openAccordion, setOpenAccordion] = useState(1);
  const [checkedFilters, setCheckedFilters] = useState({});
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  // Ensure styles are applied after the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Toggle accordion open/close
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Handle checkbox change
  const handleCheckboxChange = (itemId, filterId) => {
    setCheckedFilters((prevState) => ({
      ...prevState,
      [filterId]: !prevState[filterId], // Toggle checkbox state
    }));
  };

  return (
    <Col className="w-100">
      {items.map((item) => (
        <div key={item.id} className="border-0 mb-2">
          <AccordionButton className="fw-lighter" onClick={() => toggleAccordion(item.id)}>
            <i className={`bx ${openAccordion === item.id ? "bx-chevron-up" : "bx-chevron-down"}`}></i>
            <i className="bx bx-folder-open fs-4 fw-lighter px-2"></i>
            {item.title}
          </AccordionButton>
          
          {isMounted && ( // Ensure the accordion content only renders after mount
            <AccordionContent open={openAccordion === item.id}>
              <div className="px-2 py-0 border-0 shadow-none bg-transparent text-dark">
                <FilterList>
                  {item.filters.map((value, index) => (
                    <FilterItem key={index}>
                      <Input
                        type="checkbox"
                        id={`filter-${item.id}-${index}`}
                        checked={checkedFilters[value.id] || false}
                        onChange={() => handleCheckboxChange(item.id, value.id)}
                        className="custom-checkbox"
                      />
                      <CheckboxLabel htmlFor={`filter-${item.id}-${index}`}>{value.title}</CheckboxLabel>
                    </FilterItem>
                  ))}
                </FilterList>
              </div>
            </AccordionContent>
          )}
        </div>
      ))}
    </Col>
  );
}
