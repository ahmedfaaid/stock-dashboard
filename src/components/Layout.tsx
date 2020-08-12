import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children, ...props }: LayoutProps) {
  return (
    <div>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main style={{ position: 'relative', display: 'flex' }}>
        <Sidebar />
        {children}
      </main>
    </div>
  );
}
