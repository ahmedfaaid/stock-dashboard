/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { StyledChartContainer } from './LineChart.styled';

export default function LineChart() {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'stock-line',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#ffffff'],
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#ffffff'],
    grid: {
      borderColor: '#444040',
      position: 'back',
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0,
      shape: 'circle',
      strokeWidth: 2,
    },
    tooltip: {
      theme: 'dark',
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Hours of Sleep',
      data: [4.4, 3.5, 5.0, 4.2, 6.8, 8.1, 8.3],
    },
  ]);

  return (
    <StyledChartContainer>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type='area'
        width='100%'
        height='100%'
      />
    </StyledChartContainer>
  );
}
