import React from 'react';
import { StyledExDataCard } from './CompNews.styled';
import { StyledLink } from '../../styles/GlobalStyles';
import NewsCard from '../NewsCard';

export interface Props {
  currentStock?: string;
}

export default function CompNews({ currentStock }: Props) {
  return (
    <StyledExDataCard>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <StyledLink to='/news'>More News</StyledLink>
    </StyledExDataCard>
  );
}
