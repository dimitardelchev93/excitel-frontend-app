import { Country, PaginatedCountries } from './types';

export function getPaginatedCountries(
  countries: Country[],
  page: number,
  pageSize: number,
  handleSort: (field: keyof Country) => void,
): PaginatedCountries {
  const total = countries.length;
  const totalPages = Math.ceil(total / pageSize);
  const offset = (page - 1) * pageSize;
  const paginatedCountries = countries.slice(offset, offset + pageSize);

  return {
    page,
    totalPages: totalPages,
    total,
    data: paginatedCountries,
    loading: false,
    handleSort,
  };
}

export function getLatLngStringFromArray(latLngArray: [number, number]) {
  return `${latLngArray[0]}, ${latLngArray[1]}`;
}
