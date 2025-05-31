import {useEffect, useState} from 'react';

import {Movie} from '../../core/entities/movie.entity.ts';
import {moviesNowPlayingUseCase} from '../../core/use-cases/movies/now-playing.use-case.ts';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter.ts';

export function useMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayinMovies = moviesNowPlayingUseCase(movieDBFetcher);
  };

  return {
    isLoading,
    nowPlaying,
  };
}
