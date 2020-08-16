import React from 'react';
import { StyledNewsCard, StyledNewsHeading } from './NewsCard.styled';

export default function NewsCard() {
  return (
    <StyledNewsCard style={{ marginBottom: '10px' }}>
      <div>
        <img src='https://dummyimage.com/50x50/000/fff' alt='News Feature' />
      </div>
      <StyledNewsHeading>
        <h3>
          More sops needed to boost electronic manufacturing: Top govt official.
        </h3>
      </StyledNewsHeading>
    </StyledNewsCard>
  );
}
