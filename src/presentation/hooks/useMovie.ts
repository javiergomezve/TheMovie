import {useEffect, useState} from 'react';

import {FullMovie, Movie} from '../../core/entities/movie.entity.ts';
import getMovieByIdUseCase from '../../core/use-cases/movie/get-by-id.use-case.ts';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter.ts';

export function useMovie(movieId: Movie['id']) {
  const [isLoading, setIsLoading] = useState(true);
  const [fullMovie, setFullMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    setIsLoading(true);

    const movie = await getMovieByIdUseCase(movieDBFetcher, movieId);

    setFullMovie(movie);
    setIsLoading(false);
  };

  return {
    isLoading,
    fullMovie,
  };
}
