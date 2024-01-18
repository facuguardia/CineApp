import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationScreens} from './src/navigation/NavigationScreens';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({ children }: any) => {

  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )

}

function App() {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationScreens />
      </AppState>
    </NavigationContainer>
  );
}

export default App;