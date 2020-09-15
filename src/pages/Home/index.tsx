import React from 'react';
import Layout from '../../components/Layout';
import {
  StyledHome,
  StyledHeroContainer,
  StyledHeroButton
} from './Home.styled';

export default function Home() {
  return (
    <Layout showSidebar={false}>
      <StyledHome>
        <StyledHeroContainer>
          <h2>Track and monitor company stocks and news</h2>
          <p>Simple interface</p>
          <p>No clutter</p>
          <p>Straight forward graphs and news.</p>
          <div style={{ marginTop: '40px' }}>
            <StyledHeroButton to='/register'>Get Started</StyledHeroButton>
            <StyledHeroButton to='/login'>Login</StyledHeroButton>
          </div>
        </StyledHeroContainer>
      </StyledHome>
    </Layout>
  );
}
