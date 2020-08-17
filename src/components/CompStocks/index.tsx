import React from 'react';
import { StyledNewsContainer } from './CompStocks.styled';
import { FullWidth, StyledTableData } from '../../styles/GlobalStyles';

export interface Props {
  currentStock?: string;
}

export default function CompStocks({ currentStock }: Props) {
  return (
    <StyledNewsContainer>
      <FullWidth style={{ textAlign: 'center' }}>
        <table style={{ width: 'max-content', margin: 'auto' }}>
          <tr>
            <td>Current Price</td>
            <StyledTableData>$261.74</StyledTableData>
          </tr>
          <tr>
            <td>Opening Price</td>
            <StyledTableData>$261.07</StyledTableData>
          </tr>
          <tr>
            <td>High Price</td>
            <StyledTableData>$263.31</StyledTableData>
          </tr>
          <tr>
            <td>Low Price</td>
            <StyledTableData>$260.68</StyledTableData>
          </tr>
          <tr>
            <td>Previous Close Price</td>
            <StyledTableData>$259.45</StyledTableData>
          </tr>
        </table>
      </FullWidth>
    </StyledNewsContainer>
  );
}
