import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import type {Movie} from '../../entities/movie.entity.ts';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper.ts';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMoviesResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
        limit: options?.limit ?? 20,
      },
    });

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - Popular');
  }
};
