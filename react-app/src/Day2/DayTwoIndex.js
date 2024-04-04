import Counter from "./Question1/Counter";
import Content from "./Question10/Content";
import { LanguageProvider } from "./Question10/LanguageContext";
import { CartProvider } from "./Question11/CartContext";
import Product from "./Question11/Product";
import ShoppingCart from "./Question11/ShoppingCart";
import VotingApp from "./Question12/VotingApp";
import Parent from "./Question13/Parent";
import { Tasks } from "./Question14/Tasks";
import StudentList from "./Question15/StudentList";
import EmployeeSalary from "./Question16/EmployeeSalary";
import Clipboard from "./Question17/Clipboard";
import UserPreference from "./Question18/UserPreference";
import CountDown from "./Question19/CountDown";
import PersonForm from "./Question2/PersonForm";
import ToDoList from "./Question3/ToDoList";
import RandomNumberGenerator from "./Question4/RandomNumberGenerator";
import CounterWithStep from "./Question5/CounterWithStep";
import Clock from "./Question6/Clock";
import Notification from "./Question7/Notification";
import SlideShow from "./Question8/SlideShow";
import { ThemeProvider } from "./Question9/ThemeProvider";
import ThemedComponent from "./Question9/ThemedComponent";

export default function DayTwoIndex() {
  return (
    <>
      <Counter />
      <hr />
      <PersonForm />
      <hr />
      <ToDoList />
      <hr />
      <RandomNumberGenerator />
      <hr />
      <CounterWithStep />
      <hr />
      <Clock />
      <hr />
      <Notification />
      <hr />
      <SlideShow />
      <hr />
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
      <hr />
      <LanguageProvider>
        <Content />
      </LanguageProvider>
      <hr />
      <CartProvider>
        <Product id={1} name="Product 1" price={10} />
        <Product id={2} name="Product 2" price={20} />
        <Product id={3} name="Product 3" price={30} />
        <ShoppingCart />
      </CartProvider>
      <hr />
      <VotingApp />
      <hr />
      <Parent />
      <hr />
      <Tasks />
      <hr />
      <StudentList />
      <hr />
      <EmployeeSalary />
      <hr />
      <Clipboard />
      <hr />
      <UserPreference />
      <hr />
      <CountDown />
      <hr />
    </>
  );
}
