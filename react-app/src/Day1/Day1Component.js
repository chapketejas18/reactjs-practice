import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Greetings } from "./Question1";
import { UserCard } from "./Question2";
import { CounterOne } from "./Question4";
import { TaskArray } from "./Question5";
import { ButtonColor } from "./Question6";

const components = [
  { name: "Greetings", component: <Greetings /> },
  { name: "User Card", component: <UserCard /> },
  { name: "Counter", component: <CounterOne /> },
  { name: "Task Array", component: <TaskArray /> },
  { name: "Button Color", component: <ButtonColor /> },
];

export const Day1Component = () => {
  const [showComponent, setShowComponent] = useState({});

  const toggleComponent = (index) => {
    setShowComponent({ ...showComponent, [index]: !showComponent[index] });
  };

  return (
    <>
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
    </>
  );
};
