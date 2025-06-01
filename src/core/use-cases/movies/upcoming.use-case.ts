import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {Movie} from '../../entities/movie.entity.ts';
import {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper.ts';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');
    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - Upcoming');
  }
};
