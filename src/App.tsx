import React from 'react';
import StockDataContainer from './components/StockDataContainer';

const App: React.FC = () => (
  <div className="bg-[#E7E7E9] h-screen flex justify-center items-center">
    <StockDataContainer symbol="IBM" />
  </div>
);

export default App;