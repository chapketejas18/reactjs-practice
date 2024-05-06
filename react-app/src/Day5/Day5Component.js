import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Question8to11/Client";
import { Pagination } from "./Question1to4";
import { AxiosApiErrorHandling } from "./Question5&6";
import { ShowData } from "./Question8to11";
import { ButtonsColor } from "./Question12";
import { Modalnew } from "./Question13";
import { MyComponentWithLogger } from "./Question15";
import { DisplayData } from "./Question16";
import { RouteApp } from "./Question14";

const day5Components = [
  { name: "Pagination", component: <Pagination /> },
  { name: "Axios API Error Handling", component: <AxiosApiErrorHandling /> },
  {
    name: "Show Data",
    component: (
      <ApolloProvider client={client}>
        <ShowData />
      </ApolloProvider>
    ),
  },
  { name: "Buttons Color", component: <ButtonsColor /> },
  { name: "Modal", component: <Modalnew /> },
  { name: "Route App", component: <RouteApp /> },
  { name: "My Component With Logger", component: <MyComponentWithLogger /> },
  { name: "Display Data", component: <DisplayData /> },
];

export const Day5Component = () => {
  const [showComponent, setShowComponent] = useState({});
  const toggleComponent = (index) => {
    setShowComponent({ ...showComponent, [index]: !showComponent[index] });
  };

  return (
    <div>
      {day5Components.map((item, index) => (
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
