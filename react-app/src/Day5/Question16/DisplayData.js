import React from "react";
import withDataFetching from "./withDataFetching";

const DisplayData = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default withDataFetching(DisplayData);
