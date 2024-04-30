import React from "react";
import usePagination from "./usePagination";
import "./styles.css";

export const Pagination = () => {
  const { data, loading, nextPage, prevPage, currentPage } = usePagination(15);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
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
