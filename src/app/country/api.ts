import { handleApiError } from 'core/api/functions';
import { api } from 'core/api/service';
import { BaseApiResponse } from 'core/api/types';

import { Country } from './types';

export interface CountriesApiResponse extends BaseApiResponse {
  data?: Country[];
}

export async function getCountriesApi(criteria?: string): Promise<CountriesApiResponse> {
  try {
    const response = await api.get<Country[]>(`countries${criteria ? `/${criteria}` : ''}`);

    return {
      data: response.data,
      status: 200,
    };
  } catch (e) {
    return handleApiError(e);
  }
}
