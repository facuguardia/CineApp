import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export default function HomeScreen() {
  const {peliculasEnCine, isLoading} = useMovies();

  return (
    <View>
      {isLoading ? (
        <View>
          <ActivityIndicator color="gray" size={80} />
        </View>
      ) : (
        <View>
          <Text>{peliculasEnCine[2]?.title}</Text>
        </View>
      )}
    </View>
  );
}
