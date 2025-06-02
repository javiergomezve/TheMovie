import {ScrollView, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {AppStackParams} from '../../navigations/AppStack.tsx';
import {useMovie} from '../../hooks/useMovie.ts';
import MovieHeader from '../../components/movie/MovieHeader.tsx';
import MovieDetails from '../../components/movie/MovieDetails.tsx';
import FullScreenLoader from '../../components/loaders/FullScreenLoader.tsx';

interface Props extends StackScreenProps<AppStackParams, 'Details'> {}

export default function DetailsScreen({route}: Props) {
  const {movieId} = route.params;
  const {isLoading, fullMovie, cast} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader/>;
  }

  if (!fullMovie) {
    return (
      <View>
        <Text>Movie does not exists</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader {...fullMovie} />

      <MovieDetails movie={fullMovie} cast={cast} />
    </ScrollView>
  );
}
