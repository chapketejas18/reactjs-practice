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
import GenericAccordion from "../helper/GenericAccordian";

const day2Components = [
  {
    name: "Counter",
    component: <Counter />,
    description:
      "A simple component that displays a counter and allows the user to increment or decrement its value.",
  },
  {
    name: "Person Form",
    component: <PersonForm />,
    description:
      "A form component used for inputting and submitting personal information such as name, age, etc.",
  },
  {
    name: "ToDo List",
    component: <ToDoList />,
    description:
      "A component for managing a list of tasks or items to do, including features like adding new tasks, marking tasks as completed, and removing tasks.",
  },
  {
    name: "Random Number Generator",
    component: <RandomNumberGenerator />,
    description: "Generates and displays random number.",
  },
  {
    name: "Counter With Step",
    component: <CounterWithStep />,
    description:
      "Similar to the Counter component but includes the ability to specify a custom step value for incrementing or decrementing the counter.",
  },
  {
    name: "Clock",
    component: <Clock />,
    description: "Displays the current time, updating in real-time.",
  },
  {
    name: "Notification",
    component: <Notification />,
    description: "A component for displaying notifications to the user.",
  },
  {
    name: "Slide Show",
    component: <SlideShow />,
    description:
      "Presents a slideshow of images, allowing users to navigate through slides.",
  },
  {
    name: "Themed Context",
    component: <ThemedContext />,
    description: "Component for managing the theme for the application.",
  },
  {
    name: "Change Language",
    component: <ChangeLanguage />,
    description: "Enables users to change the language of the application.",
  },
  {
    name: "Add To Cart Products",
    component: <AddToCartProducts />,
    description:
      "A component for browsing and adding products to a shopping cart and keep track of total amount and quantity.",
  },
  {
    name: "Voting App",
    component: <VotingApp />,
    description: "Component to give vote for different pollitical parties.",
  },
  {
    name: "Parent",
    component: <Parent />,
    description: "Demonstrates parent-child component communication.",
  },
  {
    name: "Tasks",
    component: <Tasks />,
    description: "Component for managing a list of tasks.",
  },
  {
    name: "Student List",
    component: <StudentList />,
    description: "Displays a list of student names.",
  },
  {
    name: "Employee Salary",
    component: <EmployeeSalary />,
    description: "Component to calculate average of employee salaries",
  },
  {
    name: "Clipboard",
    component: <Clipboard />,
    description:
      "Provides functionality for interacting with the system clipboard, allowing users to copy or paste content.",
  },
  {
    name: "User Preference",
    component: <UserPreference />,
    description:
      "Manages user preferences or settings for the application, such as theme preferences & language settings/.",
  },
  {
    name: "Count Down",
    component: <CountDown />,
    description:
      "Displays a countdown timer, often used for tracking time remaining until a specific event or deadline.",
  },
];

export const Day2Component = () => {
  return <GenericAccordion components={day2Components} />;
};
