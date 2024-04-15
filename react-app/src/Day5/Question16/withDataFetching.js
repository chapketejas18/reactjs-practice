import axios from "axios";
import React, { useEffect, useState } from "react";

const withDataFetching = (WrappedComponent) => {
  const WithDataFetching = () => {
    const [data, setData] = useState();

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=20"
          );
          if (response.status !== 200) {
            throw new Error("Failed to fetch data");
          }
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      getData();
    }, []);

    return <WrappedComponent data={data} />;
  };

  return WithDataFetching;
};

export default withDataFetching;