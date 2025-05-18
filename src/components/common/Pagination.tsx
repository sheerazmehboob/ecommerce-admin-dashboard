import React from 'react';

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, totalPages }) => {
  if (totalPages <= 1) return null;

  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, page + 2);
  if (end - start < 4) {
    if (start === 1) {
      end = Math.min(totalPages, start + 4);
    } else if (end === totalPages) {
      start = Math.max(1, end - 4);
    }
  }
  const pageNumbers = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button
        className="px-3 py-1 rounded bg-gray-700 text-gray-200 disabled:opacity-50"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      {start > 1 && (
        <>
          <button
            className={`px-3 py-1 rounded bg-gray-700 text-gray-200`}
            onClick={() => setPage(1)}
          >
            1
          </button>
          {start > 2 && <span className="px-2 text-gray-400">...</span>}
        </>
      )}
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`px-3 py-1 rounded ${page === num ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-2 text-gray-400">...</span>}
          <button
            className={`px-3 py-1 rounded bg-gray-700 text-gray-200`}
            onClick={() => setPage(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        className="px-3 py-1 rounded bg-gray-700 text-gray-200 disabled:opacity-50"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination; 
