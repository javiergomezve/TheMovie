import {Image, Pressable, StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {AppStackParams} from '../../navigations/AppStack.tsx';
import {Movie} from '../../../core/entities/movie.entity.ts';

type Props = {
  movie: Movie;
  width?: number;
  height?: number;
};

export default function MoviePoster(props: Props) {
  const {movie, width = 300, height = 400} = props;

  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', {movieId: movie.id});
      }}
      style={pressed => ({
        width,
        height,
        opacity: pressed ? 0.9 : 1,
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 7,
      })}>
      <View style={{...styles.imageContainer, width, height}}>
        <Image source={{uri: movie.poster}} style={styles.image} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
