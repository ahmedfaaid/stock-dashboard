import React, { useEffect, useState } from 'react';
import { StyledImageContainer } from './CompInfo.styled';
import { FullWidth, StyledTableData } from '../../styles/GlobalStyles';
import DataCard from '../DataCard';

export interface Props {
  currentStock?: string;
}

export interface ICompInfo {
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  webUrl: string;
  logo: string;
  finnhubIndustry: string;
}

export default function CompInfo({ currentStock }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [compInfo, setCompInfo] = useState<null | ICompInfo>(null);

  useEffect(() => {
    async function fetchCompanyInfo() {
      setIsLoading(true);

      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}stock/profile2?symbol=${currentStock}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`
        );

        const data = await res.json();

        setCompInfo(data);
      } catch (error) {
        setError(true);
        console.log(`There was an error ${error}`);
      }

      setIsLoading(false);
    }

    fetchCompanyInfo();
  }, [currentStock]);

  if (isLoading) return <p style={{ color: '#ffffff' }}>Loading...</p>;
  if (error) return <p style={{ color: '#ffffff' }}>There was an error</p>;

  return (
    <DataCard>
      <StyledImageContainer>
        <img src={compInfo!.logo} style={{ width: '50px' }} alt='logo' />
      </StyledImageContainer>
      <FullWidth>
        <table>
          <tbody>
            <tr>
              <td>Symbol</td>
              <StyledTableData>{compInfo!.ticker}</StyledTableData>
            </tr>
            <tr>
              <td>Name</td>
              <StyledTableData>{compInfo!.name}</StyledTableData>
            </tr>
            <tr>
              <td>Market Cap</td>
              <StyledTableData>
                {compInfo!.marketCapitalization}
              </StyledTableData>
            </tr>
            <tr>
              <td>Exchange</td>
              <StyledTableData>{compInfo!.exchange}</StyledTableData>
            </tr>
            <tr>
              <td>IPO</td>
              <StyledTableData>{compInfo!.ipo}</StyledTableData>
            </tr>
            <tr>
              <td>Industry</td>
              <StyledTableData>{compInfo!.finnhubIndustry}</StyledTableData>
            </tr>
          </tbody>
        </table>
      </FullWidth>
    </DataCard>
  );
}
