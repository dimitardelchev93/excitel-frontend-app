import { QueryClient } from 'react-query';

import axios from 'axios';

export const api = axios.create();

export const query = new QueryClient();
