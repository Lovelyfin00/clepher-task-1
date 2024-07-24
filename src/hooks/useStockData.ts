import { useState, useEffect } from 'react';
import { fetchStockData, StockData } from '../api/stockApi';

export const useStockData = (symbol: string) => {
  const [data, setData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchStockData(symbol)
      .then(stockData => {
        setData(stockData);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, [symbol]);

  return { data, loading, error };
};