import React, { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import { Base } from '../base';
import { Header } from './header';
import { Footer } from '../../components/footer';
import ReactGA from 'react-ga';

export const Layout: React.FC = ({ children }) => {
  const TRACKING_ID:any = process.env.REACT_APP_GA_KEY; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Base>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </Base>
  );
};
