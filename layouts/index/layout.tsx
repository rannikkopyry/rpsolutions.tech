import React, { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import { Base } from '../base';
import { Header } from './header';
import { Footer } from '../../components/footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <Base>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </Base>
  );
};
