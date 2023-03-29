import { useState } from 'react';

import { Country } from '../types';

export const useCountryDetails = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState<Country | null>(null);

  const showDetails = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    setOpen(true);
  };

  const closeDetails = () => {
    setCountry(null);
    setOpen(false);
  };

  return {
    showDetails,
    open,
    country,
    closeDetails,
  };
};
