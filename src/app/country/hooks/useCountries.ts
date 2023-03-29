import { useQuery } from 'react-query';

import { QUERY_CACHE_TIMEOUT } from '../constants';

import { fetchCountries } from '../service';

export function useCountries(criteria?: string) {
  return useQuery(['countries', criteria], fetchCountries, {
    staleTime: QUERY_CACHE_TIMEOUT,
    cacheTime: QUERY_CACHE_TIMEOUT,
    refetchOnWindowFocus: false,
  });
}
