import styled from 'styled-components';

export const StyledNewsContainer = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  width: 90%;
  height: 320px;
  max-height: 320px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 4px 3px ${({ theme }) => theme.colors.white};

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;