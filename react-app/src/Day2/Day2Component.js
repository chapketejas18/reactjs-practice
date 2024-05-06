import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Counter } from "./Question1";
import { PersonForm } from "./Question2";
import { ToDoList } from "./Question3";
import { RandomNumberGenerator } from "./Question4";
import { CounterWithStep } from "./Question5";
import { Clock } from "./Question6";
import { Notification } from "./Question7";
import { SlideShow } from "./Question8";
import { ThemedContext } from "./Question9";
import { ChangeLanguage } from "./Question10";
import { AddToCartProducts } from "./Question11";
import { VotingApp } from "./Question12";
import { Parent } from "./Question13";
import { Tasks } from "./Question14";
import { StudentList } from "./Question15";
import { EmployeeSalary } from "./Question16";
import { Clipboard } from "./Question17";
import { UserPreference } from "./Question18";
import { CountDown } from "./Question19";

const day2Components = [
  { name: "Counter", component: <Counter /> },
  { name: "Person Form", component: <PersonForm /> },
  { name: "ToDo List", component: <ToDoList /> },
  { name: "Random Number Generator", component: <RandomNumberGenerator /> },
  { name: "Counter With Step", component: <CounterWithStep /> },
  { name: "Clock", component: <Clock /> },
  { name: "Notification", component: <Notification /> },
  { name: "Slide Show", component: <SlideShow /> },
  { name: "Themed Context", component: <ThemedContext /> },
  { name: "Change Language", component: <ChangeLanguage /> },
  { name: "Add To Cart Products", component: <AddToCartProducts /> },
  { name: "Voting App", component: <VotingApp /> },
  { name: "Parent", component: <Parent /> },
  { name: "Tasks", component: <Tasks /> },
  { name: "Student List", component: <StudentList /> },
  { name: "Employee Salary", component: <EmployeeSalary /> },
  { name: "Clipboard", component: <Clipboard /> },
  { name: "User Preference", component: <UserPreference /> },
  { name: "Count Down", component: <CountDown /> },
];

export const Day2Component = () => {
  const [showComponent, setShowComponent] = useState({});

  const toggleComponent = (index) => {
    setShowComponent({ ...showComponent, [index]: !showComponent[index] });
  };

  return (
    <div>
      {day2Components.map((item, index) => (
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
