import React from 'react';
import { StyledDataCard } from './DataCard.styled';

export interface Props {
  children?: React.ReactNode;
}

export default function DataCard({ children }) {
  return <StyledDataCard>{children}</StyledDataCard>;
}
