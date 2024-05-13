import { InputComponent } from "./Question1";
import { Form } from "./Question2";
import { ConditionalMessageComponent } from "./Question3";
import { RegistrationForm } from "./Question4";
import { SelectDropdown } from "./Question5";
import { ControlledToDoList } from "./Question6";
import { DummyData } from "./Question7";
import { TemperatureConverter } from "./Question8";
import { TextFieldValidation } from "./Question10";
import { ModalDialog } from "./Question11";
import { EnhancedTable } from "./Question12";
import { FormValidation } from "./Question13&14";
import GenericAccordion from "../helper/GenericAccordian";

const day4Components = [
  {
    name: "Input Component",
    component: <InputComponent />,
    description:
      "A reusable input component for capturing user input and displaying it simultaneously.",
  },
  {
    name: "Form",
    component: <Form />,
    description:
      "A form component used for collecting and submitting user data.",
  },
  {
    name: "Conditional Message Component",
    component: <ConditionalMessageComponent />,
    description:
      "A component that displays a message conditionally based on certain keyword.",
  },
  {
    name: "Registration Form",
    component: <RegistrationForm />,
    description:
      "A form component for user registration, including fields for username, email, password, etc.",
  },
  {
    name: "Select Dropdown",
    component: <SelectDropdown />,
    description:
      "A dropdown component for selecting options from a list and displaying contents accordingly.",
  },
  {
    name: "Controlled ToDo List",
    component: <ControlledToDoList />,
    description: "A ToDo list component where state is controlled by React.",
  },
  {
    name: "Dummy Data",
    component: <DummyData />,
    description:
      "A component that provides search bar and filter out results based on user input.",
  },
  {
    name: "Temperature Converter",
    component: <TemperatureConverter />,
    description:
      "A component for converting temperatures between Celsius to Fahrenheit and vice versa.",
  },
  {
    name: "Text Field Validation",
    component: <TextFieldValidation />,
    description:
      "A component that validates user input in text fields, providing feedback for correct or incorrect entries.",
  },
  {
    name: "Modal Dialog",
    component: <ModalDialog />,
    description: "A component for displaying modal dialogs.",
  },
  {
    name: "Enhanced Table",
    component: <EnhancedTable />,
    description:
      "An advanced table component with features like sorting, filtering, and pagination for managing large datasets.",
  },
  {
    name: "Form Validation",
    component: <FormValidation />,
    description:
      "A component that validates form input fields before submission.",
  },
];

export const Day4Component = () => {
  return <GenericAccordion components={day4Components} />;
};
