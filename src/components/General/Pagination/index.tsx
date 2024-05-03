import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  primaryColor: string;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, primaryColor, onPageChange }) => {
  const maxPagesToShow = 8;

  const calculatePageRange = () => {
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = currentPage - halfMaxPagesToShow;
    let endPage = currentPage + halfMaxPagesToShow;

    if (startPage <= 0) {
      startPage = 1;
      endPage = Math.min(totalPages, maxPagesToShow);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const pagesToShow = calculatePageRange();

  const hoverColor = `hover:bg-${primaryColor}`;

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex">
        <li>
          <button
            onClick={() => onPageChange(1)}
            className={`px-3 py-2 mx-1 rounded-md border border-slate ${
              currentPage === 1 ? 'hidden' : 'text-white'
            } ${hoverColor} hover:text-black focus:outline-none focus:${primaryColor} focus:text-white`}
            disabled={currentPage === 1}
          >
            {'<<'} First
          </button>
        </li>

        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className={`px-3 py-2 mx-1 rounded-md border border-slate ${
              currentPage === 1 ? 'hidden' : 'text-white'
            } ${hoverColor} focus:outline-none focus:${primaryColor} focus:text-white`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>

        {pagesToShow.map((page, index) => (
          <li key={index}>
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 mx-1 rounded-md border border-slate ${
                currentPage === page ? primaryColor : 'text-white'
              } ${hoverColor} focus:outline-none focus:${primaryColor} focus:text-white`}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className={`px-3 py-2 mx-1 rounded-md border border-slate ${
              currentPage === totalPages ? 'hidden' : 'text-white'
            } ${hoverColor} hover:text-white focus:outline-none focus:${primaryColor} focus:text-white`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
