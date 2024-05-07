import GenericAccordion from "../helper/GenericAccordian";
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
  return <GenericAccordion components={components} />;
};
