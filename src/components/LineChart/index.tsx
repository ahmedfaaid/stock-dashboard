/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { StyledChartContainer } from './LineChart.styled';

export interface Props {
  currentStock: string;
  today: number;
  yearAgo: number;
}

export default function LineChart({ currentStock, today, yearAgo }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'stock-line',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: [],
      type: 'datetime',
      labels: {
        format: 'MMM yy'
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#ffffff']
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    colors: ['#ffffff'],
    grid: {
      borderColor: '#444040',
      position: 'back'
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0
      }
    },
    markers: {
      size: 0,
      shape: 'circle',
      strokeWidth: 2
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      theme: 'dark'
    },
    noData: {
      text: 'Loading...',
      style: {
        fontSize: '20px'
      }
    }
  });

  const [chartSeries, setChartSeries] = useState<
    {
      name: string;
      data: any[];
    }[]
  >([
    {
      name: 'Closing Price',
      data: []
    }
  ]);

  useEffect(() => {
    async function fetchCandles() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}stock/candle?symbol=${currentStock}&resolution=D&from=${yearAgo}&to=${today}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`
        );
        const data = await res.json();

        // convert dates to format readable by apex charts datetime
        const convertedDates = data.t.map(date =>
          moment.unix(date).format('LLLL')
        );

        // convert closing prices to 2 decimal places
        const convertedPrices = data.c.map(price => price.toFixed(2));

        setChartOptions(prevState => ({
          ...prevState,
          xaxis: {
            ...prevState.xaxis,
            categories: convertedDates
          }
        }));
        setChartSeries([
          {
            name: 'Closing Price',
            data: [...convertedPrices]
          }
        ]);
      } catch (error) {
        console.log(`There was an error ${error}`);
        setError(error);
      }
      setIsLoading(false);
    }

    fetchCandles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStock, today, yearAgo]);

  if (error) return <p style={{ color: '#ffffff' }}>There was an error</p>;

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
