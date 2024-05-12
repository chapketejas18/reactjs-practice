import GenericAccordion from "../helper/GenericAccordian";
import { Greetings } from "./Question1";
import { UserCard } from "./Question2";
import { CounterOne } from "./Question4";
import { TaskArray } from "./Question5";
import { ButtonColor } from "./Question6";

const components = [
  {
    name: "Greetings",
    component: <Greetings />,
    description: "This component displays a greeting message.",
  },
  {
    name: "User Card",
    component: <UserCard />,
    description: "This component displays user information.",
  },
  {
    name: "Counter",
    component: <CounterOne />,
    description: "This component counts up from 1.",
  },
  {
    name: "Task Array",
    component: <TaskArray />,
    description: "This component displays a list of tasks.",
  },
  {
    name: "Button Color",
    component: <ButtonColor />,
    description: "This component changes the color of a button.",
  },
];

export const Day1Component = () => {
  return <GenericAccordion components={components} />;
};
