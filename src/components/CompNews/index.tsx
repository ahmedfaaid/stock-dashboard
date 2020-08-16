import React from 'react';
import { StyledNewsContainer } from './CompNews.styled';
import { StyledLink } from '../../styles/GlobalStyles';
import NewsCard from '../NewsCard';

export default function CompNews() {
  return (
    <StyledNewsContainer>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <StyledLink to='/news'>More News</StyledLink>
    </StyledNewsContainer>
  );
}
