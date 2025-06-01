import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {FullMovie, Movie} from '../../entities/movie.entity.ts';
import {FullMovieMapper} from '../../../infrastructure/mappers/fullMovie.mapper.ts';
import {FullMovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';

export default async function getMovieByIdUseCase(
  fetcher: HttpAdapter,
  movieId: Movie['id'],
): Promise<FullMovie> {
  try {
    const fullMovie = await fetcher.get<FullMovieDBMoviesResponse>(
      `/${movieId}`,
    );
    return FullMovieMapper.fromFullMovieDBMoviesResponseToEntity(fullMovie);
  } catch (error) {
    throw new Error(`Error fetching movie by id - movieId ${movieId}`);
  }
}
