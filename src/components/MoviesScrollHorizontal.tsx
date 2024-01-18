import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movies: Movie[];
  title?: string;
}

export const MoviesScrollHorizontal = ({movies, title}: Props) => {
  return (
    <View style={styles.container}>
      {
        title && <Text style={styles.title}>{title}</Text>
      }
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginHorizontal: 10,
    marginBottom: 5,
  },
});
