import {useEffect, useRef} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Movie} from '../../../core/entities/movie.entity.ts';
import MoviePoster from './MoviePoster.tsx';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export default function HorizontalCarousel(props: Props) {
  const {movies, title, loadNextPage} = props;

  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) {
      return;
    }

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) {
      return;
    }

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

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
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        onScroll={onScroll}
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
