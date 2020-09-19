import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  showSidebar: Boolean;
  page: String;
}

const StyledMain = styled.main`
  position: relative;
  display: flex;
  height: calc(100vh - 81px);
`;

export default function Layout({
  children,
  showSidebar,
  page,
  ...props
}: LayoutProps) {
  return (
    <div>
      <Helmet>
        <title>{`${page} | FinnStracka`}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <header>
        <Navbar />
      </header>
      <StyledMain>
        {showSidebar ? <Sidebar /> : null}
        <div style={{ flexGrow: 1 }}>{children}</div>
      </StyledMain>
    </div>
  );
}
