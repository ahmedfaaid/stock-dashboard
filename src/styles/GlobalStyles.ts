import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  
  body {
    background-color: #1f1f1f;
    min-height: 100vh;
  }

  table {
    border-collapse: collapse;
  }

  td {
      padding-top: 5px;
      padding-bottom: 5px;
    }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue};
  margin-top: 5px;
`;

export const FullWidth = styled.div`
  width: 100%;
`;

export const StyledTableData = styled.td`
  padding-left: 10px;
  font-weight: 700;
`;
