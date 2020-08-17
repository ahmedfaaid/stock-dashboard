import React from 'react';
import {
  StyledCompanyContainer,
  StyledImageContainer
} from './CompInfo.styled';
import { FullWidth, StyledTableData } from '../../styles/GlobalStyles';

export default function CompInfo() {
  return (
    <StyledCompanyContainer>
      <StyledImageContainer>
        <img src='https://dummyimage.com/50x50/fff/000' alt='logo' />
      </StyledImageContainer>
      <FullWidth>
        <table>
          <tr>
            <td>Symbol</td>
            <StyledTableData>AAPL</StyledTableData>
          </tr>
          <tr>
            <td>Name</td>
            <StyledTableData>Apple Inc.</StyledTableData>
          </tr>
          <tr>
            <td>Stock Price</td>
            <StyledTableData>$437.50</StyledTableData>
          </tr>
          <tr>
            <td>Exchange</td>
            <StyledTableData>NASDAQ/NMS (GLOBAL MARKET)</StyledTableData>
          </tr>
          <tr>
            <td>IPO</td>
            <StyledTableData>1980-12-12</StyledTableData>
          </tr>
          <tr>
            <td>Industry</td>
            <StyledTableData>Technology</StyledTableData>
          </tr>
        </table>
      </FullWidth>
    </StyledCompanyContainer>
  );
}
