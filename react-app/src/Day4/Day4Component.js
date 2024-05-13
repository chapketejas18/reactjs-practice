import { InputComponent } from "./Question1";
import { Form } from "./Question2";
import { ConditionalMessageComponent } from "./Question3";
import { RegistrationForm } from "./Question4";
import { SelectDropdown } from "./Question5";
import { ControlledToDoList } from "./Question6";
import { DummyData } from "./Question7";
import { TemperatureConverter } from "./Question8";
import { SideBarNavigation } from "./Question9";
import { TextFieldValidation } from "./Question10";
import { ModalDialog } from "./Question11";
import { EnhancedTable } from "./Question12";
import { FormValidation } from "./Question13&14";
import GenericAccordion from "../helper/GenericAccordian";

const day4Components = [
  { name: "Input Component", component: <InputComponent /> },
  { name: "Form", component: <Form /> },
  {
    name: "Conditional Message Component",
    component: <ConditionalMessageComponent />,
  },
  { name: "Registration Form", component: <RegistrationForm /> },
  { name: "Select Dropdown", component: <SelectDropdown /> },
  { name: "Controlled ToDo List", component: <ControlledToDoList /> },
  { name: "Dummy Data", component: <DummyData /> },
  { name: "Temperature Converter", component: <TemperatureConverter /> },
  // { name: "SideBar Navigation", component: <SideBarNavigation /> },
  { name: "Text Field Validation", component: <TextFieldValidation /> },
  { name: "Modal Dialog", component: <ModalDialog /> },
  { name: "Enhanced Table", component: <EnhancedTable /> },
  { name: "Form Validation", component: <FormValidation /> },
];

export const Day4Component = () => {
  return <GenericAccordion components={day4Components} />;
};
