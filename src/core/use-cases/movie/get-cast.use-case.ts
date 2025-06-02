import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {Movie} from '../../entities/movie.entity.ts';
import {Cast} from '../../entities/cast.entity.ts';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper.ts';
import {MovieDBCastResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';

export async function getMovieCastUseCase(
  fetcher: HttpAdapter,
  movieId: Movie['id'],
): Promise<Cast[]> {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );
    return cast.map(CastMapper.fromCastMemberToEntity);
  } catch (e) {
    throw new Error(`Error fetching movie cast - movieId ${movieId}`);
  }
}
