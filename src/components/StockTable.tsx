import React from 'react';
import { StockData } from '../api/stockApi';

interface StockTableProps {
  data: StockData[];
  startIndex: number;
}

const StockTable: React.FC<StockTableProps> = React.memo(({ data, startIndex }) => (
  <table className="w-full table-auto">
    <thead>
      <tr className="bg-white border-b text-[#007AFF] text-[20px]">
        <th className="px-4 py-4">S/N</th>
        <th className="px-4 py-4">Date</th>
        <th className="px-4 py-4">Open</th>
        <th className="px-4 py-4">High</th>
        <th className="px-4 py-4">Low</th>
        <th className="px-4 py-4">Close</th>
        <th className="px-4 py-4">Volume</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ date, open, high, low, close, volume }, index) => (
        <tr key={date} className="border-b text-center bg-white">
          <td className="px-4 py-3">{startIndex + index + 1}</td>
          <td className="px-4 py-3">{date}</td>
          <td className="px-4 py-3">{open}</td>
          <td className="px-4 py-3">{high}</td>
          <td className="px-4 py-3">{low}</td>
          <td className="px-4 py-3">{close}</td>
          <td className="px-4 py-3">{volume}</td>
        </tr>
      ))}
    </tbody>
  </table>
));

export default StockTable;