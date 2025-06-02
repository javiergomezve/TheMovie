import {Fragment} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {FullMovie} from '../../../core/entities/movie.entity.ts';
import {Formatter} from '../../../config/helpers/formatter.ts';
import {Cast} from '../../../core/entities/cast.entity.ts';
import CastActor from '../cast/CastActor.tsx';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export default function MovieDetails({movie, cast}: Props) {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text>{movie.rating}</Text>
          <Text style={styles.genreText}>{movie.genres.join(', ')}</Text>
        </View>

        <Text style={styles.sectionTitle}>History</Text>
        <Text style={styles.descriptionText}>{movie.description}</Text>

        <Text style={styles.sectionTitle}>Budget</Text>

        <Text style={styles.budgetText}>
          {Formatter.currency(movie.budget)}
        </Text>
      </View>

      <View style={styles.actorsContainer}>
        <Text style={styles.actorsTitle}>Cast</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  genreText: {
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
  },
  budgetText: {
    fontSize: 18,
  },
  actorsContainer: {
    marginHorizontal: 10,
    marginBottom: 50,
  },
  actorsTitle: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
