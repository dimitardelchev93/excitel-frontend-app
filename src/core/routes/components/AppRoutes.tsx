import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { TABULAR_COUNTRIES_PATH, AUTOCOMPLETE_COUNTRIES_PATH } from '../constants';

const AutocompleteCountriesPage = lazy(() => import('app/country/pages/AutocompleteCountriesPage'));
const TabularCountriesPage = lazy(() => import('app/country/pages/TabularCountriesPage'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path={TABULAR_COUNTRIES_PATH} element={<TabularCountriesPage />} />
        <Route path={AUTOCOMPLETE_COUNTRIES_PATH} element={<AutocompleteCountriesPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
