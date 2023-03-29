import React from 'react';

import { AlertProvider } from 'core/alert/contexts/AlertContext';
import Header from 'core/layout/components/Header';

import { LayoutContainer } from '../styles';

import MainContent from './MainContent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <AlertProvider>
        <Header />
        <MainContent>{children}</MainContent>
      </AlertProvider>
    </LayoutContainer>
  );
};

export default Layout;
