import styled from 'styled-components';

export const StyledNewsContainer = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 320px;
  max-height: 320px;
  padding: 15px;
  box-shadow: 3px 4px 3px ${({ theme }) => theme.colors.white};
`;
