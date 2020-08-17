import styled from 'styled-components';

export const StyledCompanyContainer = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  width: 90%;
  height: 320px;
  max-height: 320px;
  padding: 15px;
  box-shadow: 3px 4px 3px ${({ theme }) => theme.colors.white};

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledImageContainer = styled.div`
  text-align: center;
`;
