import {useEffect, useState} from 'react';

import {Movie} from '../../core/entities/movie.entity.ts';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter.ts';
import {
  moviesNowPlayingUseCase,
  moviesPopularUseCase,
  moviesTopRatedUseCase,
  moviesUpcomingUseCase,
} from '../../core/use-cases';

let poplarMoviesPage = 1;

export function useMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    try {
      const [
        nowPlayingMovies,
        upcomingMovies,
        topRatedMoviesMovies,
        popularMovies,
      ] = await Promise.all([
        moviesNowPlayingUseCase(movieDBFetcher),
        moviesUpcomingUseCase(movieDBFetcher),
        moviesTopRatedUseCase(movieDBFetcher),
        moviesPopularUseCase(movieDBFetcher),
      ]);

      setNowPlaying(nowPlayingMovies);
      setUpcoming(upcomingMovies);
      setTopRated(topRatedMoviesMovies);
      setPopular(popularMovies);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,

    popularNextPage: async () => {
      poplarMoviesPage++;
      const popularMovies = await moviesPopularUseCase(movieDBFetcher, {
        page: poplarMoviesPage,
      });

      setPopular(prevState => [...prevState, ...popularMovies]);
    },
  };
}
