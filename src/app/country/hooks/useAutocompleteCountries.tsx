import { useState, useEffect } from 'react';

import { debounce } from 'core/util/functions';

import { getCountriesApi } from '../api';
import { AUTOCOMPLETE_DEBOUNCE } from '../constants';
import { SearchCriteria, Country } from '../types';

export const useAutocompleteCountries = (debounceTime = AUTOCOMPLETE_DEBOUNCE) => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async (criteria: SearchCriteria) => {
    setLoading(true);
    const response = await getCountriesApi(criteria || '');

    if (response.status === 200 && response.data) {
      setCountries(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCountries(searchCriteria);
  }, [searchCriteria]);

  const handleSearch = debounce((value: string) => {
    setSearchCriteria(value);
  }, debounceTime);

  return { countries, handleSearch, loading };
};
