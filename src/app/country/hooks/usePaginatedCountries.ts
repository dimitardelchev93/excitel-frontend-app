import { useEffect, useState } from 'react';

import { getPaginatedCountries } from '../functions';
import { PaginatedCountries, SearchCriteria } from '../types';

import { useCountries } from './useCountries';
import { useFilteredCountries } from './useFilteredCountries';
import { useSortedCountries } from './useSortedCountries';

export function usePaginatedCountries(
  criteria: SearchCriteria,
  page = 1,
  pageSize = 10,
): PaginatedCountries {
  const { data: countries, isLoading } = useCountries();
  const filteredCountries = useFilteredCountries(countries, criteria);
  const { sortedCountries, handleSort } = useSortedCountries(filteredCountries);
  const [paginatedCountries, setPaginatedCountries] = useState<PaginatedCountries>({
    page: 1,
    totalPages: 1,
    total: 0,
    data: [],
    loading: true,
    handleSort,
  });

  useEffect(() => {
    if (!isLoading) {
      setPaginatedCountries(getPaginatedCountries(sortedCountries, page, pageSize, handleSort));
    }
  }, [sortedCountries, page, pageSize, isLoading]);

  return paginatedCountries;
}
