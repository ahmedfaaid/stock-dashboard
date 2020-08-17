import React from 'react';
import Layout from '../../components/Layout';
import LineChart from '../../components/LineChart';
import CompInfo from '../../components/CompInfo';
import CompNews from '../../components/CompNews';
import { StyledInfoSection } from './Dashboard.styled';
import CompStocks from '../../components/CompStocks';

export default function Dashboard() {
  return (
    <Layout>
      <section style={{ width: '100%' }}>
        <LineChart />
      </section>
      <StyledInfoSection>
        <CompInfo />
        <CompStocks />
        <CompNews />
      </StyledInfoSection>
    </Layout>
  );
}
