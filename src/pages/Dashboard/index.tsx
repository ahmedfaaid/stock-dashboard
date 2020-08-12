import React from 'react';
import Layout from '../../components/Layout';
import LineChart from '../../components/LineChart/LineChart';
import { StyledChartContainer } from './Dashboard.styled';

export default function Dashboard() {
  return (
    <Layout>
      <StyledChartContainer>
        <LineChart />
      </StyledChartContainer>
    </Layout>
  );
}
