/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { StyledChartContainer } from './LineChart.styled';

export interface Props {
  currentStock?: string;
}

export default function LineChart({ currentStock }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'stock-line',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: []
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
    }
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Closing Price',
      data: []
    }
  ]);

  useEffect(() => {
    const today = moment().unix();
    const yearAgo = moment().subtract(1, 'years').unix();

    async function fetchData(): Promise<void> {
      setIsLoading(true);

      try {
        const data = await fetch(
          `${process.env.REACT_APP_BASE_URL}stock/candle?symbol=${currentStock}&resolution=D&from=${yearAgo}&to=${today}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`
        )
          .then(res => res.json())
          .catch(err => {
            setError(true);
            setIsLoading(false);
            console.log(err);
          });

        console.log(data);

        const convertedDates = data.t.map((date: number) =>
          moment.unix(date).format('DD-MM-YYYY')
        );

        setChartOptions(c => ({
          ...chartOptions,
          xaxis: {
            categories: convertedDates
          }
        }));

        setChartSeries(c => [
          {
            name: 'Closing Price',
            data: data.c
          }
        ]);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(`There was an error ${error}`);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStock]);

  if (isLoading) return <p style={{ color: '#ffffff' }}>Loading...</p>;
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
