import { QueryFunction } from 'react-query';

import { getCountriesApi } from './api';
import { Country } from './types';

export const fetchCountries: QueryFunction<Country[], ['countries', string?]> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, criteria] = queryKey;

  const response = await getCountriesApi(criteria);

  return response.data || [];
};
