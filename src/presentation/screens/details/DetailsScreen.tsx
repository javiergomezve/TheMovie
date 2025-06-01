import {Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParams} from '../../navigations/AppStack.tsx';
import {useMovie} from '../../hooks/useMovie.ts';

interface Props extends StackScreenProps<AppStackParams, 'Details'> {}

export default function DetailsScreen({route}: Props) {
  const {movieId} = route.params;
  const {isLoading, fullMovie} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!fullMovie) {
    return (
      <View>
        <Text>Movie does not exists</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{fullMovie?.title}</Text>
    </View>
  );
}
