import React from "react";
import usePagination from "./usePagination";

export const Pagination = () => {
  const { data, loading, nextPage, prevPage, currentPage } = usePagination(15);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
          <button onClick={prevPage} disabled={currentPage === 1}>
            prev
          </button>
          page:{currentPage}
          <button onClick={nextPage} disabled={currentPage === 10}>
            next
          </button>
        </ul>
      )}
    </>
  );
};
