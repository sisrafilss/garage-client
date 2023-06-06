import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="flex items-center space-x-2">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
              className={`px-3 py-1 rounded ${
                isFirstPage ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
              }`}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
              className={`px-3 py-1 rounded ${
                isLastPage ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
