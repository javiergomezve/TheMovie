import {ScrollView, Text, View} from 'react-native';

import {useMovies} from '../../hooks/useMovies.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel.tsx';

export default function HomeScreen() {
  const {top} = useSafeAreaInsets();
  const {popular} = useMovies();

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={popular} />
      </View>
    </ScrollView>
  );
}
