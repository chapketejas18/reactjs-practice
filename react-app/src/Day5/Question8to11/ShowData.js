import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "./Query";
import "./styles.css";

export const ShowData = () => {
  const { loading, error, data, refetch } = useQuery(GET_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 3;

  const handleQueryRetry = () => {
    refetch();
  };

  if (loading) return <div className="loader"></div>;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={handleQueryRetry}>Retry</button>
      </div>
    );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.countries.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(data.countries.length / entriesPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {currentEntries.map((country) => (
          <li key={country.code}>
            <p>Name: {country.name}</p>
            <p>Currency: {country.currency}</p>
            <p>Phone: {country.phone}</p>
            <p>Code: {country.code}</p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
