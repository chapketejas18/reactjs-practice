import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GenericAccordion = ({ components }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {components.map((item) => (
        <Accordion
          key={item.name}
          expanded={expanded === item.name}
          onChange={handleChange(item.name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.name}bh-content`}
            id={`${item.name}bh-header`}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {item.name}
            </Typography>
            {item.description && (
              <Typography sx={{ color: "text.secondary" }}>
                {item.description}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>{item.component}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default GenericAccordion;
