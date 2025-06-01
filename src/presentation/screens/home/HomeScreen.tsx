import {ScrollView, View} from 'react-native';

import {useMovies} from '../../hooks/useMovies.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel.tsx';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel.tsx';

export default function HomeScreen() {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming} = useMovies();

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel movies={popular} title={'Popular'} />

        <HorizontalCarousel movies={topRated} title={'Top rated'} />

        <HorizontalCarousel movies={upcoming} title={'Upcoming'} />
      </View>
    </ScrollView>
  );
}
