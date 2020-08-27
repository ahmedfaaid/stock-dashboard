import styled from 'styled-components';

export const StyledNewsCard = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 3px 10px -5px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const StyledImageContainer = styled.div`
  width: 50px;
`;

export const StyledNewsHeading = styled.div`
  margin-left: 10px;

  h3 {
    font-size: 16px;
    font-weight: 400;
  }
`;
