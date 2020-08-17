import React, { useState } from 'react';
import Layout from '../../components/Layout';
import LineChart from '../../components/LineChart';
import CompInfo from '../../components/CompInfo';
import CompNews from '../../components/CompNews';
import { StyledInfoSection } from './Dashboard.styled';
import CompStocks from '../../components/CompStocks';

export default function Dashboard() {
  const [currentStock, setCurrentStock] = useState('AAPL');

  return (
    <Layout>
      <section style={{ width: '100%' }}>
        <LineChart currentStock={currentStock} />
      </section>
      <StyledInfoSection>
        <CompInfo currentStock={currentStock} />
        <CompStocks currentStock={currentStock} />
        <CompNews currentStock={currentStock} />
      </StyledInfoSection>
    </Layout>
  );
}
