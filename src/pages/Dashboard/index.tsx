import React, { useState } from 'react';
import moment from 'moment';
import Layout from '../../components/Layout';
import LineChart from '../../components/LineChart';
import CompInfo from '../../components/CompInfo';
import CompNews from '../../components/CompNews';
import { StyledInfoSection } from './Dashboard.styled';
import CompStocks from '../../components/CompStocks';

export default function Dashboard() {
  const [currentStock, setCurrentStock] = useState('AAPL');

  const today = moment().unix();
  const yearAgo = moment().subtract(1, 'years').unix();

  return (
    <Layout>
      <section style={{ width: '100%' }}>
        <LineChart
          currentStock={currentStock}
          today={today}
          yearAgo={yearAgo}
        />
      </section>
      <StyledInfoSection>
        <CompInfo currentStock={currentStock} />
        <CompStocks currentStock={currentStock} />
        <CompNews currentStock={currentStock} />
      </StyledInfoSection>
    </Layout>
  );
}
