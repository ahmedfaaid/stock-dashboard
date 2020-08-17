import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  
  body {
    background-color: #1f1f1f;
    min-height: 100vh;
  }

  td {
      padding-top: 10px;
      padding-bottom: 10px;
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
