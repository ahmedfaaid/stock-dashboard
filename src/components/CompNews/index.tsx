import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { StyledExDataCard } from './CompNews.styled';
import { StyledLink } from '../../styles/GlobalStyles';
import NewsCard from '../NewsCard';

export interface Props {
  currentStock?: string;
}

export interface INews {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export default function CompNews({ currentStock }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newsData, setNewsData] = useState<null | INews[]>(null);

  useEffect(() => {
    async function fetchLatestNews() {
      const today = moment().format('YYYY-MM-DD');
      const monthAgo = moment().subtract(1, 'months').format('YYYY-MM-DD');

      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}company-news?symbol=${currentStock}&from=${monthAgo}&to=${today}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`
        );

        const data = (await res.json()) as any;

        const filteredData = [...data].sort((a, b) => b.id - a.id).slice(0, 3);

        setNewsData(filteredData);
      } catch (error) {
        setError(true);
        console.log(`There was an error ${error}`);
      }

      setIsLoading(false);
    }

    fetchLatestNews();
  }, [currentStock]);

  if (isLoading) return <p style={{ color: '#ffffff' }}>Loading...</p>;
  if (error) return <p style={{ color: '#ffffff' }}>There was an error</p>;

  return (
    <StyledExDataCard>
      {newsData!.map(news => (
        <NewsCard key={news.id} news={news} />
      ))}
      <StyledLink to='/news'>More News</StyledLink>
    </StyledExDataCard>
  );
}
