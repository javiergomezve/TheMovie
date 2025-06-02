import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export default function CastActor({actor}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: actor.avatar}}
        style={{width: 100, height: 150, borderRadius: 10}}
      />

      <View style={styles.actoriInfo}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actoriInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
