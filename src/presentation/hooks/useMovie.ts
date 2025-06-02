import {useEffect, useState} from 'react';

import {FullMovie, Movie} from '../../core/entities/movie.entity.ts';
import getMovieByIdUseCase from '../../core/use-cases/movie/get-by-id.use-case.ts';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter.ts';
import {Cast} from '../../core/entities/cast.entity.ts';
import {getMovieCastUseCase} from '../../core/use-cases';

export function useMovie(movieId: Movie['id']) {
  const [isLoading, setIsLoading] = useState(true);
  const [fullMovie, setFullMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const [movieRes, castRes] = await Promise.all([
      getMovieByIdUseCase(movieDBFetcher, movieId),
      getMovieCastUseCase(movieDBFetcher, movieId),
    ]);

    setFullMovie(movieRes);
    setCast(castRes);
    setIsLoading(false);
  };

  return {
    isLoading,
    fullMovie,
    cast,
  };
}
