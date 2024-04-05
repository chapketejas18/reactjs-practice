import InputComponent from "./Question1/InputComponent";
import Form from "./Question2/Form";
import ConditionalMessageComponent from "./Question3/ConditionalMessageComponent";
import RegistrationForm from "./Question4/RegistrationForm";
import SelectDropdown from "./Question5/SelectDropdown";
import ControlledToDoList from "./Question6/ControlledToDoList";
import DummyData from "./Question7/DummyData";
import TemperatureConverter from "./Question8/TemperatureConverter";
import SideBarNavigation from "./Question9/SideBarNavigation";
import CheckInput from "./Question10/CheckInput";

export default function DayFourIndex(){
    return(
        <>
            <InputComponent/>
            <hr/>
            <Form/>
            <hr/>
            <ConditionalMessageComponent/>
            <hr/>
            <RegistrationForm/>
            <hr/>
            <SelectDropdown/>
            <hr/>
            <ControlledToDoList/>
            <hr/>
            <DummyData/>
            <hr/>
            <TemperatureConverter/>
            <hr/>
            <SideBarNavigation/>
            <hr/>
            <CheckInput/>
        </>
    )
}