import React from "react";

import { ApolloProvider } from "@apollo/client";
import { client } from "./Question8to11/Client";
import { Pagination } from "./Question1to4";
import { AxiosApiErrorHandling } from "./Question5&6";
import { ShowData } from "./Question8to11";
import { ButtonsColor } from "./Question12";
import { Modalnew } from "./Question13";
import { MyComponentWithLogger } from "./Question15";
import { DisplayData } from "./Question16";
import { RouteApp } from "./Question14";

export const Day5Component = () => {
  return (
    <div>
      <center>
        <h1>
          ------------------------------------------------------------------Day
          5----------------------------------------------------------------------------
        </h1>
      </center>
      <Pagination />
      <hr />
      <AxiosApiErrorHandling />
      <hr />
      <ApolloProvider client={client}>
        <ShowData />
      </ApolloProvider>
      <hr />
      <ButtonsColor />
      <hr />
      <Modalnew />
      <hr />
      <RouteApp />
      <hr />
      <MyComponentWithLogger />
      <hr />
      <DisplayData />
    </div>
  );
};
