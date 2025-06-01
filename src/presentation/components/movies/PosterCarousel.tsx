import {ScrollView, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity.ts';
import MoviePoster from './MoviePoster.tsx';

interface Props {
  movies: Movie[];
  height?: number;
}

export default function PosterCarousel(props: Props) {
  const {height = 440, movies} = props;

  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}
