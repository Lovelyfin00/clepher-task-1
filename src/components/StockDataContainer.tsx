import React, { useState, useMemo } from 'react';
import { useStockData } from '../hooks/useStockData';
import StockTable from './StockTable';
import Pagination from './Pagination';

interface StockDataContainerProps {
  symbol: string;
}

const ITEMS_PER_PAGE = 7;

const StockDataContainer: React.FC<StockDataContainerProps> = ({ symbol }) => {
  const { data, loading, error } = useStockData(symbol);
  const [currentPage, setCurrentPage] = useState(1);

  const { paginatedData, totalPages, startIndex } = useMemo(() => {
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    return { paginatedData, totalPages, startIndex };
  }, [data, currentPage]);

  if (loading) return <div className="flex justify-center items-center animate-spin text-2xl">Loading...</div>;
  if (error) return <div className="flex justify-center items-center text-red-500 text-2xl">{error} 😥</div>;

  return (
    <div className="container mx-auto px-12 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#242731]">{symbol} Stock Data</h1>
      <StockTable data={paginatedData} startIndex={startIndex} />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default StockDataContainer;