import React from "react";
import ReactDOM from "react-dom/client";
// import App from './Day1/Question1/App';
// import UserCard from './Day1/Question2.js/UserCard';
// import App3 from './Day1/Question3.js/App3';
// import Counter from './Day1/Question4/Counter';
// import App4 from './Day1/Question5/App4';
// import App5 from './Day1/Question6/App5';
import Counter from "./Day2/Question1/Counter";
import PersonForm from "./Day2/Question2/PersonForm";
import ToDoList from "./Day2/Question3/ToDoList";
import RandomNumberGenerator from "./Day2/Question4/RandomNumberGenerator";
import CounterWithStep from "./Day2/Question5/CounterWithStep";
import Clock from "./Day2/Question6/Clock";
import Notification from "./Day2/Question7/Notification";
import SlideShow from "./Day2/Question8/SlideShow";
import App from "./Day2/Question9/App";
import Content from "./Day2/Question10/Content";
import { LanguageProvider } from "./Day2/Question10/LanguageContext";
import { CartProvider } from "./Day2/Question11/CartContext";
import Product from "./Day2/Question11/Product";
import ShoppingCart from "./Day2/Question11/ShoppingCart";
import Parent from "./Day2/Question13/Parent";
import { Tasks } from "./Day2/Question14/Tasks";
import StudentList from "./Day2/Question15/StudentList";
import EmployeeSalary from "./Day2/Question16/EmployeeSalary";
import CountdownTimer from "./Day2/Question19/CountdownTimer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App/>
    <UserCard
                name="John Doe"
                email="john@example.com"
                avatarURL="https://imgs.search.brave.com/crCTUJ8pbBvv7vu4QaiHZ1Pip5yleonH_bpz5GGzDQ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saWZl/aGFja2VyLmNvbS9p/bWFnZXJ5L2FydGlj/bGVzLzAxSEYyR0tO/UlFaNE1OMVlBNjM5/UTUzTlFWL2hlcm8t/aW1hZ2UuZmlsbC5z/aXplXzEyNDh4NzAy/LnYxNjk5ODMzNTkw/LnBuZw"
    />
    <UserCard
                name="Joey Dope"
                email="joyedope@example.com"
                avatarURL="https://imgs.search.brave.com/crCTUJ8pbBvv7vu4QaiHZ1Pip5yleonH_bpz5GGzDQ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saWZl/aGFja2VyLmNvbS9p/bWFnZXJ5L2FydGlj/bGVzLzAxSEYyR0tO/UlFaNE1OMVlBNjM5/UTUzTlFWL2hlcm8t/aW1hZ2UuZmlsbC5z/aXplXzEyNDh4NzAy/LnYxNjk5ODMzNTkw/LnBuZw"
    />
    <App3/>
    <Counter/>
    <App4/>
    <App5/> */}
    <Counter />
    <hr/>
    <PersonForm />
    <hr/>
    <ToDoList />
    <hr/>
    <RandomNumberGenerator />
    <hr/>
    <CounterWithStep />
    <hr/>
    <Clock />
    <hr/>
    <Notification />
    <hr/>
    <SlideShow />
    <hr/>
    <App />
    <hr/>
    <LanguageProvider>
      <Content />
    </LanguageProvider>
    <hr/>
    <CartProvider>
      <Product id={1} name="Product 1" price={10} />
      <Product id={2} name="Product 2" price={20} />
      <Product id={3} name="Product 3" price={30} />
      <ShoppingCart/>
    </CartProvider>
    <hr/>
    <Parent/>
    <hr/>
    <Tasks/>
    <hr/>
    <StudentList/>
    <hr/>
    <EmployeeSalary/>
    <hr/>
    <CountdownTimer/>
  </React.StrictMode>
);
