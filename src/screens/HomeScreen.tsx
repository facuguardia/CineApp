import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, Button} from 'react-native';

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="ir a detalle"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
    </View>
  );
}
