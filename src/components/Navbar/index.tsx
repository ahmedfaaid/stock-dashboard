import React from 'react';
import { ReactComponent as Notification } from '../../static/notification.svg';
import { ReactComponent as Person } from '../../static/person.svg';

import {
  StyledNavbar,
  StyledLogoContainer,
  StyledLogoLink,
  StyledNavContainer,
  StyledMenubar,
  StyledInput,
  StyledIconWrapper
} from './Navbar.styled';

const iconStyles = { fill: '#fff', width: '38px', height: '38px' };

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogoContainer>
        <StyledLogoLink to='/'>FinnStracka</StyledLogoLink>
      </StyledLogoContainer>
      <StyledNavContainer>
        <StyledMenubar>
          <StyledInput type='text' placeholder='Search here...' />
          <StyledIconWrapper>
            <Notification style={iconStyles} />
          </StyledIconWrapper>
          <StyledIconWrapper>
            <Person style={iconStyles} />
          </StyledIconWrapper>
        </StyledMenubar>
      </StyledNavContainer>
    </StyledNavbar>
  );
}
