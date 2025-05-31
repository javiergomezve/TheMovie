import {TMDB_API_KEY} from '@env';

import {AxiosAdapter} from './http/axios.adapter.ts';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {api_key: TMDB_API_KEY},
});
