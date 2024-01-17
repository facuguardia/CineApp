import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export const NavigationScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: ''}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailsScreen"
        options={{title: ''}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};
