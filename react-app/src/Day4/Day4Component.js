import React from "react";
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

export const Day4Component = () => {
  return (
    <div>
      <center>
        <h1>
          ------------------------------------------------------------------Day
          4----------------------------------------------------------------------------
        </h1>
      </center>
      <InputComponent />
      <hr />
      <Form />
      <hr />
      <ConditionalMessageComponent />
      <hr />
      <RegistrationForm />
      <hr />
      <SelectDropdown />
      <hr />
      <ControlledToDoList />
      <hr />
      <DummyData />
      <hr />
      <TemperatureConverter />
      <hr />
      <SideBarNavigation />
      <hr />
      <TextFieldValidation />
      <hr />
      <ModalDialog />
      <hr />
      <EnhancedTable />
      <hr />
      <FormValidation />
    </div>
  );
};
