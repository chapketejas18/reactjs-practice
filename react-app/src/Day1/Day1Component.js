import React from "react";
import { Greetings } from "./Question1";
import { UserCard } from "./Question2";
import { CounterOne } from "./Question4";
import { TaskArray } from "./Question5";
import { ButtonColor } from "./Question6";

export const Day1Component = () => {
  return (
    <>
      <center>
        <h1>
          ------------------------------------------------------------------Day
          1----------------------------------------------------------------------------
        </h1>
      </center>
      <Greetings />
      <hr />
      <UserCard />
      <hr />
      <CounterOne />
      <hr />
      <TaskArray />
      <hr />
      <ButtonColor />
    </>
  );
};
