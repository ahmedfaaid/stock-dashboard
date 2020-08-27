import React, { useState, useEffect } from 'react';
import { StyledExDataCard } from './CompStocks.styled';
import { FullWidth, StyledTableData } from '../../styles/GlobalStyles';

export interface Props {
  currentStock?: string;
}

export interface ICompStocks {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}

export default function CompStocks({ currentStock }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quotes, setQuotes] = useState<null | ICompStocks>(null);

  useEffect(() => {
    async function fetchQuotes() {
      setIsLoading(true);

      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}quote?symbol=${currentStock}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`
        );

        const data = await res.json();

        setQuotes(data);
      } catch (error) {
        setError(true);
        console.log(`There was an error ${error}`);
      }

      setIsLoading(false);
    }

    fetchQuotes();
  }, [currentStock]);

  if (isLoading) return <p style={{ color: '#ffffff' }}>Loading...</p>;
  if (error) return <p style={{ color: '#ffffff' }}>There was an error</p>;

  return (
    <StyledExDataCard>
      <FullWidth>
        <table style={{ width: 'max-content', margin: 'auto' }}>
          <tbody>
            <tr>
              <td>Current Price</td>
              <StyledTableData>{quotes!.c.toFixed(2)}</StyledTableData>
            </tr>
            <tr>
              <td>Opening Price</td>
              <StyledTableData>{quotes!.o.toFixed(2)}</StyledTableData>
            </tr>
            <tr>
              <td>High Price</td>
              <StyledTableData>{quotes!.h.toFixed(2)}</StyledTableData>
            </tr>
            <tr>
              <td>Low Price</td>
              <StyledTableData>{quotes!.l.toFixed(2)}</StyledTableData>
            </tr>
            <tr>
              <td>Previous Close Price</td>
              <StyledTableData>{quotes!.pc.toFixed(2)}</StyledTableData>
            </tr>
          </tbody>
        </table>
      </FullWidth>
    </StyledExDataCard>
  );
}
