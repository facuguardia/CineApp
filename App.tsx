import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationScreens} from './src/navigation/NavigationScreens';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationScreens />
    </NavigationContainer>
  );
}
