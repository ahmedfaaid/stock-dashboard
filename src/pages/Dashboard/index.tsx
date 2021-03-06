/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import Layout from '../../components/Layout';
import LineChart from '../../components/LineChart';
import CompInfo from '../../components/CompInfo';
import CompNews from '../../components/CompNews';
import { StyledInfoSection } from './Dashboard.styled';
import CompStocks from '../../components/CompStocks';

function Dashboard() {
  const [currentStock, setCurrentStock] = useState('AAPL');

  const today = moment().unix();
  const yearAgo = moment().subtract(1, 'years').unix();

  return (
    <Layout showSidebar page='Dashboard'>
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

export default withRouter(Dashboard);
