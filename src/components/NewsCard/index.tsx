import React from 'react';
import {
  StyledNewsCard,
  StyledImageContainer,
  StyledNewsHeading
} from './NewsCard.styled';

// export interface Props {
//   category: string;
//   datetime: number;
//   headline: string;
//   id: number;
//   image: string;
//   related: string;
//   source: string;
//   summary: string;
//   url: string;
// }

export default function NewsCard({ news }) {
  return (
    <StyledNewsCard
      href={news.url}
      target='_blank'
      rel='noopener noreferrer'
      style={{ marginBottom: '10px' }}
    >
      <StyledImageContainer>
        <img src={news.image} style={{ width: '100%' }} alt='News Feature' />
      </StyledImageContainer>
      <StyledNewsHeading>
        <h3>{news.headline}</h3>
      </StyledNewsHeading>
    </StyledNewsCard>
  );
}
