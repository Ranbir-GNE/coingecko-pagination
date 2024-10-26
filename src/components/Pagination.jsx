import React from "react";

const Pagination = ({ currentPage, onPageChange, hasData }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2">{currentPage}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasData}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
