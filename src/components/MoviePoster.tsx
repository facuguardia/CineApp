import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export default function MoviePoster({movie, width = 300, height = 420}: Props) {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{ width, height, marginHorizontal: 8}}>
      <View style={styles.imageShadow}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageShadow: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
