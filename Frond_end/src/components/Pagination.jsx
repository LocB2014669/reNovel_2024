import React from "react";
import { DOTS, usePagination } from "../hooks/usePagination";

const Pagination = ({
  currentPage,
  siblingCount = 1,
  totalPageCount,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white dark:bg-base-100 xs:flex-row xs:justify-between">
      <div className="flex items-center">
        <button
          disabled={currentPage === 1}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white dark:bg-base-100 border dark:border-base-200 rounded-l-xl hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={onPrevious}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <button
                key={index}
                className="cursor-default w-full px-4 py-2 text-base bg-white dark:bg-base-100 border dark:border-base-200"
              >
                &#8230;
              </button>
            );
          }

          return (
            <button
              key={index}
              type="button"
              className={`w-full px-4 py-2 text-base font-bold   border-t border-b dark:border-base-200  ${
                pageNumber === currentPage
                  ? "textt-white bg-purple-500 "
                  : "text-gray-600 bg-white dark:bg-base-100 hover:bg-gray-100 "
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          disabled={currentPage === lastPage}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white dark:bg-base-100 border-t dark:border-base-200 border-b border-r rounded-r-xl hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={onNext}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
