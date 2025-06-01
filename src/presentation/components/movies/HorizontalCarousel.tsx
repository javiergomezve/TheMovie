import {FlatList, StyleSheet, Text, View} from 'react-native';

import {Movie} from '../../../core/entities/movie.entity.ts';
import MoviePoster from './MoviePoster.tsx';

interface Props {
  movies: Movie[];
  title?: string;
}

export default function HorizontalCarousel(props: Props) {
  const {movies, title} = props;

  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '300',
    marginLeft: 10,
    marginBottom: 10,
  },
});
