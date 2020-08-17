import React from 'react';
import { StyledNewsContainer } from './CompNews.styled';
import { StyledLink } from '../../styles/GlobalStyles';
import NewsCard from '../NewsCard';

export interface Props {
  currentStock?: string;
}

export default function CompNews({ currentStock }: Props) {
  return (
    <StyledNewsContainer>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <StyledLink to='/news'>More News</StyledLink>
    </StyledNewsContainer>
  );
}
