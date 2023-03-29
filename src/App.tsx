import React from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { query } from 'core/api/service';
import Layout from 'core/layout/components/Layout';
import { MainScrollbar } from 'core/layout/styles';
import AppRoutes from 'core/routes/components/AppRoutes';

import { theme } from './theme';

const App: React.FC = () => {
  return (
    <Router>
      <QueryClientProvider client={query}>
        <ThemeProvider theme={theme}>
          <MainScrollbar>
            <Layout>
              <AppRoutes />
            </Layout>
          </MainScrollbar>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
