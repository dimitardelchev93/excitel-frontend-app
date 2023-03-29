import { useState, useEffect, useMemo } from 'react';

import { FILTER_DEBOUNCE } from '../constants';

import { Country, SearchCriteria } from '../types';

export function useFilteredCountries(
  countries?: Country[],
  criteria?: SearchCriteria,
  debounceTime = FILTER_DEBOUNCE,
) {
  const [debouncedCriteria, setDebouncedCriteria] = useState(criteria);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCriteria(criteria);
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [criteria, debounceTime]);

  return useMemo(() => {
    if (!countries?.length) {
      return [];
    }

    if (typeof debouncedCriteria !== 'string') {
      return countries;
    }

    return countries.filter((country) =>
      country.name.toLowerCase().includes(debouncedCriteria.toLowerCase()),
    );
  }, [countries, debouncedCriteria]);
}
