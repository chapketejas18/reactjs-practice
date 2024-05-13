import GenericAccordion from "../helper/GenericAccordian";
import { ParentNew } from "./Question1";
import { Parent2 } from "./Question2";

const components = [
  {
    name: "Parent 1",
    component: <ParentNew />,
    description: "Component to display username after submitting username.",
  },
  {
    name: "Parent 2",
    component: <Parent2 />,
    description:
      "Component to display username after submitting username and has button to manage dark and light theme.",
  },
];

export const Day3Component = () => {
  return (
    <div>
      <GenericAccordion components={components} />
    </div>
  );
};
