import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogoContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLogoLink = styled(NavLink)`
  text-decoration: none;
`;

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledMenubar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.light};
  outline: none;
  margin-right: 20px;

  &::placeholder {
    color: #b8b8b8;
  }
`;

export const StyledIconWrapper = styled.div`
  padding: 20px;
  cursor: pointer;
`;
