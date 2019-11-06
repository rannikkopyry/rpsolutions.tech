import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Rare Agency</title>

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans|Poppins&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    {children}

    <style jsx global>
      {`
        body,
        html {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          font-size: 18px;
        }

        h1,
        h2 {
          font-family: 'Nunito Sans', sans-serif;
        }
      `}
    </style>
  </>
);
