import {NavigationContainer} from '@react-navigation/native';

import AppStack from './presentation/navigations/AppStack.tsx';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
