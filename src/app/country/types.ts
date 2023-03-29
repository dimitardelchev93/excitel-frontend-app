export interface Country {
  capitalName: string;
  code: string;
  flag: string;
  latLng: [number, number];
  name: string;
  population: number;
  region: string;
  subregion: string;
}

export interface PaginatedCountries {
  page: number;
  totalPages: number;
  total: number;
  data: Country[];
  loading: boolean;
  handleSort: (field: keyof Country) => void;
}

export interface SortInfo {
  field: keyof Country;
  direction: 'asc' | 'desc';
}

export type SearchCriteria = string | null;
