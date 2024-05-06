import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

const withDataFetching = (WrappedComponent) => {
  const WithDataFetching = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      const getData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=20"
          );
          if (response.status !== 200) {
            throw new Error("Failed to fetch data");
          }
          setData(response.data);
          setLoading(false);
        } catch (error) {
          setLoading(true);
          console.error("Error fetching data:", error);
          setError(true);
          setLoading(false);
        }
      };

      getData();
    }, []);

    if (loading) {
      return <div className="loader"></div>;
    }
    if (error) {
      return <div>Error fetching data. Please try again later.</div>;
    }
    if (!data || data.length === 0) {
      return <div>No data available at the moment.</div>;
    }

    return <WrappedComponent data={data} />;
  };

  return WithDataFetching;
};

export default withDataFetching;
