import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen.tsx';
import DetailsScreen from '../screens/details/DetailsScreen.tsx';

export type AppStackParams = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<AppStackParams>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
