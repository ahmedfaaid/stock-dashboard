import styled from 'styled-components';

export const StyledDataCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  width: 90%;
  height: 320px;
  max-height: 320px;
  padding: 15px;
  box-shadow: 3px 4px 3px ${({ theme }) => theme.colors.white};

  table {
    margin-left: 20px;
  }

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;
