import { ApolloProvider } from "@apollo/client";
import { client } from "./Question8to11/Client";
import { Pagination } from "./Question1to4";
import { AxiosApiErrorHandling } from "./Question5&6";
import { ShowData } from "./Question8to11";
import { ButtonsColor } from "./Question12";
import { Modalnew } from "./Question13";
import { MyComponentWithLogger } from "./Question15";
import { DisplayData } from "./Question16";
import GenericAccordion from "../helper/GenericAccordian";

const day5Components = [
  {
    name: "Pagination",
    component: <Pagination />,
    description:
      "A component for implementing pagination functionality, allowing users to navigate through large sets of data.",
  },
  {
    name: "Axios API Error Handling",
    component: <AxiosApiErrorHandling />,
    description:
      "A component to display data using Axios and demonstrating error handling techniques when making API requests using Axios.",
  },
  {
    name: "Show Data",
    component: (
      <ApolloProvider client={client}>
        <ShowData />
      </ApolloProvider>
    ),
    description:
      "A component that utilizes Apollo Client to fetch and display data from a GraphQL API.",
  },
  {
    name: "Buttons Color",
    component: <ButtonsColor />,
    description:
      "A component showcasing different colored buttons for user interaction.",
  },
  {
    name: "Modal",
    component: <Modalnew />,
    description:
      "A component that displays modal dialogs with customizable content.",
  },
  {
    name: "My Component With Logger",
    component: <MyComponentWithLogger />,
    description:
      "A custom component with logging functionality added for debugging and monitoring purposes.",
  },
  {
    name: "Display Data",
    component: <DisplayData />,
    description:
      "A component for displaying fetched data using HOC and custom hook.",
  },
];

export const Day5Component = () => {
  return <GenericAccordion components={day5Components} />;
};
