const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface StockData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export async function fetchStockData(symbol: string): Promise<StockData[]> {
  const url = `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  
  const timeSeries = data['Time Series (Daily)'];
  
  return Object.entries(timeSeries).map(([date, values]: [string, any]) => ({
    date,
    open: values['1. open'],
    high: values['2. high'],
    low: values['3. low'],
    close: values['4. close'],
    volume: values['5. volume'],
  }));
}