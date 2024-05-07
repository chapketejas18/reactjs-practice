import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GenericAccordion = ({ components }) => {
  const [showComponent, setShowComponent] = useState({});

  const toggleComponent = (index) => {
    setShowComponent({ ...showComponent, [index]: !showComponent[index] });
  };

  return (
    <div>
      {components.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            onClick={() => toggleComponent(index)}
          >
            {item.name}
          </AccordionSummary>
          <AccordionDetails>
            {showComponent[index] && item.component}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default GenericAccordion;
