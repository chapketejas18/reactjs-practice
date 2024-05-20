import GenericAccordion from "../helper/GenericAccordian";
import { Counter } from "./Question3";
import { LoginForm } from "./Question4";
import { UserProfile } from "./Question5";
import { ShowModal } from "./Question6";

const components = [
  {
    name: "Counter",
    component: <Counter />,
    description:
      "This component increment and decrement a counter by 1 - wrote test cases for it.",
  },
  {
    name: "Login Form",
    component: <LoginForm />,
    description:
      "This component takes in username and password and validates it and displays message accordingly - wrote test cases for it.",
  },
  {
    name: "User Profile",
    component: (
      <UserProfile
        name={"Tejas"}
        username={"tejas18"}
        gender={"Male"}
        address={"Akola"}
        contact={9960733381}
      />
    ),
    description:
      "This component displays users information - wrote test cases for it.",
  },
  {
    name: "Modal",
    component: <ShowModal />,
    description:
      "Modal with message and close Button - wrote test cases for it.",
  },
];

export const Day6Component = () => {
  return <GenericAccordion components={components} />;
};
