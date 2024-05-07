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
import GenericAccordion from "../helper/GenericAccordian";

const day5Components = [
  { name: "Pagination", component: <Pagination /> },
  { name: "Axios API Error Handling", component: <AxiosApiErrorHandling /> },
  {
    name: "Show Data",
    component: (
      <ApolloProvider client={client}>
        <ShowData />
      </ApolloProvider>
    ),
  },
  { name: "Buttons Color", component: <ButtonsColor /> },
  { name: "Modal", component: <Modalnew /> },
  { name: "Route App", component: <RouteApp /> },
  { name: "My Component With Logger", component: <MyComponentWithLogger /> },
  { name: "Display Data", component: <DisplayData /> },
];

export const Day5Component = () => {
  return <GenericAccordion components={day5Components} />;
};
