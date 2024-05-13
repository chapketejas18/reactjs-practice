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
    description:
      "This component increments and decrement count by 1 and displays message accordingly.",
  },
  {
    name: "Task Array",
    component: <TaskArray />,
    description: "This component displays a list of tasks.",
  },
  {
    name: "Button Color",
    component: <ButtonColor />,
    description: "This component has 3 different color buttons.",
  },
];

export const Day1Component = () => {
  return <GenericAccordion components={components} />;
};
