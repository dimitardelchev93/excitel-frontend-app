import React from 'react';
import { useLocation } from 'react-router-dom';

import { AUTOCOMPLETE_COUNTRIES_PATH, TABULAR_COUNTRIES_PATH } from 'core/routes/constants';

import { AppLinks, AppLinkItem, NavigationLink } from '../styles';

import HeaderLinkSeparator from './HeaderLinkSeparator';

const HeaderLinks: React.FC = () => {
  const location = useLocation();

  return (
    <AppLinks>
      <AppLinkItem isSelected={location.pathname === TABULAR_COUNTRIES_PATH}>
        <NavigationLink to={TABULAR_COUNTRIES_PATH}>Tabular</NavigationLink>
      </AppLinkItem>
      <HeaderLinkSeparator />
      <AppLinkItem isSelected={location.pathname === AUTOCOMPLETE_COUNTRIES_PATH}>
        <NavigationLink to={AUTOCOMPLETE_COUNTRIES_PATH}>Autocomplete</NavigationLink>
      </AppLinkItem>
    </AppLinks>
  );
};

export default HeaderLinks;
