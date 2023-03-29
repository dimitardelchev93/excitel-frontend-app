import { useCallback, useMemo, useState } from 'react';

import { Country, SortInfo } from '../types';

export function useSortedCountries(countries: Country[]) {
  const [sortConfig, setSortConfig] = useState<SortInfo>({
    field: 'name',
    direction: 'asc',
  });

  const sortedCountries = useMemo(() => {
    if (!sortConfig.field || !countries.length) {
      return countries;
    }

    return [...countries].sort((a, b) => {
      const valueA = a[sortConfig.field];
      const valueB = b[sortConfig.field];

      if (sortConfig.field === 'latLng') {
        const latA = a.latLng[0];
        const lngA = a.latLng[1];
        const latB = b.latLng[0];
        const lngB = b.latLng[1];

        if (sortConfig.direction === 'asc') {
          if (latA < latB) {
            return -1;
          } else if (latA > latB) {
            return 1;
          }

          return 0;
        } else {
          if (lngA < lngB) {
            return -1;
          } else if (lngA > lngB) {
            return 1;
          }

          return 0;
        }
      } else if (typeof valueA === 'string' && typeof valueB === 'string') {
        const order = valueA.localeCompare(valueB, undefined, { sensitivity: 'base' });
        return sortConfig.direction === 'asc' ? order : -order;
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        if (valueA < valueB) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }

        if (valueA > valueB) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }

        return 0;
      } else {
        return 0;
      }
    });
  }, [countries, sortConfig]);

  const handleSort = useCallback((field: keyof Country) => {
    setSortConfig((prevState) => ({
      field,
      direction: prevState.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  return { sortedCountries, handleSort };
}
