import { useState, useEffect } from 'react';

export const useFetchData = url => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    async function fetchStockAPI() {
      const response = await fetch(`https://finnhub.io/api/v1/stock/${url}`);
      const data = await response.json();
      setStockData(data);
    }

    fetchStockAPI();
  }, [url]);

  return stockData;
};
