import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSidebar = styled.aside`
  width: 20%;
  height: calc(100vh - 81px);
  min-height: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const StyledSideNav = styled.nav`
  & ul {
    list-style: none;

    & li {
      margin: 20px 0;
      width: 100%;
    }
  }
`;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 20px;
  display: inline-block;
  padding: 20px 10px;
  width: 100%;
  border-radius: 10px;
  transition: all 0.15s;

  &:hover,
  &.${activeClassName} {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
