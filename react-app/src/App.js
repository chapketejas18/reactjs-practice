import React from "react";
import {
  Greetings,
  UserCard,
  CounterOne,
  TaskArray,
  ButtonColor,
} from "./Day1";
import {
  Counter,
  PersonForm,
  ToDoList,
  RandomNumberGenerator,
  CounterWithStep,
  Clock,
  Notification,
  SlideShow,
  ThemedContext,
  ChangeLanguage,
  AddToCartProducts,
  VotingApp,
  Parent,
  Tasks,
  StudentList,
  EmployeeSalary,
  Clipboard,
  UserPreference,
  CountDown,
} from "./Day2";
import {
  AxiosApi,
  AxiosApiErrorHandling,
  FetchApi,
  FetchApiWithErrorHandling,
  FetchGraphQl,
  LoadingIndicator,
  Modal,
  MyComponentWithLogger,
  Pagination,
  ShowData,
} from "./Day5";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Day5/Question891011/Client";
import { ButtonsColor } from "./Day5/Question12";

function App() {
  return (
    <div>
      <Greetings />
      <UserCard />
      <CounterOne />
      <TaskArray />
      <ButtonColor />
      <Counter />
      <PersonForm />
      <ToDoList />
      <RandomNumberGenerator />
      <CounterWithStep />
      <Clock />
      <Notification />
      <SlideShow />
      <ThemedContext />
      <ChangeLanguage />
      <AddToCartProducts />
      <VotingApp />
      <Parent />
      <Tasks />
      <StudentList />
      <EmployeeSalary />
      <Clipboard />
      <UserPreference />
      <CountDown />
      <Pagination />
      <AxiosApiErrorHandling />
      <ApolloProvider client = {client}>
        <ShowData />
      </ApolloProvider>
      <ButtonsColor/>
      {/* <Modal/> */}
      <MyComponentWithLogger/>
    </div>
  );
}

export default App;
