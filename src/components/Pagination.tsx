import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = React.memo(({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center space-x-2 mt-4">
    <button
      onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-[#007AFF] text-white rounded disabled:bg-gray-300"
    >
      Previous
    </button>
    <span>{currentPage} of {totalPages}</span>
    <button
      onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-[#007AFF] text-white rounded disabled:bg-gray-300"
    >
      Next
    </button>
  </div>
));

export default Pagination;