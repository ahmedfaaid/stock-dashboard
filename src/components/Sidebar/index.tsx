import React from 'react';
import { StyledSidebar, StyledSideNav, StyledLink } from './Sidebar.styled';

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledSideNav>
        <ul>
          <li>
            <StyledLink to='/dashboard'>Dashboard</StyledLink>
          </li>
          <li>
            <StyledLink to='/news'>News</StyledLink>
          </li>
          <li>
            <StyledLink to='/stocks'>Stocks List</StyledLink>
          </li>
        </ul>
      </StyledSideNav>
    </StyledSidebar>
  );
}
